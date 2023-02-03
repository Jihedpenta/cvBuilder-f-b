import React, { useContext, useEffect } from 'react';
import ResumePage from '../resume-page/resume-page.component';
import Grid from '@mui/material/Grid';
import './resume-preview.style.scss'
// import ResumeHeader from '../resume-sections/resume-header/resume-header.component';
// import { RESUME_DATA } from '../../resume_data';

// import { PAGES_CONTENT } from "../../pages_content";
import { PagesContentContext } from '../../context/pages-content.context';

const ResumePreview = () => {
  const {pagesContent, industry,pentaContact,language, resumeContent, setContentToFill, setPagesContent }= useContext(PagesContentContext);
  console.log("preview rendred");




  // const [pagesContent, setPagesContent] = useState(PAGES_CONTENT.pages)




  useEffect(() => {
    console.log('resume content edited ')
    // setPagesContent(PAGES_CONTENT.pages)
    setContentToFill(resumeContent.data)
    setPagesContent([{}])
 
  }, [resumeContent])



  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={5}
      sx={{
        padding: '20px'
      }}
    >
      {/** 
        Object.keys(pagesContent)
        .map((elem, index) => {        
          return (
            <ResumePage key={index} industry={industry} pentaContact={pentaContact} lang={language} content={pagesContent[elem]} index={index}/>
          )

        })
       */}

      {
       pagesContent
        .map((elem, index , array) => {        
          return (
            <ResumePage key={index} industry={industry} pentaContact={pentaContact} lang={language} content={elem} index={index}/>
          )

        })
      }

    </Grid>
  );
};

export default ResumePreview;