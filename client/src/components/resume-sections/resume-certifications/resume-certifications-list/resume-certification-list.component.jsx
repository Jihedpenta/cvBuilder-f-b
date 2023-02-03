import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ResumeSectionHeading from '../../resume-section-heading/resume-section-heading.component';
import ResumeSingleCertification from '../resume-single-certification/resume-single-certification.component';

const ResumeCertificationList = ({certifications , primaryColor,innerRef}) => {
    

    return (
        <Grid container ref={innerRef}>
            {certifications['firstDisplay'] && <ResumeSectionHeading primaryColor={primaryColor} titleKey="certification" />}
            {certifications['data'].map((elem, index) => {
                return (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                        <ResumeSingleCertification certification={elem} />
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default ResumeCertificationList;