import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



import './resume-fill-in-form.style.scss'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { PagesContentContext } from '../../context/pages-content.context';
import ResumeFormBar from '../resume-form-sections/resume-form-bar/resume-form-bar.component';
import GeneralInfoForm from '../resume-form-sections/general-info-form/general-info-form.component';
import { useEffect } from 'react';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import ResumeTypeForm from '../resume-form-sections/resume-type-form/resume-type-form.component';

const ResumeFillInForm = () => {
  const containerRef = useRef()
  const navRef = useRef()
  const [navWidth, setNavWidth] = useState(0)
  const { setResumeContent, resumeContent } = useContext(PagesContentContext);
  const handleClick = () => {
    const newContent = JSON.parse(JSON.stringify(resumeContent));
    console.log(newContent.data.experiences)
    newContent.data.experiences.push(newContent.data.experiences[0])
    newContent.data.experiences.push(newContent.data.experiences[1])
    newContent.data.experiences.push(newContent.data.experiences[2])

    newContent.data.projects.push(newContent.data.projects[0])
    newContent.data.projects.push(newContent.data.projects[0])
    setResumeContent(newContent)

  }
  useEffect(() => {
    setNavWidth(containerRef.current.offsetWidth)
  })
  return (
    <Grid item
      xs={12}
      sm={6}
      md={6}
      component={Paper}
      elevation={6}
      square
      ref={containerRef}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
      <ResumeTypeForm />
        <GeneralInfoForm />

        {/** 

        <Button onClick={handleClick}>Click Here</Button>
         
           
*/}
        <div ref={navRef} style={{
          width: navWidth
        }}>
        <ResumeFormBar/>

        </div>
      </Box>


    </Grid>
  );
};

export default ResumeFillInForm;
