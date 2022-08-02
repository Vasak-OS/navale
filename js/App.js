import { createApp } from 'vue';
import MenuButtom from './components/MenuButtom.js';
import NotificationArea from './components/NotificationArea.js';
import WindowsSections from './components/WindowsSections.js';

/* Init APP VueJS */
const app = createApp({
    async beforeMount() {
        // Set windows Properties
        this.$win.setShowInTaskbar(false);
        this.$win.resizeTo(Math.round(screen.width), 36);
        this.$win.setResizable(false);
        this.$win.y = 0;
        this.$win.x = 0;
        this.$win.setAlwaysOnTop(true);
        this.$exec('python', ['/usr/share/Lynx/lynx-desktop-service/Setters/setDock.py', `${this.$pid.toString()}`, Math.round(this.$screen.width)]);
    },
    template: `
    <div class="container-fluid">
        <MenuButtom />
        <WindowsSections />
        <NotificationArea />
    </div>`,
    components: {
        MenuButtom,
        NotificationArea,
        WindowsSections
    }
});

/* Add Services aditional to VueJS in Global Properties */
app.config.globalProperties.$execSynx = require('child_process').spawnSync;
app.config.globalProperties.$exec = require('child_process').spawn;
app.config.globalProperties.$win = nw.Window.get();
app.config.globalProperties.$pid = process.pid;
app.config.globalProperties.$screen = screen;

app.mount('#app');