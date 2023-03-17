import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRef } from 'react';
import useResume from '../../../hooks/useResume';

const EducationForm = () => {
    const startRef = useRef(null)
    const endRef = useRef(null)
    const uniRef = useRef(null)
    const diploRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [educations, setEducations] = useState([])

    const [resumeEducations, setResumeEducations] = useState([]);

    useEffect(() => {
        if (JSON.stringify(resumeContent.educations) !== JSON.stringify(resumeEducations)) {
            if (resumeContent.educations) {
                setResumeEducations(JSON.parse(JSON.stringify(resumeContent.educations)));
            } else {
                setResumeEducations(null);
            }
        }

    }, [resumeContent]);

    useEffect(() => {
        if (resumeEducations && resumeEducations.length > 0) {
            setEducations(resumeEducations)
        } else {
            setEducations([])
        }
    }, [resumeEducations])

    const handleAddNew = () => {

        const startDate = startRef.current.value
        const endDate = endRef.current.value
        const university = uniRef.current.value
        const diploma = diploRef.current.value

        setErrors({
            startDate: startDate === '' ? true : false,
            endDate: endDate === '' ? true : false,
            university: university === '' ? true : false,
            diploma: diploma === '' ? true : false
        });

        if (startDate !== '' && endDate !== '' && university !== '' && diploma !== '') {
            setRequiredErrMsg('')

            const newEducation = {
                startDate: startRef.current.value,
                endDate: endRef.current.value,
                university: uniRef.current.value,
                diploma: diploRef.current.value
            }
            if (idRef.current?.value) {
                const index = idRef.current.value
                educations[index] = newEducation
                const newEducations = [...educations]
                setEducations(newEducations)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newEducations = [...educations, newEducation]
                setEducations(newEducations)
            }
            startRef.current.value = null
            endRef.current.value = null
            uniRef.current.value = null
            diploRef.current.value = null

        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newEducations = [...educations]
        newEducations.splice(index, 1)
        setEducations(newEducations)
    }
    const handleEdit = (index) => {
        startRef.current.value = educations[index].startDate
        endRef.current.value = educations[index].endDate
        uniRef.current.value = educations[index].university
        diploRef.current.value = educations[index].diploma
        btnRef.current.innerText = 'Save'
        idRef.current.value = index
    }
    const handleSave = () => {
        const newResumeData = { ...resumeContent, educations }
        setResumeContent(newResumeData)
    }

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
                    sm={6}
                    md={6}>
                    <TextField
                        required
                        label="Start Date"
                        sx={{ width: '100%' }}
                        inputRef={startRef}
                        error={errors.startDate}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                </Grid>

                <Grid item xs={12}
                    sm={6}
                    md={6}>
                    <TextField
                        required
                        label="End Date"
                        sx={{ width: '100%' }}
                        inputRef={endRef}
                        error={errors.endDate}
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
                        inputRef={diploRef}
                        error={errors.diploma}
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
                        inputRef={uniRef}
                        error={errors.university}
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


                {educations.length > 0 &&
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

export default EducationForm;