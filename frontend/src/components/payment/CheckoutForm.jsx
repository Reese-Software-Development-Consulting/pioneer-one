//Check out form that integrates with stripe for online stores

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const result = await stripe.confirmCardPayment(
      window.clientSecret, // injected via global or props
      {
        payment_method: {
          card: card,
        },
      }
    );

    if (result.error) {
      alert(`Payment failed: ${result.error.message}`);
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('Payment succeeded!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ hidePostalCode: true }} />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

export default CheckoutForm;
