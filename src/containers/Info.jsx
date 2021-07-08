import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Info = () => {
  const { state, addToBuyer } = useContext(AppContext);

  const form = useRef(null);
  const history = useHistory()
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone')
    }

    addToBuyer(buyer);
    console.log(buyer);
    history.push('/checkout/payment');
  }

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
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
            <Link to="/checkout">Regresar</Link>
          </button>
          <Link to="/checkout/payment">
            <div className="Information-next" >
              <button type="button" onClick={handleSubmit}>Pagar</button>
            </div>
          </Link>
        </div>
      </div>
      <aside className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default Info;
