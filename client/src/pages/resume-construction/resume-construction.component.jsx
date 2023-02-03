import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import ResumeFillInForm from '../../components/resume-fill-in-form/resume-fill-in-form.component';
import ResumePreview from '../../components/resume-preview/resume-preview.component';

import Pentabell from '../../fonts/Pentabell-Regular.ttf';

export default function ResumeConstruction() {

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
  });
  theme = responsiveFontSizes(theme);

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component="main">
        <ResumePreview />
        <ResumeFillInForm />
      </Grid>
    </ThemeProvider>

  );
}