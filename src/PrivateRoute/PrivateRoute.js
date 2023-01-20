import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UseAuthContext } from '../UseContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(UseAuthContext)
    const location = useLocation()
    if (loading) {
        return <div style={{ textAlign: 'center' }}>Loading...</div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to="/SignIn" state={{ from: location }} replace />

};

export default PrivateRoute;