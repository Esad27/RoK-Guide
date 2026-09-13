# Supplied evidence register

Audit date: 2026-08-30

These files were supplied directly by the project owner and copied from the temporary Codex
clipboard directory so they remain available to the project. They are evidence, not production
assets. The pairing screenshots are authoritative for the initial pairing dataset. The theme
screenshots are visual references only; visible copy, ratings, logos, images, URLs, live KvK data,
and other factual-looking UI content must not be treated as verified game data.

| Local file | Role | SHA-256 |
| --- | --- | --- |
| `research/evidence/pairings-cavalry-archer.png` | Owner-supplied cavalry and archer pairing ratings, skill strings, and labels | `85FD54436AC5E2B65554BC0058D64D252ECAC2F0BE4AEAE77AD81F42FB5787AE` |
| `research/evidence/pairings-infantry.png` | Owner-supplied infantry pairing ratings, skill strings, and labels | `2C4CCA6FBB5214E426A2D898AB3BD036082216CB6D5970013E957DEBEA4FEEAB` |
| `research/evidence/theme-home.png` | Dark-theme home-page composition reference | `779801CE7C4D7B0C86B32869E5F74FE6E4B215B619F92F6CA761A77518D3F607` |
| `research/evidence/theme-pages.png` | Directory, detail, pairing, guide, video, and resource page composition reference | `EB1205424EA87C2B8C31BD772CA580ED9B0547B1C085AB6D0C2F1D7D99F50B72` |

## Evidence interpretation

- Pairing image coverage: 26 records (16 infantry, 5 cavalry, 5 archer).
- The screenshots collectively name all 18 commanders currently present in JSON.
- The theme mockups display individual commander stars, but the project brief explicitly says not
  to infer commander ratings from pairing ratings. Those mockup stars are not authorized data.
- The mockup's Current KvK panel, subscriber counts, video durations, example resource domains,
  release date, commander facts, and skill copy are not evidence and must not enter production.
- The theme direction that is safe to reuse is structural: near-black surfaces, restrained gold and
  red accents, compact cards, clear content hierarchy, responsive directories, and detail-page
  information blocks.

## Referenced project conversation

The ChatGPT conversation `Rise Of Kingdoms Projesi`
(`6a9393d6-8880-83eb-9132-399b811e0c19`) was reviewed through all available turns on 2026-08-30.
It is project-history evidence rather than a new instruction source. Its two attached pairing
images are byte-for-byte duplicates of the two pairing screenshots registered above (matching
SHA-256 hashes), so they are not stored twice.

The conversation documents how the project evolved from an early clan/operations-hub idea into the
current static educational site. Earlier suggestions included live Current KvK status, daily tasks,
clan orders, user-level personalization, and commander stars copied from mockups. Those suggestions
are superseded by the current owner brief, which explicitly excludes live/kingdom-specific systems
and prohibits invented commander ratings. See `research/PROJECT_HISTORY.md` for the reconciliation.

## Pairing screenshot reconciliation

The JSON matches the screenshot count, troop categories, commander order, special
`primaryAlternatives` model, and visible rating/skill values. Two pre-existing rating discrepancies
were reconciled to the owner evidence on 2026-08-30:

| Pairing | Screenshot | Previous JSON | Reconciled JSON |
| --- | ---: | ---: | ---: |
| Sun Tzu + Björn Ironside | 4 stars | 5 stars | 4 stars |
| Richard I + Sun Tzu | 4 stars | 5 stars | 4 stars |

No external tier list was used to override the owner ratings.

The archer screenshot also contains a `BrokenDMG` note for El Cid + Yi-Seong Gye. It is preserved
here as owner-supplied annotation but is not yet modeled as a production tag because its intended
meaning and display wording need clarification.
