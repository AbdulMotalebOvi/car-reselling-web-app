import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { UseAuthContext } from '../../UseContext/AuthContext';

const Modal = ({ useCars }) => {
    const { user } = useContext(UseAuthContext)
    const { productsName,
        image, Resale, Number, Location } = useCars

    const handlerToSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const number = form.number.value
        const booking = {
            productsName,
            email,
            number,
            Resale,
            image,
            Location
        }


        fetch('https://assignment-12-server-six-chi.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')

                }
                else {
                    toast.error(data.message)
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="car-selling" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="car-selling" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card card-compact ">
                        <figure><img className='w-[200px] ' src={image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{productsName}</h2>
                            <div className='flex justify-between'>
                                <p className='text-[15px] font-bold text-red-500'>Resale Price: ${Resale}</p>
                                <p className='text-[15px] font-bold text-red-500'>Location: {Location}</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handlerToSubmit} className='mt-3 space-y-5'>
                        <input type="text"
                            name='name'
                            defaultValue={user?.displayName}
                            readOnly
                            placeholder="Full Name" className="input input-bordered w-full " />

                        <input type="number"
                            name='number'
                            defaultValue={Number}
                            readOnly
                            placeholder="Phone" className="input input-bordered w-full " />
                        <input type="email"
                            name='email'
                            defaultValue={user?.email}
                            readOnly
                            placeholder="Your Email" className="input input-bordered w-full " />
                        <input className='btn w-full' type="submit" value="Submit" />
                    </form>

                    {/* <label htmlFor="car-selling" className="btn w-full mt-3 cursor-pointer">Submit!</label> */}


                </div>
            </div>
        </>
    );
};

export default Modal;