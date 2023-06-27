/* eslint-disable no-constant-condition */
import { reactive } from 'vue';
const dbus = require('dbus-native');
const sessionBus = dbus.sessionBus();
const desktopServiceName = 'ar.net.vasak.os.desktop.service';
const desktopInterfaceName = desktopServiceName;
const desktopObjectPath = `/${desktopServiceName.replace(/\./g, '/')}`;
const desktopServiceDBUS = sessionBus.getService(desktopServiceName);
const windowsOpen = reactive([]);

desktopServiceDBUS.getInterface(
	desktopObjectPath,
	desktopInterfaceName,
	(err, iface) => {
		if (err) {
			console.error(
				`Failed to request interface '${desktopInterfaceName}' at '${desktopObjectPath}' : ${err}`
					? err
					: '(no error)'
			);
			process.exit(1);
		}
		iface.on('updateWindows', function () {
			windowsOpen.length = 0;
			JSON.parse(arguments[0].replaceAll("'", '')).map((window) => {
				windowsOpen.push(window);
			});
		});
	}
);

export default {
	data() {
		return {
			windowsOpen,
		};
	},
	methods: {
		async toggleWin(win) {
			desktopServiceDBUS.getInterface(
				desktopObjectPath,
				desktopInterfaceName,
				(err, iface) => {
					if (err) {
						console.error(
							`Failed to request interface '${desktopInterfaceName}' at '${desktopObjectPath}' : ${err}`
								? err
								: '(no error)'
						);
						process.exit(1);
					}
					iface.toggleWindow(win.toString());
				}
			);
		},
	},
	template: `
    <div class="ms-auto me-auto" id="windowsOpenSection">
        <button v-for="openwin in windowsOpen" :key="openwin.id" @click="toggleWin(openwin.id)" class="btn win-button">
            <img :src="'file://' + openwin.icon" :alt="openwin.name" class="img-fluid win-img" />
        </button>
    </div>
    `,
};
