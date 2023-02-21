
import { useQuery } from 'react-query';
import { refreshToken } from '../utils/api/auth/auth-utils';
import useAuth from './useAuth';

const useRefreshToken = (enabled = false) => {
    const { setAuth } = useAuth()
    const { status, refetch } = useQuery('refreshToken', refreshToken, {
        enabled: enabled,
        refetchInterval:1000 * 30,
        // cacheTime:1000 * 60 * 60, 
        onSuccess: (data) => {
          setAuth((prev) => {

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
    }
};

export default useRefreshToken;



