import Vue from "vue";
import Vuex from "vuex";
import { getUser,setUser } from '@/utils/storage'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:  getUser()
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      setUser(JSON.stringify(user))
    }
  },
  actions: {},
});
