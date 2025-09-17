const objects = Array.from({ length: 15 }).map((_, i) => ({
  title: `Объект №${i + 1}`,
  status: i % 3 === 0 ? "Активный" : i % 3 === 1 ? "Завершён" : "На паузе",
  progress: Math.floor(Math.random() * 100),
  fio: `ФИО №${i + 1}`,
  start: "01.01.2023",
  end: "31.12.2024",
  district: `Район ${Math.floor(i / 3) + 1}`,
  budget: `${10 + i} млн ₽`,
  spent: `${(5 + i * 0.3).toFixed(1)} млн ₽`,
  violations: Math.floor(Math.random() * 5),
  checks: Math.floor(Math.random() * 3),
  docs: `${Math.floor(Math.random() * 100)}%`,
  laurey: i % 2 === 0 ? "есть" : "нет",
  photos: Math.floor(Math.random() * 20),
}));

function renderCards(list) {
  const container = document.getElementById("objectList");
  container.innerHTML = "";
  list.forEach(obj => {
    const card = document.createElement("div");
    card.className = "object-card";
    card.innerHTML = `
      <div class="card-header">
        <h3>${obj.title}</h3>
        <span class="status ${obj.status}">${obj.status}</span>
      </div>
      <div class="progress"><div class="bar" style="width: ${obj.progress}%"></div></div>
      <p class="percent">${obj.progress}%</p>
      <div class="meta">
        <span>${obj.fio}</span>
        <span>${obj.start} – ${obj.end}</span>
        <span>${obj.district}</span>
        <span>💰 ${obj.budget} / ${obj.spent}</span>
        <span>⚠️ Нарушений: ${obj.violations}, проверок: ${obj.checks}</span>
        <span>📋 Документы: ${obj.docs}, лаурий: ${obj.laurey}</span>
        <span>📷 ${obj.photos} фото</span>
      </div>
      <div class="actions">
        <button>Подробнее</button>
        <button>PDF</button>
        <button>✏️</button>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  const val = this.value.toLowerCase();
  const filtered = objects.filter(o => o.title.toLowerCase().includes(val));
  renderCards(filtered);
});

renderCards(objects);
