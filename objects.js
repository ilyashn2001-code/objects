const objects = [
  { title: "Строительство школы", status: "Активный", progress: 42, fio: "Андреев Ю.", photos: 12, details: 5 },
  { title: "Офисное здание", status: "Завершён", progress: 100, fio: "Васильева А.", photos: 4, details: 4 },
  { title: "Торговый центр", status: "На паузе", progress: 60, fio: "Петров Д.", photos: 12, details: 108 },
  { title: "Детский сад №12", status: "Активный", progress: 37, fio: "Сидоров А.", photos: 6, details: 2 },
  { title: "Парк у реки", status: "Завершён", progress: 100, fio: "Кузнецова В.", photos: 8, details: 3 },
  { title: "Станция метро", status: "На паузе", progress: 20, fio: "Орлов И.", photos: 9, details: 1 },
  { title: "Салон красоты", status: "Активный", progress: 55, fio: "Егорова Е.", photos: 5, details: 6 },
  { title: "Жилой дом", status: "Завершён", progress: 100, fio: "Демин С.", photos: 7, details: 2 },
  { title: "Мечеть", status: "На паузе", progress: 30, fio: "Мухаммадов Х.", photos: 4, details: 1 }
];

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
        <span>Подробнее ${obj.details}</span>
        <span>📷 ${obj.photos}</span>
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
