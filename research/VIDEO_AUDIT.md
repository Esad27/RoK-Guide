# Video verification audit

Audit date: 2026-08-30

## Method and evidence boundary

All ten candidates from `rok_source.txt` were matched to a live YouTube watch page. The current title, display channel, stable channel ID, canonical watch URL, duration, publication timestamp and caption-track metadata were read from YouTube's player response. YouTube search was used to resolve the four Vietnamese candidates whose IDs were absent from the production dataset.

Every candidate exposes at least one automatic speech-recognition (`kind: asr`) caption track. YouTube's transcript export interface returned `No transcript is available for this YouTube video` for all ten candidates. Therefore:

- `captionStatus: auto-generated` means a player caption track was observed.
- `transcriptStatus: unavailable` means a full transcript could not be exported and was not inspected.
- Topics are limited to the current title and, where present, creator-supplied chapters/description. They must not be treated as transcript-derived claims.

## Verified candidates

| ID | Language | Channel | Published | Duration | Caption tracks | Transcript export |
|---|---|---|---|---:|---|---|
| `8nZRXBOBR08` | EN | Chisgule Gaming | 2025-08-14T15:35:24+03:00 | 2069 s | EN, automatic | unavailable |
| `_G2IO3urcaE` | EN | MusaGaming | 2025-07-09T01:45:35+03:00 | 4560 s | EN, automatic | unavailable |
| `WysD3bKhU94` | ES | Séfa | 2025-03-24T21:26:59+03:00 | 2106 s | ES, automatic | unavailable |
| `4ataeBtgiYM` | ES | ItsLeo | 2025-04-02T21:21:11+03:00 | 890 s | ES, automatic | unavailable |
| `qcDNkza2Spg` | ES | ItsLeo | 2025-02-15T19:14:08+03:00 | 621 s | ES, automatic | unavailable |
| `ZJQeJKVeEQA` | ES | Tarinboy | 2024-02-23T01:00:11+03:00 | 3494 s | ES, automatic | unavailable |
| `Wdis57IPPU8` | VI | Rok GPY | 2025-08-30T04:00:52-07:00 | 820 s | VI, automatic | unavailable |
| `pSC1WMtNlgk` | VI | Rok F2P | 2025-07-18T22:08:53-07:00 | 1598 s | EN-US and VI, automatic | unavailable |
| `4iuw9hOaQ_c` | VI | Rise Of Kingdoms Việt Nam Official | 2025-05-26T01:20:24-07:00 | 755 s | VI, automatic | unavailable |
| `0YZFWSVzDvg` | VI | Rok F2P | 2025-10-24T20:55:50-07:00 | 889 s | VI, automatic | unavailable |

## Resolved Vietnamese records

- `Toàn bộ BÍ KÍP  PHÁT TRIỂN CHỈ HUY...` → `Wdis57IPPU8`
- `Lối Chơi Bộ Binh & Những Vị Tướng...` → `pSC1WMtNlgk`
- `Hướng Dẫn Hệ Thống Vũ Trang...` → `4iuw9hOaQ_c`
- `Đội Hình 5 Đạo Gây Sát Thương...` → `0YZFWSVzDvg`

The last title explicitly scopes itself to KvK 3 and must not be presented as season-independent advice.

## Title and channel corrections

Production data now preserves current YouTube titles. Current display names differ from the seed text for two Spanish channels: `Sefacuh Warrior Rok` currently displays as `Séfa`, and `ItsLeoRoK` currently displays as `ItsLeo`. Stable channel IDs remain stored to disambiguate future display-name changes.
