import Vue from 'vue';
import App from './components/app/app';

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(App);
  }
});
