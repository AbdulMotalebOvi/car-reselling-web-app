import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import { UseAuthContext } from '../../UseContext/AuthContext';


const BuyerRoute = ({ children }) => {
    const { user } = useContext(UseAuthContext)

    const location = useLocation()
    const [isBuyer] = useBuyer(user?.email)

    // if (loading || BuyerLoader) {
    //     return <div style={{ textAlign: 'center', marginTop: '200px' }}>Loading...</div>
    // }
    if (user?.email || isBuyer) {
        return children
    }
    return <Navigate to="/SignIn" state={{ from: location }} replace />

};

export default BuyerRoute;