import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseAuthContext } from '../../UseContext/AuthContext';


const Bookings = () => {
    const { user } = useContext(UseAuthContext)
    const url = `https://assignment-12-server-six-chi.vercel.app/bookedvehicles?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    console.log(bookings);

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings &&
                            bookings?.map((booked) =>
                                <tr key={booked._id}>

                                    <td><div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={booked.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    </td>
                                    <td className='font-bold'>{booked.VehicaleName}</td>
                                    <td className='font-bold'>{booked.location}</td>
                                    <td className='font-bold text-red-500'>

                                        {
                                            booked.paid ?
                                                <p className='text-green-500'>Paid</p>
                                                :
                                                <>  ${booked.price}</>
                                        }

                                    </td>
                                    <td>
                                        {booked.price && !booked.paid &&
                                            <Link to={`/dashboard/payment/${booked._id}`}><button className="btn btn-accent text-white btn-sm"
                                                disabled={booked.paid} >Pay</button></Link>
                                        }

                                    </td>
                                </tr>


                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;