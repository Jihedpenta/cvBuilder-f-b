import { Grid, Typography } from '@mui/material';
import React from 'react';

const ResumeSingleCertification = ({ certification }) => {
    return (
        <Grid container>
            <Grid item md={3}>
                <Typography>
                    {certification.date}
                </Typography>

            </Grid>
            <Grid item md={9}>
                <Typography sx={{
                    fontWeight: 'bold'
                }}>
                    {certification.title}
                </Typography>
                <Typography>
                    {certification.subtitle}

                </Typography>
            </Grid>
        </Grid>
    );
};

export default ResumeSingleCertification;