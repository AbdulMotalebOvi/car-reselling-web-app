import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../DashBoard/DashBoardLayout";
import Main from "../Layout/Main";
import AllCars from "../Pages/Cars/AllCars";
import CheckOutForm from "../Pages/CheckOut/CheckOutForm";
import ElectricCar from "../Pages/Home/ElectricCar/ElectricCar";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Shared/SignIn/SignIn";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Profile from '../shared/Profile/Profile';
import Bookings from "../DashBoard/MyBookings/Bookings"
import Micro from "../Pages/Home/MicroBus/Micro";
import Electric from "../Pages/Home/ElectricCar/Electric";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorElement from "../DisplayError/ErrorElement";
import AllUsers from "../DashBoard/Allusers/AllUsers";
import AdminRoute from "../DashBoard/AdminRoute/AdminRoute";
import AddProduct from "../DashBoard/AddProduct/AddProduct";
import AllSellers from "../DashBoard/AllSellers/AllSellers";
import AllBuyers from "../DashBoard/AllBuyers/AllBuyers";
import SellerRoute from "../DashBoard/SellerRoute/SellerRoute";
import BuyerRoute from "../DashBoard/BuyerRoute/BuyerRoute";
import Payment from "../DashBoard/MyBookings/Payment";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/luxuryCar',
                element: <PrivateRoute><AllCars></AllCars></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <CheckOutForm></CheckOutForm>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: '/SignIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/profile',
                element: <Profile></Profile>,

            },
            {
                path: '/microbus',
                element: <PrivateRoute> <Micro></Micro></PrivateRoute>,
                loader: () => fetch('https://assignment-12-server-six-chi.vercel.app/usedMicroBus')
            },
            {
                path: '/electricCar',
                element: <PrivateRoute><Electric></Electric></PrivateRoute>,
                loader: () => fetch('https://assignment-12-server-six-chi.vercel.app/electronicCar')
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/dashboard',
                element: <Bookings></Bookings>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute> <Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(`https://assignment-12-server-six-chi.vercel.app/bookings/${params.id}`)
            }

        ]
    }
])