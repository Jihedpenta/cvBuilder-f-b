import { axiosPrivate } from "../axios/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const {refreshingToken,token} = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        console.log('/*/*/*/*//*/+++*/*/*/*/*/*/*/*/')
        console.log('axios private fired')
        console.log('/*/*/*/*//*/+++*/*/*/*/*/*/*/*/')
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    console.log('/*/*/*/*//*/+++*/*/*/*/*/*/*/*/')
                    console.log('!config.headers[Authorization]')
                    console.log('/*/*/*/*//*/+++*/*/*/*/*/*/*/*/')
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                console.log('/*/*/*/*//*/+++*/*/*/*/*/*/*/*/')
                console.log('config.headers[Authorization]')
                console.log('/*/*/*/*//*/+++*/*/*/*/*/*/*/*/')
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {


                    prevRequest.sent = true;
                    const data = await refreshingToken();
                    prevRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, token])

    return axiosPrivate;
}

export default useAxiosPrivate;