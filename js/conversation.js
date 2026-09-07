// ------- 会話練習モード -------
let convoState = null;

function findDialogue(catId) {
  return DIALOGUES.find(d => d.cat === catId);
}

function startConversation(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  const dialogue = findDialogue(catId);
  const titleEl = document.getElementById("conversationCategoryTitle");
  const area = document.getElementById("conversationArea");

  if (!dialogue) {
    titleEl.textContent = `💬 ${cat.name}`;
    area.innerHTML = `<p class="lead">このカテゴリの会話はまだ準備中です。</p>`;
    return;
  }

  titleEl.textContent = `💬 ${dialogue.title}`;
  convoState = { dialogue, index: 0, awaitingSpeech: false };
  renderConversation();
}

function renderConversation() {
  const area = document.getElementById("conversationArea");
  const { dialogue, index } = convoState;
  const turns = dialogue.turns;

  const doneCount = turns.filter((t, i) => i < index).length;
  const bubbles = turns.slice(0, index + 1).map((t, i) => {
    const isCurrent = i === index;
    const revealed = i < index || (isCurrent && t.speaker === "npc");
    return `
      <div class="chat-bubble ${t.speaker} ${isCurrent ? "current" : ""}">
        <div class="chat-role">${t.speaker === "npc" ? "相手" : "あなた"}</div>
        ${revealed || i < index
          ? `<div class="chat-en">${t.en}</div><div class="chat-ja">${t.ja}</div>`
          : `<div class="chat-hint">🗨 「${t.ja}」を英語で話してみましょう</div>`
        }
      </div>
    `;
  }).join("");

  const finished = index >= turns.length;

  if (finished) {
    area.innerHTML = `
      <div class="chat-log">${bubbles}</div>
      <div class="quiz-result">
        <div class="score">会話クリア!</div>
        <button class="quiz-next" id="convoRetryBtn">もう一度この会話をする</button>
      </div>
    `;
    document.getElementById("convoRetryBtn").addEventListener("click", () => startConversation(convoState.dialogue.cat));
    return;
  }

  const current = turns[index];
  let controlsHtml = "";

  if (current.speaker === "npc") {
    controlsHtml = `
      <div class="convo-controls">
        <button class="chalk-btn-lg" id="convoReplayBtn">🔊 もう一度聞く</button>
        <button class="quiz-next" id="convoNextBtn">▶ 次へ進む</button>
      </div>
    `;
  } else {
    controlsHtml = `
      <div class="convo-controls">
        <button class="chalk-btn-lg" id="convoHintBtn">👁 英語を確認する</button>
        <button class="mic-btn-lg" id="convoMicBtn">🎤 話す</button>
        <button class="chalk-btn-lg" id="convoSkipBtn">次へ(答えを見る)</button>
      </div>
      <div class="mic-result" id="convoMicResult"></div>
    `;
  }

  area.innerHTML = `
    <div class="quiz-progress">ターン ${index + 1} / ${turns.length}</div>
    <div class="chat-log">${bubbles}</div>
    ${controlsHtml}
  `;

  if (current.speaker === "npc") {
    speak(current.en, false);
    document.getElementById("convoReplayBtn").addEventListener("click", () => speak(current.en, false));
    document.getElementById("convoNextBtn").addEventListener("click", () => {
      convoState.index++;
      renderConversation();
    });
  } else {
    document.getElementById("convoHintBtn").addEventListener("click", (e) => {
      const bubble = area.querySelector(".chat-bubble.current");
      bubble.querySelector(".chat-hint")?.remove();
      bubble.insertAdjacentHTML("beforeend", `<div class="chat-en">${current.en}</div><div class="chat-ja">${current.ja}</div>`);
      e.target.disabled = true;
    });
    document.getElementById("convoSkipBtn").addEventListener("click", () => {
      convoState.index++;
      renderConversation();
    });
    document.getElementById("convoMicBtn").addEventListener("click", (e) => runConversationMic(current, e.target));
  }
}

function runConversationMic(turn, btn) {
  const resultEl = document.getElementById("convoMicResult");

  if (!supportsRecognition()) {
    resultEl.innerHTML = `<div class="mic-feedback retry">このブラウザは音声認識に対応していません(Google Chrome推奨)。</div>`;
    return;
  }

  btn.disabled = true;
  const originalLabel = btn.textContent;
  btn.textContent = "🎤 聞いています…";

  recognizeOnce({
    onResult: (transcript) => {
      const score = similarityScore(turn.en, transcript);
      const verdict = judgeScore(score);
      const pct = Math.round(score * 100);
      const messages = {
        good: "✅ 通じました!次へ進みましょう。",
        close: "🔶 惜しい!もう一度話すか、次へ進みましょう。",
        retry: "🔁 うまく聞き取れませんでした。もう一度どうぞ。",
      };
      resultEl.innerHTML = `
        <div class="mic-feedback ${verdict}">
          ${messages[verdict]}(一致度 ${pct}%)<br>
          <span class="mic-heard">聞き取り結果: 「${transcript}」</span>
        </div>
      `;
      if (verdict === "good") {
        const area = document.getElementById("conversationArea");
        const bubble = area.querySelector(".chat-bubble.current");
        bubble.querySelector(".chat-hint")?.remove();
        if (!bubble.querySelector(".chat-en")) {
          bubble.insertAdjacentHTML("beforeend", `<div class="chat-en">${turn.en}</div><div class="chat-ja">${turn.ja}</div>`);
        }
        setTimeout(() => {
          convoState.index++;
          renderConversation();
        }, 900);
      }
    },
    onError: (reason) => {
      const msg = reason === "not-allowed" || reason === "permission-denied" || reason === "no-response"
        ? "マイクの使用が許可されていないか、応答がありませんでした。ブラウザのサイト設定とOSのマイク権限を確認してください。" + embeddedHint()
        : "音声を認識できませんでした。もう一度お試しください。" + embeddedHint();
      resultEl.innerHTML = `<div class="mic-feedback retry">⚠️ ${msg}</div>`;
    },
    onEnd: () => {
      btn.disabled = false;
      btn.textContent = originalLabel;
    },
  });
}

document.getElementById("startConvoBtn").addEventListener("click", () => {
  if (!currentCategory) return;
  startConversation(currentCategory);
  showView("conversation");
});
