import { createApp } from 'vue';
import MenuButtom from './components/MenuButtom.js';

const app = createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    template: `
    <div class="container-fluid">
        <MenuButtom />
        <div class="ms-auto me-auto" id="windowsOpenSection"></div>

        <div id="notificationArea">
            <div id="network"></div>
            <div id="battery"></div>
            <div id="clock"></div>
        </div>
    </div>`,
    components:{
        MenuButtom
    }
});

app.config.globalProperties.$execSynx = require('child_process').spawnSync;
app.config.globalProperties.$exec = require('child_process').spawn;

app.mount('#app');