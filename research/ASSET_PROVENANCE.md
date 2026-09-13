# Asset provenance and rights review

Audit date: 2026-08-30

The structured asset manifest is `src/data/assets.json`. Fifteen active commander portraits were
retrieved from the image files attached to the named Rise of Kingdoms Wiki/Fandom commander pages.
The Fandom CDN served those PNG-named sources as WebP, so the local `.webp` extension matches the
detected RIFF/WEBP signature. They are recognizable game imagery, not AI-generated substitutions.

The Fandom file archive and commander index did not expose portraits for Pericles, Pyrrhus or
Thutmose III. Their previously verified Rise of Kingdoms Guides images remain active rather than
guessing an unrelated Fandom file. Earlier, now-unused local files are retained as recoverable
fallbacks.

The source page and direct image URL are retained for every active file. Copyright and redistribution
permission for the underlying game art were **not independently verified**. Before public deployment,
the project owner should review the relevant source terms or replace these files with assets for which
they hold explicit permission. The manifest therefore uses a cautionary `rightsNote` rather than
claiming a license.

The active Fandom files were selected by exact commander filename rather than page social preview,
skill icon or sculpture filename. Sun Tzu and Eulji Mundeok were visually spot-checked after download.
Pericles and Pyrrhus still include in-game UI around the character because Fandom did not provide an
isolated portrait for either name.
