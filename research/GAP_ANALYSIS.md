# Phase 1 gap analysis

Audit date: 2026-08-30

## Executive finding

The repository is a functional Astro shell with complete static route coverage, but it is not yet a
research-backed RoK academy. The production data currently consists of 18 name-only commander
stubs, 26 owner-supplied pairing records, 6 unverified video links, 8 channel-name stubs, 5
unverified resource descriptions, and 10 short guide topics translated into three languages. No
substantial gameplay article is ready for factual QA approval.

Mass guide writing should remain paused. The next phase should verify the owner pairing evidence,
establish sources and claim tracking, then research the commanders/guides in bounded batches.

## Supplied-material coverage

- Project source files inspected: application code, structured JSON, all 30 Markdown guides, all
  three i18n dictionaries, `SOURCES.md`, and `rok_source.txt`.
- Supplied visual evidence inspected and retained under `research/evidence/`.
- No separate Codex export, commander portrait pack, transcript file, caption file, raw HTML export,
  or additional screenshot directory exists in the workspace.
- The pairing evidence contains 26 pairings: 16 infantry, 5 cavalry, and 5 archer. The JSON contains
  the same counts and references the same 18 commanders.
- Commander screenshot/data checklist: every commander named in the pairing evidence or visibly
  represented in the theme mockups has a JSON stub. No production portrait exists for any of them.

## Critical factual/content gaps

### 1. Pairing evidence has two unresolved rating conflicts

The owner screenshot shows four stars for Sun Tzu + Bjorn Ironside and Richard + Sun Tzu; JSON stores
five stars for both. Because owner-supplied ratings are authoritative, these records cannot be
marked QA-approved until reconciled. No ratings were changed during this inventory pass.

All other visible pairing ratings and skill strings match. The special Sun Tzu or Bjorn Ironside +
Pyrrhos record is correctly modeled as one pairing with `primaryAlternatives[]`.

### 2. Commander coverage exists only as identifiers

All 18 commander files contain only `id`, `name`, and `slug`. There are no verified portraits,
rarities, civilizations, specialties, troop roles, acquisition methods, skills, investment advice,
mode relevance, strengths, weaknesses, videos, sources, or localized descriptions. Accepted display
names also need verification for abbreviated entries such as Richard, Mehmed, Minamoto, Kusunoki,
and Thutmose.

The UI correctly renders no individual commander stars today. The mockup stars must not be copied
because the owner brief explicitly distinguishes pairing ratings from commander ratings.

### 3. Pairing pages are mostly empty

The 26 records preserve owner ratings, skill strings, troop type, and the three explicit tags now in
JSON. None contains `why`, `strengths`, `weaknesses`, `situations`, `videoId`, or `sources`. Therefore
every pairing detail page currently displays little more than portraits/placeholders, names,
ratings, and skill strings.

The archer screenshot's `BrokenDMG` annotation for El Cid + Yi-Seong Gye is not modeled. Its intended
meaning should be clarified before introducing a public tag.

### 4. Existing guides are drafts, not researched articles

All 10 topics have EN/VI/ES files, but none has source metadata and only KvK Preparation links a
video. No transcript has been checked. The content is short, frequently generic, and sometimes
uses conditional filler such as “if your kingdom's mechanics support it.”

Claims requiring removal or verification include:

- `KvK Preparation` expands KvK as “Kings of the Valley,” which is incorrect terminology.
- `Resource Management` explicitly uses the prohibited generic “warehouse/protection mechanism”
  wording and lacks RoK-specific inventory items, healing costs, gathering commanders, alliance
  territory, farm accounts, transfer/tax mechanics, and offline gathering workflow.
- `Hospital Management` states that every loss after capacity is full becomes permanent without
  distinguishing combat context, wounded types, or season rules; it also suggests allies may “send
  healing-speed buffs,” which is unsupported in the local evidence.
- `March Management` contains generic “kingdom mechanics” and scouting language rather than actual
  RoK march controls, targeting, retreat, city/flag positioning, and hospital-pressure workflow.
- Open-field copy makes absolute outcome claims about pairing/timing beating larger forces without
  evidence or stage/context boundaries.
- Rally/garrison copy needs target type, season, reinforcement, swarm, captain, troop composition,
  and structure-mechanic distinctions.
- Zones/passes copy does not distinguish season/map variants or verify occupation and access rules.
- Preparation mixes early progression, KvK preparation, and Pre-SoC advice without clearly
  separating player stage.

Localized Markdown links such as `/commanders` and `/pairings` point VI/ES readers back to the
English routes. The translations are present but have not received native terminology QA.

### 5. Video research workflow has not been performed

`rok_source.txt` lists 10 video candidates, but production JSON contains only the 6 entries for
which a YouTube ID was supplied. Four Vietnamese candidates lack URLs/IDs. For all 10 candidates:

- transcript status is unknown;
- caption status/type/languages are unknown;
- publication dates have not been independently verified;
- no full transcript has been inspected;
- no teaching-structure or claim extraction exists;
- no cross-source agreement/conflict record exists.

The current `Video` model cannot store the mandatory transcript/caption metadata, publication date,
topics, section placement, canonical URL, or verification timestamp.

### 6. Channel and resource curation is unverified

All 8 channels lack canonical URLs, descriptions, and logos. The Vietnamese channel described as
“Official” has not had that status verified. All 5 resource descriptions are polished drafts but
the sites have not yet been inspected, link-checked, or assigned asset provenance. There is no
official Rise of Kingdoms resource in the current dataset, and most allowed resource categories are
empty.

### 7. Asset pipeline is empty

Every production image directory contains only `.gitkeep`. There is no `ASSETS.md` or
`assets.json`, no commander portrait, no channel logo, no resource logo, no guide image, and no
image dimensions/optimization policy implemented in data. Video cards currently hotlink YouTube
thumbnails; commander cards fall back to initials.

## Architecture and QA gaps

### What is already sound

- Astro 5 static generation, TypeScript, Tailwind CSS v4, sitemap integration, and no database.
- Default English routes plus explicit `/vi` and `/es` routes share page logic.
- Astro 5 content collection config is correctly located at `src/content.config.ts` and uses
  `glob()` from `astro/loaders` with a schema.
- Build-time uniqueness and foreign-key checks exist for the main JSON datasets.
- The data layer enforces the owner pairing total and troop-type counts.
- Video embeds are deferred behind thumbnail cards and a modal rather than loaded initially.
- Theme tokens, responsive layouts, semantic headings, visible focus styling, and Escape-to-close
  are present.

### What remains incomplete

- `astro.config.mjs` uses `https://example.com`, so canonical and sitemap URLs are not production
  ready.
- No `hreflang`/alternate-language metadata or localized social metadata exists.
- Validation does not cover commander slugs, guide IDs/locales/category completeness, guide
  `videoId` references, video metadata completeness, URLs, image paths, or source structures.
- `ChannelCard.astro` reads `channel.description`, but the `Channel` TypeScript interface does not
  declare that field. A normal build does not run a full Astro type check, so this mismatch is
  currently hidden.
- The search dropdown lacks keyboard result navigation and combobox/listbox state; its “no results”
  text is never surfaced visually or announced.
- The video dialog closes on Escape but does not trap focus, restore focus, label itself with the
  selected video title, or lock background interaction.
- Pairing labels (`F2P Favorite`, `Recommended`, `Spender`) and commander information-field labels
  (`Rarity`, `Civilization`, `Role`, `Acquisition`, `Skill Order`) remain hardcoded English on VI/ES
  pages.
- Guide cards on localized index pages are localized, but guide-category titles used in home search
  are taken from the English content entry rather than the locale dictionary.
- There are no automated tests, link checks, image checks, accessibility scans, or visual/regression
  checks.
- The workspace is not a Git repository, so no baseline diff/history is available.

## Baseline build

`npm run build` succeeds after setting `ASTRO_TELEMETRY_DISABLED=1` because the sandbox blocks
Astro's attempt to create its user-level telemetry directory. The build generated 184 static pages
and a sitemap. This proves route generation and current foreign keys are valid; it does not prove
content accuracy, TypeScript completeness, accessibility, links, assets, or translations.

## Recommended next research sequence

1. Reconcile the two screenshot/JSON rating conflicts and define the `BrokenDMG` annotation.
2. Extend the research/source/video schemas before adding facts, so verification metadata cannot be
   lost.
3. Verify the five starting resources and add an official-source baseline.
4. Verify the six existing video URLs plus the four Vietnamese candidates; inspect captions and
   full transcripts where available.
5. Research commanders in three practical batches: early infantry, cavalry, then archers/utility.
6. Research each of the 26 supplied pairings while preserving owner ratings and skill strings.
7. Rewrite guide topics individually only after their mechanics and video claims are cross-checked.
8. Perform EN factual QA, then VI and ES localization/terminology QA.
9. Acquire and normalize local assets with provenance.
10. Implement the researched dataset, then run build, link, accessibility, responsive, image, and
    data-integrity QA.

## Current blockers and uncertainties

- The two pairing ratings conflict between screenshot and JSON.
- The meaning/display intent of `BrokenDMG` is unknown.
- Four Vietnamese video candidates have no URL or YouTube ID in supplied files.
- No commander portrait/source pack or Codex export was supplied beyond the four screenshots.
- The intended production domain is unknown.
- No external research or transcript inspection has been performed in Phase 1, by design.

