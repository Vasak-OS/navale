export default {
    methods: {
        openMenu() {
            this.$exec('lynx-menu');
        }
    },
    computed: {
        icon() {
            return this.$execSynx('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getIcon.py', 'lynx-menu']).stdout.toString();
        }
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
    `
}