export default {
	methods: {
		openMenu() {
			this.$exec('hydriam');
		},
	},
	computed: {
		icon() {
			return this.$getIcon('hydriam');
		},
	},
	template: `
        <a class="navbar-brand" href="#" id="dockMenuLauncher" @click="openMenu()">
        <img
            :src="'file://' + icon"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Lynx Menu"
            class="img-fluid dock-menu-launcher-icon"
            alt="Menu" />
        </a>
    `,
};
