
import { useQuery } from 'react-query';
import { axiosPublic } from '../axios/axios';
import { refreshToken } from '../utils/api/auth/auth-utils';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
      const response = await axiosPublic.get('/refresh', {
          withCredentials: true
      }); 
      localStorage.setItem('refreshToken',response.data.newRefreshToken);
      localStorage.setItem('accessToken',response.data.accessToken);
      setAuth(prev => {
          return { 
              ...prev, 
              roles: response.data.roles,
              accessToken: response.data.accessToken,
              refreshToken: response.data.newRefreshToken
          }
      });
      return response.data.accessToken;
  }
  return refresh;

    // const { status, refetch } = useQuery('refreshToken', refreshToken, {
    //     enabled: enabled,
    //     refetchInterval:1000 * 60 *60 * 10,
    //     // cacheTime:1000 * 60 * 60, 
    //     onSuccess: (data) => {
    //       setAuth((prev) => {

    //         return {
    //           ...prev, 
    //           roles:data.roles,
    //           accessToken:data.accessToken}
    //     })
    //     },
    //   })

    // return {
    //   refreshTokenLoading: status === 'loading',
    //   refreshingToken: refetch,
    // }
};

export default useRefreshToken;



