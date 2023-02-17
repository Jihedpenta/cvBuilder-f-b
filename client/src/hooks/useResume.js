import { useContext } from "react";
import { ResumeContext } from '../context/resume.context';

const useResume = () => {
    return useContext(ResumeContext);
}

export default useResume;