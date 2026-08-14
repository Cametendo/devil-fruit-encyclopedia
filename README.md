# One Piece Wiki — Character & Devil Fruit Encyclopedia

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Beta-red.svg)](https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta)

> ⚠ **SPOILER WARNING:** this site covers the entire One Piece story, including its most recent arcs. Browse at your own risk!

## About

A fan-made, static wiki covering the **100 most well-known One Piece characters** — Straw Hats, Marines, Yonko, Warlords, Revolutionaries, and more — plus a full **Devil Fruit encyclopedia**. Every character who has eaten a Devil Fruit links straight to that fruit's own page, and every fruit page lists its type, history, powers, strengths/weaknesses, and the complete chain of everyone who has ever used it (e.g. the Mera Mera no Mi links both Portgas D. Ace and Sabo; the Gura Gura no Mi links Whitebeard and Blackbeard).

Built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step, no backend. All content lives in two data files and is rendered client-side.

## Features

- 🏴‍☠️ **100 character profiles** — bounty, affiliation, origin, stats, biography, and abilities
- 🍈 **57 linked Devil Fruit pages** — Paramecia, Zoan, and Logia, each with history, powers, strengths/weaknesses, and every known user
- 🔍 Live search & filtering on both the character index and the Devil Fruit index (by name, affiliation, or fruit type)
- 🔗 Two-way linking: character pages link to their fruit, fruit pages link back to every user
- 🎨 A wanted-poster inspired design, fully responsive

## Project structure

```
.
├── index.html            # Character wiki home (search + filter + grid)
├── character.html        # Character detail template (rendered via ?id=)
├── fruits.html            # Devil Fruit index (search + type filter + grid)
├── fruit.html             # Devil Fruit detail template (rendered via ?id=)
├── css/
│   └── styles.css         # Full design system
└── js/
    ├── characters-data.js # 100 character records
    ├── fruits-data.js     # 57 Devil Fruit records (linked to characters)
    ├── app.js              # Shared rendering/formatting utilities
    ├── main.js             # Home page controller
    ├── character.js        # Character detail page controller
    ├── fruits.js            # Devil Fruit index controller
    └── fruit.js             # Devil Fruit detail page controller
```

## Running locally

No build step required — it's static HTML/CSS/JS. Just serve the directory:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or with Docker:

```bash
docker compose up
# then open http://localhost:8080
```

## Requirements

- A modern web browser with JavaScript enabled (Firefox, Chrome/Chromium, Safari, Edge)
- No internet connection required after the initial page load (the Pirata One / Inter fonts are loaded from Google Fonts)

## Roadmap

- [ ] More characters and Devil Fruits as the story continues
- [ ] Crew/faction pages
- [ ] Timeline view of arcs

## License and Credits

**Author**: [Cametendo](https://www.github.com/Cametendo)
**License**: MIT

This is a fan-made project for educational and entertainment purposes. One Piece is created by Eiichiro Oda and published by Shueisha. This site is not affiliated with or endorsed by Eiichiro Oda, Shueisha, or Toei Animation.
