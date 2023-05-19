export default {
	data() {
		return {
			icon: this.$getIcon('network-disconnected-symbolic'),
			data: '127.0.0.1'
		};
	},
	mounted() {
		setInterval(() => this.checkNetwork(), 2000);
	},
	methods: {
		async checkNetwork() {
			const device = await this.$systeminformation.networkInterfaces('default');
			this.data = device.ip4;

			if (device.type === 'wired') {
				if (device.operstate === 'down') {
					this.icon = this.$getIcon('network-wired-disconnected-symbolic');
				} else {
					this.icon = this.$getIcon('network-wired-symbolic');
				}
			} else {
				if (device.operstate === 'down') {
					this.icon = this.$getIcon('network-wireless-disconnected-symbolic');
				} else {
					const wifi = await this.$systeminformation.wifiConnections();
					const myWifi = wifi.find(conn => conn.iface === device.iface);
					this.data = `${myWifi.ssid}\n${device.ip4}`;

					//elem.innerHTML = myWifi.signalLevel;
					if (myWifi.signalLevel >= -30) {
						this.icon = this.$getIcon('network-wireless-signal-excellent-symbolic');
					} else if (myWifi.signalLevel >= -67) {
						this.icon = this.$getIcon('network-wireless-signal-good-symbolic');
					} else if (myWifi.signalLevel >= -70) {
						this.icon = this.$getIcon('network-wireless-signal-ok-symbolic');
					} else if (myWifi.signalLevel >= -80) {
						this.icon = this.$getIcon('network-wireless-signal-weak-symbolic');
					} else {
						this.icon = this.$getIcon('network-wireless-signal-none-symbolic');
					}
				}
			}
		}
	},
	template: `
        <div id="network">
            <img
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                :title="data"
                :src="'file://' + icon"
                class="img-fluid dock-system-icon"
                :alt="data" />
        </div>
    `
};