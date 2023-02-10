import React, { createContext } from 'react';
import { useQuery } from 'react-query';
import useGetUsers from '../hooks/useGetUsers';


export const UserListContext = createContext({
    userList:{},
    setUserList:()=>{},
});


export const UserListProvider = ({children}) => {
    const getUsers = useGetUsers()
    const { status, data, error, isLoading, refetch } = useQuery(
        'users',
        () => {
            return getUsers();
        }
    );
    const value = {status, data, error, isLoading, refetch}

    return (
       <UserListContext.Provider value={value}>{children}</UserListContext.Provider>
    );
};

