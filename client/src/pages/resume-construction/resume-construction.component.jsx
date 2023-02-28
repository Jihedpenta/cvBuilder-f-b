import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import ResumeFillInForm from '../../components/resume-fill-in-form/resume-fill-in-form.component';
import ResumePreview from '../../components/resume-preview/resume-preview.component';

import Pentabell from '../../fonts/Pentabell-Regular.ttf';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useResume from '../../hooks/useResume';
import useCrudResume from '../../hooks/useCrudResume';

export default function ResumeConstruction() {
  const {
    setResumeContent,
    setIndustry,
    setLanguage,
    setPentaContact, 
    setPagesContent,
    setContentToFill
  } =useResume()
  const { getResumesById } = useCrudResume()
  let { resumeId } = useParams();
  const setResumeInAppContext = async (id) => {
    const resume = await getResumesById(id)
    setResumeContent(resume.data)
    setIndustry(resume.industry)
    setLanguage(resume.lang)
    setPentaContact(resume.pentaContact)
  }
  const cleanState = ()=>{
    setResumeContent({});
    setPagesContent([{}]);
    setContentToFill({});
    setIndustry('');
    setIndustry('');
    setPentaContact({});
}
  useEffect(() => {
    if(resumeId){
      setResumeInAppContext(resumeId)
    }else{
      cleanState()
    }
  }, [])
  
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
      <Grid container>
        <ResumePreview />
        <ResumeFillInForm />
      </Grid>
    </ThemeProvider>

  );
}