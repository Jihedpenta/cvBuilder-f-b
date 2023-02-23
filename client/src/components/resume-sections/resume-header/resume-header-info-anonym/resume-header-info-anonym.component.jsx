import React from 'react';
import { Grid, Typography } from '@mui/material';
import ResumeDevider from '../../resume-devider/resume-devider.component';

const ResumeHeaderInfoAnonym = ({ headerData, primaryColor }) => {
    const birthdateExist = headerData.birthdate && headerData.birthdate !== ''
    return (
        <Grid container>
            <Grid item xs={birthdateExist ? 4 : 6} sm={birthdateExist ? 4 : 6} md={birthdateExist ? 4 : 6} lg={birthdateExist ? 4 : 6} sx={{
                borderRight: '0.096rem solid ' + primaryColor,
                // paddingRight: '1.875rem',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant="subtitle"

                >
                    {headerData.adress.city}, {headerData.adress.country}                    
                </Typography>
            </Grid>
            <Grid item xs={birthdateExist ? 4 : 6} sm={birthdateExist ? 4 : 6} md={birthdateExist ? 4 : 6} lg={birthdateExist ? 4 : 6} sx={{
                borderRight: birthdateExist ?  '0.094rem solid ' + primaryColor : undefined,
                // paddingRight: '0.938rem', 
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant="subtitle"
                >
                    {headerData.nationality}
                </Typography>
            </Grid>
            
            {birthdateExist &&

                <Grid item xs={4} sm={4} md={4} lg={4} sx={{
                    // paddingRight: '0.625rem',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Typography variant="subtitle">
                        {headerData.birthdate}
                    </Typography>
                </Grid>
            }

            <ResumeDevider color={primaryColor} />
        </Grid>
    );
};

export default ResumeHeaderInfoAnonym;