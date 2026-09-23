import { test, expect } from '@playwright/test';

test.describe('Hero Waveform', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders waveform in hero section', async ({ page }) => {
    const waveform = page.locator('.hero .waveform-accent');
    await expect(waveform).toBeVisible();
  });

  test('waveform bars have animation by default', async ({ page }) => {
    const bar = page.locator('.waveform-accent svg rect').first();
    await expect(bar).toBeVisible();

    const animationName = await bar.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return computed.animationName;
    });

    expect(animationName).not.toBe('none');
  });

  test('respects reduced motion preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const bar = page.locator('.waveform-accent svg rect').first();

    const animationName = await bar.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return computed.animationName;
    });

    expect(animationName).toBe('none');
  });

  test('hero text remains readable on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    const heroHeading = page.locator('.hero h1');
    const waveform = page.locator('.hero .waveform-accent');

    await expect(heroHeading).toBeVisible();
    await expect(waveform).toBeVisible();

    const headingBox = await heroHeading.boundingBox();
    const waveformBox = await waveform.boundingBox();

    expect(headingBox).toBeTruthy();
    expect(waveformBox).toBeTruthy();
  });

  test('hero text remains readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const heroHeading = page.locator('.hero h1');
    const heroStandfirst = page.locator('.hero .standfirst');

    await expect(heroHeading).toBeVisible();
    await expect(heroStandfirst).toBeVisible();
  });
});
