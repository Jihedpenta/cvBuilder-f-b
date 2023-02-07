import React, { useState, createContext } from 'react';
import { useQuery } from 'react-query';
import useGetUsers from '../hooks/useGetUsers';


export const UserListContext = createContext({
    userList:{},
    setUserList:()=>{},
});


export const UserListProvider = ({children}) => {
    const getUsers = useGetUsers()
    const [controller, setController] = React.useState(new AbortController());
    const { status, data, error, isLoading, refetch } = useQuery(
        'users',
        () => {
            const signal = controller.signal;
            return getUsers(signal);
        },
        {
            onSuccess: (data) => {
                console.log('data', data);
                // data.forEach((elem)=>{
                //     rows.push(createData(elem._id, elem.email))
                // })
                // console.log('rows ', rows);
            },
            // refetchOnWindowFocus: false,
        },
        
    );


    // const [userList, setUserList] = useState({});

    const value = {status, data, error, isLoading, refetch}

    return (
       <UserListContext.Provider value={value}>{children}</UserListContext.Provider>
    );
};

