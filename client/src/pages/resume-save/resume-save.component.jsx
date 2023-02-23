import React, { useEffect } from 'react';
import ResumePage from '../../components/resume-page/resume-page.component';
import Grid from '@mui/material/Grid';
import useResume from '../../hooks/useResume';
import i18n from 'i18next';
import { Button, createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import html2pdf from 'html2pdf.js';
import Pentabell from '../../fonts/Pentabell-Regular.ttf';

const ResumeSave = () => {

    const { pagesContent, industry, pentaContact, language, resumeContent, setContentToFill, setPagesContent } = useResume();
    useEffect(() => {
        setContentToFill(resumeContent)
        setPagesContent([{}])
        i18n.changeLanguage(language);
    }, [resumeContent, language, industry, pentaContact])

    const handleDownloadPDF = () => { //handleDownloadAnonymPDF
        // console.log(resumeContent.h);
        const candidateName = resumeContent.header.firstName + " " + resumeContent.header.lastName
        const pages = []
        for (let i = 0; i < pagesContent.length; i++) {
            const id = 'resume-page-' + i.toString()
            const page = document.getElementById(id);
            pages.push(page)
        }
        var opt = {
            filename: candidateName + '-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true, },
        };
        let doc = html2pdf().set(opt).from(pages[0]).toPdf()
        for (let j = 1; j < pages.length; j++) {
            doc = doc.get('pdf').then(
                pdf => { pdf.addPage() }
            ).from(pages[j]).toContainer().toCanvas().toPdf()
        }
        doc.save()
    }

    const handleDownloadAnonymPDF = () => { //handleDownloadAnonymPDF
        const candidateName = resumeContent.header.firstName + " " + resumeContent.header.lastName

        const pages = []
        for (let i = 0; i < pagesContent.length; i++) {
            const id = 'resume-page-anonym-' + i.toString()
            const page = document.getElementById(id);
            pages.push(page)
        }
        var opt = {
            filename: candidateName + '-anonym-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true, },
        };
        let doc = html2pdf().set(opt).from(pages[0]).toPdf()
        for (let j = 1; j < pages.length; j++) {
            doc = doc.get('pdf').then(
                pdf => { pdf.addPage() }
            ).from(pages[j]).toContainer().toCanvas().toPdf()
        }
        doc.save()
    }


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
            <Grid
                container >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    sx={{
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Button onClick={handleDownloadPDF} variant='outlined' sx={{
                        marginBottom: '30px'
                    }}>Save Resume as PDF</Button>

                    {
                        pagesContent
                            .map((elem, index) => {
                                const pageId = 'resume-page-' + index
                                console.log(pageId);
                                return (
                                    <ResumePage key={index} industry={industry} pentaContact={pentaContact} content={elem} index={index} id={pageId} />
                                )

                            })
                    }


                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    sx={{
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Button onClick={handleDownloadAnonymPDF} variant='outlined' sx={{
                        marginBottom: '30px'
                    }}>Save Anonymous Resume as PDF</Button>
                    {
                        pagesContent
                            .map((elem, index) => {
                                const pageId = 'resume-page-anonym-' + index
                                console.log(pageId);
                                return (
                                    <ResumePage key={index} industry={industry} pentaContact={pentaContact} content={elem} index={index} id={pageId} anonymous={true} />
                                )

                            })
                    }


                </Grid>

            </Grid>
        </ThemeProvider>
    );
};

export default ResumeSave;