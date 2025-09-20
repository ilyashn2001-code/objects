document.addEventListener('DOMContentLoaded', function () {
  const objects = [
    { title: 'Территории, прилегающие к 2 станциям МЦД-3 "Грачёвская" и МЦД-3 "Моссельмаш"', status: 'Активный', percent: 70, fio: 'Андреев Ю.', dates: '05.12.2023-11.11.2025', district: 'САО', violations: '4, проверок: 2', documents: '81%', photos: 17 },
    { title: 'Дворовая территория по адресу: Петрозаводская ул. 30', status: 'Завершён', percent: 65, fio: 'Васильева А.', dates: '25.08.2025-01.09.2025', district: 'САО', violations: '2, проверок: 2', documents: '20%', photos: 7 },
    { title: 'Зои Воскресенской улица (Боткинский проезд)', status: 'Завершён', percent: 62, fio: 'Петров Д.', dates: '19.04.2024-09.09.2025', district: 'САО', violations: '4, проверок: 2', documents: '86%', photos: 6 },
    { title: 'Дворовая территория по адресу: ул. Академика Павлова, д. 46"', status: 'Завершён', percent: 54, fio: 'Семенов С.', dates: '15.04.2025-31.08.2025', district: 'Район 2', budget: '13 млн ₽ / 5.9 млн ₽', violations: '3, проверок: 2', documents: '10%', photos: 3 },
    { title: 'Детский сад №12', status: 'Завершён', percent: 96, fio: 'Иванова Н.', dates: '01.01.2023 – 31.12.2024', district: 'ЗАО', violations: '2, проверок: 1', documents: '58%', photos: 9 },
    { title: 'Жилой дом, ул. Лесная', status: 'На паузе', percent: 75, fio: 'Титов К.', dates: '01.01.2023 – 31.12.2024', district: 'Район 2', budget: '15 млн ₽ / 6.5 млн ₽', violations: '3, проверок: 0', documents: '5%', photos: 18 },
    { title: 'Завод "ТехПром"', status: 'Активный', percent: 36, fio: 'Баранов И.', dates: '01.01.2023 – 31.12.2024', district: 'Район 2', budget: '16 млн ₽ / 6.8 млн ₽', violations: '3, проверок: 2', documents: '20%', photos: 19 },
    { title: 'Торговый центр', status: 'Завершён', percent: 43, fio: 'Егорова В.', dates: '01.01.2023 – 31.12.2024', district: 'Район 3', budget: '17 млн ₽ / 7.1 млн ₽', violations: '1, проверок: 0', documents: '27%', photos: 0 },
    { title: 'Кафе "БургХаус"', status: 'На паузе', percent: 43, fio: 'Романов Д.', dates: '01.01.2023 – 31.12.2024', district: 'Район 3', budget: '9 млн ₽ / 4.1 млн ₽', violations: '0, проверок: 0', documents: '48%', photos: 11 },
    { title: 'Автосалон Hyundai', status: 'Активный', percent: 56, fio: 'Сорокин И.', dates: '01.01.2023 – 31.12.2024', district: 'Район 3', budget: '11 млн ₽ / 6.2 млн ₽', violations: '2, проверок: 1', documents: '22%', photos: 2 },
    { title: 'Мечеть "Свет мира"', status: 'Завершён', percent: 23, fio: 'Муслим Х.', dates: '01.01.2023 – 31.12.2024', district: 'Район 3', budget: '13 млн ₽ / 6.8 млн ₽', violations: '2, проверок: 1', documents: '35%', photos: 1 },
    { title: 'Больница №3', status: 'На паузе', percent: 2, fio: 'Врачев В.', dates: '01.01.2023 – 31.12.2024', district: 'Район 3', budget: '20 млн ₽ / 9.5 млн ₽', violations: '3, проверок: 1', documents: '9%', photos: 12 },
    { title: 'Салон красоты "Мила"', status: 'Активный', percent: 68, fio: 'Краснова А.', dates: '01.01.2023 – 31.12.2024', district: 'Район 2', budget: '9 млн ₽ / 3.5 млн ₽', violations: '1, проверок: 1', documents: '77%', photos: 5 },
    { title: 'Спорткомплекс', status: 'Завершён', percent: 80, fio: 'Данилов А.', dates: '01.01.2023 – 31.12.2024', district: 'Район 2', budget: '13 млн ₽ / 6.1 млн ₽', violations: '0, проверок: 0', documents: '99%', photos: 6 },
    { title: 'Почтовое отделение', status: 'На паузе', percent: 11, fio: 'Ковалев Е.', dates: '01.01.2023 – 31.12.2024', district: 'Район 2', budget: '8 млн ₽ / 2.1 млн ₽', violations: '0, проверок: 1', documents: '15%', photos: 4 }
  ];

   function getStatusClass(status) {
    switch (status) {
      case 'Активный': return 'status-active';
      case 'Завершён': return 'status-complete';
      case 'На паузе': return 'status-paused';
      default: return '';
    }
  }

  function renderCards(list) {
    const container = document.getElementById('objectList');
    if (!container) return;
    container.innerHTML = '';

    list.forEach(obj => {
      const card = document.createElement('div');
      card.className = 'object-card';
      const statusClass = getStatusClass(obj.status);

      card.innerHTML = `
        <div class="card-header">
          <h3>${obj.title}</h3>
          <span class="status ${statusClass}">${obj.status}</span>
        </div>
        <div class="progress"><div class="bar" style="width: ${obj.percent}%"></div></div>
        <p class="percent">${obj.percent}%</p>
        <div class="meta">
          <span>${obj.fio}</span>
          <span>${obj.dates}</span>
          <span>${obj.district}</span>
          <span>⚠ Нарушений: ${obj.violations}</span>
          <span>📋 ИД: ${obj.documents}</span>
          <span>📷 ${obj.photos} фото</span>
        </div>
        <div class="actions">
          <button>Ганта</button>
          <button>Документы</button>
          <button class="chat-open-btn">Открыть чат ✏️</button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  document.getElementById('searchInput').addEventListener('input', function () {
    const val = this.value.toLowerCase();
    const filtered = objects.filter(o => o.title.toLowerCase().includes(val));
    renderCards(filtered);
  });

  renderCards(objects);

  // === Чат-модалка ===
  const modal = document.getElementById('chatModal');
  const closeBtn = document.querySelector('.chat-close');

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('chat-open-btn')) {
      modal.style.display = 'flex';
    }
    if (e.target.classList.contains('chat-close')) {
      modal.style.display = 'none';
    }
  });

  // === Переключение темы ===
  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
