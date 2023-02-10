import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const GeneralInfoForm = () => {
    return (
        <Card sx={{ width: '80%', mt: 2 }}>
            <CardContent>
                <Box >

                    <Typography gutterBottom variant="h5" component="div">
                        General Info
                    </Typography>
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
                            sm={4}
                            md={4}> <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    renderInput={(params) => <TextField {...params} />}

                                />
                            {/**
                        
                        
                        
                        
                        
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                               
                            </LocalizationProvider>*/}

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
                    </Grid>

                </Box>


            </CardContent>

        </Card>
    );
};

export default GeneralInfoForm;