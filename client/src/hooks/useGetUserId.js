import jwt_decode from "jwt-decode";
import useAuth from './useAuth';


const useGetUserId = () => {
    const { auth } = useAuth()
    const getUserId = () => {
        try {
            const decoded = jwt_decode(auth.accessToken);
            console.log('id :: ',decoded.UserInfo.id );
            return decoded.UserInfo.id;
        } catch (error) {
            console.log(error);
            //   return null;
        }
    }
    return getUserId
}

export default useGetUserId

