// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// On initial script load, apply theme from sessionStorage or default to light
const savedTheme = sessionStorage.getItem('theme') || 'light';
const html = document.documentElement;
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");

// Apply saved theme classes once
if (savedTheme === 'dark') {
  html.classList.add('theme-dark');
  html.classList.remove('theme-light');
} else {
  html.classList.add('theme-light');
  html.classList.remove('theme-dark');
}

// Track current mode (true = dark, false = light)
let isDarkMode = savedTheme === 'dark';

// Update icon based on mode
function updateIcon() {
  if (!darkModeIcon) return;
  darkModeIcon.src = isDarkMode
    ? "./assets/images/dark-mode.png"
    : "./assets/images/light-mode.png";
}

// Initial icon update
updateIcon();

// Toggle function for button click
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  html.classList.toggle('theme-dark', isDarkMode);
  html.classList.toggle('theme-light', !isDarkMode);

  sessionStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateIcon();
}

// Hover handlers for the icon
darkModeToggle.addEventListener("mouseenter", () => {
  if (!darkModeIcon) return;
  darkModeIcon.src = isDarkMode
    ? "./assets/images/dark-mode-hover.png"
    : "./assets/images/light-mode-hover.png";
});

darkModeToggle.addEventListener("mouseleave", () => {
  updateIcon();
});

darkModeToggle.addEventListener("click", toggleDarkMode);