import { Grid } from '@mui/material';
import React from 'react';
import ResumeHeaderInfoAnonym from './resume-header-info-anonym/resume-header-info-anonym.component';
import ResumeHeaderInfo from './resume-header-info/resume-header-info.component';
import ResumeTopHeader from './resume-top-header/resume-top-header.component';


const ResumeHeader = ({ headerData, primaryColor, logoLink, innerRef, anonymous }) => {
    // console.log('anonymous, anonymous', anonymous);
    return (
        // <div ref={innerRef}>
        <Grid container ref={innerRef}>
            <ResumeTopHeader headerData={headerData} primaryColor={primaryColor} logoLink={logoLink} anonymous={anonymous} />
            {
                !anonymous ? 
                <ResumeHeaderInfo headerData={headerData} primaryColor={primaryColor}  />
                :
                <ResumeHeaderInfoAnonym headerData={headerData} primaryColor={primaryColor}  />


            }
        </Grid>
    );
};

export default ResumeHeader;