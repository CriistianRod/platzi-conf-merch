import React from 'react';
import '../styles/components/Checkout.css'

const Checkout = () => (
  <section className="Checkout">
    <div className="Checkout-Content">
      <h3>Lista de Pedidos</h3>
      <div className="Checkout-item">
        <div className="Checkout-element">
          <h4>ITEM name</h4>
          <span>$10</span>
        </div>
        <button type="button">Eliminar</button>
      </div>
    </div>
    <aside className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type="button">Continuar pedido</button>
    </aside>
  </section>
);

export default Checkout;
