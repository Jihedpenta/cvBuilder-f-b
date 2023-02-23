import { Button,  Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormCard from '../form-card/form-card.component';
import useResume from '../../../hooks/useResume';

const GeneralInfoForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

const { resumeContent,setResumeContent} = useResume()
    
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const jobRef = useRef(null)
    const phoneRef = useRef(null)
    const emailRef = useRef(null)
    const nationRef = useRef(null)
    const birthRef = useRef(null)
    const imgRef = useRef(null)
    const adressRef = useRef(null)
    const postalRef = useRef(null)
    const countryRef = useRef(null)
    const cityRef = useRef(null)

    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [emailErrMsg, setEmailErrMsg] = useState('')
    const [validForm, setValidForm] = useState(false)




    const handleSave = ()=>{
        setValidForm(false)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;

        const job = jobRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const nationality = nationRef.current.value;
        // console.log(name,job,email,phone,nationality);
        setErrors({
            firstName: firstName === '' ? true : false,
            lastName: lastName === '' ? true : false,

            job: job === '' ? true : false,
            phone: phone === '' ? true : false,
            nationality: nationality === '' ? true : false,
            email: email === '' || !emailRegex.test(email) ? true : false
        });

        setRequiredErrMsg(firstName === '' ||lastName === '' || job === '' || phone === '' || nationality === '' || email === '' ? 'Please fill in required fields' : '')
        setEmailErrMsg(emailRegex.test(email) || email === '' ? '' : 'Please enter a valid email')
        if(!(firstName === '' ||lastName === ''  || job === '' || phone === '' || nationality === '' || email === '' || !emailRegex.test(email))){
            const imgUrl = selectedFile ?  URL.createObjectURL(selectedFile) : '';
            const header = {
                firstName: firstName ,
                lastName: lastName ,
                jobTitle: job,
                adress: {
                    adressLine: adressRef.current.value ,
                    postalCode: postalRef.current.value ,
                    city: cityRef.current.value ,
                    country: countryRef.current.value 
                },
                phoneNumber: phoneRef.current.value,
                email: emailRef.current.value ,
                nationality: nationRef.current.value ,
                birthdate: birthRef.current.value ,
                imageUrl: imgUrl 
            }
            const resumeData = JSON.parse(JSON.stringify({...resumeContent, header}))

            setResumeContent(resumeData);
        }
    }

    useEffect(()=>{
        if (validForm){
           
        }
    },[validForm])
    return (
        <FormCard title='General Information'>
            <Grid container spacing={2}>
                <Grid item xs={12}
                    sm={4}
                    md={4}
                >

                    <TextField
                        required
                        label="First Name"
                        sx={{ width: '100%' }}
                        inputRef={firstNameRef}
                        error={errors.firstName}

                    />
                </Grid>
                <Grid item xs={12}
                sm={4}
                md={4}
            >

                <TextField
                    required
                    label="Last Name"
                    sx={{ width: '100%' }}
                    inputRef={lastNameRef}
                    error={errors.lastName}

                />
            </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Job Title"
                        sx={{ width: '100%' }}
                        inputRef={jobRef}
                        error={errors.job}


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
                        inputRef={phoneRef}
                        error={errors.phone}


                    />
                </Grid>

                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Email Adress"
                        sx={{ width: '100%' }}
                        inputRef={emailRef}
                        error={errors.email}


                    />
                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        required
                        label="Nationality"
                        sx={{ width: '100%' }}
                        inputRef={nationRef}
                        error={errors.nationality}


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
                        inputRef={birthRef}

                        // defaultValue={selectedDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={6}
                    md={6}>


                    <input
                        id="contained-button-file"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                        style={{ display: 'none' }}
                        ref={imgRef}
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
                        label="Adress Line"
                        sx={{ width: '100%' }}
                        inputRef={adressRef}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        label="Postal Code"
                        sx={{ width: '100%' }}
                        inputRef={postalRef}

                    />

                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        label="Country"
                        sx={{ width: '100%' }}
                        inputRef={countryRef}
                        required
                        error={errors.country}
                    />

                </Grid>
                <Grid item xs={12}
                    sm={4}
                    md={4}>
                    <TextField
                        label="City"
                        sx={{ width: '100%' }}
                        inputRef={cityRef}
                        required
                        error={errors.city}
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

export default GeneralInfoForm;