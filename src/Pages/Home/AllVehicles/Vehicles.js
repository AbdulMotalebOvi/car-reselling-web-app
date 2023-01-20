import React, { useState } from 'react';
import img1 from '../../assests/car/lux.jpg'
import img2 from '../../assests/car/electric.jpg'
import img3 from '../../assests/car/micro.jpg'
import { Link } from 'react-router-dom';

const Vehicles = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-3xl font-bold  my-5'>Choose Your <br /> Favourite Vehicles</h1>
            <div className='grid grid-cols-3 gap-4'>
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src={img1}
                        class="h-56 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <h3 className='text-[18px] font-semibold'>Luxury Car</h3>
                        <Link to="/luxuryCar">
                            <button className="btn btn-outline my-4">View More</button>
                        </Link>
                    </div>
                </article>
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src={img2}
                        class="h-56 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <h3 className='text-[18px] font-semibold'>Electric Car</h3>
                        <Link to="/electricCar">
                            <button className="btn btn-outline my-4">View More</button>
                        </Link>
                    </div>
                </article>
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src={img3}
                        class="h-56 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <h3 className='text-[18px] font-semibold'>Microbus</h3>
                        <Link to="/microbus">
                            <button className="btn btn-outline my-4">View More</button>
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Vehicles;