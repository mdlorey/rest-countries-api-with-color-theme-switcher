import Vue from 'vue';
import VueFuse from 'vue-fuse';
import App from './App.vue';
import router from './router';
import store from './store';
import Methods from './mixins/methods';

Vue.config.productionTip = false;

Vue.use(VueFuse);

Vue.mixin(Methods);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
