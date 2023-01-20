import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { UseAuthContext } from '../../UseContext/AuthContext';

const AdminRoute = ({ children }) => {
    const { loading, user } = useContext(UseAuthContext)

    const location = useLocation()
    const [isAdmin, isAdminLoader] = useAdmin(user?.email)
    if (loading || isAdminLoader) {
        return <div style={{ textAlign: 'center', marginTop: '200px' }}>Loading...</div>
    }
    if (user?.email && isAdmin) {
        return children
    }
    return <Navigate to="/SignIn" state={{ from: location }} replace />

};

export default AdminRoute;