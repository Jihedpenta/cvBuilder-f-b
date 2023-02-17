import React, { useEffect } from 'react';
import ResumePage from '../resume-page/resume-page.component';
import Grid from '@mui/material/Grid';
import './resume-preview.style.scss'
import useResume from '../../hooks/useResume';

const ResumePreview = () => {
  const {pagesContent, industry,pentaContact,language, resumeContent, setContentToFill, setPagesContent }=useResume();
  console.log("preview rendred");
  useEffect(() => {
    console.log('resume content edited ')
    setContentToFill(resumeContent.data)
    setPagesContent([{}])
 
  }, [resumeContent])



  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      sx={{
        padding: '20px'
      }}
    >

      {
       pagesContent
        .map((elem, index ) => {        
          return (
            <ResumePage key={index} industry={industry} pentaContact={pentaContact} lang={language} content={elem} index={index}/>
          )

        })
      }

    </Grid>
  );
};

export default ResumePreview;