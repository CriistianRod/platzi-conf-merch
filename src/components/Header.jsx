import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);

  const { cart } = state;

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">Conf Merch Header</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
