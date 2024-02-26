import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { windowsStore } from './stores/windows'

const startApp = (channel: any) => {
  const app = createApp(App)

  app.provide('vsk', channel.objects.vsk)
  app.use(createPinia())
  // @ts-ignore
  window["windowManager"] = windowsStore()

  app.mount('#app')
}

// @ts-ignore
new QWebChannel(qt.webChannelTransport, startApp)
