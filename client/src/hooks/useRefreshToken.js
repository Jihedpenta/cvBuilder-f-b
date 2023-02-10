
import { useQuery } from 'react-query';
import { refreshToken } from '../utils/api/auth/auth-utils';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth()
    console.log('use refresh token fired');
    const { status,data, isError, refetch } = useQuery('refreshToken', refreshToken, {
      fetchPolicy: 'cache-only',
        onSuccess: (data) => {
          setAuth((prev) => {
            console.log("data", data);
            console.log("prev", prev);
            return {
              ...prev, 
              roles:data.roles,
              accessToken:data.accessToken}
        })
        },
      })

    return {
      refreshTokenLoading: status === 'loading',
      refreshingToken: refetch,
      token: data
    }
};

export default useRefreshToken;



