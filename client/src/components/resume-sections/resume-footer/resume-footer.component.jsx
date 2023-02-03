import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ResumeFooter = ({footerHeight, primaryColor, pentaContact}) => {
    return (
        <Box
                className='page'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center',
                    width: '100%',
                    height: footerHeight,
                    backgroundColor:primaryColor
                }}
            >
                <Typography sx={{
                    fontSize:'18px',
                    color:'#fff'
                }}>
                    Pentabell Contact :  {pentaContact.name} |  {pentaContact.email} | {pentaContact.number}
                </Typography>
                
            </Box>
    );
};

export default ResumeFooter;