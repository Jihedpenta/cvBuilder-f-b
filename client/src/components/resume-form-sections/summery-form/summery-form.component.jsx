import {   Grid, TextField,  } from '@mui/material';
import React, { useState } from 'react';
import FormCard from '../form-card/form-card.component';

const SummeryForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormCard title='Summery'>
            <Grid container spacing={2}>
                <Grid item xs={12}
                    sm={12}
                    md={12}
                >
                    <TextField
                        id="filled-multiline-flexible"
                        label="Profile Summery"
                        multiline
                        rows={4}
                        value={value}
                        onChange={handleChange}
                        variant="filled"
                        sx={{
                            width: '100%'
                        }}
                    />
                </Grid>
            </Grid>
        </FormCard>

    );
};

export default SummeryForm;