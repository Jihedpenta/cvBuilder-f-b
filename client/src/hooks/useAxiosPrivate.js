import { axiosPrivate } from "../axios/axios";
import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    // const { refreshingToken } = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (auth?.accessToken) {
                    if (!config.headers['Authorization']) {
                        config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                    }
                }

                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    prevRequest.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;