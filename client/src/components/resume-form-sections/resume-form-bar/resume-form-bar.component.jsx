import React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import useCrudResume from '../../../hooks/useCrudResume';
import useResume from '../../../hooks/useResume';
import useGetUserId from '../../../hooks/useGetUserId';
import objectToFormData from '../../../utils/object-to-formdata';


const ResumeFormBar = () => {
  const queryClient = useQueryClient();
  const {createResume} = useCrudResume();
  const { mutateAsync } = useMutation(createResume);
  const {  industry, pentaContact, language, resumeContent } = useResume();
  const getUserId = useGetUserId()
  const navitage = useNavigate()
  const saveResume = (event) => {
    const userId = getUserId()
    const body = {
      industry: industry,
      lang: language,
      pentaContact: pentaContact,
      data: resumeContent,
      author: userId
    };
    console.log('body', body);
    const formData = objectToFormData(body);
    mutateAsync(formData, {

      onSuccess: (data) => {
        queryClient.invalidateQueries("resumesForListing");
      },
    });
  };


  const saveAndPrintResume = ()=>{
    console.log('langeding click');
    const userId = getUserId()
    const body = {
      industry: industry,
      lang: language,
      pentaContact: pentaContact,
      data: resumeContent,
      author: userId
    };
    const formData = objectToFormData(body);
    mutateAsync(formData, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries("resumesForListing");
        navitage('/resume-construction')

      },
    });
  }
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
        <Button variant="outline" sx={{ color: 'white' }} onClick={saveAndPrintResume} >
          <DownloadIcon />
          Download PDF
        </Button>

      <Button sx={{ color: 'white' }} onClick={saveResume}>
        <SaveIcon />
        Save
      </Button>
    </div>




  );
};

export default ResumeFormBar;