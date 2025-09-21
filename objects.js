document.addEventListener('DOMContentLoaded', function () {
const objects = [
  // первые 8
  { title: 'Дворовая территория по адресу: Путевой пр. 38', status: 'Завершён', percent: 100, fio: 'Андреев Ю.А.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '2, проверок: 1', documents: '85%', photos: 12 },
  { title: 'Дворовая территория по адресу: Флотская ул. 54, 58 к.1', status: 'Завершён', percent: 100, fio: 'Семенов И.П.', dates: '15.04.2024-15.08.2024', district: 'САО', violations: '1, проверок: 1', documents: '90%', photos: 8 },
  { title: 'Дворовая территория по адресу: Каргопольская ул. 18', status: 'Завершён', percent: 100, fio: 'Петров Д.С.', dates: '15.04.2024-28.08.2024', district: 'СВАО', violations: '3, проверок: 2', documents: '75%', photos: 10 },
  { title: 'Дворовая территория по адресу: Бестужевых ул. 27А', status: 'Завершён', percent: 100, fio: 'Иванова Н.А.', dates: '15.04.2024-23.08.2024', district: 'СВАО', violations: '0, проверок: 1', documents: '88%', photos: 6 },
  { title: 'Дворовая территория по адресу: Челобитьевское шоссе 14 к.3, 14 к.4, 14 к.5', status: 'Завершён', percent: 100, fio: 'Кузнецов А.В.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '2, проверок: 2', documents: '82%', photos: 11 },
  { title: 'Дворовая территория по адресу: Мира просп. 194', status: 'Завершён', percent: 100, fio: 'Фёдоров М.Г.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '0, проверок: 1', documents: '97%', photos: 9 }
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
          <button class="chat-open-btn">Открыть чат</button>
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
  const chatTitle = document.getElementById('chatTitle');
  const chatSelect = document.getElementById('chatSelect');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatBackBtn = document.getElementById('chatBackBtn');

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('chat-open-btn')) {
      modal.style.display = 'flex';
      chatTitle.textContent = 'Выберите чат';
      chatSelect.style.display = 'block';
      chatBody.style.display = 'none';
      chatInput.style.display = 'none';
      chatBackBtn.style.display = 'none';
    }

    if (e.target.classList.contains('chat-close')) {
      modal.style.display = 'none';
    }

    if (e.target.classList.contains('chat-option')) {
      const selected = e.target.dataset.chat;
      chatTitle.textContent = selected;
      chatSelect.style.display = 'none';
      chatBody.style.display = 'block';
      chatInput.style.display = 'none'; // без поля ввода
      chatBackBtn.style.display = 'block';
    }

    if (e.target.id === 'chatBackBtn') {
      chatTitle.textContent = 'Выберите чат';
      chatSelect.style.display = 'block';
      chatBody.style.display = 'none';
      chatInput.style.display = 'none';
      chatBackBtn.style.display = 'none';
    }
  });


function applyFilters() {
  const text = document.getElementById('searchInput').value.toLowerCase();
  const district = document.getElementById('districtFilter').value;
  const type = document.getElementById('typeFilter').value;
  const date = document.getElementById('dateFilter').value;
  const fio = document.getElementById('fioFilter').value.toLowerCase();
  const violations = document.getElementById('violationFilter').value;

  const filtered = objects.filter(obj => {
    return (
      obj.title.toLowerCase().includes(text) &&
      (district === '' || obj.district === district) &&
      (type === '' || obj.title.includes(type)) &&
      (date === '' || obj.dates.includes(date)) &&
      (fio === '' || obj.fio.toLowerCase().includes(fio)) &&
      (violations === '' || obj.violations.startsWith(violations))
    );
  });

  renderCards(filtered);
}

// Навешиваем обработчики на все фильтры
['searchInput', 'districtFilter', 'typeFilter', 'dateFilter', 'fioFilter', 'violationFilter'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', applyFilters);
});










// === ДАННЫЕ ДЛЯ ВСЕХ ГАНТОВ ===

const defaultStart = Date.UTC(2024, 3, 1);
const taskDuration = 5 * 24 * 3600 * 1000; // 5 дней

function applyDefaultDates(tasks) {
  let current = defaultStart;
  return tasks.map(task => {
    const start = task.start || current;
    const end = task.end || (current + taskDuration);
    current = end + 1;
    return { ...task, start, end };
  });
}
  
const ganttByTitle = {
  'Дворовая территория по адресу: Путевой пр. 38': [
    { id: 'task0', name: 'Подготовка площадки', start: Date.UTC(2024, 3, 15), end: Date.UTC(2024, 3, 25), completed: { amount: 1, fill: '#1e3a8a' } },
    { id: 'task1', name: 'Фундамент', start: Date.UTC(2024, 3, 26), end: Date.UTC(2024, 4, 10), completed: { amount: 0.8, fill: '#1e3a8a' }, dependency: 'task0' },
    { id: 'task2', name: 'Кладка стен', start: Date.UTC(2024, 4, 11), end: Date.UTC(2024, 4, 30), completed: { amount: 0.6, fill: '#1e3a8a' }, dependency: 'task1' },
    { id: 'task3', name: 'Крыша', start: Date.UTC(2024, 5, 1), end: Date.UTC(2024, 5, 15), completed: { amount: 0.4, fill: '#1e3a8a' }, dependency: 'task2' },
    { id: 'task4', name: 'Внутренние работы', start: Date.UTC(2024, 5, 16), end: Date.UTC(2024, 6, 10), completed: { amount: 0.2, fill: '#1e3a8a' }, dependency: 'task3' },
    { id: 'task5', name: 'Благоустройство', start: Date.UTC(2024, 6, 11), end: Date.UTC(2024, 6, 25), completed: { amount: 0, fill: '#1e3a8a' }, dependency: 'task4' },
    { id: 'task6', name: 'Сдача объекта', start: Date.UTC(2024, 6, 26), end: Date.UTC(2024, 6, 30), completed: { amount: 0, fill: '#1e3a8a' }, dependency: 'task5' }
  ],

  'Дворовая территория по адресу: Флотская ул. 54, 58 к.1': [
 { id: 'task0', name: 'Ремонт покрытия асфальтобетонного проезда в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' } },
  { id: 'task1', name: 'Ремонт люка подземных коммуникаций (смотрового колодца) в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task0' },
  { id: 'task2', name: 'Замена дорожного бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task1' },
  { id: 'task3', name: 'Замена садового бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task2' },
  { id: 'task4', name: 'Ремонт покрытия асфальтобетонного тротуара в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task3' },
  { id: 'task5', name: 'Ремонт газона в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task4' },
  { id: 'task6', name: 'Ремонт покрытия асфальтобетонного пешеходной дорожки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task5' },
  { id: 'task7', name: 'Устройство покрытия из резиновой крошки детской площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task6' },
  { id: 'task8', name: 'Установка ограждения контейнерной площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task7' },
  { id: 'task9', name: 'Установка ограждения детской площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task8' },
  { id: 'task10', name: 'Установка информационного стенда в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task9' },
  { id: 'task11', name: 'Установка скамьи в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task10' },
  { id: 'task12', name: 'Установка урны в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task11' },
  { id: 'task13', name: 'Установка игрового детского комплекса 1 категории в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task12' },
  { id: 'task14', name: 'Установка игрового элемента карусель в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task13' },
  { id: 'task15', name: 'Установка игрового элемента качалка в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task14' },
  { id: 'task16', name: 'Установка игрового элемента качели в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task15' },
  { id: 'task17', name: 'Установка игрового элемента песочница в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task16' },
  { id: 'task18', name: 'Установка спортивного детского комплекса 1 категории в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task17' }
  ],
  'Дворовая территория по адресу: Каргопольская ул. 18': [
    { id: 'task0', name: 'Устройство садового бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' } },
  { id: 'task1', name: 'Замена садового бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task0' },
  { id: 'task2', name: 'Ремонт газона в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task1' },
  { id: 'task3', name: 'Замена покрытия из резиновой крошки спортивной площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task2' },
  { id: 'task4', name: 'Устройство покрытия асфальтобетонного пешеходной дорожки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task3' },
  { id: 'task5', name: 'Замена покрытия из резиновой крошки детской площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task4' },
  { id: 'task6', name: 'Установка ограждения детской площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task5' },
  { id: 'task7', name: 'Установка скамьи в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task6' }
  ],
  'Дворовая территория по адресу: Бестужевых ул. 27А': [
     { id: 'task0', name: 'Устройство покрытия асфальтобетонного пешеходной дорожки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' } },
  { id: 'task1', name: 'Устройство садового бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task0' },
  { id: 'task2', name: 'Ремонт газона в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task1' },
  { id: 'task3', name: 'Замена покрытия из резиновой крошки детской площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task2' },
  { id: 'task4', name: 'Замена покрытия из резиновой крошки спортивной площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task3' },
  { id: 'task5', name: 'ОБУСТРОЙСТВО МАФ ТЕРРИТОРИЙ', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task4' },
  { id: 'task6', name: 'УСТАНОВКА ОГРАЖДЕНИЯ ДЕТСКОЙ ПЛОЩАДКИ', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task5' }
  ],
  'Дворовая территория по адресу: Челобитьевское шоссе 14 к.3, 14 к.4, 14 к.5': [
   { id: 'task0', name: 'Замена ограждения контейнерной площадки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' } },
  { id: 'task1', name: 'ОБУСТРОЙСТВО МАФ ТЕРРИТОРИЙ', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task0' },
  { id: 'task2', name: 'Замена дорожного бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task1' },
  { id: 'task3', name: 'Устройство покрытия асфальтобетонного пешеходной дорожки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task2' }  
  ],
  'Дворовая территория по адресу: Мира просп. 194': [
   { id: 'task0', name: 'Устройство садового бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' } },
  { id: 'task1', name: 'Ремонт покрытия асфальтобетонного автопарковки в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task0' },
  { id: 'task2', name: 'Ремонт покрытия асфальтобетонного тротуара в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task1' },
  { id: 'task3', name: 'Ремонт покрытия асфальтобетонного проезда в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task2' },
  { id: 'task4', name: 'Замена дорожного бортового камня в рамках благоустройства территории', completed: { amount: 0.00, fill: '#1e3a8a' }, dependency: 'task3' }  
  ],
};

// === УНИВЕРСАЛЬНАЯ ФУНКЦИЯ РИСОВАНИЯ ГАНТА ===
function drawHighchartsGantt(data, title = '') {
  Highcharts.ganttChart('gantChart', {
    chart: {
      scrollablePlotArea: {
        minWidth: 1200,
        scrollPositionX: 1
      }
    },
    title: { text: '' },
    colors: ['#60a5fa'],
    xAxis: {
      currentDateIndicator: true,
      tickInterval: 1000 * 60 * 60 * 24 * 30,
      labels: { format: '{value:%d %b}' }
    },
    yAxis: {
      uniqueNames: true,
      staticScale: 50
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.point.name}</b><br/>
                📅 ${Highcharts.dateFormat('%d.%m.%Y', this.point.start)} — ${Highcharts.dateFormat('%d.%m.%Y', this.point.end)}<br/>
                ⏳ Выполнение: ${Highcharts.numberFormat(this.point.completed.amount * 100, 0)}%`;
      }
    },
    plotOptions: {
      gantt: {
        dataLabels: {
          enabled: true,
          formatter: function () {
            return Highcharts.numberFormat(this.point.completed.amount * 100, 0) + '%';
          },
          style: { color: 'white', textOutline: 'none' }
        }
      }
    },
    series: [{
      name: 'Работы',
      data: data,
      color: '#60a5fa'
    }]
  });

  // Обновим заголовок
  document.querySelector('#gantModal .chat-box-header h3').textContent = `Диаграмма Ганта — ${title}`;
}

// === КНОПКА "ГАНТА" ===
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Ганта') {
    const card = e.target.closest('.object-card');
    const title = card.querySelector('h3').textContent.trim();

    if (ganttByTitle[title]) {
      drawHighchartsGantt(ganttByTitle[title], title);
      document.getElementById('gantModal').style.display = 'flex';
    } else {
      alert(`Диаграмма Ганта не найдена для объекта: ${title}`);
    }
  }

  if (e.target.classList.contains('gant-close')) {
    document.getElementById('gantModal').style.display = 'none';
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
