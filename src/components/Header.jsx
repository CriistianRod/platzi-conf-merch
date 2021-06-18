import React from 'react'

import '../styles/components/Header.css'

const Header = () => {
    const identifier = 'Conf Merch Header'
    return (
        <header className="Header">
            <h1 className="Header-title">{ identifier }</h1>
            <div className="Header-checkout">
                Checkout
            </div>
        </header>
    )
}

export default Header
