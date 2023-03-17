import React, { useEffect } from 'react';
import ResumePage from '../resume-page/resume-page.component';
import Grid from '@mui/material/Grid';
import './resume-preview.style.scss'
import useResume from '../../hooks/useResume';
import i18n from 'i18next';


const ResumePreview = () => {
  const { pagesContent, industry, pentaContact, language, resumeContent, setContentToFill, setPagesContent } = useResume();
  useEffect(() => {
    setContentToFill(resumeContent)
    setPagesContent([{}])
  }, [resumeContent])


  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language])


  return (
    <Grid
    id="resume-preview"
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
          .map((elem, index) => {
            const pageId = 'resume-page-' + index
            return (
              <ResumePage key={index} industry={industry} pentaContact={pentaContact} content={elem} index={index} id={pageId} />
            )

          })
      }


    </Grid>
  );
};

export default ResumePreview;