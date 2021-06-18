import React from 'react'

import '../styles/components/Footer.css'

const Footer = () => {
    const identifier = 'Footer'
    return (
        <footer className="Footer">
            <p className="Footer-title"> { identifier } Platzi Conf Merch</p>
            <p className="Footer-copy">Todos los Izquierdos Reservados</p>
        </footer>
    )
}

export default Footer
