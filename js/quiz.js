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
