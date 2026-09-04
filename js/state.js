// ------- 状態管理 -------
const STORAGE_KEY = "eikaiwa-mastered-v1";

function loadMastered() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}

function saveMastered(set) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch (e) {
    /* localStorageが使えない環境では無視 */
  }
}

let mastered = loadMastered();
let currentLevel = "all";
let currentCategory = null;

function phrasesFor(catId, level = currentLevel) {
  return PHRASES.filter(p => p.cat === catId && (level === "all" || p.level === level));
}
