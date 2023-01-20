import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Cars/Modal';
import MicroBus from './MicroBus';

const Micro = () => {
    const data = useLoaderData()
    const [useCars, setUsedCars] = useState(null)
    return (
        <div className='max-w-screen-xl mx-auto '>
            <h1 className='text-2xl font-semibold my-3'>Total Micro-Bus Found: {data.length}</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    data?.map(car => <MicroBus
                        key={car._id}
                        car={car}
                        setUsedCars={setUsedCars}
                    ></MicroBus>)
                }

            </div>
            {
                useCars &&
                <Modal useCars={useCars}></Modal>
            }
        </div>
    );
};

export default Micro;