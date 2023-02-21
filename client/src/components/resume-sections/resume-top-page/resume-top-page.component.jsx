import { Box, Grid } from '@mui/material';
import React from 'react';
import ResumeDevider from '../resume-devider/resume-devider.component';

const ResumeTopPage = ({ primaryColor, logoLink, innerRef }) => {

    return (

        <Grid container ref={innerRef}>

            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: '100%',
                height: 'auto'
            }}>
            
                <img
                    src={logoLink}
                    alt='Pentabell Logo'
                    width='40'
                /> 
            </Box>
            <ResumeDevider color={primaryColor} doubleBmargin />


        </Grid>



    );
};

export default ResumeTopPage;