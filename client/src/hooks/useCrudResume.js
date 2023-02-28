import useAxiosPrivate from "./useAxiosPrivate";

const useCrudResume = () => {
    const axiosPrivate = useAxiosPrivate();

    const createResume = async (body) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            const {data} = await axiosPrivate.post('/resumes', body, config);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error)
        }
    }
    const getResumesById = async (id) => {
        console.log(id);
        try {
            const {data} = await axiosPrivate.get('/resumes/'+id);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error)
        }
    }
    const getResumesByAuthorId = async (id) => {
        try {
            const {data} = await axiosPrivate.get('/resumes/author/'+id);
            return data
        } catch (error) {
            console.log(error);
            throw Error(error)
        }
    }
    const getAllResumes = async (id) => {
        try {
            const {data} = await axiosPrivate.get('/resumes');
            return data
        } catch (error) {
            console.log(error);
            throw Error(error)
        }
    }
    return {createResume, getResumesByAuthorId, getAllResumes, getResumesById}
}
export default useCrudResume;
