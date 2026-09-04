# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, dependency-free web app (English conversation phrase trainer): flashcards + quiz over a hardcoded phrase list, entirely client-side. No build step, no package manager, no test framework — just plain scripts loaded directly by `index.html`.

## Running it

There is no dev server or build step. Open `index.html` directly in a browser:

```bash
open index.html
```

## Architecture

Plain scripts loaded in order by `index.html`, no modules/bundler — everything shares the global scope, so load order in `index.html` matters:

```html
<script src="data.js"></script>
<script src="js/state.js"></script>
<script src="js/views.js"></script>
<script src="js/speech.js"></script>
<script src="js/home-cards.js"></script>
<script src="js/quiz.js"></script>
<script src="js/main.js"></script>
```

Deliberately **not** ES modules (`type="module"`): the app is meant to be opened directly via `file://` (see "Running it" above), and `file://` + ES modules is blocked by CORS in most browsers.

- `data.js` — the only data source. `CATEGORIES` (id/name/icon) and `PHRASES` (id/cat/level/en/ja/note) are plain arrays; everything else in the app derives from these. Adding a phrase or category means editing this file only.
- `js/state.js` — state and persistence: `mastered` (a `Set` of phrase ids, persisted to `localStorage` under key `eikaiwa-mastered-v1`, via `loadMastered`/`saveMastered`), `currentLevel`, `currentCategory`, and the `phrasesFor(catId, level)` filter helper used by every screen.
- `js/views.js` — view switching: three `<section>` elements (`view-home` / `view-cards` / `view-quiz`) in `index.html`, shown/hidden via `showView()` toggling a `hidden` class — no router. Also wires the back buttons and the level filter `<select>`.
- `js/speech.js` — pronunciation via the browser's native `speechSynthesis` API (`speak()`), not an external service.
- `js/home-cards.js` — the home (category list) and flashcard screens: `renderHome`, `renderCards`, `updateProgressBadge`. Each `render*()` rebuilds its section's DOM from scratch via `innerHTML` and re-attaches event listeners; there is no diffing/virtual DOM.
- `js/quiz.js` — quiz generation and flow: `buildQuizQuestions` builds each question on the fly from `PHRASES` (correct answer + up to 3 random distractors from the same category/level filter), `startQuiz`/`renderQuizQuestion` drive `quizState` through the same rebuild-via-innerHTML pattern.
- `js/main.js` — entry point; must load last since it calls `renderHome()` to draw the initial screen.
- `style.css` — theming via CSS custom properties on `:root`, with a `@media (prefers-color-scheme: dark)` override block for dark mode. Add new colors as variables here rather than hardcoding.

## Data model notes

- Phrase `id` values must stay unique and stable — they're used both as React-less list keys and as the `localStorage` mastered-set identity. Don't reuse or renumber existing ids when editing `data.js`.
- `level` is `"beginner" | "intermediate"`; the UI's "all" filter is synthesized in `app.js`, not a third stored value.
- All state is per-browser (`localStorage` only); there is no backend, account system, or sync.
