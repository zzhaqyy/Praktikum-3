const bgColorSelect = document.getElementById('bgColor');
bgColorSelect.addEventListener('change', function() {
  document.body.style.backgroundColor = bgColorSelect.value;
});

const fontSizeSlider = document.getElementById('fontSize');
fontSizeSlider.addEventListener('input', function() {
  document.body.style.fontSize = fontSizeSlider.value + 'px';
});

const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

const fontStyleSelect = document.getElementById('fontStyle');
fontStyleSelect.addEventListener('change', function() {
  document.body.style.fontFamily = fontStyleSelect.value;
});