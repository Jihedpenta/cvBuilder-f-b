import React, { useEffect } from 'react';
import {  Grid } from '@mui/material';
import ResumeSingleProject from '../resume-single-project/resume-single-project.component';
import ResumeSectionHeading from '../../resume-section-heading/resume-section-heading.component';
const ResumeProjectsList =  ({projects , primaryColor, innerRef}) => {

    return (
        <Grid container ref={innerRef}>
        {projects['firstDisplay'] && <ResumeSectionHeading primaryColor={primaryColor} titleKey="projects" />}

        {projects['data'].map((elem, index) => {
            return (
                <Grid item xs={12} sm={12} md={12} key={index}>
                    <ResumeSingleProject project={elem} />
                </Grid>
            )
        })}
    </Grid>
    );
};


export default ResumeProjectsList;