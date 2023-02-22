import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FormCard = ({children, title, mb }) => {
    return (
        <Card sx={{ 
            width: '80%', 
            mt: 2,  
            mb: mb ? mb : 0
        }}>
        <CardContent>
            <Box>

                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>

                {children}

        </Box>
        </CardContent>
        </Card>
    );
};

export default FormCard;