import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CertificationForm = () => {
    const dateRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [certifications, setCertifications] = useState([])

    const [resumeCertifications, setResumeCertifications] = useState([]);

    useEffect(() => {
        if (JSON.stringify(resumeContent.certifications) !== JSON.stringify(resumeCertifications)) {
            if (resumeContent.certifications) {
                setResumeCertifications(JSON.parse(JSON.stringify(resumeContent.certifications)));
            } else {
                setResumeCertifications(null);
            }
        }

    }, [resumeContent]);

    useEffect(() => {
        if (resumeCertifications && resumeCertifications.length > 0) {
            setCertifications(resumeCertifications)
        } else {
            setCertifications([])
        }
    }, [resumeCertifications])

    const handleAddNew = () => {

        const date = dateRef.current.value
        const title = titleRef.current.value
        const subtitle = subtitleRef.current.value

        setErrors({
            date: date === '' ? true : false,
            title: title === '' ? true : false,
            subtitle: subtitle === '' ? true : false
        });

        if (date !== '' && title !== '' && subtitle !== '') {
            setRequiredErrMsg('')
            const newCertification = { date, title, subtitle }
            if (idRef.current?.value) {
                console.log('there is a value ', idRef.current.value);
                const index = idRef.current.value
                certifications[index] = newCertification
                const newCertifications = [...certifications]
                setCertifications(newCertifications)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newCertifications = [...certifications, newCertification]
                setCertifications(newCertifications)
            }
            dateRef.current.value = null
            titleRef.current.value = null
            subtitleRef.current.value = null

        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newCertifications = [...certifications]
        newCertifications.splice(index, 1)
        setCertifications(newCertifications)
        console.log('clicked ', newCertifications);
    }
    const handleEdit = (index) => {
        dateRef.current.value = certifications[index].date
        titleRef.current.value = certifications[index].title
        subtitleRef.current.value = certifications[index].subtitle
        btnRef.current.innerText = 'Save'
        idRef.current.value = index
    }
    const handleSave = () => {
        console.log('handeling save');
        const newResumeData = { ...resumeContent, certifications }
        setResumeContent(newResumeData)
        console.log(resumeContent);
    }
    return (
        <FormCard title="Certifications">
            <Grid container>
                {certifications.map((certification, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>
                                <Grid item md={2}>
                                    <Typography>
                                        {certification.date}
                                    </Typography>
                                    <Typography>
                                        {certification.endDate}
                                    </Typography>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {certification.subtitle}
                                    </Typography>
                                    <Typography>
                                        {certification.title}
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="danger" aria-label="Delete" component="label" onClick={() => handleDelete(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="danger" aria-label="Delete" component="label" onClick={() => handleEdit(index)}>
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
                    sm={12}
                    md={12}>
                    <TextField
                        required
                        label="Date"
                        sx={{ width: '100%' }}
                        inputRef={dateRef}
                        error={errors.date}
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
                        inputRef={subtitleRef}
                        error={errors.subtitle}
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
                        label="University"
                        sx={{ width: '100%' }}
                        inputRef={titleRef}
                        error={errors.title}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <input type="hidden" ref={idRef} />
                {requiredErrMsg !== '' &&
                    <Grid item xs={12}
                        sm={12}
                        md={12}>
                        <Typography variant='body1' color='red'>{requiredErrMsg}</Typography>
                    </Grid>}
                <Grid item xs={12}
                    sm={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',

                    }}
                >
                    <Button onClick={handleAddNew} ref={btnRef} variant="outlined">Add New</Button>
                </Grid>

                {certifications.length > 0 &&
                    <Grid item xs={12}
                        sm={12}
                        md={12}
                    >
                        <Button onClick={handleSave}>Save</Button>
                    </Grid>
                }

            </Grid>
        </FormCard>
    );
};

export default CertificationForm;