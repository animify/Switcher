import lightTheme from './variables/lightTheme.json';
import darkTheme from './variables/darkTheme.json';

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

export default class Switcher {
    static setTheme(themeName) {
        const { colors } = themes[themeName];
        const root = document.querySelector(':root');
        Object.entries(colors).forEach(([name, value]) => root.style.setProperty(`--color-${name}`, value));
    }
}