import React from 'react';
import { Link } from 'react-router-dom';

const SingleCar = ({ car, setUsedCars }) => {
    const { name, image, Resale, Condition, Location, Number, Description, Purchase } = car;
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 space-y-4">
            <img
                alt="Home"
                src={image}
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>

                    <div className='flex justify-between'>

                        <dd className="text-sm text-gray-500"><span className='text-red-500 font-semibold'>Resale price:</span> ${Resale}</dd>
                        <dd className="text-sm text-gray-500"><span className='text-red-500 font-semibold'>Location:</span> {Location}</dd>
                        <dd className="text-sm text-gray-500"><span className='text-red-500 font-semibold'>Condition:</span> ${Condition}</dd>

                    </div>


                    <div>


                        <dd className="text-[15px]">Purchase of Year: <span className='text-red-500 font-semibold'>{Purchase}</span></dd>
                    </div>
                    <div>


                        <dd className="text-[15px]"><span className='text-red-500 font-semibold'>Description:</span> {Description}</dd>
                    </div>
                    <div>
                        <dt className="sr-only">Address</dt>

                        <dd className="text-2xl">{name}</dd>
                    </div>
                </dl>
            </div>
            <label htmlFor="car-selling" className="btn btn-primary " onClick={() => setUsedCars(car)}>Book Now</label>
        </div>
    );
};

export default SingleCar;