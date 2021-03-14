import Vue from 'vue';
import VueX from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';
Vue.use(VueX);

const store = new VueX.Store({
  modules: {
    app,
    user,
    permission,
  },
  getters,
});
export default store;
