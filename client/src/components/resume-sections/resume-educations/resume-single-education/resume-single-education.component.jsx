import { Grid, Typography } from '@mui/material';
import React from 'react';

const ResumeSingleEducation = ({ education }) => {
    return (
        <Grid container>
            <Grid item md={3}>
                <Typography>
                    {education.startDate}
                </Typography>
                <Typography>
                    {education.endDate}
                </Typography>
            </Grid>
            <Grid item md={9}>
                <Typography sx={{
                    fontWeight: 'bold'
                }}>
                    {education.diploma}
                </Typography>
                <Typography>
                    {education.university}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ResumeSingleEducation;