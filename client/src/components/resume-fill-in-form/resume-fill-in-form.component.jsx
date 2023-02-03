import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



import './resume-fill-in-form.style.scss'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { PagesContentContext } from '../../context/pages-content.context';
import ResumeFormBar from '../resume-form-sections/resume-form-bar/resume-form-bar.component';


const ResumeFillInForm = () => {
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
  return (
    <Grid item
      xs={12}
      sm={7}
      md={7}
      component={Paper}
      elevation={6}
      square
    >
      <Box
        sx={{

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // width:'100%',
          // backgroundColor:'red'
        }}
      >
        <ResumeFormBar />


        <Card sx={{ maxWidth: '80%', mt: 2 }}>
          <CardContent>
            <Box >

              <Typography gutterBottom variant="h5" component="div">
                General Info
              </Typography>
              <Grid>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  sx={{ mb: 2, mr: 2 }}

                />

                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  sx={{ mb: 2, mr: 2 }}

                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  sx={{ mb: 2, mr: 2 }}

                />

                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                />
              </Grid>
              <Grid>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  sx={{ mb: 2, mr: 2 }}

                />

                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  sx={{ mb: 2, mr: 2 }}

                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  sx={{ mb: 2, mr: 2 }}

                />

                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                />
              </Grid>
            </Box>


          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Add new
            </Button>
          </CardActions>
        </Card>


        <Button onClick={handleClick}>Click Here</Button>
      </Box>
    </Grid>
  );
};

export default ResumeFillInForm;
