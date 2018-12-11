import React from 'react';

import './Ingredient.css';

const Ingredient = ({ ingredient, addItem }) => {
  return (
    <div className="ingredient">
      <p className="ingredient__info">
        <span className="ingredient__name">{ingredient.name}</span>
        <span className="ingredient__price">R${ingredient.price}</span>
      </p>

      <button type="button" onClick={() => addItem(ingredient)} className="ingredient__button">Adicionar</button>
    </div>
  );
};

export default Ingredient;
