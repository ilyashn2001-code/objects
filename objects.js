<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Строительные объекты</title>
  <link rel="stylesheet" href="objects.css" />
</head>
<body>
  <div class="container">
    <aside class="sidebar">
      <h2>LTC Control</h2>
      <nav>
        <ul>
          <li>Дашборд</li>
          <li class="active">Объекты</li>
          <li>Журналы</li>
          <li>Фотографии</li>
          <li>Отчёты</li>
        </ul>
      </nav>
    </aside>

    <main class="main">
      <header class="topbar">
        <h1>Строительные объекты</h1>
        <button class="add-btn">+ Добавить объект</button>
      </header>

      <div class="filters-bar">
        <input type="text" placeholder="Поиск по названию или адресу" />
        <button>🏙 Район</button>
        <button>📍 Тип объекта</button>
        <button>📅 Дата начала/окончания</button>
        <button>👤 Ответственный</button>
        <button>📋 Наличие лаурий</button>
        <button>⚠️ Наличие нарушений</button>
      </div>

      <div class="cards-container">
        <!-- 1 -->
        <div class="object-card">
          <div class="card-header">
            <h3>Строительство школы</h3>
            <span class="status active">Активный</span>
          </div>
          <div class="progress">
            <div class="bar" style="width: 42%"></div>
          </div>
          <p class="percent">42%</p>
          <div class="meta">
            <div class="user">
              <img src="https://via.placeholder.com/32" alt="">
              Андреев Ю.
            </div>
            <div class="details">
              <span class="icon">📄</span> Подробнее
              <span class="badge">5</span>
            </div>
            <div class="icon-info">📷 12</div>
          </div>
        </div>

        <!-- 2 -->
        <div class="object-card">
          <div class="card-header">
            <h3>Офисное здание</h3>
            <span class="status done">Завершён</span>
          </div>
          <p class="date">05.09.2022 — 20.12.2023</p>
          <div class="meta">
            <div class="user">
              <img src="https://via.placeholder.com/32" alt="">
              Васильева А.
            </div>
            <div class="details">
              <span class="icon">📄</span> Подробнее
              <span class="badge">4</span>
            </div>
            <div class="icon-info">🖼 4</div>
          </div>
        </div>

        <!-- 3 -->
        <div class="object-card">
          <div class="card-header">
            <h3>Торговый центр</h3>
            <span class="status paused">На паузе</span>
            <span class="warning">Анес</span>
          </div>
          <p class="date">12.07.2023 — 25.11.2023</p>
          <div class="meta">
            <div class="user">
              <img src="https://via.placeholder.com/32" alt="">
              Петров Д.
            </div>
            <div class="details">
              <span class="icon">ℹ️</span> Подробнее
            </div>
            <div class="icon-info">👥 108 дотоясов</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
