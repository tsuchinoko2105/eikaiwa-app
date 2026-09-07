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
<script src="dialogues.js"></script>
<script src="js/state.js"></script>
<script src="js/views.js"></script>
<script src="js/speech.js"></script>
<script src="js/recognition.js"></script>
<script src="js/home-cards.js"></script>
<script src="js/quiz.js"></script>
<script src="js/conversation.js"></script>
<script src="js/main.js"></script>
```

Deliberately **not** ES modules (`type="module"`): the app is meant to be opened directly via `file://` (see "Running it" above), and `file://` + ES modules is blocked by CORS in most browsers.

- `data.js` — the main data source. `CATEGORIES` (id/name/icon) and `PHRASES` (id/cat/level/en/ja/note) are plain arrays; everything on the flashcard/quiz screens derives from these. Adding a phrase or category means editing this file only.
- `dialogues.js` — `DIALOGUES`: one short scripted exchange per category (id/cat/level/title/turns), used only by the conversation-practice screen. Each turn is `{ speaker: "npc"|"you", en, ja }`; `findDialogue(catId)` in `js/conversation.js` picks the (currently single) dialogue for a category.
- `js/state.js` — state and persistence: `mastered` (a `Set` of phrase ids, persisted to `localStorage` under key `eikaiwa-mastered-v1`, via `loadMastered`/`saveMastered`), `currentLevel`, `currentCategory`, and the `phrasesFor(catId, level)` filter helper used by every screen.
- `js/views.js` — view switching: four `<section>` elements (`view-home` / `view-cards` / `view-quiz` / `view-conversation`) in `index.html`, shown/hidden via `showView()` toggling a `hidden` class — no router. Also wires the back buttons and the level filter `<select>`.
- `js/speech.js` — pronunciation via the browser's native `speechSynthesis` API (`speak()`), not an external service.
- `js/recognition.js` — the learner's own voice via the native `SpeechRecognition`/`webkitSpeechRecognition` API. `supportsRecognition()` feature-detects (Chrome/Edge only — no Safari/Firefox support), `recognizeOnce({onResult,onError,onStart,onEnd})` captures a single utterance, and `similarityScore`/`judgeScore` grade the transcript against a target phrase via normalized Levenshtein distance (`"good" >= .75`, `"close" >= .5`, else `"retry"`). Requires a mic permission grant; used by both `js/home-cards.js` (per-phrase speaking check) and `js/conversation.js` (conversation turns).
- `js/home-cards.js` — the home (category list) and flashcard screens: `renderHome`, `renderCards`, `updateProgressBadge`, `levelLabel`, and `runSpeakingCheck` (the 🎤 話す練習 button's mic flow on each flashcard). Each `render*()` rebuilds its section's DOM from scratch via `innerHTML` and re-attaches event listeners; there is no diffing/virtual DOM.
- `js/quiz.js` — quiz generation and flow: `buildQuizQuestions` builds each question on the fly from `PHRASES` (correct answer + up to 3 random distractors from the same category/level filter), `startQuiz`/`renderQuizQuestion` drive `quizState` through the same rebuild-via-innerHTML pattern.
- `js/conversation.js` — conversation-practice flow: `startConversation`/`renderConversation` step through a `DIALOGUES` entry turn by turn (`convoState`), auto-playing `npc` lines via `speak()` and capturing `you` lines via `runConversationMic()` (built on `js/recognition.js`); a "good" match auto-advances, otherwise the learner can retry, peek the answer, or skip.
- `js/main.js` — entry point; must load last since it calls `renderHome()` to draw the initial screen.
- `style.css` — theming via CSS custom properties on `:root`, with a `@media (prefers-color-scheme: dark)` override block for dark mode. Add new colors as variables here rather than hardcoding.

## Data model notes

- Phrase `id` values must stay unique and stable — they're used both as React-less list keys and as the `localStorage` mastered-set identity. Don't reuse or renumber existing ids when editing `data.js`.
- `level` is `"beginner" | "intermediate" | "advanced"`; the UI's "all" filter is synthesized in the view code, not a fourth stored value.
- All state is per-browser (`localStorage` only); there is no backend, account system, or sync.
- Speech recognition needs a browser that implements `SpeechRecognition` (Chrome/Edge) and a granted mic permission; `js/recognition.js` degrades to an inline message everywhere else, it never throws.
