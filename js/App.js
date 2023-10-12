/* eslint-disable no-undef */

/* Init APP VueJS */
const app = Vue.createApp({
	template: `
    <div class="container-fluid">
        <MenuButtom />
        <NotificationArea />
    </div>`,
	components: {
		MenuButtom,
		NotificationArea,
		//WindowsSections,
	},
});

app.mount('#app');
