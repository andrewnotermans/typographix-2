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
        toggleDarkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleLightMode();
    }
}

//Event listener
themeSwitcher.addEventListener('click', switchTheme);