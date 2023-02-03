import { Grid, Typography } from '@mui/material';
import React from 'react';
import DOMPurify from 'dompurify';

const ResumeSingleExperience = ({ experience }) => {
    return (
        <Grid container>
            <Grid item md={3}>
                <Typography>
                    {experience.startDate}
                </Typography>
                <Typography>
                    {experience.endDate}
                </Typography>
            </Grid>
            <Grid item md={9}>
                <Typography sx={{fontWeight: 'bold'}}>
                    {experience.jobTitle}
                </Typography>
                <Typography>
                   <i>{experience.company} - {experience.location}</i> 
                </Typography>
                <Typography component="div">
                    {<div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(experience.description) }} /> }
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ResumeSingleExperience;