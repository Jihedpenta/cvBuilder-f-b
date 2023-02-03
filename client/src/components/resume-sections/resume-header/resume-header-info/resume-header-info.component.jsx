import React from 'react';
import { Grid, Typography } from '@mui/material';
import ResumeDevider from '../../resume-devider/resume-devider.component';

const ResumeHeaderInfo = ({ headerData, primaryColor  }) => {
    return (
        <Grid container>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography variant="subtitle"
                        sx={{
                            borderRight: '0.094rem solid ' + primaryColor,
                            paddingRight: '1.875rem'
                        }}
                    >
                        {headerData.phone_number}
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography variant="subtitle"
                        sx={{
                            borderRight: '0.094rem solid ' + primaryColor,
                            paddingRight: '0.938rem'
                        }}>
                        {headerData.email}
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography variant="subtitle"
                        sx={{
                            borderRight: '0.094rem solid ' + primaryColor,
                            paddingRight: '0.625rem'
                        }}>
                        {headerData.nationality}
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Typography variant="subtitle">
                        {headerData.birthdate}
                    </Typography>
                </Grid>
                <ResumeDevider color={primaryColor} />
            </Grid>
    );
};

export default ResumeHeaderInfo;