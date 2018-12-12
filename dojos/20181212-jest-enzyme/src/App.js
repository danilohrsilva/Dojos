import React, { Component, Fragment } from 'react';

import CartSummaryModal from './Components/CartSummaryModal/CartSummaryModal';
import Ingredient from './Components/Ingredient/Ingredient';
import { getIngredients } from './services/ingredientsServices';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: {
        items: [],
        total: 0,
      },
      isOrderSummaryOpen: false,
      ingredients: [],
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { cart } = state;

    if (!cart.items.length) {
      return {
        isOrderSummaryOpen: false,
      }
    }

    return null;
  }

  componentDidMount() {
    getIngredients()
      .then(ingredients => {
        this.setState({
          ingredients,
        });
      })
  }

  addIngredientToCart = (ingredient) => {
    const { cart } = this.state;
    const items = [
      ...cart.items,
      ingredient,
    ];

    const total = items.reduce((total, item) => item.price + total, 0);

    this.setState({
      cart: {
        items,
        total,
      }
    })
  }

  removeIngredientFromCart = (ingredient) => {
    const { cart } = this.state;
    const items = cart.items.filter(item => item.id !== ingredient.id);
    const total = items.reduce((total, item) => item.price + total, 0);

    this.setState({
      cart: {
        items,
        total,
      }
    })
  }

  openOrderSummary = () => {
    this.setState({
      isOrderSummaryOpen: true,
    })
  }

  closeOrderSummary = () => {
    this.setState({
      isOrderSummaryOpen: false,
    })
  }

  render() {
    const isCartEmpty = !this.state.cart.items.length;
    return (
      <Fragment>
        <button
          type="button"
          onClick={this.openOrderSummary}
          disabled={isCartEmpty}
          className="summary-button"
        >
          Resumo do pedido
        </button>

        {this.state.ingredients.map(ingredient => (
          <Ingredient
            cart={this.state.cart}
            ingredient={ingredient}
            addItem={this.addIngredientToCart}
            key={ingredient.id}
          />
        ))}

        <CartSummaryModal
          isOpen={this.state.isOrderSummaryOpen}
          onClose={this.closeOrderSummary}
          cart={this.state.cart}
          removeItem={this.removeIngredientFromCart}
        />
      </Fragment>
    );
  }
}

export default App;
