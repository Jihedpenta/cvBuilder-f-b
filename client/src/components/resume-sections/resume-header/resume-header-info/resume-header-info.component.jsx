import React from 'react';
import { Grid, Typography } from '@mui/material';
import ResumeDevider from '../../resume-devider/resume-devider.component';

const ResumeHeaderInfo = ({ headerData, primaryColor  }) => {
    const birthdateExist = headerData.birthdate&&headerData.birthdate!==''
    return (
        <Grid container>
                <Grid item xs={birthdateExist?3:4 } sm={birthdateExist?3:4 } md={birthdateExist?3:4 } lg={birthdateExist?3:4 } sx={{
                    borderRight: '0.094rem solid ' + primaryColor,
                    // paddingRight: '1.875rem',
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Typography variant="subtitle"
                        
                    >
                        {headerData.phoneNumber}
                    </Typography>
                </Grid>
                <Grid item xs={birthdateExist?3:4 } sm={birthdateExist?3:4 } md={birthdateExist?3:4 } lg={birthdateExist?3:4 } sx={{
                    borderRight: '0.094rem solid ' + primaryColor,
                    // paddingRight: '0.938rem', 
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Typography variant="subtitle"
                        >
                        {headerData.email}
                    </Typography>
                </Grid>
                <Grid item xs={birthdateExist?3:4 } sm={birthdateExist?3:4 } md={birthdateExist?3:4 } lg={birthdateExist?3:4 } sx={{
                    borderRight: birthdateExist ? '0.094rem solid ' + primaryColor : undefined,
                    // paddingRight: '0.625rem',
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <Typography variant="subtitle"
                        >
                        {headerData.nationality}
                    </Typography>
                </Grid>
                {birthdateExist&& 
                
                <Grid item xs={3} sm={3} md={3} lg={3} sx={{
                    // paddingRight: '0.625rem',
                    display:'flex',
                    justifyContent:'center'
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

export default ResumeHeaderInfo;