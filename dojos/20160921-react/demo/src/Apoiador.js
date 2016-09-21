import React from 'react';

const Apoiador = ({ name, picture }) => (
  <div className="apoiador">
    <img src={picture} className="apoiador__picture" alt={'Foto do apoiador ' + name} />
    <span className="apoiador__name">{name}</span>
  </div>
)

export default Apoiador;
