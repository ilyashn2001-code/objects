document.addEventListener('DOMContentLoaded', function () {
const objects = [
  // первые 8
  { title: 'Дворовая территория по адресу: Путевой пр. 38', status: 'Завершён', percent: 100, fio: 'Андреев Ю.А.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '2, проверок: 1', documents: '85%', photos: 12 },
  { title: 'Дворовая территория по адресу: Флотская ул. 54, 58 к.1', status: 'Завершён', percent: 100, fio: 'Семенов И.П.', dates: '15.04.2024-15.08.2024', district: 'САО', violations: '1, проверок: 1', documents: '90%', photos: 8 },
  { title: 'Дворовая территория по адресу: Каргопольская ул. 18', status: 'Завершён', percent: 100, fio: 'Петров Д.С.', dates: '15.04.2024-28.08.2024', district: 'СВАО', violations: '3, проверок: 2', documents: '75%', photos: 10 },
  { title: 'Дворовая территория по адресу: Бестужевых ул. 27А', status: 'Завершён', percent: 100, fio: 'Иванова Н.А.', dates: '15.04.2024-23.08.2024', district: 'СВАО', violations: '0, проверок: 1', documents: '88%', photos: 6 },
  { title: 'Дворовая территория по адресу: Челобитьевское шоссе 14 к.3, 14 к.4, 14 к.5', status: 'Завершён', percent: 100, fio: 'Кузнецов А.В.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '2, проверок: 2', documents: '82%', photos: 11 },
  { title: 'Дворовая территория по адресу: Путевой пр. 38', status: 'Завершён', percent: 100, fio: 'Орлова Е.И.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '1, проверок: 0', documents: '95%', photos: 7 },
  { title: 'Дворовая территория по адресу: Мира просп. 194', status: 'Завершён', percent: 100, fio: 'Фёдоров М.Г.', dates: '15.04.2024-20.08.2024', district: 'СВАО', violations: '0, проверок: 1', documents: '97%', photos: 9 },
  { title: 'Некрасовка', status: 'Завершён', percent: 100, fio: 'Сидорова Л.П.', dates: '03.05.2024-30.09.2024', district: 'ЮВАО', violations: '2, проверок: 1', documents: '80%', photos: 13 },

  // следующие 17
  { title: 'Территории, прилегающие к 2 станциям МЦД-3 "Грачёвская" и МЦД-3 "Моссельмаш"', status: 'Активный', percent: 85, fio: 'Андреев Ю.А.', dates: '05.12.2023-11.11.2025', district: 'САО', violations: '4, проверок: 2', documents: '81%', photos: 17 },
  { title: 'Дворовая территория по адресу: Петрозаводская ул. 30', status: 'Завершён', percent: 100, fio: 'Васильева А.К.', dates: '25.08.2025-01.09.2025', district: 'САО', violations: '2, проверок: 2', documents: '70%', photos: 7 },
  { title: 'Зои Воскресенской улица (Боткинский проезд)', status: 'Активный', percent: 70, fio: 'Петров Д.С.', dates: '19.04.2024-09.09.2025', district: 'САО', violations: '3, проверок: 2', documents: '60%', photos: 6 },
  { title: 'Дворовая территория по адресу: ул. Академика Павлова, д. 46', status: 'Завершён', percent: 100, fio: 'Семенов С.В.', dates: '15.04.2025-31.08.2025', district: 'ЗАО', violations: '1, проверок: 1', documents: '50%', photos: 3 },
  { title: 'Дворовая территория по адресу: Черкизовская М. ул. 64', status: 'Завершён', percent: 100, fio: 'Иванова Т.А.', dates: '13.03.2025-25.08.2025', district: 'ВАО', violations: '0, проверок: 2', documents: '78%', photos: 5 },
  { title: 'Дворовая территория по адресу: Мироновская ул. 46, 46 к.1', status: 'Завершён', percent: 100, fio: 'Орлов Н.Б.', dates: '01.09.2024-25.08.2025', district: 'ВАО', violations: '1, проверок: 1', documents: '65%', photos: 4 },
  { title: 'Дворовая территория по адресу: Новокосинская ул. 11 к.1, 11 к.2', status: 'Завершён', percent: 100, fio: 'Фёдоров В.К.', dates: '20.04.2024-25.08.2025', district: 'ВАО', violations: '2, проверок: 2', documents: '55%', photos: 9 },
  { title: '2-й Краснокурсантский проезд', status: 'Завершён', percent: 100, fio: 'Сидоров П.М.', dates: '19.04.2024-06.08.2025', district: 'ЮВАО', violations: '0, проверок: 1', documents: '72%', photos: 10 },
  { title: 'Территория ГБОУ Школа № 1474 по адресу: ул. Клинская, д. 24', status: 'Завершён', percent: 100, fio: 'Андреева И.В.', dates: '01.04.2025-21.08.2025', district: 'САО', violations: '1, проверок: 1', documents: '67%', photos: 12 },
  { title: 'Территория ГБОУ Школа в Капотне по адресу: 5-ый Квартал Капотни, д. 28', status: 'Завершён', percent: 100, fio: 'Кузнецова Л.А.', dates: '01.04.2025-21.08.2025', district: 'ЮВАО', violations: '0, проверок: 2', documents: '69%', photos: 7 },
  { title: 'Территория ГБОУ Школа № 1128 по адресу: Зеленоград, корп. 1128', status: 'Завершён', percent: 100, fio: 'Морозов Р.Д.', dates: '01.04.2025-21.08.2025', district: 'ЗелАО', violations: '0, проверок: 1', documents: '80%', photos: 5 },
  { title: 'Территория ГБОУ Школа № 1501 по адресу: ул. Тихвинская, д. 39, стр. 2', status: 'Завершён', percent: 100, fio: 'Борисова Ю.М.', dates: '01.04.2025-20.08.2025', district: 'ЦАО', violations: '1, проверок: 1', documents: '77%', photos: 6 },
  { title: 'Территория ГБОУ Школа № 1324 по адресу: пр-кт Федеративный, д. 27', status: 'Завершён', percent: 100, fio: 'Смирнов О.В.', dates: '01.04.2025-11.08.2025', district: 'ВАО', violations: '2, проверок: 1', documents: '73%', photos: 8 },
  { title: '10-летия Октября ул.', status: 'Завершён', percent: 100, fio: 'Соколова Е.А.', dates: '19.04.2024-15.12.2024', district: 'ЦАО', violations: '0, проверок: 1', documents: '91%', photos: 9 },
  { title: '1-й Амбулаторный проезд', status: 'Завершён', percent: 100, fio: 'Григорьев С.П.', dates: '19.04.2024-15.12.2024', district: 'САО', violations: '1, проверок: 0', documents: '84%', photos: 10 },
  { title: '1-й Вешняковский проезд', status: 'Завершён', percent: 100, fio: 'Николаева Т.А.', dates: '19.04.2024-15.12.2024', district: 'ЮВАО', violations: '0, проверок: 1', documents: '76%', photos: 11 },
  { title: '2-й Пехотный переулок', status: 'Завершён', percent: 100, fio: 'Егоров И.К.', dates: '19.04.2024-15.12.2024', district: 'СЗАО', violations: '1, проверок: 1', documents: '83%', photos: 7 }
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

// === ДАННЫЕ ДЛЯ ГАНТА (Путевой пр. 38) ===
const ganttData = [
  ['1', 'Подготовка площадки', 'Работы', new Date(2024,3,15), new Date(2024,3,25), null, 100, null],
  ['2', 'Фундамент', 'Работы', new Date(2024,3,26), new Date(2024,4,10), null, 80, '1'],
  ['3', 'Кладка стен', 'Работы', new Date(2024,4,11), new Date(2024,4,30), null, 60, '2'],
  ['4', 'Крыша', 'Работы', new Date(2024,5,1), new Date(2024,5,15), null, 40, '3'],
  ['5', 'Внутренние работы', 'Работы', new Date(2024,5,16), new Date(2024,6,10), null, 20, '4'],
  ['6', 'Благоустройство', 'Работы', new Date(2024,6,11), new Date(2024,6,25), null, 0, '5'],
  ['7', 'Сдача объекта', 'Работы', new Date(2024,6,26), new Date(2024,6,30), null, 0, '6']
];

// === ФУНКЦИЯ РИСОВАНИЯ ГАНТА ===
// === ГАНТ: загрузка с русским языком ===
google.charts.load('current', { packages:['gantt'], language: 'ru' }); // ось времени и локаль — по-русски

// Цвета из твоих CSS-переменных (fallback на значения)
function getThemeColor(varName, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return v || fallback;
}
const DONE_COLOR   = getThemeColor('--accent', '#1e88e5');   // голубой "сделано"
const REMAIN_COLOR = getThemeColor('--border-color', '#ccc'); // серый "осталось"

// === Основная отрисовка ===
function drawGantt() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');             // оставляем колонку (нужна для структуры)
  data.addColumn('date',   'Start Date');
  data.addColumn('date',   'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');
  data.addColumn({ type: 'string', role: 'tooltip' }); // HTML-тултип

  // Данные берём из твоего массива ganttData (он уже есть у тебя)
  ganttData.forEach(row => {
    const [id, task, resource, start, end, duration, percent, dep] = row;
    const tip = `<b>${task}</b><br>📅 ${start.toLocaleDateString('ru-RU')} — ${end.toLocaleDateString('ru-RU')}<br>⏳ Выполнение: ${percent}%`;
    data.addRow([id, task, resource, start, end, duration, percent, dep, tip]);
  });

  const options = {
    height: ganttData.length * 50,
    gantt: {
      trackHeight: 40,
      percentEnabled: true,
      // цвет заполненной части задаём опцией (остальное перекрасим вручную)
      percentStyle: { fill: DONE_COLOR } // офиц. опция Google Gantt для цвета прогресса :contentReference[oaicite:0]{index=0}
    },
    tooltip: { isHtml: true }
  };

  const chart = new google.visualization.Gantt(document.getElementById('gantChart'));

  // После полной отрисовки: локализуем подписи, красим бары и ставим проценты
  google.visualization.events.addListener(chart, 'ready', () => {
    localizeGanttHeaders();
    colorizeAndLabelBars();
  });

  chart.draw(data, options);
}

// === Локализация заголовков Duration/Percent Done/Resource ===
function localizeGanttHeaders() {
  document.querySelectorAll('#gantChart text').forEach(el => {
    if (el.textContent === 'Duration')     el.textContent = 'Продолжительность';
    if (el.textContent === 'Percent Done') el.textContent = 'Выполнение';
    if (el.textContent === 'Resource')     el.textContent = 'Ресурс';
  });
}

// === Раскраска "сделано/осталось" и подписи процентов прямо на синей части ===
function colorizeAndLabelBars() {
  const svg = document.querySelector('#gantChart svg');
  if (!svg) return;

  // соберём только "толстые" прямоугольники (сами бары задач)
  const rects = Array.from(svg.querySelectorAll('rect'))
    .filter(r => {
      try { return r.getBBox().height >= 12; } catch(e) { return false; }
    });

  // группируем по Y (каждая строка задачи имеет уникальный Y)
  const rows = {};
  rects.forEach(r => {
    const bb = r.getBBox();
    const yKey = Math.round(bb.y);
    (rows[yKey] ||= []).push({ rect: r, bb });
  });

  const yKeys = Object.keys(rows).sort((a,b)=>a-b);

  yKeys.forEach((yKey, i) => {
    const bars = rows[yKey];

    // widest = полный бар (осталось), narrower = прогресс
    bars.sort((a,b) => b.bb.width - a.bb.width);
    const base     = bars[0];                                    // самый широкий
    const progress = bars.find(b => b.bb.width < base.bb.width)  // прогресс
                      || bars[0]; // на случай 100%/0%

    // принудительно задаём цвета
    base.rect.setAttribute('fill', REMAIN_COLOR);
    progress.rect.setAttribute('fill', DONE_COLOR);

    // подпись процента
    const percent = (ganttData[i] && typeof ganttData[i][6] === 'number') ? ganttData[i][6] : null;
    if (percent === null) return;

    // позиция текста: внутри синей части, если она >= 24px, иначе — сразу справа
    const inside = progress.bb.width >= 24;
    const x = inside ? (progress.bb.x + progress.bb.width / 2) : (progress.bb.x + progress.bb.width + 6);
    const y = progress.bb.y + progress.bb.height / 2 + 4;

    const label = document.createElementNS(svg.namespaceURI, 'text');
    label.setAttribute('x', x);
    label.setAttribute('y', y);
    label.setAttribute('text-anchor', inside ? 'middle' : 'start');
    label.setAttribute('font-size', '12');
    label.setAttribute('font-weight', '600');
    label.setAttribute('fill', inside ? '#fff' : '#1e2a3a');
    label.textContent = `${percent}%`;
    svg.appendChild(label);
  });
}

// === Кнопка "Ганта" — только для Путевой пр. 38 ===
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Ганта') {
    const card  = e.target.closest('.object-card');
    const title = card.querySelector('h3').textContent;

    if (title.includes('Путевой пр. 38')) {
      google.charts.setOnLoadCallback(drawGantt);
      document.getElementById('gantModal').style.display = 'flex';
    } else {
      alert('Диаграмма Ганта доступна только для объекта: Путевой пр. 38');
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
