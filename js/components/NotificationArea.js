import BatteryIndicator from "./notificationtools/BatteryIndicator.js";
import Clock from "./notificationtools/Clock.js";

export default {
    template: `
    <div id="notificationArea">
        <div id="network"></div>
        <BatteryIndicator />
        <Clock />
    </div>
    `,
    components: {
        BatteryIndicator,
        Clock
    }
};