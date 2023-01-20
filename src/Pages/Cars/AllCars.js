import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Modal from './Modal';
import SingleCar from './SingleCar';

const AllCars = () => {
    const [useCars, setUsedCars] = useState(null)
    const url = "http://localhost:5000/luxuryCar";
    const { data: cars = [] } = useQuery({
        queryKey: ['usedCar'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-2xl font-semibold my-3'>Total Luxury Cars Found: {cars.length}</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    cars?.map(car => <SingleCar
                        key={car._id}
                        car={car}
                        setUsedCars={setUsedCars}
                    ></SingleCar>)
                }

            </div>
            {
                useCars &&
                <Modal useCars={useCars}></Modal>
            }
        </div>
    );
};

export default AllCars;