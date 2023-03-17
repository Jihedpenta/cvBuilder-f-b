import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import ResumeFillInForm from '../../components/resume-fill-in-form/resume-fill-in-form.component';
import ResumePreview from '../../components/resume-preview/resume-preview.component';

import Pentabell from '../../fonts/Pentabell-Regular.ttf';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useResume from '../../hooks/useResume';
import useCrudResume from '../../hooks/useCrudResume';
import { useLocation } from "react-router-dom";
import './resume-construction.style.scss'

export default function ResumeConstruction() {
  const location = useLocation();

  const {
    setResumeContent,
    setIndustry,
    setLanguage,
    setPentaContact, 
    setPagesContent,
    setContentToFill,
    setResumeId
  } =useResume()
  const { getResumesById } = useCrudResume()
  let { resumeId } = useParams();
  const setResumeInAppContext = async (id) => {
    const resume = await getResumesById(id)
    setResumeContent(resume.data)
    setIndustry(resume.industry)
    setLanguage(resume.lang)
    setPentaContact(resume.pentaContact)
    setResumeId(resume._id)
  }
  const cleanState = ()=>{
    setResumeContent({});
    setPagesContent([{}]);
    setContentToFill({});
    setIndustry('');
    setIndustry('');
    setPentaContact({});
    setResumeId('')

}
  useEffect(() => {
    if(resumeId){
      setResumeInAppContext(resumeId)
    }else{
      cleanState()
    }
  }, [])

  useEffect(() => {
    if( location.pathname === '/resume-construction'){
      cleanState()
    }
  }, [location]);

  let theme = createTheme({
    typography: {
      fontFamily: 'Pentabell',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Pentabell';
            src: local('Pentabell'), url(${Pentabell});
          }
        `,
      },
    },
    palette: {
      primary: {
        main: '#245097',
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid id="create-resume-dash" container spacing={2} columns={12}>
        <Grid item md={12} lg={12} xl={6}>
          <ResumePreview />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <ResumeFillInForm />
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}