import { axiosPrivate } from "../../../axios/axios"

export const loginUser = async ({email, pwd})=>{
    try {
    const {data} = await axiosPrivate.post('/auth', {email, pwd})
    return data
    } catch (error) {
        throw Error(error.response.data)
    }
}

export const refreshToken = async () => {
    try {
        const {data} = await axiosPrivate.get('/refresh');
        // console.log('refresh token fired', data);
        return data
    } catch (error) {
        throw Error(error.response.data)
    }
}