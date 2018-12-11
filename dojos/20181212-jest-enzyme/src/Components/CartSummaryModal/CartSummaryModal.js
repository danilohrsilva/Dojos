import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const CartSummaryModal = ({ isOpen, onClose, cart, removeItem }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >

      <p>Your special burger ingredients:</p>

      <ul>
        {cart.items.map(item => (
          <li key={item.id}>{item.name} <button onClick={() => removeItem(item)}>x</button></li>
        ))}
      </ul>

      <p>Total: ${cart.total}</p>

      <button type="button" onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default CartSummaryModal;