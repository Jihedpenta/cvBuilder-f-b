import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import ResumeSingleExperience from '../resume-single-experience/resume-single-experience.component';
import ResumeSectionHeading from '../../resume-section-heading/resume-section-heading.component';

const ResumeExperienceList = ({ experiences, primaryColor, innerRef }) => {

    return (
        <Grid container ref={innerRef}>
            {experiences['firstDisplay'] && <ResumeSectionHeading primaryColor={primaryColor} titleKey="work experience" />}

            {experiences['data'].map((elem, index) => {
                return (
                    <Grid item xs={12} sm={12} md={12} key={index} sx={{
                        marginBottom:'10px'
                    }}>
                        <ResumeSingleExperience experience={elem} />
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default ResumeExperienceList;