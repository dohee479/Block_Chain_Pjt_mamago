import Vue from 'vue'
import Vuex from 'vuex'
import Home from './Home'
import Login from './Login'
import TranslateRegist from './TranslateRegist'
import TransDetail from './TransDetail'

Vue.use(Vuex);

export default new Vuex.Store({
  modules :{
    Home,
    Login,
    TranslateRegist,
    TransDetail,
  }
})
