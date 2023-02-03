import React, { useState, createContext } from 'react';


export const AuthContext = createContext({
    auth:{},
    setAuth:()=>{},
    persist:{},
    setPersist:()=>{},
    sessionSigned:{},
    setSessionSigned:()=>{}
});


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false);
    // const [sessionSigned, setSessionSigned] = useState(JSON.parse(localStorage.getItem("sessionSigned")) || false);


    const value = {auth, setAuth, persist, setPersist}

    return (
       <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};


