import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRef } from 'react';
import useResume from '../../../hooks/useResume';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ExperienceForm = () => {
    const startRef = useRef(null)
    const endRef = useRef(null)
    const jobRef = useRef(null)
    const compRef = useRef(null)
    const locationRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [experiences, setExperiences] = useState([])
    const [description, setDescription] = useState('');
    function handleChange(value) {
        setDescription(value);
    }
    const handleAddNew = () => {

        const startDate = startRef.current.value
        const endDate = endRef.current.value
        const jobTitle = jobRef.current.value
        const company = compRef.current.value
        const location = locationRef.current.value

        console.log(startDate,endDate,jobTitle,company,location,description);

        setErrors({
            startDate: startDate === '' ? true : false,
            endDate: endDate === '' ? true : false,
            jobTitle: jobTitle === '' ? true : false,
            company: company === '' ? true : false,
            location: location === '' ? true : false

        });

        if (startDate !== '' && endDate !== '' && jobTitle !== '' && company !== '' && location !== '') {
            setRequiredErrMsg('')

            const newExperience = {
                startDate,
                endDate,
                jobTitle,
                company,
                location,
                description
            }

            if (idRef.current?.value) {
                const index = idRef.current.value
                experiences[index] = newExperience
                const newExperiences = [...experiences]
                setExperiences(newExperiences)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newExperiences = [...experiences, newExperience]
                setExperiences(newExperiences)
            }
            startRef.current.value = null
            endRef.current.value = null
            jobRef.current.value = null
            compRef.current.value = null
            locationRef.current.value = null
            setDescription('')


        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newExperiences = [...experiences]
        newExperiences.splice(index, 1)
        setExperiences(newExperiences)
        console.log('clicked ', newExperiences);
    }
    const handleEdit = (index) => {
        startRef.current.value = experiences[index].startDate
        endRef.current.value = experiences[index].endDate
        jobRef.current.value = experiences[index].jobTitle
        compRef.current.value = experiences[index].company
        locationRef.current.value = experiences[index].location
        setDescription(experiences[index].description)
        btnRef.current.innerText = 'Save'

        idRef.current.value = index
    }
    const handleSave = () => {
        console.log('handeling save resumeContent', resumeContent);
        const newResumeData = { ...resumeContent, experiences }
        console.log('handeling save newResumeData', newResumeData);

        setResumeContent(newResumeData)
        console.log(resumeContent);
    }

    return (
        <FormCard title='Experiences'>
            <Grid container>
                {experiences.map((experience, index) => {
                    console.log(experience);
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>
                                <Grid item md={2}>
                                    <Typography>
                                        {experience.startDate}
                                    </Typography>
                                    <Typography>
                                        {experience.endDate}
                                    </Typography>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {experience.jobTitle}
                                    </Typography>
                                    <Typography>
                                        {experience.company}
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
                    label="Job Title"
                    sx={{ width: '100%' }}
                    inputRef={jobRef}
                    error={errors.job}
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
                        label="Company"
                        sx={{ width: '100%' }}
                        inputRef={compRef}
                        error={errors.company}
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
                        label="Location"
                        sx={{ width: '100%' }}
                        inputRef={locationRef}
                        error={errors.location}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}
                    sm={12}
                    md={12}
                    sx= {{
                        marginBottom:'50px'
                    }}>
                    <ReactQuill 
                        value={description} 
                        onChange={handleChange} 
                        style={{
                        height: '100px' 
                        
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
                        alignItems:'flex-end'


                    }}
                >
                    <Button onClick={handleAddNew} ref={btnRef} variant="outlined">Add New</Button>
                </Grid>



                 {experiences.length > 0 &&  
                
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

export default ExperienceForm;