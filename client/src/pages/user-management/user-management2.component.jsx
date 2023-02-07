// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from "react-router-dom";
// import useGetUsers from '../../hooks/useGetUsers';
// import { useQuery } from 'react-query';
// import useLogout from "../../hooks/useLogout";

// const UserManagement = () => {
//     const [users, setUsers] = useState();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const getUsers = useGetUsers()
//     const [controller, setController] = useState(new AbortController());
//     const logout = useLogout();

//     const signOut = async () => {
//         await logout();
//         navigate('/sign-in');
//     }

//     const { status, data, error, isLoading } = useQuery(
//         'users',
//         () => {
//             const signal = controller.signal;
//             return getUsers(signal);
//         },
//         {
//             onSuccess: (data) => {
//                 console.log(data);
//                 setUsers(data)
//             }
//         },
//         {
//             refetchOnWindowFocus: false,
//         }
//     );

//     useEffect(() => {
//         return () => {
//             controller.abort();
//         };
//     }, [controller]);

//     useEffect(() => {
//         console.log();
//     }, [controller]);
//     if (isLoading) return <div>Loading...</div>;
//     if (error) navigate('/sign-in', { state: { from: location }, replace: true });
//     ;

//     return (
//         <div>
//             {data.map((post, index) => (
//                 <div key={index}>
//                     <h3>{post.email}</h3>
//                 </div>
//             ))}
//             <button onClick={signOut}>Sign Out</button>

//         </div>
//     );



// };

// export default UserManagement; 
