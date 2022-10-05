export default {
	data() {
		return {
			icon: this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-missing-symbolic']).stdout.toString(),
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
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-full-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 90) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-90-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 80) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-80-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 70) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-70-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 60) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-60-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 50) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-50-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 40) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-40-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 30) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-30-charging-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 20) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-20-charging-symbolic']).stdout.toString();
					} else {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-10-charging-symbolic']).stdout.toString();
					}
				} else {
					if (batteryInfo.percent === 100) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-full-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 90) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-90-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 80) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-80-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 70) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-70-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 60) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-60-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 50) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-50-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 40) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-40-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 30) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-30-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 20) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-20-symbolic']).stdout.toString();
					} else if (batteryInfo.percent > 10) {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-level-10-symbolic']).stdout.toString();
					} else {
						this.icon = this.$execSynx('python', ['/usr/share/vasak-desktop-service/Vasak/getIcon.py', 'battery-empty-symbolic']).stdout.toString();
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