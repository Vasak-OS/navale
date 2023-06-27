import BatteryIndicator from './notificationtools/BatteryIndicator.js';
import Clock from './notificationtools/Clock.js';
import NetworkIndicator from './notificationtools/NetworkIndicator.js';

export default {
	template: `
    <div id="notificationArea">
        <NetworkIndicator />
        <BatteryIndicator />
        <Clock />
    </div>
    `,
	components: {
		BatteryIndicator,
		Clock,
		NetworkIndicator,
	},
};
