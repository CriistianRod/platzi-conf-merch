import React from 'react';
import '../styles/components/Information.css'

const Info = () => (
  <section className="Information">
    <div className="Information-content">
      <div className="information-head">
        <h2>Información de contacto</h2>
      </div>
      <div className="information-form">
        <form action="">
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo Electrónico" name="email" />
          <input type="text" placeholder="Dirección" name="Address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="País" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Código Postal" name="cp" />
          <input type="text" placeholder="Teléfono" name="phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <button className="Information-back" type="button">
          Regresar
        </button>
        <button className="Information-next" type="button">
          Pagar
        </button>
      </div>
    </div>
    <aside className="Information-sidebar">
      <h3>Pedido</h3>
      <div className="Information-item">
        <div className="Information-element">
          <h1>ITEM name</h1>
          <span>$10</span>
        </div>
      </div>
    </aside>
  </section>
);

export default Info;
