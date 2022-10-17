export default {
	data() {
		return {
			icon: this.$getIcon('battery-missing-symbolic'),
			percent: 0
		};
	},
	mounted() {
		setInterval(() => this.checkBattery(), 1000);
	},
	methods: {
		async checkBattery() {
			const batteryInfo = await this.$systeminformation.battery();
			if (batteryInfo.hasBattery) {
				this.percent = batteryInfo.percent;
				if (batteryInfo.isCharging) {
					if (batteryInfo.percent === 100) {
						this.icon = this.$getIcon('battery-full-charging-symbolic');
					} else if (batteryInfo.percent > 90) {
						this.icon = this.$getIcon('battery-level-90-charging-symbolic');
					} else if (batteryInfo.percent > 80) {
						this.icon = this.$getIcon('battery-level-80-charging-symbolic');
					} else if (batteryInfo.percent > 70) {
						this.icon = this.$getIcon('battery-level-70-charging-symbolic');
					} else if (batteryInfo.percent > 60) {
						this.icon = this.$getIcon('battery-level-60-charging-symbolic');
					} else if (batteryInfo.percent > 50) {
						this.icon = this.$getIcon('battery-level-50-charging-symbolic');
					} else if (batteryInfo.percent > 40) {
						this.icon = this.$getIcon('battery-level-40-charging-symbolic');
					} else if (batteryInfo.percent > 30) {
						this.icon = this.$getIcon('battery-level-30-charging-symbolic');
					} else if (batteryInfo.percent > 20) {
						this.icon = this.$getIcon('battery-level-20-charging-symbolic');
					} else {
						this.icon = this.$getIcon('battery-level-10-charging-symbolic');
					}
				} else {
					if (batteryInfo.percent === 100) {
						this.icon = this.$getIcon('battery-full-symbolic');
					} else if (batteryInfo.percent > 90) {
						this.icon = this.$getIcon('battery-level-90-symbolic');
					} else if (batteryInfo.percent > 80) {
						this.icon = this.$getIcon('battery-level-80-symbolic');
					} else if (batteryInfo.percent > 70) {
						this.icon = this.$getIcon('battery-level-70-symbolic');
					} else if (batteryInfo.percent > 60) {
						this.icon = this.$getIcon('battery-level-60-symbolic');
					} else if (batteryInfo.percent > 50) {
						this.icon = this.$getIcon('battery-level-50-symbolic');
					} else if (batteryInfo.percent > 40) {
						this.icon = this.$getIcon('battery-level-40-symbolic');
					} else if (batteryInfo.percent > 30) {
						this.icon = this.$getIcon('battery-level-30-symbolic');
					} else if (batteryInfo.percent > 20) {
						this.icon = this.$getIcon('battery-level-20-symbolic');
					} else if (batteryInfo.percent > 10) {
						this.icon = this.$getIcon('battery-level-10-symbolic');
					} else {
						this.icon = this.$getIcon('battery-empty-symbolic');
					}
				}
			}

		}
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
    `
};