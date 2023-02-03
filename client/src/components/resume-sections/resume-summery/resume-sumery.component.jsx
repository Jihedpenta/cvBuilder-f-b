import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import ResumeSectionHeading from '../resume-section-heading/resume-section-heading.component';

const ResumeSummery = ({summary, innerRef}) => {

    return (
        <Grid container ref={innerRef}>
                <ResumeSectionHeading titleKey="summary" withoutDevider/>

                <Grid item xs={12} sm={12} md={12}>
                    <Typography>{summary}</Typography>
                </Grid>
            </Grid>
    );
};

export default ResumeSummery;