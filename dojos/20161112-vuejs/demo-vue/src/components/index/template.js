export default `
  <div class="App">
    <header>
      <h1>DOJO - Vue.js</h1>
      <h2>Listagem de apoiadores do <i class="dne">DEV<span class="highlight">na</span>ESTRADA</i></h2>
    </header>
    <div class="search">
      <input type="text"
        class="search__field"
        placeholder="Buscar"
        v-model="searchQuery" />
    </div>
    <div class="apoiadores">
      <div class="apoiador" v-for="apoiador in apoiadoresFiltered">
        <img :src="apoiador.picture" class="apoiador__picture" :alt="apoiador.name" />
        <span class="apoiador__name">{{apoiador.name}}</span>
      </div>
    </div>
  </div>
`;
