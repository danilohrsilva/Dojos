import Vue from 'vue';
import App from './components/index/index';

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(App);
  }
});
