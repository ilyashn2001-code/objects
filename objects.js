const objects = [
  // ... [оставляем весь твой массив как есть]
];

function renderCards(list) {
  const container = document.getElementById('objectList');
  if (!container) return;
  container.innerHTML = '';

  list.forEach(obj => {
    const card = document.createElement('div');
    card.className = 'object-card';
    card.innerHTML = `
      <div class="card-header">
        <h3>${obj.title}</h3>
        <span class="status">${obj.status}</span>
      </div>
      <div class="progress"><div class="bar" style="width: ${obj.percent}%"></div></div>
      <p class="percent">${obj.percent}%</p>
      <div class="meta">
        <span>${obj.fio}</span>
        <span>${obj.dates}</span>
        <span>${obj.district}</span>
        <span>💰 ${obj.budget}</span>
        <span>⚠ Нарушений: ${obj.violations}</span>
        <span>📋 Документы: ${obj.documents}</span>
        <span>📷 ${obj.photos} фото</span>
      </div>
      <div class="actions">
        <button>Подробнее</button>
        <button>PDF</button>
        <button class="chat-open-btn">Открыть чат ✏️</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Поиск
document.getElementById('searchInput').addEventListener('input', function () {
  const val = this.value.toLowerCase();
  const filtered = objects.filter(o => o.title.toLowerCase().includes(val));
  renderCards(filtered);
});

renderCards(objects);

// === Чат-модалка ===
document.addEventListener('click', function (e) {
  const modal = document.getElementById('chatModal');
  if (e.target.classList.contains('chat-open-btn')) {
    modal.style.display = 'flex';
  }
  if (e.target.classList.contains('chat-close')) {
    modal.style.display = 'none';
  }
});

// === Тема ===
// При загрузке страницы — установить сохранённую тему
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Обработка клика на 🌗
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}
