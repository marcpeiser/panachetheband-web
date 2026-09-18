# panachetheband-web

The website for **Panache** — a funk, soul and jazz-rock band from Greenock,
Scotland, formed in 1976. This is an archive site: the band's history, the
people who played in it, and the recordings that have survived.

Live at <https://panachetheband.com>

## Stack

- **Astro** — static output, no backend, no database
- **Cloudflare Workers** static assets — deployed via Workers Builds on push to `main`
- YouTube embeds are click-to-load, so nothing is requested from Google until
  a visitor presses play

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Content

Nearly all site content lives in two places:

- `src/data/videos.js` — the video archive, the fifteen originals, and which of
  them still have no recording online. Adding a video is one entry in this file.
- The `.astro` pages themselves, for prose.

### Provenance

The band's own website (Joomla, ~2008–2020) was lost in a migration. Its text was
recovered from the Internet Archive; **the photographs and MP3s were never
archived**, because a 2011 `robots.txt` disallowed `/images/`, which is where both
lived. The recovered source material is kept outside this repo in
`../archive-recovery/`.

The historical prose is by **Dougie Campbell**, the band's guitarist, and is kept
as he wrote it. Recordings are being restored and uploaded by **Alan Mackie** at
[Alan Mackie Music](https://www.youtube.com/@alanmackie4056).

Corrections are welcome: <info@panachetheband.com>
