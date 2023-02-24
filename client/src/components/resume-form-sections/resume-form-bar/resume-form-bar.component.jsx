import React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import useCrudResume from '../../../hooks/useCrudResume';
import useResume from '../../../hooks/useResume';
import useAuth from '../../../hooks/useAuth';
import useGetUserId from '../../../hooks/useGetUserId';
import objectToFormData from '../../../utils/object-to-formdata';


const ResumeFormBar = () => {
  const queryClient = useQueryClient();
  const {createResume} = useCrudResume();
  const { mutateAsync } = useMutation(createResume);
  const {  industry, pentaContact, language, resumeContent } = useResume();
  const getUserId = useGetUserId()
  const saveResume = (event) => {
    const userId = getUserId()
    console.log('auth', userId);

    console.log(industry, pentaContact, language, resumeContent );
    // const data = new FormData(event.currentTarget);
    const body = {
      industry: industry,
      lang: language,
      pentaContact: pentaContact,
      data: resumeContent,
      author: userId
    };

    console.log(body.data.header.imageFile instanceof File)
    const formData = objectToFormData(body);

    mutateAsync(formData, {
      onSuccess: (data) => {
        console.log('resume creation success');

        console.log(data);
        // queryClient.invalidateQueries("users");
      },
    });
  };
  return (

    <div style={{
      backgroundColor: '#245097',
      width: 'inherit',
      bottom: 0,
      position: 'fixed',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Link to="/resume" component={Button} variant="outline"  style={{ textDecoration: 'none' }}>
        <Button variant="outline" sx={{ color: 'white' }} >
          <DownloadIcon />
          Download PDF
        </Button>
      </Link>

      <Button sx={{ color: 'white' }} onClick={saveResume}>
        <SaveIcon />
        Save
      </Button>
    </div>




  );
};

export default ResumeFormBar;