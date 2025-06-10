// Theme toggle for light and dark modes
// Find all buttons with the data-theme-toggle attribute so each page can
// toggle the theme.
const toggles = document.querySelectorAll('[data-theme-toggle]');

function switchTheme() {
  document.body.classList.toggle('dark');
}

// Bind the click handler to each toggle button
for (const btn of toggles) {
  btn.addEventListener('click', switchTheme);
}
