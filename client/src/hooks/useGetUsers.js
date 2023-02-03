import useAxiosPrivate from "./useAxiosPrivate";

const useGetUsers = () => {
    const axiosPrivate = useAxiosPrivate();

    const getUsers = async (signal) => {
        try {
            const {data} = await axiosPrivate.get('/users', {
                signal: signal
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
