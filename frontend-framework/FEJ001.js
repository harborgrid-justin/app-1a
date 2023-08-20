// FEJ001.js

import Vue from 'vue';
import App from './App.vue'; // Main Vue component
import router from './router'; // Vue Router for SPA navigation (if used)
import store from './store'; // Vuex store for state management (if used)
import GlobalMessages from '../business-rule-engine/GM001'; // Importing global messages utility

Vue.config.productionTip = false;

// A global mixin to make global messages available in every component
Vue.mixin({
  methods: {
    getErrorMessage: (code) => GlobalMessages.getErrorMessage(code),
    getInfoMessage: (code) => GlobalMessages.getInfoMessage(code)
  }
});

// Initialize the Vue instance
new Vue({
  router, // integrating Vue Router
  store,  // integrating Vuex store
  render: h => h(App)
}).$mount('#app');

