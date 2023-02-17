import { Button, Grid, IconButton,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EducationForm = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
      setSelectedDate(date);
    };
    const [educations, setEducations] = useState([
        {
            id: 0,
            startDate: 'July 1996',
            endDate: 'September 1998',
            university: 'IPER (Groupe ESC Normandie) – Le Havre. Spécialisation : logistique et organisation des transports.',
            diploma: '3ème cycle en Transport / Export / Logistique.'
        },
        {
            id: 1,
            startDate: '1994',
            endDate: '1996',
            university: 'Université Pierre et Marie Curie – Paris.',
            diploma: 'Maîtrise de Physique'
        }
        ,
        {
            id: 2,
            startDate: '1994',
            endDate: '1996',
            university: 'Université Pierre et Marie Curie – Paris.',
            diploma: 'Maîtrise de Physique'
        }
    ])
    return (
        <FormCard title='Education'>
            <Grid container>
                {educations.map((education, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>
                                <Grid item md={2}>
                                    <Typography>
                                        {education.startDate}
                                    </Typography>
                                    <Typography>
                                        {education.endDate}
                                    </Typography>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {education.diploma}
                                    </Typography>
                                    <Typography>
                                        {education.university}
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="danger" aria-label="Delete" component="label">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="danger" aria-label="Delete" component="label">
                                        <EditIcon />
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12}
                    sm={6}
                    md={6}
                >
                <TextField
                id="date"
                label="Start Date"
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
                    <TextField
                    id="date"
                    label="End Date"
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
                    sm={12}
                    md={12}>
                    <TextField
                        required
                        label="Diploma"
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid item xs={12}
                    sm={12}
                    md={12}>
                    <TextField
                        required
                        label="University"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}
                    sm={12}
                    md={12}>
                    <Button>Add New</Button>
                </Grid>
            </Grid>
        </FormCard>
    );
};

export default EducationForm;