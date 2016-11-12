import profile from '../profile/profile.js';

export default `
  <div class="App">
    <header>
      <h1>DOJO - Vue.js</h1>
      <h2>
        Listagem de apoiadores do <i class="dne">DEV<span class="highlight">na</span>ESTRADA</i>
      </h2>
    </header>
    <div class="search">
      <input type="text"
        class="search__field" v-model='searchQuery'
        placeholder="Buscar" />
    </div>
    <div class="apoiadores" >
      <profile v-for="profile in filtro" :profile="profile"/>
    </div>
  </div>
`;
