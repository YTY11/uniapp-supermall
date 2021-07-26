import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from './store/index.js'
import { VueJsonp } from 'vue-jsonp/dist'
Vue.use(VueJsonp)
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'



const app = new Vue({
	
	store,
    ...App
})
app.$mount()
