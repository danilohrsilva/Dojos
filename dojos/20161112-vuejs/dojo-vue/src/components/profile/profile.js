import Vue from 'vue';

export default Vue.component('profile', {
  props: ['profile'],
  template: `
  <div class="apoiador">
    <img :src="profile.picture" class="apoiador__picture" :alt="profile.name" />
    <span class="apoiador__name">{{profile.name}}</span>
  </div>
  `,
});
