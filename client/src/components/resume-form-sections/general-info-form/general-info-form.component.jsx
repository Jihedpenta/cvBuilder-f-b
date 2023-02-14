import { Button,  Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormCard from '../form-card/form-card.component';

const GeneralInfoForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    return (
        <FormCard title='General Information'>
            <Grid container spacing={2}>
                <Grid item xs={12}
                    sm={6}
                    md={6}
                >
                    <TextField
                        required
                        label="Full Name"
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid item xs={12}
                    sm={6}
                    md={6}>
                    <TextField
                        required
                        label="Job Title"
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid item xs={12}
                    sm={4}
                    md={4}
                >
                    <TextField
                        required
                        type='number'
                        label="Phone Number"
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Email Adress"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Nationality"
                        sx={{ width: '100%' }}
                    />
                </Grid>


                <Grid item xs={12}
                    sm={6}
                    md={6}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        sx={{ width: '100%' }}
                        defaultValue={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={6}
                    md={6}>


                    <input
                        accept="*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}

                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span"
                            sx={{ width: '100%', height: 'inhirit' }}
                        >
                            Upload
                            <CloudUploadIcon />
                        </Button>
                    </label>
                    {selectedFile && (
                        <Typography variant="subtitle1">
                            {selectedFile.name}
                        </Typography>
                    )}
                </Grid>

                <Grid item xs={12}
                    sm={12}
                    md={12}>
                    <TextField
                        required
                        label="Adress Line"
                        sx={{ width: '100%' }}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Postal Code"
                        sx={{ width: '100%' }}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Country"
                        sx={{ width: '100%' }}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="City"
                        sx={{ width: '100%' }}
                    />

                </Grid>

            </Grid>
        </FormCard>
    );
};

export default GeneralInfoForm;