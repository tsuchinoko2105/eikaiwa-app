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
