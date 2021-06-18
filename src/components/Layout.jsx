import React from 'react'
import Header from './Header'
import Footer from './Footer'

import '../styles/components/Layout.css'

const Layout = ({ children }) => {
    const alo = '¿Aló?, ¿Principal Layout?';
    return (
        <main className="Main">
            <Header />
            { alo }
            { children }
            <Footer />
        </main>
    )
}

export default Layout
