import Vue from 'vue';
import '@babel/polyfill';
import App from './components/App.vue';

new Vue({
  el    : '#app',
  render: h => h(App),
});

