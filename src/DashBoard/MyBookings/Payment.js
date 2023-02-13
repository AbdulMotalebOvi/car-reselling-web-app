import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);
const Payment = () => {
    const booking = useLoaderData()
    const { VehicaleName, price } = booking
    return (
        <div className='space-y-3'>
            <h3 className='font-semibold text-2xl'>Payment for {VehicaleName}</h3>
            <h3 className='font-semibold my-2'>Please Pay <strong className='text-red-500'>${price}</strong></h3>
            <div className='w-96 my-12 card bg-base-100 '>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booking={booking}
                    >

                    </CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;