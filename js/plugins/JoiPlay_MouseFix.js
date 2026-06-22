/*:
 * @plugindesc JoiPlay Touch-to-Mouse Sync v1.0
 * @author YourName/AI
 * @help Fixes touch coordinates for OrangeMouseData and adds a click cooldown.
 */
(function() {
    var touchCooldown = 0;
    var _TouchInput_update = TouchInput.update;

    TouchInput.update = function() {
        _TouchInput_update.call(this);
        if (touchCooldown > 0) touchCooldown--;

        if ($gameVariables && $gameSwitches) {
            var x = TouchInput.x;
            var y = TouchInput.y;

            // Sync Coordinates to Variables 18 & 19 (OrangeMouseData)
            $gameVariables.setValue(18, x);
            $gameVariables.setValue(19, y);
            $gameVariables.setValue(16, Math.floor(x / 48));
            $gameVariables.setValue(17, Math.floor(y / 48));

            // Logic for Switch 58 (Left Click) with Cooldown
            if (TouchInput.isTriggered() && touchCooldown === 0) {
                $gameSwitches.setValue(58, true);
                touchCooldown = 20; // Prevent rapid-fire clicks
            } else {
                $gameSwitches.setValue(58, false);
            }
        }
    };
})();
