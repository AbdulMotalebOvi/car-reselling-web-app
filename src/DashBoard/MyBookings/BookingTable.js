import React from 'react';

const BookingTable = ({ data }) => {
    const { image, VehicaleName, price, location } = data
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='font-bold'>
                {VehicaleName}
            </td>
            <td>{location}</td>
            <td className='text-red-400 font-semibold'>${price}</td>

        </tr>

    );
};

export default BookingTable;