# The Case Archive — Murder Mystery Investigation Website

A static, fully playable library of **eight original murder mystery investigations**, built from the supplied master prompt and the 17 reference screenshots. Each case is a complete detective dossier: a briefing, six persons of interest, a full story, crime-scene findings, witness statements, evidence files, intercepted messages, an interrogation room, a final accusation form, and a case-closed answer page with a clue-by-clue breakdown.

Built with **Vite + React + TypeScript + plain CSS**. No backend, no API keys, no external services at runtime. Deploys as a static site to GitHub Pages.

## The cases

| # | Title | Setting | Difficulty | ~Time |
|---|-------|---------|-----------|-------|
| 01 | The Glasshouse at Hollin Court | Surrey, 1894 | Introductory | 30 min |
| 02 | Dead Air | Oregon radio station, 1987 | Intermediate | 40 min |
| 03 | The Dome at Cerro Alto | Atacama observatory, 1962 | Intermediate | 40 min |
| 04 | Slack Water at Cardew Light | Cornwall tidal island, present day | Intermediate | 40 min |
| 05 | The Understudy's Cue | West End theatre, 1949 | Intermediate | 40 min |
| 06 | The Last Reel | Bombay film studio, 1976 | Expert | 45 min |
| 07 | The Reykjavík Gambit | Chess tournament, Iceland, present day | Expert | 45 min |
| 08 | Vintage of the Drowned Vine | Barossa winery, present day | Intermediate | 40 min |

Each case has a uniquely solvable mystery with one canonical culprit. Culprit identities and full solutions are **not** in this file — see the separate author notes referenced below.

## How to play

1. The landing page lists the eight cases. Open one.
2. Move through the ten stages in order using the **Next** button or the progress strip at the top.
3. Read the dossier, meet the suspects, read the story, inspect the crime scene, open each witness statement and evidence file, read the messages.
4. In the **Interrogation Room**, ask all three questions of each suspect (18 total). The accusation form unlocks only after every question is answered.
5. Make your **Final Accusation**: name a culprit, cite 2–3 decisive clues, choose a method and a motive. Nothing is revealed until you submit.
6. The **Answer** page compares your theory to the case findings and gives a full, clue-referenced reconstruction.

Progress is saved per case in your browser (`localStorage`). "Reset case" in the top bar clears one case; other cases are untouched. Each stage and nested item has a shareable hash URL (e.g. `#/case/dead-air/evidence/EV-02`).

## Run locally

Requires **Node.js 18+** (LTS recommended).

```bash
npm ci            # install locked dependencies
npm run dev       # start the dev server (prints a local URL)
npm run build     # validate content + typecheck + production build into dist/
npm run preview   # preview the production build locally
```

Useful extra scripts:

```bash
npm run validate      # run the mystery-integrity validator only
npm run typecheck     # TypeScript check only
npm run build:single  # single-file build into dist-single/ (one self-contained index.html)
```

`npm run build` runs the content validator first and **fails loudly** if any case is internally inconsistent (missing clue IDs, wrong question counts, a culprit who isn't a suspect, a decisive clue the player can't reach before accusing, etc.).

## Deploy to GitHub Pages

A ready-to-use workflow is included at `.github/workflows/deploy.yml`.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab). The workflow checks out the repo, runs `npm ci`, runs `npm run build` (which validates, type-checks and builds), uploads `dist/` as the Pages artifact, and deploys it.
4. The deployed URL appears in the Actions run and under Settings → Pages, typically `https://<username>.github.io/<repository>/`.

The app uses a **relative base path** (`base: './'` in `vite.config.ts`) and **hash-based routing**, so it works correctly under a project subpath and deep links survive a page refresh. No repository secrets are required.

> This project builds a complete, deployable static package. It has **not** been deployed to a live public URL from here; follow the steps above to publish it, and do not assume a live URL exists until the Actions run reports one.

## Project structure

```
.
├─ .github/workflows/deploy.yml   # GitHub Pages deployment
├─ index.html                     # Vite entry
├─ vite.config.ts                 # relative base; optional single-file build
├─ tsconfig.json
├─ package.json / package-lock.json
├─ scripts/
│  └─ validate-cases.ts           # content integrity validator (runs in build)
├─ docs/
│  ├─ SCREENSHOT_MAP.md           # which reference screenshot maps to which component
│  └─ AUTHOR_SOLUTIONS.md         # SPOILERS: culprits and solutions for every case
└─ src/
   ├─ main.tsx
   ├─ app/App.tsx                 # HashRouter, app shell, case library, case view
   ├─ components/
   │  ├─ ui.tsx                   # portraits, icons, stage progress/nav, CTA, reset dialog
   │  ├─ stages.tsx               # dossier, suspects, story, scene, statements, evidence, messages
   │  └─ finale.tsx               # interrogation, accusation, answer
   ├─ hooks/useProgress.ts        # localStorage persistence, accusation gating
   ├─ utils/stages.ts, text.ts
   ├─ styles/global.css           # design system
   ├─ types/case.ts               # the authoring contract
   └─ cases/
      ├─ index.ts                 # registers all cases
      └─ <one file per case>.ts   # all player-facing content lives here, as data
```

All player-facing text lives in the case data modules under `src/cases/`. React components never contain case-specific names or solution strings. To add a new case, create a `src/cases/<slug>.ts` module conforming to `MysteryCase` and add it to `src/cases/index.ts`; the ten-stage flow and the UI need no changes.

## What was tested

- `npm run validate` — passes for all 8 cases (6 suspects each, 3 questions each / 18 total, unique IDs, every solution clue reachable and selectable, culprit is a valid suspect, culprit list-positions vary across cases so position gives nothing away).
- `npm run typecheck` — clean.
- `npm run build` — succeeds; `dist/` produced.
- Visual QA via headless Chromium at 1280 px (desktop) and 390 px (mobile) across the dossier, suspects, story, crime scene, statement detail, evidence detail, messages, interrogation, library, and multiple cases.

### Please verify manually
- Full keyboard-only navigation and screen-reader labelling on your target browsers.
- Behaviour under an actual GitHub Pages project subpath after deployment.
- The complete accusation → answer flow end-to-end in each case on your devices.

## Design notes

The visual grammar follows the reference pack: cream parchment dossier with a magenta call-to-action, lilac suspect cards with blue-violet borders, warm hazard-striped crime-scene findings, cyan-bordered evidence panels, phone-style message bubbles, and a peach interrogation room with green detective prompts. The references were used as visual inspiration only; all UI is real HTML/CSS with selectable, accessible text — no screenshots are embedded as the interface.

All cases, characters and events are fictional.
