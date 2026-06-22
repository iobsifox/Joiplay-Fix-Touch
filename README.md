# JoiPlay RPG Maker MV Touch Sync (v1.0)

This plugin fixes common issues when playing RPG Maker MV games designed for PC on JoiPlay (Android).

### Features:
- **Touch-to-Mouse Sync:** Maps touch coordinates to Variables 18/19 (used by OrangeMouseData).
- **Rapid-Click Fix:** Adds a 20-frame cooldown to prevent unintentional fast-forwarding in menus.
- **Switch Automation:** Automatically toggles Switch 58 on touch events.

### Installation:
1. Download `JoiPlay_MouseFix.js`.
2. Place it in your game folder: `www/js/plugins/`.
3. Open `www/js/plugins.js` and add the entry (see `plugins_entry.txt`).
4. **Important:** In JoiPlay Settings, turn **OFF** "Use Mouse for Touch".
