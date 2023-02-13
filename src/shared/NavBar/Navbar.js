import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSeller from '../../hooks/useSeller';
import logo from '../../Pages/assests/car/logo.png'
import { UseAuthContext } from '../../UseContext/AuthContext';

const Navbar = () => {
    const { user, LogOut } = useContext(UseAuthContext)
    const navigate = useNavigate()
    const handlerToLogOut = () => {
        LogOut()
            .then(() => {
                navigate('/')
            })
            .catch(() => { })
    }


    const navLinks =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Blogs</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>


            {/* {
                user?.email ?
                    <>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        Link></li>
                    </>
                    :
                    <li><Link to='/login'>Login</Link></li>
            } */}



        </>
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-[100px]' src={logo} alt="" />
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                    {
                        !user?.email ?
                            <>
                                <li className='list-none'><Link to='/SignIn' >Sign In</Link></li>

                            </>

                            :
                            <>
                                <li className='list-none'><Link to='/SignIn' className='hidden '>Sign In</Link></li>

                                <div className="dropdown dropdown-end ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex justify-center flex-col">



                                        {
                                            user?.photoURL ?
                                                <div className="w-10 rounded-full mr-2">
                                                    <img src={user?.photoURL} alt='' />
                                                </div>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>


                                            // <CgProfile />
                                        }



                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                                        <li><p className='text-[12px] capitalize text-orange-500'>{user?.displayName}</p></li>
                                        <li >
                                            <Link className="justify-between" to='/profile'>
                                                Profile
                                            </Link>
                                        </li>
                                        <li> <Link onClick={() => handlerToLogOut()} className='text-[14px]'>Log Out</Link></li>

                                    </ul>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;