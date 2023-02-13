import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { UseAuthContext } from '../../UseContext/AuthContext';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user } = useContext(UseAuthContext)

    const location = useLocation()

    const [isSeller] = useSeller(user?.email)

    // if (loading || isSellerLoader) {
    //     return <div style={{ textAlign: 'center', marginTop: '200px' }}>Loading...</div>
    // }
    if (user?.email || isSeller) {
        return children
    }
    return <Navigate to="/SignIn" state={{ from: location }} replace />

};

export default SellerRoute;