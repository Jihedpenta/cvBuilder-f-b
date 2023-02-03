
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useLogout from "../../../hooks/useLogout";
import useRefreshToken from "../../../hooks/useRefreshToken";

const PersistLogin = () => {
    const { persist } = useAuth()
    const { refreshTokenLoading } = useRefreshToken();
    const logout = useLogout();
    const navigate = useNavigate();



    useEffect(() => {
    const sessionSigned = JSON.parse(sessionStorage.getItem("sessionSigned"))

        const signOut = async () => {
            await logout();
            navigate('/sign-in');
        }
        if (!sessionSigned && !persist) {
            signOut()
        }
    }, [])

    return (
        <>
            {refreshTokenLoading
                ? <p>Loading...</p>
                : <Outlet />
            }
        </>
    )

}

export default PersistLogin
