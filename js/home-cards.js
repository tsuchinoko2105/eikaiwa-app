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
