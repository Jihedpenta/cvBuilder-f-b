import { Divider } from '@mui/material';
import React from 'react';

const ResumeDevider = ({color, doubleBmargin}) => {
    return (
        <Divider  sx={{ 
            width: '100%',
            borderBottomWidth: 1.5, 
            bgcolor:color, 
            marginTop:'0.625rem',
            marginBottom:doubleBmargin? '1.25rem':'0.625rem' 

        }} />
    );
};

export default ResumeDevider;