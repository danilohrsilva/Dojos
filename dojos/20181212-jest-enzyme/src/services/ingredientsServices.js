export const getIngredients = () => (
  fetch('http://localhost:3001/ingredients')
    .then(response => response.json())
);
