import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useRef } from 'react';
import { useState } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';


const ResumeTypeForm = () => {
    const { industry, setIndustry, language, setLanguage, pentaContact, setPentaContact } = useResume()
    const langRef = useRef(null)
    const industryRef = useRef(null)
    const nameRef = useRef(null)
    const numberRef = useRef(null)
    const emailRef = useRef(null)
    const [errors, setErrors] = useState({something: true, somehing2: true})
    const handleSave = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const lang = langRef.current.value;
        const industry = industryRef.current.value;
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const email = emailRef.current.value;

        setErrors({
            industry : industry === '' ?   true : false,
            lang: lang === '' ? true : false,
            name : name === '' ? true : false,
            number : number === '' ? true : false,
            email: email === '' || emailRegex.test(email) ? true : false
        });




    }

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
                            inputRef={langRef}
                            labelId="language-picker"
                            label="Language"
                            defaultValue=''
                            error={errors.lang}

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
                            inputRef={industryRef}
                            labelId="industry-picker"
                            label="Industry"
                            defaultValue=''
                            error={errors.industry}

                        >
                            <MenuItem value={"transport"}>Transportation</MenuItem>
                            <MenuItem value={"telecom"}>Telecom</MenuItem>
                            <MenuItem value={"oilgas"}>Oil & gas</MenuItem>
                            <MenuItem value={"energy"}>Energy</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        inputRef={nameRef}
                        required
                        label="Name"
                        error={errors.name}

                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}
                >
                    <TextField
                        inputRef={numberRef}
                        required
                        type='number'
                        error={errors.number}

                        label="Phone Number"
                        sx={{ width: '100%' }}
                    />
                </Grid>

                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        inputRef={emailRef}
                        required
                        error={errors.email}
                        label="Email Adress"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}
                    sm={12}
                    md={12}>
                    <Button onClick={handleSave}>Save</Button>
                </Grid>
            </Grid>

        </FormCard>
    );
};

export default ResumeTypeForm;