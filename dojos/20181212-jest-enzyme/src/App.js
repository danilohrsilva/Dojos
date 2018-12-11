import React, { Component, Fragment } from 'react';

import CartSummaryModal from './Components/CartSummaryModal/CartSummaryModal';
import Ingredient from './Components/Ingredient/Ingredient';

const ingredients = [
  {
    id: '1',
    name: "Pão italiano",
    price: 10,
  },
  {
    id: '2',
    name: "Pão de brioche",
    price: 10,
  },
  {
    id: '3',
    name: "Hamburguer de costela",
    price: 10,
  },
  {
    id: '4',
    name: "Hamburguer de soja",
    price: 10,
  },
  {
    id: '5',
    name: "Alface",
    price: 10,
  },
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: {
        items: [],
        total: 0,
      },
      isOrderSummaryOpen: false,
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
        >
          Order summary
        </button>

        {ingredients.map(ingredient => (
          <Ingredient
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

        <span>Total: {this.state.cart.total}</span>
      </Fragment>
    );
  }
}

export default App;
