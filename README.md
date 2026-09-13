# RoK Guide

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase Hosting](https://img.shields.io/badge/Hosted_on-Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/docs/hosting)

A multilingual, community-built Rise of Kingdoms guide featuring commanders, pairings, battle strategies, KvK guides, curated videos, and useful resources.

**Live website:** [rokguide-7d2c5.web.app](https://rokguide-7d2c5.web.app/)


## About the project

I created RoK Guide for personal use, for fun, and to help my friends find useful Rise of Kingdoms information in one place. It is not perfect, and it is not intended to be a professional or official guide. It is simply a personal project that I hope can make the game a little easier and more enjoyable for others.

Because Rise of Kingdoms changes over time, some strategies and recommendations may become outdated. Important decisions should always be compared with the latest in-game information and current patch notes.

## Features

- Commander profiles and essential information
- Commander pairings organized by troop type
- Battle and open-field strategy guides
- KvK preparation, resource, hospital, zone, and pass guides
- Curated educational videos and community resources
- English, Spanish, and Vietnamese content
- Responsive design for desktop and mobile devices
- Dark interface inspired by the visual style of Rise of Kingdoms
- Fast, statically generated pages and sitemap support

## Technology

- [Astro 5](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

The website is statically generated with Astro and deployed using **Firebase Hosting**.

## AI assistance

**OpenAI ChatGPT and OpenAI Codex** were used as AI assistants during planning, research, content organization, development, and debugging. The direction of the project, source selection, and final decisions remain the responsibility of the project owner.

## Getting started

Make sure [Node.js](https://nodejs.org/) is installed, then run:

```bash
git clone https://github.com/Esad27/RoK-Guide.git
cd RoK-Guide
npm install
npm run dev
```

The development server is available at `http://localhost:4321` by default.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist/` directory. To deploy with Firebase CLI after configuring and signing in to Firebase:

```bash
firebase deploy
```

Set `SITE_URL` before creating a production build so Astro can generate the correct canonical and sitemap URLs. See [`.env.example`](.env.example) for an example.

## Sources and accuracy

Guide content is prepared by comparing official Rise of Kingdoms channels, current community resources, and educational material. The source policy and research notes are available in [`SOURCES.md`](SOURCES.md) and the [`research/`](research/) directory.

## Disclaimer

This is an independent, non-commercial, fan-made project. It is not affiliated with, endorsed by, or sponsored by Lilith Games. Rise of Kingdoms, its artwork, names, and related trademarks belong to their respective owners.

---

Thanks for visiting. If you notice an error or outdated information, feel free to open a GitHub issue.
