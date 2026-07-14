// Embaralhamento justo (Fisher-Yates) — melhor distribuição que sort(random)
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Paleta cíclica para identificar cada time no resultado
const TEAM_COLORS = [
  "#C6FF3D",
  "#FF6B35",
  "#4FD1C5",
  "#F6C90E",
  "#E85D75",
  "#5B8DEF",
  "#B57BFF",
  "#39C0F0",
];
function teamColor(i) {
  return TEAM_COLORS[i % TEAM_COLORS.length];
}

// Mostra um erro discreto (em vez de alert()) que some sozinho
function showError(el, msg) {
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._timeout);
  el._timeout = setTimeout(() => el.classList.remove("show"), 3500);
}

function hideError(el) {
  el.classList.remove("show");
}
