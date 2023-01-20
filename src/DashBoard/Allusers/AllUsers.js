import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';


const AllUsers = () => {
    const url = 'http://localhost:5000/users'
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }

    })
    const handlerToMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Make Successfully')
                    refetch()
                }
                console.log(data)
            })
    }
    const handlerToDelete = id => {
        const procced = window.confirm('Are you Sure You Want to Delete this user?')
        if (procced) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('User Deleted Successfully')
                    refetch()
                    console.log(data);
                })
        }
    }
    return (
        <>
            <h1 className='text-3xl my-3'>Total Users Found: {allUsers.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Buyer/Seller</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, i) => {
                                return (
                                    <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.Role}
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>{user?.owner !== 'admin' && <button className="btn btn-sm btn-primary" onClick={() => handlerToMakeAdmin(user?._id)}>Make Admin</button>}</td>
                                        <th>
                                            <button onClick={() => handlerToDelete(user?._id)} className="btn  btn-sm btn-danger text-white"
                                            >Delete</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;