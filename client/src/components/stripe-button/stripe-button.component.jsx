import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51JBh4OEuZp90GsdtzfjvpfYoHi5o5baa1Q5nXXIihFFPiFusN5qmwXIT0VCRFq1Vi32O8qRLkgN9d1Y1jvhfGWzg00LP1kWg8J';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'POST',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log('Payment error ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please make sure you use the provided credit cart.'
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Crown Clothing LTD."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
