// ------- 音声認識(発音チェック・会話練習で共用) -------
const SpeechRecognitionImpl = window.SpeechRecognition || window.webkitSpeechRecognition;

function supportsRecognition() {
  return !!SpeechRecognitionImpl;
}

// iframeに埋め込まれて表示されている場合、マイク権限がブロックされ許可ダイアログ自体が
// 出ないことがある(Claudeのアーティファクト埋め込み表示など)。エラーメッセージに補足する。
function isEmbeddedPage() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function embeddedHint() {
  return isEmbeddedPage()
    ? " 埋め込み表示のページではマイクがブロックされ、許可ダイアログ自体が出ないことがあります。index.htmlを直接ブラウザで開いてお試しください。"
    : "";
}

// マイクで1フレーズだけ聞き取る。呼び出し側は onResult(transcript) / onError(reason) / onStart() / onEnd() を渡す。
function recognizeOnce({ onResult, onError, onStart, onEnd }) {
  if (!SpeechRecognitionImpl) {
    onError && onError("unsupported");
    return null;
  }
  const rec = new SpeechRecognitionImpl();
  rec.lang = "en-US";
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.continuous = false;

  let started = false;
  let settled = false;

  // 埋め込みページなどで権限がブロックされていると、onstart/onerrorが
  // 一切発火せずボタンが「聞いています…」のまま固まることがあるための保険。
  const startTimeout = setTimeout(() => {
    if (!started && !settled) {
      settled = true;
      try { rec.abort(); } catch (e) {}
      onError && onError("no-response");
      onEnd && onEnd();
    }
  }, 4000);

  rec.onstart = () => {
    started = true;
    onStart && onStart();
  };
  rec.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    onResult && onResult(transcript);
  };
  rec.onerror = (e) => {
    if (settled) return;
    settled = true;
    clearTimeout(startTimeout);
    onError && onError(e.error);
  };
  rec.onend = () => {
    if (settled) return;
    settled = true;
    clearTimeout(startTimeout);
    onEnd && onEnd();
  };

  try {
    rec.start();
  } catch (e) {
    clearTimeout(startTimeout);
    onError && onError("start-failed");
    return null;
  }
  return rec;
}

function normalizeForCompare(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

// 0〜1のスコア(1が完全一致)。句読点・大文字小文字は無視して比較する。
function similarityScore(target, spoken) {
  const a = normalizeForCompare(target);
  const b = normalizeForCompare(spoken);
  if (!a || !b) return 0;
  const dist = levenshtein(a, b);
  return Math.max(0, 1 - dist / Math.max(a.length, b.length));
}

// 判定結果を返す: "good" | "close" | "retry"
function judgeScore(score) {
  if (score >= 0.75) return "good";
  if (score >= 0.5) return "close";
  return "retry";
}
