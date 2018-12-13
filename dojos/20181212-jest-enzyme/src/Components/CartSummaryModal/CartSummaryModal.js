import React from 'react';
import Modal from 'react-modal';
import StyleHoc from './StyleHoc';

import './CartSummaryModal.css';

export const CartSummaryModal = ({ isOpen, onClose, cart, removeItem, customStyles }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >

      <p>Ingredientes do seu hamburger:</p>

      <ul className="cart-summary__list">
        {cart.items.map(item => (
          <li className="cart-summary__list-item" key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeItem(item)}>x</button>
          </li>
        ))}
      </ul>

      <p>Total: ${cart.total}</p>

      <button type="button" onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default StyleHoc(CartSummaryModal);
