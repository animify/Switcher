import Switcher from './Switcher';

Switcher.setTheme('light');

const themeButtons = document.querySelectorAll('[theme]');
themeButtons.forEach(button => {
    const themeName = button.getAttribute('theme');
    button.addEventListener('click', (event) => {
        themeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        Switcher.setTheme(themeName);
    });
});
