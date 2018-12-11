import React from 'react';

const Ingredient = ({ ingredient, addItem }) => {
  return (
    <div>
      <p>{ingredient.name} ${ingredient.price}</p>
      <button type="button" onClick={() => addItem(ingredient)}>Add</button>
    </div>
  );
};

export default Ingredient;