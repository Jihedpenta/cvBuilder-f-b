import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';


const ResumeTypeForm = () => {
    const { setIndustry, industry, language, pentaContact, setLanguage, setPentaContact } = useResume()
    const langRef = useRef(null)
    const industryRef = useRef(null)
    const nameRef = useRef(null)
    const numberRef = useRef(null)
    const emailRef = useRef(null)
    const [errors, setErrors] = useState({ something: true, somehing2: true })
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [emailErrMsg, setEmailErrMsg] = useState('')

    // useEffect(()=>{
    //     // if (langRef.current) {
    //         console.log('laang effect fired');
    //         langRef.current.value = 'fr';
    //         console.log(langRef.current.value);

    //     // }
    // },[] )


    useEffect(() => {
        console.log(industry);
        if (industry !== '') {
            if (industryRef.current) {
                industryRef.current.value = industry;

                // industryRef.current.dispatchEvent(new Event('change', { bubbles: true }));

            }
        } else {
            if (industryRef.current) {
                industryRef.current.value = '';

            }
        }
    }, [industry])

    useEffect(() => {
        if (language !== '') {
            if (langRef.current) {
                langRef.current.value = language;
            }
        } else {
            if (langRef.current) {
                langRef.current.value = '';
            }
        }
    }, [language])

    useEffect(() => {
        if (pentaContact && Object.keys(pentaContact).length > 0) {
            if (pentaContact.name !== '') {
                if (nameRef.current) {
                    nameRef.current.value = pentaContact.name;
                }
            }
            if (pentaContact.number !== '') {
                if (numberRef.current) {
                    numberRef.current.value = pentaContact.number;
                }
            }
            if (pentaContact.email !== '') {
                if (emailRef.current) {
                    emailRef.current.value = pentaContact.email;
                }
            }
        }else{
            nameRef.current.value = '';
            numberRef.current.value = '';
            emailRef.current.value = '';


        }

    }, [pentaContact])

    const handleSave = () => {

        console.log('handle save form');
        // setValidForm(false)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const lang = langRef.current.value;
        const indus = industryRef.current.value;
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const email = emailRef.current.value;
        setErrors({
            industry: indus === '' ? true : false,
            lang: lang === '' ? true : false,
            name: name === '' ? true : false,
            number: number === '' ? true : false,
            email: email === '' || !emailRegex.test(email) ? true : false
        });
        setRequiredErrMsg(indus === '' || lang === '' || name === '' || number === '' || email === '' ? 'All fields are required' : '')
        setEmailErrMsg(emailRegex.test(email) || email === '' ? '' : 'Please enter a valid email')
        if (!(indus === '' || lang === '' || name === '' || number === '' || email === '' || !emailRegex.test(email))) {
            setIndustry(industryRef.current.value)
            setLanguage(langRef.current.value)
            setPentaContact({ name: nameRef.current.value, email: emailRef.current.value, number: numberRef.current.value })
        }


    }


    // useEffect(()=>{
    //     console.log('valid form changed');
    //     if (validForm){

    //     }
    // },[validForm])


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
                    sm={12}
                    md={12}>
                    <Typography variant='h6'>
                        Pentabell Contact
                    </Typography>
                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        inputRef={nameRef}
                        required
                        label="Name"
                        error={errors.name}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                        error={errors.number}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                {
                    requiredErrMsg !== ''
                    &&
                    <Grid item xs={12}
                        sm={12}
                        md={12}>
                        <Typography variant='body' color='red'>
                            {requiredErrMsg}
                        </Typography>
                    </Grid>
                }
                {
                    emailErrMsg !== ''
                    &&
                    <Grid item xs={12}
                        sm={12}
                        md={12}>
                        <Typography variant='body' color='red'>
                            {emailErrMsg}
                        </Typography>
                    </Grid>
                }
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