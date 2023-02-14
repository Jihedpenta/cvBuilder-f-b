import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import FormCard from '../form-card/form-card.component';

const ResumeTypeForm = () => {
    return (

        <FormCard title='Resume Type'>
            <Grid container spacing={2}>
                <Grid item xs={12}
                    sm={6}
                    md={6}
                >
                    <FormControl sx={{ minWidth: 120, width: '100%' }}>
                        <InputLabel id="language-picker">Language</InputLabel>
                        <Select
                            labelId="language-picker"
                            label="Language"
                        >

                            <MenuItem value={'fr'}>French</MenuItem>
                            <MenuItem value={'en'}>English</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}
                    sm={6}
                    md={6}
                >
                    <FormControl sx={{ minWidth: 120, width: '100%' }}>
                        <InputLabel id="industry-picker">Industry</InputLabel>
                        <Select
                            labelId="industry-picker"
                            label="Industry"
                        >
                            <MenuItem value={10}>Transportation</MenuItem>
                            <MenuItem value={20}>Telecom</MenuItem>
                            <MenuItem value={30}>Oil & gas</MenuItem>
                            <MenuItem value={30}>Energy</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

        </FormCard>
    );
};

export default ResumeTypeForm;