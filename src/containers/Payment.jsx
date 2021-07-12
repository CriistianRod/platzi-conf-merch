import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal'
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
      clientId: 'AXHvIbQRemR7Ctojv3JwhsPovBPpu98kY6C4NCT-z4ps2-LIF0Wt1kG-YEqybjuWSyhMfoZ2djWGzVLm',
      intent: 'capture',
      currency: 'USD'
  }

  const buttonStyles = {
      layout: 'vertical',
      shape: 'rect'
  }

  const handlePaymentSuccess = data => {
      // console.log(data)
      if(data.status === 'COMPLETED'){
          const newOrder = {
              buyer,
              product: cart,
              payment: data
          }
          addNewOrder(newOrder)
          history.push('/checkout/sucess')
      }
  }

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal(cart)}
            // onPaymentStart={() => console.log('Start Payment')}
            onSuccess={data => handlePaymentSuccess(data)}
            onApprove={data => console.log(data)}
            onError={error => console.error(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <aside />
    </section>
  );
};

export default Payment;
