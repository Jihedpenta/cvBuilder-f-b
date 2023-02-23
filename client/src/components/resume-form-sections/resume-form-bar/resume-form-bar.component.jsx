import React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ResumeFormBar = () => {
  return (

    <div style={{
      backgroundColor: '#245097',
      width: 'inherit',
      bottom: 0,
      position: 'fixed',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Link to="/resume" component={Button} variant="outline"  style={{ textDecoration: 'none' }}>
        <Button variant="outline" sx={{ color: 'white' }} >
          <DownloadIcon />
          Download PDF
        </Button>
      </Link>

      <Button sx={{ color: 'white' }}>
        <SaveIcon />
        Save
      </Button>
    </div>




  );
};

export default ResumeFormBar;