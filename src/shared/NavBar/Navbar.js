import React, { useContext } from 'react';
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
    const [isSeller] = useSeller(user?.email)

    const navLinks =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Blogs</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {
                isSeller &&
                <li><Link to='/myProducts'>My Products</Link></li>
            }

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

                                        <div className="w-10 rounded-full mr-2">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                        <p className='text-[14px] capitalize'>{user?.displayName}</p>

                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
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