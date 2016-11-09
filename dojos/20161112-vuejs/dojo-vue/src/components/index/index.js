import template from './template';
import './App.css';
import './index.css';

export default {
  name: 'index',
  template: template,
  data () {
    return {
      apoiadores: {},
      searchQuery: ''
    };
  },
  computed: {
    apoiadoresFiltered: function () {
      if (this.apoiadores.length) {
        return this.apoiadores.filter((apoiador) => {
          return apoiador.name.includes(this.searchQuery);
        });
      }

      return [];
    }
  },
  methods: {
    getApoiadores: function() {
      fetch('http://localhost:8000/apoiadores', { method: 'get' })
        .then(res => res.json())
        .then(res => this.apoiadores = res);
    }
  },
  created () {
    this.getApoiadores();
  }
};
