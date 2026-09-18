# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

There is no test suite, no linter and no typechecker. The site is static HTML and
CSS with one small inline script; `npm run build` failing is the only check.

## What this is

An archive site for **Panache**, a funk/soul/jazz-rock band from Greenock,
Scotland, formed 1976. Static Astro, no backend, no database. It exists to give a
home to recordings that two surviving members are restoring from cassette and
reel, and to the band's written history.

It is a real site about real people, several of whom are alive and will read it.
Accuracy matters more than completeness here.

## Repo layout in context

This repo sits inside `~/Projects/panachetheband.com/`, alongside two things that
are **not** in git:

- `../archive-recovery/RECOVERED-CONTENT.md` — everything recovered from the
  Internet Archive: the band's own prose, the fifteen-song track list, a people
  index, and the song/video cross-reference. **Read this before writing any
  copy.** It is the source material and it cites its provenance.
- `../deploy-wizard.sh` — one-time Cloudflare cutover walkthrough.

## Architecture

Four pages (`src/pages/`), one layout, two components. The only non-obvious parts:

**`src/data/videos.js` is the content database.** Every recording, the fifteen
originals, and which of them still have no recording online. Adding a video is
one entry here; the Music page groups by the `kind` field (`original` / `cover` /
`reunion`) and the home page pulls three by ID. The `originals` array drives the
"missing" markers on the Music page, and the count in that page's prose is
derived, not written out.

**YouTube embeds load on click.** `Track.astro` renders a button with the
thumbnail as a background image; `LiteYouTube.astro` is a single delegated
listener that swaps in a `youtube-nocookie` iframe on first click. Include
`<LiteYouTube />` once per page that renders tracks. This is deliberate: visitors
who never press play send nothing to Google.

**Styling is one hand-written stylesheet** (`src/styles/global.css`) with CSS
custom properties. No framework, no build step beyond Astro. The palette is warm
near-black, cream, amber and oxblood; display face is Fraunces. Period-evocative
for a 1976 band, deliberately not pastiche.

## Editorial rules

These are the constraints that will bite you if you don't know them.

**The historical prose is Dougie Campbell's and is quoted verbatim.** He was the
band's guitarist and wrote its history; the repo owner is his son. Frame and
present his words, attributed — do not rewrite them into cleaner prose. The same
goes for the song commentaries and the notes on the video uploads, which are
Alan Mackie's.

**Do not assert facts the sources don't support.** Specifically:

- **Pat Hamill (vocals) has died** — stated plainly by a bandmate. The *year* is
  not established; the only evidence is "I can't believe he passed away 30 years
  ago" written in January 2024, which is a round figure. Do not put a date on it.
- **George McClarkin, Robert Williams, Alastair Sinclair and Derek Taylor**: no
  public record of whether they are living. Copy must read correctly either way —
  past tense for the band's activity, no "the late —" for anyone unconfirmed.
- John McGeoch (schoolfriend, never in Panache) died 4 March 2004. Confirmed.

**The band's original media is gone and cannot be re-fetched.** The old Joomla
site's `robots.txt` disallowed `/images/`, which is where both the photographs
and the MP3s lived, so the Internet Archive never captured them. Only one image
survives (`public/going-out-of-my-head.jpg`, a hand-written lyric sheet that was
inline in an article body). Don't spend time trying to recover more from Wayback;
it was verified absent three ways. New media comes from the band.

## Deployment

Cloudflare Workers static assets, configured in `wrangler.jsonc` (`assets.directory`
is `./dist`). Deployment is **Workers Builds**: pushing to `main` builds and
deploys. There is no API token, no GitHub Actions workflow, and no secret to
rotate — deliberately. Don't add a deploy workflow or reconfigure the build in the
Cloudflare dashboard, since that would drift from the repo.
