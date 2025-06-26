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

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  let isDarkMode = sessionStorage.getItem('theme') === 'dark';

  // Main header toggle elements (single)
  const mainDarkToggle = document.getElementById('darkModeToggle');
  const mainDarkIcon = document.getElementById('darkModeIcon');

  // Small menu toggle elements (multiple possible)
  const smallDarkToggles = document.querySelectorAll('.darkModeToggle');
  const smallDarkIcons = document.querySelectorAll('.darkModeIcon');

  // Apply theme classes
  if (isDarkMode) {
    html.classList.add('theme-dark');
    html.classList.remove('theme-light');
  } else {
    html.classList.add('theme-light');
    html.classList.remove('theme-dark');
  }

  function updateIcon(icon) {
    if (!icon) return;
    icon.src = isDarkMode
      ? './assets/images/dark-mode.png'
      : './assets/images/light-mode.png';
  }

  // Update all icons
  function updateAllIcons() {
    if (mainDarkIcon) updateIcon(mainDarkIcon);
    smallDarkIcons.forEach(icon => updateIcon(icon));
  }

  updateAllIcons();

  // Toggle dark mode function
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    html.classList.toggle('theme-dark', isDarkMode);
    html.classList.toggle('theme-light', !isDarkMode);
    sessionStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateAllIcons();
  }

  // Add click listener to all toggles
  if (mainDarkToggle) mainDarkToggle.addEventListener('click', toggleDarkMode);
  smallDarkToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleDarkMode);
  });

  // Hover swap for main toggle (whole link)
  if (mainDarkToggle && mainDarkIcon) {
    mainDarkToggle.addEventListener('mouseenter', () => {
      mainDarkIcon.src = isDarkMode
        ? './assets/images/dark-mode-hover.png'
        : './assets/images/light-mode-hover.png';
    });
    mainDarkToggle.addEventListener('mouseleave', () => {
      updateIcon(mainDarkIcon);
    });
  }

  // Hover swap for small toggles
  smallDarkToggles.forEach((toggle, i) => {
    const icon = smallDarkIcons[i];
    if (!icon) return;

    toggle.addEventListener('mouseenter', () => {
      icon.src = isDarkMode
        ? './assets/images/dark-mode-hover.png'
        : './assets/images/light-mode-hover.png';
    });
    toggle.addEventListener('mouseleave', () => {
      updateIcon(icon);
    });
  });
});