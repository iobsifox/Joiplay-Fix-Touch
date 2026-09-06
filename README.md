<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rounded&color=gradient&customColorList=6,11,20&height=150&section=header&text=JoiPlay%20Touch%20Fix&fontSize=42&fontColor=fff&animation=fadeIn&fontAlignY=50" width="100%"/>

# Touch Sync & Mouse Fix for RPG Maker MV

**Fixes touch input issues for RPG Maker MV games played on Android via JoiPlay**

<img src="https://img.shields.io/badge/Platform-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"/> <img src="https://img.shields.io/badge/Engine-RPG%20Maker%20MV-FF5733?style=for-the-badge"/> <img src="https://img.shields.io/badge/Status-Stable-brightgreen?style=for-the-badge"/> <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"/>

</div>

---

## Overview

RPG Maker MV games are designed for desktop mouse/keyboard input. When played on Android using **JoiPlay**, touch events often don't map correctly to mouse coordinates, causing menus to skip, buttons to misbehave, and dialogue to fast-forward unintentionally.

**JoiPlay_MouseFix** bridges that gap by synchronizing touch coordinates with mouse events and adding a smart cooldown to prevent accidental rapid clicks.

---

## Features

| Feature | Description |
|---------|-------------|
| **Touch-to-Mouse Mapping** | Converts touch X/Y positions into RPG Maker's mouse coordinates (Variables 18 and 19) |
| **Rapid-Click Prevention** | 20-frame cooldown between clicks — no more menu skips or dialogue fast-forward |
| **Automatic Switch Control** | Toggles Switch 58 on every touch event for conditional branches |
| **Lightweight and Compatible** | Works alongside other plugins without conflicts |

---

## Installation

### Step 1 — Download Plugin
Download `JoiPlay_MouseFix.js` and place it in your game's `www/js/plugins/` folder.

### Step 2 — Register Plugin
Open `www/js/plugins.js` and **add this entry** at the end of the array, before `];`:

```json
{"name":"JoiPlay_MouseFix","status":true,"description":"JoiPlay Touch-to-Mouse Sync and Click Cooldown","parameters":{}}
```

> **Example** — your `plugins.js` should end like this:
```js
...
{"name":"X_SocialMediaButtons","status":true,"description":"","parameters":{}},
{"name":"JoiPlay_MouseFix","status":true,"description":"JoiPlay Touch-to-Mouse Sync and Click Cooldown","parameters":{}}
];
```

### Step 3 — Launch
Save and relaunch your game in JoiPlay. A settings button appears in the top-right corner to toggle features on/off.

---

## JoiPlay Settings

1. Open JoiPlay
2. Launch your game
3. Tap the **menu button** in the top-right corner
4. Toggle features **on/off** as needed

---

## Donate

If this plugin helps you, consider supporting development:

**USDT (ERC-20):**
```
0xfcdc026df89867aec34c3cfd3893b269924ce896
```

<img src="https://img.shields.io/badge/USDT-ERC20-26A17B?style=for-the-badge&logo=tether&logoColor=white"/>

---

## License

This plugin is provided **as-is** under the **MIT License**.
Feel free to use and distribute it in both commercial and non-commercial projects.

---

## Credits

**Creator:** Obsifox
**Inspired by:** Community feedback from JoiPlay users and RPG Maker MV developers.

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=rounded&color=gradient&customColorList=6,11,20&height=60&section=footer" width="100%"/>
</div>
