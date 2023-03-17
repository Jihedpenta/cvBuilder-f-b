// import useAxiosPrivate from "./useAxiosPrivate";
import { axiosPrivate } from "../axios/axios";

const useCrudUser = () => {
    // const axiosPrivate = useAxiosPrivate();

    const createUser = async (body) => {
        try {
            const {data} = await axiosPrivate.post('/register', body);
            return data
        } catch (error) {
            throw Error(error)
        }
    }

    const editUser = async (body) => {
        try {
            const {data} = await axiosPrivate.put('/users', body);
            return data
        } catch (error) {
            throw Error(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            const {data} = await axiosPrivate.delete('/users/'+id);
            return data
        } catch (error) {
            throw Error(error)
        }
    }
    return {createUser, editUser, deleteUser}
}
export default useCrudUser;
