import React from 'react';

const MicroBus = ({ car, setUsedCars }) => {
    const { image, name, price, Resale, Location } = car
    return (
        <div className='max-w-screen-xl mx-auto'>


            <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 space-y-4">
                <img
                    alt="Home"
                    src={image}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Original price</dt>
                            <dd className="text-sm text-gray-500">Original price: ${price}</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Original price</dt>
                            <dd className="text-sm text-gray-500">Resale price: ${Resale}</dd>
                        </div>


                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="text-[15px]">Location: <span className='text-red-500 font-semibold'>{Location}</span></dd>
                        </div>
                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="text-2xl">{name}</dd>
                        </div>
                    </dl>
                </div>
                <label htmlFor="car-selling" className="btn btn-primary " onClick={() => setUsedCars(car)}>Book Now</label>
            </div>




        </div>

    );
};

export default MicroBus;