document.querySelector('.filter-toggle').addEventListener('click', () => {
  const filterBox = document.querySelector('.filter-options');
  filterBox.style.display = filterBox.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('searchInput').addEventListener('input', () => {
  filterObjects();
});

document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    filterObjects();
  });
});

function filterObjects() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const activeTypes = Array.from(document.querySelectorAll('.filter-options input[type="checkbox"]:checked')).map(cb => cb.value);
  
  document.querySelectorAll('.object-card').forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    const type = card.getAttribute('data-type');
    const matchesQuery = title.includes(query);
    const matchesType = activeTypes.length === 0 || activeTypes.includes(type);
    card.style.display = matchesQuery && matchesType ? 'block' : 'none';
  });
}
