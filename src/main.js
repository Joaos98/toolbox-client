import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from "bootstrap-vue-next";

import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/main.css'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
import VueDatePicker from '@vuepic/vue-datepicker';
import 'vue3-calendar-heatmap/dist/style.css';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())
app.component('CalendarHeatmap', CalendarHeatmap)
app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
