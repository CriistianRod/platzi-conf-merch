import React from 'react'
import '../styles/components/Payment.css'

const Payment = () => (
    <section className="Payment">
        <div className="Payment-content">
            <h3>Resumen del pedido</h3>
            <button className="Payment-button" type="button">
                Pago con Paypal
            </button>
        </div>
        <aside />
    </section>
)

export default Payment