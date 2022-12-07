# RPS Royale

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/mnt/c/Users/Amelia/Documents/University/8 - Fall 2022/NMED 3630/Assignments/2/rps_royale",
  "type": [
    "cordova"
  ],
  "name": "RPS Royale",
  "framework": "core",
  "template": "single-view",
  "bundler": "vite",
  "cssPreProcessor": "scss",
  "theming": {
    "customColor": true,
    "color": "#6d3fff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false,
  "pkg": "io.framework7.rpsroyale",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-device",
      "cordova-plugin-inappbrowser",
      "cordova-plugin-file",
      "cordova-plugin-media"
    ]
  }
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-cordova` - build cordova app

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.


## Instructions to run on Android emulator

```bash
npm install # 1. Install Dependencies
npm run cordova-add-android  # 2. Add Android to Cordova Platform
npm run cordova-android # 3. Run the Cordova app on Android

```


## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```



## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)



* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7


## Instructions
```bash
npm install # 1. Install dependencies
npm run cordova-add:android # 2. Add android to your cordova platform
npm run cordova:android #3. Run the app on cordova
```


## TODO

### Need
- [Directus Cloud API](https://directus.io/cloud/) :heavy_check_mark:
  - Matchmaking Session :heavy_check_mark:
  - Player :heavy_check_mark:
  - Leaderboard :x:
- QR Scanner :heavy_check_mark:
- RPS Game System :heavy_check_mark:
  - Hand :heavy_check_mark:
    - Rock
    - Paper
    - Scissor
  - Leaderboard :x:
    - Win-Loss Ratio
    - Top Players
- Pages
  - Game Session :heavy_check_mark:
  - Matchmaking :heavy_check_mark:
  - Leaderboard :x:
  - QR Display :heavy_check_mark:
  - QR Scanner :heavy_check_mark:
  - Profile :x:

### Nice to have
- Geolocation Feature
  - [Mapbox](https://www.mapbox.com/) :x:
  - Display yours' and other players' location if you are in matchmaking session :x:
  - If you are in proximity of the other player in session, it opens either QR scanner or QR display :x:

- Accelerometer :x:
  - When players are done choosing their move, they must shake their device once to display the result of the game round