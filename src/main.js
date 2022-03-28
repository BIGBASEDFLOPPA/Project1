import { createApp } from 'vue'
import App from './App.vue'
import './assets/Styles/styles.scss'
import {store} from "@/vuex/store";

const app = createApp(App)

app.use(store)

createApp(App).mount('#app')
