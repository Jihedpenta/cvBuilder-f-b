import useAxiosPrivate from "./useAxiosPrivate";

const useCreateUser = () => {
    const axiosPrivate = useAxiosPrivate();

    const createUser = async (body) => {
        try {
            const {data} = await axiosPrivate.post('/register', body);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error)
        }
    }
    return createUser
}
export default useCreateUser;
