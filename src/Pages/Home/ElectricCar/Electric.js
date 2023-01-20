import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Cars/Modal';
import ElectricCar from './ElectricCar';

const Electric = () => {
    const data = useLoaderData()
    const [useCars, setUsedCars] = useState(null)
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className='my-3 text-xl'>Total Electronic Car Found: {data.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data?.map(dt => <ElectricCar key={dt._id} data={dt} setUsedCars={setUsedCars}></ElectricCar>)
                }
            </div>
            {
                useCars &&
                <Modal useCars={useCars}></Modal>
            }
        </div>
    );
};

export default Electric;