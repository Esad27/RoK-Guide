# Current QA report

Audit date: 2026-08-30

This report records the post-research implementation state. `CONTENT_INVENTORY.json` and
`GAP_ANALYSIS.md` remain the Phase 1 baseline and are intentionally retained as historical audit
artifacts.

## Implemented and verified

- 18 screenshot commanders exist in structured data and have accepted display names, conservative
  EN/VI/ES descriptions, rarity/civilization/specialty metadata where verified, source references,
  verification dates and local commander imagery.
- 26 owner-supplied pairings remain one-to-one with the supplied screenshots: 16 infantry, 5
  cavalry and 5 archer. Each has an EN/VI/ES rationale, strength, weakness, situations and source
  inheritance. `Sun Tzu or Bjorn Ironside + Pyrrhos` remains one record with a primary alternative.
- The owner screenshot is authoritative for ratings. `Sun Tzu + Bjorn Ironside` and `Richard + Sun
  Tzu` were reconciled from five to four stars to match the screenshot. No individual commander
  rating was introduced.
- 10 YouTube candidates were resolved to canonical live video IDs, channels, timestamps,
  durations and automatic-caption languages. The transcript export was attempted for all 10 and
  was unavailable for all 10; no transcript-derived claim is presented.
- All 30 guide files (10 topics × EN/VI/ES) have source metadata and a verification date. High-risk
  healing, rally, garrison, resource and pass claims were rewritten to distinguish open field,
  cities, alliance structures, seasons/maps and recommendations.
- EN/VI/ES route titles, guide search entries, commander taxonomy labels, pairing tags and source
  headings are localized. Every normal page emits EN/VI/ES plus x-default alternates; the 404 page
  is `noindex` and does not advertise nonexistent localized 404 routes.
- Search is a keyboard-operable combobox. Its runtime result-ID error was caught in browser QA and
  fixed. Video cards expose verified language, duration and caption status, while the YouTube
  iframe remains lazy. The modal moves and restores focus, traps Tab, locks page scroll, closes on
  Escape and receives the selected video title as its accessible label.
- Build-time checks cover unique commander IDs/slugs, assets, pairings, insights, videos, YouTube
  IDs, channels and resources; commander images/localizations/sources; pairing insight coverage;
  pairing commander/video foreign keys; video channel foreign keys and canonical metadata.

## Test evidence

- Production build: `npm run build` completed successfully and generated 184 static pages.
- Data counts: 18 commanders, 26 pairings, 26 pairing insights, 10 videos, 8 channels, 7 resources,
  18 local commander assets; no local commander asset path was missing.
- Static output scan found 365 unique internal links and zero unresolved internal routes. All 18
  commander image signatures match their filename extensions.
- Interactive browser QA covered English search keyboard navigation, video modal focus/scroll/close
  behavior, Vietnamese localized search/guide titles, Spanish commander labels and source display.
- Responsive QA at a narrow mobile viewport found no horizontal overflow on the Vietnamese home
  page or Spanish Sun Tzu page; mobile navigation and commander portrait rendering were visually
  inspected. The browser console showed no errors or warnings after the fixes.

## Deliberately unresolved or incomplete

- `astro.config.mjs` still uses `https://example.com` because no production domain was supplied.
  Set the real site URL before deployment so canonical and sitemap URLs are correct.
- Copyright/license permission for the recognizable game imagery has not been independently
  established. Provenance is recorded in `src/data/assets.json`; perform a rights review before a
  public launch.
- The owner annotation `BrokenDMG` on El Cid + Yi Seong-Gye remains uninterpreted and is not shown.
- Full video transcripts were unavailable. Videos are catalogued and caption status is verified,
  but their detailed claims were not promoted into mechanics without independent support.
- Commander fields such as acquisition, exact skill text/order, equipment and talents remain hidden
  where this pass did not establish sufficiently strong evidence. Accuracy was favored over filling
  every optional section.
- Channel/resource logos use the existing neutral or initials presentation where a safely usable
  official asset was not established.
- A full `astro check` was not run because `@astrojs/check` is not installed. Astro content schema,
  TypeScript compilation exercised by the production build, data validation and browser QA passed.
