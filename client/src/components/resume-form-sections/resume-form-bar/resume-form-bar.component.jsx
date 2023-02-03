import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';

const ResumeFormBar = () => {
    return (
        <Box sx={{ flexGrow: 1,
            width:'100%',
        }} >
        <AppBar position="static" sx={{
            background:"#245097"
        }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <DownloadIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Download PDF
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default ResumeFormBar;