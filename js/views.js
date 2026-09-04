// ------- 画面切り替え -------
const views = {
  home: document.getElementById("view-home"),
  cards: document.getElementById("view-cards"),
  quiz: document.getElementById("view-quiz"),
};

function showView(name) {
  Object.values(views).forEach(v => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("[data-back]").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.back));
});

document.getElementById("levelFilter").addEventListener("change", e => {
  currentLevel = e.target.value;
  renderHome();
  if (currentCategory) renderCards(currentCategory);
});
