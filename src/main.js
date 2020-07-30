import Vue from 'vue'
import App from './App.vue'
import './main.css'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './js/worldmap'
import VueCookies from 'vue-cookies'

stockInit(Highcharts)
mapInit(Highcharts)
addWorldMap(Highcharts)

Vue.use(HighchartsVue)
Vue.use(VueCookies)

new Vue({
  el: '#app',
  render: h => h(App)
})
