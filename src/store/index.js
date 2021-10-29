import Vue from "vue";
import Vuex from "vuex";
import { setUser } from '../utils/storage'
import {setToken,clearToken} from "../utils/storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    token: ''
   
  },
  
  mutations: {
    user(state, user) {
      state.user = user
      setUser(user)
    },
    token(state,token){
      state.token = token
      setToken('token',)
    },
    
    // 登出
    logout(state) {
     
      state.user = null;
      clearToken()
      // state.token = false;
    }
  },
  actions: {},
});
