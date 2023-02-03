import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';

const ResumeListing = () => {
    const navigate = useNavigate();

    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/sign-in');
    }
    return (
        <div>
            Resume listing component

            <Link to="/resume-construction">Create new resume</Link>
            <button onClick={signOut}>Sign Out</button>

        </div>
    );
};

export default ResumeListing;