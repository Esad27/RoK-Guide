# Owner pairing screenshot audit

Audit date: 2026-08-30

Authority: `research/evidence/pairings-infantry.png` and
`research/evidence/pairings-cavalry-archer.png`.

This audit compares the project-owned screenshot rows with `src/data/pairings.json`. Stars are
**pairing ratings**, not individual commander ratings. The four-digit values are preserved as the
owner-supplied investment/skill state for that commander in that particular pairing; they are not
silently generalized into one universal commander build.

## Pairing-by-pairing result

| Troop | Pairing | Stars | Primary / first value | Secondary value | Owner note | Result |
|---|---|---:|---|---|---|---|
| Infantry | Sun Tzu + Björn Ironside | 4 | Sun Tzu 5555 | Björn 5555 | F2P Favorite | Match |
| Infantry | Charles Martel + Pyrrhus | 5 | Charles 5511 | Pyrrhus 5555 | — | Match |
| Infantry | Pyrrhus + Richard I | 4 | Pyrrhus 5555 | Richard 5511 | — | Match |
| Infantry | Sun Tzu + Charles Martel | 4 | Sun Tzu 5555 | Charles 5511 | Recommended | Match |
| Infantry | Sun Tzu or Björn + Pyrrhus | 4 | Sun/Björn 5555 | Pyrrhus 5511 | primary alternative | Match |
| Infantry | Sun Tzu + Pericles | 3 | Sun Tzu 5555 | Pericles 5555 | — | Match |
| Infantry | Richard I + Yi Seong-Gye | 5 | Richard 5511 minimum | YSG 5555 | — | Match |
| Infantry | Eulji Mundeok + Sun Tzu | 4 | Eulji 5555 | Sun Tzu 5555 | — | Match |
| Infantry | Richard I + Mehmed II | 4 | Richard 5511 minimum | Mehmed 5111 | — | Match |
| Infantry | Richard I + Æthelflæd | 4 | Richard 5511 minimum | Æthelflæd 5555 | — | Match |
| Infantry | Richard I + Sun Tzu | 4 | Richard 5511 minimum | Sun Tzu 5555 | — | Match |
| Infantry | Charles Martel + Æthelflæd | 4 | Charles 5511 | Æthelflæd 5555 | — | Match |
| Infantry | Charles Martel + Yi Seong-Gye | 5 | Charles 5511 | YSG 5555 | — | Match |
| Infantry | Charles Martel + Sun Tzu | 4 | Charles 5511 | Sun Tzu 5555 | — | Match |
| Infantry | Sun Tzu + Yi Seong-Gye | 4 | Sun Tzu 5555 | YSG 5555 | — | Match |
| Infantry | Björn Ironside + Sun Tzu | 3 | Björn 5555 | Sun Tzu 5555 | — | Match |
| Cavalry | Minamoto + Cao Cao | 5 | Minamoto 5555 | Cao Cao 5511 | Spender | Match |
| Cavalry | Minamoto + Æthelflæd | 4 | Minamoto 5511 | Æthelflæd 5111 | — | Match |
| Cavalry | Minamoto + Mehmed II | 4 | Minamoto 5511 | Mehmed 5511 | — | Match |
| Cavalry | Pelagius + Minamoto | 3 | Pelagius 5555 | Minamoto 5111 | — | Match |
| Cavalry | Baibars + Pelagius | 3 | Baibars 5555 | Pelagius 5555 | — | Match |
| Archer | El Cid + Yi Seong-Gye | 5 | El Cid 5511 | YSG 5555 | BrokenDMG | Match |
| Archer | Thutmose III + Yi Seong-Gye | 4 | Thutmose 5111 | YSG 5555 | — | Match |
| Archer | Yi Seong-Gye + Mehmed II | 4 | YSG 5555 | Mehmed 5511 | — | Match |
| Archer | Hermann + El Cid | 3 | Hermann 5555 | El Cid 5511 | — | Match |
| Archer | Kusunoki Masashige + Yi Seong-Gye | 3 | Kusunoki 5555 | YSG 5555 | — | Match |

`BrokenDMG` is stored and displayed verbatim as an owner annotation. No mechanical meaning is
inferred from the label.

## Commander coverage

| Commander | Pairing appearances | Data | Active image |
|---|---:|---|---|
| Æthelflæd | 3 | Present | Present |
| Baibars | 1 | Present | Present |
| Björn Ironside | 3 | Present | Present |
| Cao Cao | 1 | Present | Present |
| Charles Martel | 5 | Present | Present |
| El Cid | 2 | Present | Present |
| Eulji Mundeok | 1 | Present | Present |
| Hermann | 1 | Present | Present |
| Kusunoki Masashige | 1 | Present | Present |
| Mehmed II | 3 | Present | Present |
| Minamoto no Yoshitsune | 4 | Present | Present |
| Pelagius | 2 | Present | Present |
| Pericles | 1 | Present | Present |
| Pyrrhus | 3 | Present | Present |
| Richard I | 5 | Present | Present |
| Sun Tzu | 9 | Present | Present |
| Thutmose III | 1 | Present | Present |
| Yi Seong-Gye | 7 | Present | Present |

## Final integrity result

- Expected commanders: 18; actual: 18; missing: 0; unexpected: 0.
- Expected pairings: 26; actual: 26; missing/mismatched: 0; unexpected: 0.
- Troop split: 16 infantry, 5 cavalry, 5 archer.
- Pairing-star split: 5 five-star, 15 four-star, 6 three-star. Infantry subset: 3 five-star, 11 four-star, 2 three-star.
- Pairing cards render only the supplied number of stars; no extra empty-star glyphs are shown.
- Skill value formats: all valid (`5555`, `5511`, `5111`, with the supplied Richard minimum note).
- Every screenshot commander has an active local image and generated detail route.
