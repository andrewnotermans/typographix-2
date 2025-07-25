const themeSwitcher = document.getElementById('theme-switcher');

//Dark Mode Style
function toggleDarkMode() {
    themeSwitcher.children[0].textContent = 'Dark Mode';
    themeSwitcher.children[1].classList.replace('fa-sun', 'fa-moon');
}

function toggleLightMode() {
    themeSwitcher.children[0].textContent = 'Light Mode';
    themeSwitcher.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if(!currentTheme || currentTheme === 'light'){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        toggleDarkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleLightMode();
    }
}

//Event listener
themeSwitcher.addEventListener('click', switchTheme);

// Check Local Storage for Theme
const currentThemeFromLocalStorage = localStorage.getItem('theme');
if (currentThemeFromLocalStorage) {
    document.documentElement.setAttribute('data-theme', currentThemeFromLocalStorage);
    if(currentThemeFromLocalStorage === 'dark') {
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
}

// Navigation

const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
    nav.classList.remove('active');
    menuIcon.classList.remove('active');
}