import React from 'react';
import {  Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ResumeDevider from '../../resume-devider/resume-devider.component';

const ResumeTopHeader = ({ headerData, primaryColor, logo_link }) => {
    return (
        <Grid container>
                <Grid item xs={3} sm={3} md={3}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{
                        height: '100%'
                    }}>
                        <img
                            src={headerData.image_url}
                            alt={headerData.full_name}
                            width='100'
                            // loading="lazy"

                        />
                    </Box>

                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant='h4' sx={{
                        color: primaryColor
                    }}>
                        {headerData.full_name}
                    </Typography>
                    <Typography variant='h6' sx={{
                        color: primaryColor
                    }}>
                        {headerData.job_title}
                    </Typography>
                    <Typography sx={{
                        // fontSize:'0.75rem',
                        display: 'block'
                    }}>
                        {headerData.adress.adress_line}
                    </Typography>

                    <Typography sx={{
                        // fontSize:'0.75rem',
                        display: 'block'

                    }}>
                        {headerData.adress.postal_code}, {headerData.adress.city},  {headerData.adress.country}
                    </Typography>
                </Grid>

                <Grid item xs={3} sm={3} md={3}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" 
                    sx={{
                        height: '100%',
                        paddingRight:'20px'
                    }}>
                        <img
                            src={logo_link}
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