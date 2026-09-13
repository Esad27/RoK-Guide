# Source Priority Policy

This file documents how external Rise of Kingdoms sources are prioritized when writing or
verifying guide content. It exists so this priority order lives outside the JSON data files
(kept comment-free) while still being tracked with the project.

## Priority order

1. **Official Rise of Kingdoms sources** (in-game, official announcements)
2. **Current specialized / meta sources** — e.g. MetaRoK (`src/data/resources.json`, id `metarok`)
3. **Established educational creators** — the YouTube channels seeded in `src/data/channels.json`
   (Chisgule Gaming, MusaGaming, Sefacuh Warrior Rok, ItsLeoRoK, Tarinboy, and the Vietnamese
   channels Rise Of Kingdoms Việt Nam Official / RoK F2P / RoK GPY)
4. **General guide websites** — Rise of Kingdoms Guides, Codex Helper
5. **Community wiki** — Rise of Kingdoms Wiki (Fandom)
6. **Community academy / secondary sources** — The RoK Nut Academy

## Rules

- `MetaRoK` tier-list data must never silently overwrite this project's own supplied pairing
  ratings/skills/tags (`src/data/pairings.json`). It is linked as an external cross-check only.
- Do not fabricate game facts. If a fact isn't in the supplied project data or verifiable from a
  source above, the corresponding UI field is omitted rather than guessed.
- If two sources disagree on a fact that gets pulled into guide content, the conflict must be
  noted in the commit/PR description rather than silently resolved in favor of one source.

## Status as of the initial seed (2026-08-30)

No conflicts have been identified between the five seeded resources, since none of their content
has been pulled into guide copy yet — they are currently linked as external resources only from
the Resources page.
