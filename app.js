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

const views = {
  home: document.getElementById("view-home"),
  cards: document.getElementById("view-cards"),
  quiz: document.getElementById("view-quiz"),
};

function showView(name) {
  Object.values(views).forEach(v => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

document.querySelectorAll("[data-back]").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.back));
});

document.getElementById("levelFilter").addEventListener("change", e => {
  currentLevel = e.target.value;
  renderHome();
  if (currentCategory) renderCards(currentCategory);
});

function phrasesFor(catId, level = currentLevel) {
  return PHRASES.filter(p => p.cat === catId && (level === "all" || p.level === level));
}

// ------- 発音 -------
function speak(text, slow = false) {
  if (!("speechSynthesis" in window)) {
    alert("このブラウザは音声読み上げに対応していません。");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = slow ? 0.65 : 1;
  window.speechSynthesis.speak(utter);
}

// ------- 進捗表示 -------
function updateProgressBadge() {
  const total = PHRASES.length;
  const done = PHRASES.filter(p => mastered.has(p.id)).length;
  document.getElementById("progressBadge").textContent = `${done} / ${total} 覚えた`;
}

// ------- ホーム画面(カテゴリ一覧) -------
function renderHome() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const all = phrasesFor(cat.id, "all");
    const filtered = phrasesFor(cat.id);
    const done = all.filter(p => mastered.has(p.id)).length;
    const pct = all.length ? Math.round((done / all.length) * 100) : 0;

    const card = document.createElement("button");
    card.className = "category-card";
    card.innerHTML = `
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-progress">${done} / ${all.length} 覚えた${filtered.length !== all.length ? `(表示中 ${filtered.length}件)` : ""}</div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
    `;
    card.addEventListener("click", () => {
      currentCategory = cat.id;
      renderCards(cat.id);
      showView("cards");
    });
    grid.appendChild(card);
  });
  updateProgressBadge();
}

// ------- フラッシュカード画面 -------
function renderCards(catId) {
  currentCategory = catId;
  const cat = CATEGORIES.find(c => c.id === catId);
  document.getElementById("cardsCategoryTitle").textContent = `${cat.icon} ${cat.name}`;

  const list = document.getElementById("cardList");
  list.innerHTML = "";
  const items = phrasesFor(catId);

  if (items.length === 0) {
    list.innerHTML = `<p class="lead">このレベルのフレーズはまだありません。レベルフィルタを変更してください。</p>`;
    return;
  }

  items.forEach(p => {
    const isMastered = mastered.has(p.id);
    const card = document.createElement("div");
    card.className = "phrase-card" + (isMastered ? " mastered" : "");
    card.innerHTML = `
      <div class="phrase-top">
        <div class="phrase-en">${p.en}</div>
        <span class="level-tag ${p.level}">${p.level === "beginner" ? "初級" : "中級"}</span>
      </div>
      <div class="phrase-actions">
        <button class="icon-btn btn-speak">🔊 聞く</button>
        <button class="icon-btn btn-speak-slow">🐢 ゆっくり</button>
        <button class="icon-btn btn-toggle">👁 意味を見る</button>
        <label class="mastered-toggle">
          <input type="checkbox" class="mastered-checkbox" ${isMastered ? "checked" : ""}>
          覚えた
        </label>
      </div>
      <div class="phrase-details">
        <div class="phrase-ja">${p.ja}</div>
        <div class="phrase-note">💡 ${p.note}</div>
      </div>
    `;

    card.querySelector(".btn-speak").addEventListener("click", () => speak(p.en, false));
    card.querySelector(".btn-speak-slow").addEventListener("click", () => speak(p.en, true));
    card.querySelector(".btn-toggle").addEventListener("click", (e) => {
      const details = card.querySelector(".phrase-details");
      details.classList.toggle("open");
      e.target.textContent = details.classList.contains("open") ? "🙈 意味を隠す" : "👁 意味を見る";
    });
    card.querySelector(".mastered-checkbox").addEventListener("change", (e) => {
      if (e.target.checked) mastered.add(p.id);
      else mastered.delete(p.id);
      saveMastered(mastered);
      card.classList.toggle("mastered", e.target.checked);
      updateProgressBadge();
    });

    list.appendChild(card);
  });
}

document.getElementById("startQuizBtn").addEventListener("click", () => {
  if (!currentCategory) return;
  startQuiz(currentCategory);
  showView("quiz");
});

// ------- クイズ画面 -------
let quizState = null;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuizQuestions(catId) {
  const pool = phrasesFor(catId);
  const questions = shuffle(pool).map(correct => {
    const distractorsPool = pool.filter(p => p.id !== correct.id);
    const distractors = shuffle(distractorsPool).slice(0, Math.min(3, distractorsPool.length));
    const options = shuffle([correct, ...distractors]);
    return { correct, options };
  });
  return questions;
}

function startQuiz(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  document.getElementById("quizCategoryTitle").textContent = `📝 ${cat.name} クイズ`;

  const questions = buildQuizQuestions(catId);
  if (questions.length < 2) {
    document.getElementById("quizArea").innerHTML = `<p class="lead">クイズを作るにはこのレベルで2問以上のフレーズが必要です。レベルフィルタを「すべて」にしてみてください。</p>`;
    return;
  }

  quizState = { questions, index: 0, score: 0 };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById("quizArea");
  const { questions, index, score } = quizState;

  if (index >= questions.length) {
    area.innerHTML = `
      <div class="quiz-result">
        <div>お疲れさまでした!</div>
        <div class="score">${score} / ${questions.length}</div>
        <button class="quiz-next" id="retryBtn">もう一度挑戦</button>
      </div>
    `;
    document.getElementById("retryBtn").addEventListener("click", () => startQuiz(currentCategory));
    return;
  }

  const q = questions[index];
  area.innerHTML = `
    <div class="quiz-progress">問題 ${index + 1} / ${questions.length} ・ 正解数 ${score}</div>
    <div class="quiz-question">
      <div class="q-ja">${q.correct.ja}</div>
      <div class="q-hint">この意味の英語表現を選んでください</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-idx="${i}">${opt.en}</button>`).join("")}
      </div>
    </div>
  `;

  area.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const chosen = q.options[idx];
      const buttons = area.querySelectorAll(".quiz-option");
      buttons.forEach(b => b.disabled = true);

      if (chosen.id === q.correct.id) {
        btn.classList.add("correct");
        quizState.score++;
      } else {
        btn.classList.add("wrong");
        const correctBtn = [...buttons].find(b => Number(b.dataset.idx) === q.options.indexOf(q.correct));
        correctBtn.classList.add("correct");
      }

      const nextBtn = document.createElement("button");
      nextBtn.className = "quiz-next";
      nextBtn.textContent = index + 1 < questions.length ? "次の問題 →" : "結果を見る →";
      nextBtn.addEventListener("click", () => {
        quizState.index++;
        renderQuizQuestion();
      });
      area.querySelector(".quiz-question").appendChild(nextBtn);
    });
  });
}

// ------- 初期化 -------
renderHome();
