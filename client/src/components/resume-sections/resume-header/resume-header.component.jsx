import { Grid } from '@mui/material';
import React from 'react';
import ResumeHeaderInfo from './resume-header-info/resume-header-info.component';
import ResumeTopHeader from './resume-top-header/resume-top-header.component';


const ResumeHeader = ({ headerData, primaryColor, logoLink, innerRef }) => {

    return (
        // <div ref={innerRef}>
        <Grid container ref={innerRef}>
            <ResumeTopHeader headerData={headerData} primaryColor={primaryColor} logoLink={logoLink}  />
            <ResumeHeaderInfo headerData={headerData} primaryColor={primaryColor}  />
        </Grid>
    );
};

export default ResumeHeader;