import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../shared/NavBar/Navbar';
import { UseAuthContext } from '../UseContext/AuthContext'


const DashBoardLayout = () => {
    const { user } = useContext(UseAuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile  my-10">
                <input id="dashboardLayout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardLayout" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">




                        <li><Link to='/dashboard'>My Wishlist</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>





                                {/* <li><Link to='/dashboard/manageDoctors'></Link></li> */}
                            </>
                        }
                        {
                            isSeller &&
                            <li><Link to='/dashboard/addProduct'>Add Products</Link></li>
                        }
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default DashBoardLayout;