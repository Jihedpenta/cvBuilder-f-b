import React from 'react';
import {  Grid, Typography } from '@mui/material';
import ResumeDevider from '../resume-devider/resume-devider.component';
import { useTranslation } from 'react-i18next';

const ResumeSectionHeading = ({primaryColor,titleKey,withoutDevider}) => {
    const { t } = useTranslation();
    return (
        <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h5" sx={{
            marginTop: "1.25rem",
            textTransform: 'uppercase'
        }}>{t(titleKey)}</Typography>
        {!withoutDevider && <ResumeDevider color={primaryColor}  />}
    </Grid>
    );
};

export default ResumeSectionHeading;