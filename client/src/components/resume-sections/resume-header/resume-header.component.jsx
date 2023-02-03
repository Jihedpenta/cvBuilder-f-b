import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ResumeHeaderInfo from './resume-header-info/resume-header-info.component';
import ResumeTopHeader from './resume-top-header/resume-top-header.component';


const ResumeHeader = ({ headerData, primaryColor, logo_link, innerRef }) => {

    return (
        // <div ref={innerRef}>
        <Grid container ref={innerRef}>
            <ResumeTopHeader headerData={headerData} primaryColor={primaryColor} logo_link={logo_link}  />
            <ResumeHeaderInfo headerData={headerData} primaryColor={primaryColor}  />
        </Grid>
    );
};

export default ResumeHeader;