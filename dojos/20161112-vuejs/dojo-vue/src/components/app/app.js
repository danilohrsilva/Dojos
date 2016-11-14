import template from './template';
import '../profile/profile';
import './app.css';

export default {
  name: 'app',
  template: template,
  data: () => ({
    profiles: [],
    searchQuery: ''
  }),
  methods: {
    getProfile: function() {
      var app = this;

      fetch('http://localhost:8000/apoiadores', {
        method: 'get'
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        app.profiles = data;
      });
    }
  },
  created() {
    //console.log('OK');
    this.getProfile();
  },
  computed: {
    filtro: function() {
      var self = this;
      return self.profiles.filter(function (profile) {
        return profile.name.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1;
      });
    }
  }
};
