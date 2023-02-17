import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './resume-fill-in-form.style.scss'
import ResumeFormBar from '../resume-form-sections/resume-form-bar/resume-form-bar.component';
import GeneralInfoForm from '../resume-form-sections/general-info-form/general-info-form.component';
import { useEffect } from 'react';
import { useState } from 'react';
import ResumeTypeForm from '../resume-form-sections/resume-type-form/resume-type-form.component';
import SummeryForm from '../resume-form-sections/summery-form/summery-form.component';
import EducationForm from '../resume-form-sections/education-form/education-form.component';
import CertificationForm from '../resume-form-sections/certification-form/certification-form.component';
import ExperienceForm from '../resume-form-sections/experience-form/experience-form.component';
import ProjectsForm from '../resume-form-sections/projects-form/projects-form.component';
import SkillsForm from '../resume-form-sections/skills-form/skills-form.component';
import ToolsForm from '../resume-form-sections/tools-form/tools-form.component';
import LanguagesForm from '../resume-form-sections/languages-form/languages-form.component';
import useResume from '../../hooks/useResume';

const ResumeFillInForm = () => {
  const containerRef = useRef()
  const navRef = useRef()
  const [navWidth, setNavWidth] = useState(0)
  const { setResumeContent, resumeContent } = useResume();
 
  useEffect(() => {

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setNavWidth(width);

        // Do something with the new width and height
        console.log(width, height);
      }
    });

    resizeObserver.observe(containerRef.current);

    // Disconnect the observer when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  },[])

  
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
        <SummeryForm />
        <EducationForm />
        <CertificationForm />
        <ExperienceForm/> 
        <ProjectsForm />
        <SkillsForm />
        <ToolsForm />
        <LanguagesForm />

        <div  style={{
          width: navWidth
        }}>
          <ResumeFormBar />

        </div>
      </Box>


    </Grid>
  );
};

export default ResumeFillInForm;
