import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { ROLES_LIST } from '../../../roles_list';

const RedirectionAuthBased = () => {
    const { auth } = useAuth();
    return (
        auth?.roles?.find(role => role === ROLES_LIST.Admin) 
        ? <Navigate to="/user-management" replace />
        : auth?.roles?.find(role => role === ROLES_LIST.User) 
        ? <Navigate to="/resume-listing" replace />
        : <Navigate to="/sign-in" replace />
    );
};

export default RedirectionAuthBased;