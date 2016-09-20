import React, { PropTypes } from 'react';

const Busca = ({ handleSearch }) => (
  <div className="search">
    <input type="text"
      className="search__field"
      placeholder="Buscar"
      onChange={handleSearch} />
  </div>
)

export default Busca;
