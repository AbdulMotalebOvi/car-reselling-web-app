import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const CheckOut = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    // const navigate = useNavigate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransectionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { price, VehicaleName, _id, email } = booking



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://assignment-12-server-six-chi.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },

            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message)
        }
        else {
            setError('')
        }
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: VehicaleName,
                        email: email,

                    },
                },
            },
        );
        if (confirmError) {
            setError(error.message)
            return
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                bookingId: _id
            }
            fetch('https://assignment-12-server-six-chi.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        setSuccess('Congratulations! Your Payment is Successful')
                        setTransectionId(paymentIntent.id)

                    }
                })
        }
        setProcessing(false)

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button type="submit" className='btn btn-primary btn-sm my-4 text-white' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 mt-3'>{error}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionId is:<span className='font-bold'> {transactionId}</span></p>
                </div>
            }

        </>
    );
};

export default CheckOut;