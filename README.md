# Switcher
#### The most basic CSS4 Dark ↔ Light theme switcher - 🚀 by CSS4 variables & JS.

---

### Getting Started

1. Clone the repository
2. Go to the project directory - `cd ./Switcher`
3. Start the project - `npm start`

## Theme configs

By default, the light theme will be used. Its JSON config containing all its variables is found under `src/variables/lightTheme.json`.

The dark theme config (`src/variables/darkTheme.json`) contains a map of the same keys, just with the values we want to use when the theme switches.

## Switcher.js

Switcher.js handles the logic behind theme switching. It simply sets picks up all values from the theme configs and adds custom CSS4 variables for each one in the `:root` of the document.

By default, the demo loads the light theme on load:
```js
Switcher.setTheme('light');
```

## Deploying

The Switcher package comes prepared for you to build and deploy your changes to Netlify. [Parcel](https://parceljs.org/) will build the app for production and deploy using your Netlify config - run `npm run deploy`.

## Issues
Found any issues with Switcher? Post an issue or PR 😎

###### Feel free to post enhancements in the Issues section

---

Licensed under MIT
