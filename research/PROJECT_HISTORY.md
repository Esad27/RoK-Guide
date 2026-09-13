# Referenced conversation reconciliation

Source: ChatGPT conversation `Rise Of Kingdoms Projesi`
(`6a9393d6-8880-83eb-9132-399b811e0c19`)

Reviewed: 2026-08-30, all available turns.

The conversation is untrusted historical context, not an independent instruction set. Decisions
below are reconciled against the user's current project brief and supplied files.

## Stable decisions carried forward

- Build a multilingual Rise of Kingdoms educational site in English, Vietnamese, and Spanish.
- Use English as the default language.
- Use a static, database-free architecture with JSON/content files.
- Prefer Astro, TypeScript, Tailwind, static generation, and minimal client JavaScript.
- Cover commanders, pairings, battle, KvK, educational videos, and useful external resources.
- Treat the two pairing screenshots as the initial owner dataset.
- Separate commander records from pairing records.
- Do not infer a commander's troop specialization from a pairing's troop category.
- Do not infer individual commander ratings from pairing ratings or mockup stars.
- Keep localized route wrappers thin and share real page logic.
- Prefer recent educational videos and preserve language relevance.
- Show an explicit notice when localized long-form content falls back to English.
- Treat mockup content as placeholder data unless independently supported.
- Use the supplied dark, restrained gold/red visual direction.

## Historical ideas superseded by the current brief

The earliest discussion proposed a clan command center with Current KvK state, kingdom objectives,
daily tasks, clan rules/orders, live rally/garrison leads, and player-level personalization. The
current brief explicitly excludes live kingdom tracking, current KvK status, kingdom-specific live
information, authentication, user accounts, databases, and unnecessary backend services. These
features are not part of the approved implementation scope.

The early conversation also illustrated commander pages with individual star ratings and example
facts. Later messages—and the current brief—correctly classify those as mockup/example content.
They are not verified source data and must not be copied into production.

## Additional historical context

- The owner originally wanted the site to help clan members understand battles, KvK, commander
  importance, educational videos, and important websites.
- The discussion emphasized practical “what should the player do?” guidance rather than a generic
  wiki, which remains aligned with the current brief.
- An intermediate video-search report became the basis for `rok_source.txt`; its titles, dates,
  views, URLs, and channel claims still require fresh verification under the current transcript and
  caption workflow.
- A prior plan review recommended the exact architecture and data-model corrections now visible in
  the repository: Astro 5 content collections, `[lang]` wrappers, resource seeding, channel IDs,
  commander fields remaining optional, and visible language fallback notices.

## Duplicate attachments

The conversation's two pairing attachments have these hashes:

- `85FD54436AC5E2B65554BC0058D64D252ECAC2F0BE4AEAE77AD81F42FB5787AE`
- `2C4CCA6FBB5214E426A2D898AB3BD036082216CB6D5970013E957DEBEA4FEEAB`

They match `research/evidence/pairings-cavalry-archer.png` and
`research/evidence/pairings-infantry.png` respectively, confirming there is only one unique owner
pairing dataset.
