export default {
	data() {
		return {
			icon: this.$getIcon('battery-missing-symbolic'),
			percent: 0,
		};
	},
	mounted() {
		setInterval(() => this.checkBattery(), 1000);
	},
	methods: {
		setIcon(icon, isCharging) {
			if (isCharging) {
				this.icon = this.$getIcon(`${icon}-charging-symbolic`);
			} else {
				this.icon = this.$getIcon(`${icon}-symbolic`);
			}
		},
		async checkBattery() {
			const batteryInfo = await this.$systeminformation.battery();
			if (batteryInfo.hasBattery) {
				this.percent = batteryInfo.percent;

				if (batteryInfo.percent === 100) {
					this.setIcon('battery-full', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 90) {
					this.setIcon('battery-level-90', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 80) {
					this.setIcon('battery-level-80', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 70) {
					this.setIcon('battery-level-70', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 60) {
					this.setIcon('battery-level-60', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 50) {
					this.setIcon('battery-level-50', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 40) {
					this.setIcon('battery-level-40', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 30) {
					this.setIcon('battery-level-30', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 20) {
					this.setIcon('battery-level-20', batteryInfo.isCharging);
				} else if (batteryInfo.percent > 10) {
					this.setIcon('battery-level-10', batteryInfo.isCharging);
				} else {
					this.setIcon('battery-empty', batteryInfo.isCharging);
				}
			}
		},
	},
	template: `
        <div id="battery">
            <img
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                :title="percent + '%'"
                :src="'file://' + icon"
                class="img-fluid dock-system-icon"
                alt="Menu" />
        </div>
    `,
};
