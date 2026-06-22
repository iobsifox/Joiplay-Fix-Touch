<!-- Header Badges -->
<div style="display: flex; gap: 8px; align-items: center; margin-bottom: 16px;">
  <span style="display: inline-block; background-color: #6a0dad; color: #ffffff; padding: 4px 14px; font-weight: bold; border-radius: 0px; font-size: 18px;">Obsifox</span>
  <span style="display: inline-block; background-color: #f9ca24; color: #000000; padding: 4px 14px; font-weight: bold; border-radius: 0px; font-size: 18px;">JP-MF v1.7</span>
</div>

# 🎮 JoiPlay RPG Maker MV – Touch Sync & Mouse Fix

> **Fixes touch input issues for RPG Maker MV games played on Android via JoiPlay.**

---

## 💰 Support the Project

If this plugin helps you, consider supporting further development:


USDT (ERC-20): 
```
0xfcdc026df89867aec34c3cfd3893b269924ce896
```

Your donation is greatly appreciated! 🙏

---

## 📖 Overview

RPG Maker MV games are designed for desktop mouse/keyboard input. When played on Android using **JoiPlay**, touch events often don't map correctly to mouse coordinates, causing menus to skip, buttons to misbehave, and dialogue to fast-forward unintentionally.

**JoiPlay_MouseFix** bridges that gap by synchronizing touch coordinates with mouse events and adding a smart cooldown to prevent accidental rapid clicks.

---

## ✨ Features

- **Touch‑to‑Mouse Coordinate Mapping**  
  Converts touch screen X/Y positions into RPG Maker's mouse coordinates and stores them in **Variables 18 and 19**, making them compatible with plugins like `OrangeMouseData`.

- **Rapid‑Click Prevention**  
  Enforces a **20‑frame cooldown** between consecutive clicks. This eliminates the annoying "menu scroll skip" and "dialogue fast‑forward" that happens when tapping too quickly.

- **Automatic Switch Control**  
  Toggles **Switch 58** automatically on every touch event – useful for other plugins or conditional branches that rely on touch state.

- **Lightweight & Non‑Intrusive**  
  Works alongside other plugins without conflicts.

---

## 📦 Installation

1. **Download** the plugin file `JoiPlay_MouseFix.js` and place it in your game's `www/js/plugins/` folder.

2. **Register** the plugin in `www/js/plugins.js`.  
   Open the file and **add the following entry** at the very end of the array, **before** the closing `];` bracket:

   ```json
   {"name":"JoiPlay_MouseFix","status":true,"description":"JoiPlay Touch-to-Mouse Sync and Click Cooldown","parameters":{}}
   ```

   > **Example** – your `plugins.js` should end like this:
   ```js
   ...
   {"name":"X_SocialMediaButtons","status":true,"description":"","parameters":{}},
   {"name":"JoiPlay_MouseFix","status":true,"description":"JoiPlay Touch-to-Mouse Sync and Click Cooldown","parameters":{}}
   ];
   ```

3. **Save** the file and relaunch your game in JoiPlay.

---

## ⚙️ JoiPlay 

- Open JoiPlay
- Lunche Game And you can See Button middle Down


This ensures that the plugin handles all touch‑to‑mouse translation, avoiding double‑mapping and erratic behavior.

---

## 📄 License

This plugin is provided **as‑is** under the MIT License.  
Feel free to use, modify, and distribute it in both commercial and non‑commercial projects.

---

## 🙌 Credits

- **Creator:** Obsifox  
- **Inspired by:** Community feedback from JoiPlay users and RPG Maker MV developers.

---

## ❓ Troubleshooting

| Problem                     | Solution |
|-----------------------------|----------|
| Clicks still skip menus     | Ensure `"Use Mouse for Touch"` is **OFF** in JoiPlay. |
| Coordinates not updating    | Check that Variables 18 & 19 are not used by other plugins. |
| Plugin not loaded           | Verify the entry is correctly added to `plugins.js` and that the file is in the right folder. |

---

**Enjoy a smooth RPG Maker MV experience on your Android device!** 🎉
