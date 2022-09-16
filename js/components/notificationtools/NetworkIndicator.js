export default {
	data() {
		return {
			icon: this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-disconnected-symbolic']).stdout.toString(),
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
					this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wired-disconnected-symbolic']).stdout.toString();
				} else {
					this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wired-symbolic']).stdout.toString();
				}
			} else {
				if (device.operstate === 'down') {
					this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-disconnected-symbolic']).stdout.toString();
				} else {
					const wifi = await this.$systeminformation.wifiConnections();
					const myWifi = wifi.find(conn => conn.iface === device.iface);
					this.data = `${myWifi.ssid}\n${device.ip4}`;

					//elem.innerHTML = myWifi.signalLevel;
					if (myWifi.signalLevel >= -30) {
						this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-excellent-symbolic']).stdout.toString();
					} else if (myWifi.signalLevel >= -67) {
						this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-good-symbolic']).stdout.toString();
					} else if (myWifi.signalLevel >= -70) {
						this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-ok-symbolic']).stdout.toString();
					} else if (myWifi.signalLevel >= -80) {
						this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-weak-symbolic']).stdout.toString();
					} else {
						this.icon = this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'network-wireless-signal-none-symbolic']).stdout.toString();
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