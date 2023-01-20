import React from 'react';
import img1 from '../../assests/car/001-tire.png'
import img2 from '../../assests/car/002-steering-wheel.png'
import img3 from '../../assests/car/004-tachometer.png'
import img4 from '../../assests/car/035-motor.png'


const Services = () => {
    const bgCOlor = '#f5f5f5'
    const services = [
        { 'images': img1, 'name': 'Latest Cars', 'id': 1 },
        { 'images': img2, 'name': 'Low Odometer', 'id': 2 },
        { 'images': img3, 'name': 'Original Engine', 'id': 3 },
        { 'images': img4, 'name': 'Certified Tire', 'id': 4 },
    ]
    const myStyle = {
        backgroundColor: `${bgCOlor}`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle} className='my-20'>
            <div className=' max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        services.map(ser => {
                            return (
                                <div key={ser.id} className="m-2 my-20 card w-[300px] bg-base-100 shadow-xl ">
                                    <div className="card-body text-center ">
                                        <img className='w-1/3 m-auto' src={ser.images} alt="" />
                                        <h2 className="font-semibold text-xl">{ser.name}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;