import React from 'react';
import {  Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ResumeDevider from '../../resume-devider/resume-devider.component';

const ResumeTopHeader = ({ headerData, primaryColor, logoLink }) => {
    return (
        <Grid container>
                <Grid item xs={3} sm={3} md={3}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{
                        height: '100%'
                    }}>
                        <img
                            src={headerData.imageUrl}
                            alt={headerData.fullName}
                            width='100'
                            // loading="lazy"

                        />
                    </Box>

                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant='h4' sx={{
                        color: primaryColor
                    }}>
                        {headerData.fullName}
                    </Typography>
                    <Typography variant='h6' sx={{
                        color: primaryColor
                    }}>
                        {headerData.jobTitle}
                    </Typography>
                    <Typography sx={{
                        // fontSize:'0.75rem',
                        display: 'block'
                    }}>
                        {headerData.adress.adressLine}
                    </Typography>

                    <Typography sx={{
                        // fontSize:'0.75rem',
                        display: 'block'

                    }}>
                        {headerData.adress.postalCode}, {headerData.adress.city},  {headerData.adress.country}
                    </Typography>
                </Grid>

                <Grid item xs={3} sm={3} md={3}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" 
                    sx={{
                        height: '100%',
                        paddingRight:'20px'
                    }}>
                        <img
                            src={logoLink}
                            alt='Pentabell Logo'
                            width='70'
                            height='auto'
                            loading="lazy"

                        />
                    </Box>

                </Grid>
                <ResumeDevider color={primaryColor} />

            </Grid>
    );
};

export default ResumeTopHeader;