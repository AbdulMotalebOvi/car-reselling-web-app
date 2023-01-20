import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UseAuthContext } from '../../UseContext/AuthContext';
import BookingTable from './BookingTable';

const Bookings = () => {
    const { user } = useContext(UseAuthContext)
    const url = `http://localhost:5000/bookedvehicles?email=${user?.email}`
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
                            bookings?.map(dt => <BookingTable key={dt._id} data={dt}></BookingTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;