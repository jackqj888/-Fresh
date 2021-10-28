import Vue from "vue";
import Vuex from "vuex";
import { getUser,setUser } from '@/utils/storage'
import {setToken} from "../utils/storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:  getUser(),
    token:setToken()
   
  },
  
  mutations: {
    setUser(state, user) {
      state.user = user
      setUser(JSON.stringify(user))
    },
    // 登出
    logout(state) {
     
      state.user = null;
  
      // state.token = false;
    }
  },
  actions: {},
});
