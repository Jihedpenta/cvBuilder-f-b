import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import ResumeSectionHeading from '../resume-section-heading/resume-section-heading.component';

const ResumeSkills = ({ skills, primaryColor, innerRef }) => {

    return (
        <Grid container ref={innerRef}>
            <ResumeSectionHeading primaryColor={primaryColor} titleKey="skills" />
            {skills.map((elem, index) => {
                return (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        &#2022; {elem}
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default ResumeSkills;