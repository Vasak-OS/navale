import Clock from "./notificationtools/Clock.js";

export default {
    template: `
    <div id="notificationArea">
        <div id="network"></div>
        <div id="battery"></div>
        <Clock />
    </div>
    `,
    components:{
        Clock
    }
};