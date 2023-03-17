import React, { useEffect } from "react";
import ResumePage from "../../components/resume-page/resume-page.component";
import Grid from "@mui/material/Grid";
import useResume from "../../hooks/useResume";
import {
  Button,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import html2pdf from "html2pdf.js";
import Pentabell from "../../fonts/Pentabell-Regular.ttf";
import useCrudResume from "../../hooks/useCrudResume";
import { useParams } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ResumeSave = () => {
  const {
    pagesContent,
    industry,
    pentaContact,
    resumeContent,
    setResumeContent,
    setIndustry,
    setLanguage,
    setPentaContact,
    setContentToFill,
    setPagesContent,
  } = useResume();

  const { getResumesById } = useCrudResume();
  let { resumeId } = useParams();
  const setResumeInAppContext = async (id) => {
    const resume = await getResumesById(id);
    console.log(resume);
    setResumeContent(resume.data);
    setIndustry(resume.industry);
    setLanguage(resume.lang);
    setPentaContact(resume.pentaContact);
  };

  const cleanState = () => {
    setResumeContent({});
    setPagesContent([{}]);
    setContentToFill({});
    setIndustry("");
    setIndustry("");
    setPentaContact({});
  };
  useEffect(() => {
    console.log(resumeId);
    setResumeInAppContext(resumeId);

    return cleanState();
  }, []);

  useEffect(() => {
    setContentToFill(resumeContent);
    setPagesContent([{}]);
  }, [resumeContent]);

  // useEffect(() => {
  // console.log('new resume content', resumeContent);
  // console.log('contentToFill', contentToFill);

  //     setContentToFill(resumeContent)
  //     setPagesContent([{}])
  //     i18n.changeLanguage(language);
  // }, [resumeContent, language, industry, pentaContact])

  const handleDownloadPDF = () => {
    //handleDownloadAnonymPDF
    // console.log(resumeContent.h);
    const candidateName =
      resumeContent.header.firstName + " " + resumeContent.header.lastName;
    const pages = [];
    for (let i = 0; i < pagesContent.length; i++) {
      const id = "resume-page-" + i.toString();
      const page = document.getElementById(id);
      pages.push(page);
    }
    var opt = {
      filename: candidateName + "-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        putOnlyUsedFonts: true,
      },
    };
    let doc = html2pdf().set(opt).from(pages[0]).toPdf();
    for (let j = 1; j < pages.length; j++) {
      doc = doc
        .get("pdf")
        .then((pdf) => {
          pdf.addPage();
        })
        .from(pages[j])
        .toContainer()
        .toCanvas()
        .toPdf();
    }
    doc.save();
  };

  const handleDownloadAnonymPDF = () => {
    //handleDownloadAnonymPDF
    const candidateName =
      resumeContent.header.firstName + " " + resumeContent.header.lastName;

    const pages = [];
    for (let i = 0; i < pagesContent.length; i++) {
      const id = "resume-page-anonym-" + i.toString();
      const page = document.getElementById(id);
      pages.push(page);
    }
    var opt = {
      filename: candidateName + "-anonym-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        putOnlyUsedFonts: true,
      },
    };
    let doc = html2pdf().set(opt).from(pages[0]).toPdf();
    for (let j = 1; j < pages.length; j++) {
      doc = doc
        .get("pdf")
        .then((pdf) => {
          pdf.addPage();
        })
        .from(pages[j])
        .toContainer()
        .toCanvas()
        .toPdf();
    }
    doc.save();
  };

  let theme = createTheme({
    typography: {
      fontFamily: "Pentabell",
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
        main: "#245097",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        id="vccc"
        sx={{
            marginTop: "20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabContext value={value} centered>
            <TabList onChange={handleChange} aria-label="" centered>
              <Tab label="Resume" value="1" />
              <Tab label="Anonymous Resume" value="2" />
            </TabList>
          <TabPanel
            value="1"
            
            sx={{
                padding:0,
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Button
              onClick={handleDownloadPDF}
              variant="outlined"
              sx={{
                marginTop: "20px",
                marginBottom: "20px",

              }}
            >
              <FileDownloadIcon /> Download Resume
            </Button>
            {pagesContent.map((elem, index) => {
              const pageId = "resume-page-" + index;
              return (
                <ResumePage
                  key={index}
                  industry={industry}
                  pentaContact={pentaContact}
                  content={elem}
                  index={index}
                  id={pageId}
                />
              );
            })}
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              display: "flex",
              padding:0,
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <Button
              onClick={handleDownloadAnonymPDF}
              variant="outlined"
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <FileDownloadIcon /> Download Anonymous Resume
            </Button>
            {pagesContent.map((elem, index) => {
              const pageId = "resume-page-anonym-" + index;
              return (
                <ResumePage
                  key={index}
                  industry={industry}
                  pentaContact={pentaContact}
                  content={elem}
                  index={index}
                  id={pageId}
                  anonymous={true}
                />
              );
            })}
          </TabPanel>
        </TabContext>
      </Grid>
      {/* <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleDownloadPDF}
            variant="outlined"
            sx={{
              marginBottom: "30px",
            }}
          >
            Save Resume as PDF
          </Button>

          {pagesContent.map((elem, index) => {
            const pageId = "resume-page-" + index;
            console.log(pageId);
            return (
              <ResumePage
                key={index}
                industry={industry}
                pentaContact={pentaContact}
                content={elem}
                index={index}
                id={pageId}
              />
            );
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleDownloadAnonymPDF}
            variant="outlined"
            sx={{
              marginBottom: "30px",
            }}
          >
            Save Anonymous Resume as PDF
          </Button>
          {pagesContent.map((elem, index) => {
            const pageId = "resume-page-anonym-" + index;
            console.log(pageId);
            return (
              <ResumePage
                key={index}
                industry={industry}
                pentaContact={pentaContact}
                content={elem}
                index={index}
                id={pageId}
                anonymous={true}
              />
            );
          })}
        </Grid>
      </Grid> */}
    </ThemeProvider>
  );
};

export default ResumeSave;
