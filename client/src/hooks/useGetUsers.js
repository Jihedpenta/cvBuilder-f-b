import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const useGetUsers = () => {
    const axiosPrivate = useAxiosPrivate();
    const [controller, setController] = useState(new AbortController());

    const getUsers = async () => {
        try {
            const {data} = await axiosPrivate.get('/users', {
                signal: controller.signal
            });
            return data
        } catch (error) {
            console.log(error);
            throw Error(error)
        }
    }
    return getUsers
}
export default useGetUsers;
