import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRef } from 'react';
import useResume from '../../../hooks/useResume';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProjectsForm = () => {
    const dateRef = useRef(null)
    const clientRef = useRef(null)
    const titleRef = useRef(null)
    const compRef = useRef(null)
    const locationRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [projects, setProjects] = useState([])
    const [description, setDescription] = useState('');

    const [resumeProjects, setResumeProjects] = useState([]);

    useEffect(() => {
        if (JSON.stringify(resumeContent.projects) !== JSON.stringify(resumeProjects)) {
            if (resumeContent.projects) {
                setResumeProjects(JSON.parse(JSON.stringify(resumeContent.projects)));
            } else {
                setResumeProjects(null);
            }
        }

    }, [resumeContent]);

    useEffect(() => {
        if (resumeProjects && resumeProjects.length > 0) {
            setProjects(resumeProjects)
        } else {
            setProjects([])
        }
    }, [resumeProjects])


    function handleChange(value) {
        setDescription(value);
    }
    const handleAddNew = () => {

        const date = dateRef.current.value
        const client = clientRef.current.value
        const title = titleRef.current.value
        const company = compRef.current.value
        const location = locationRef.current.value


        setErrors({
            date: date === '' ? true : false,
            client: client === '' ? true : false,
            title: title === '' ? true : false,
            company: company === '' ? true : false,
            location: location === '' ? true : false

        });

        if (date !== '' && client !== '' && title !== '' && company !== '' && location !== '') {
            setRequiredErrMsg('')

            const newProject = {
                date,
                client,
                title,
                company,
                location,
                description
            }

            if (idRef.current?.value) {
                const index = idRef.current.value
                projects[index] = newProject
                const newProjects = [...projects]
                setProjects(newProjects)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newProjects = [...projects, newProject]
                setProjects(newProjects)
            }
            dateRef.current.value = null
            clientRef.current.value = null
            titleRef.current.value = null
            compRef.current.value = null
            locationRef.current.value = null
            setDescription('')


        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newProjects = [...projects]
        newProjects.splice(index, 1)
        setProjects(newProjects)
    }
    const handleEdit = (index) => {
        dateRef.current.value = projects[index].date
        clientRef.current.value = projects[index].client
        titleRef.current.value = projects[index].title
        compRef.current.value = projects[index].company
        locationRef.current.value = projects[index].location
        setDescription(projects[index].description)
        btnRef.current.innerText = 'Save'

        idRef.current.value = index
    }
    const handleSave = () => {
        const newResumeData = { ...resumeContent, projects }
        setResumeContent(newResumeData)
    }

    return (
        <FormCard title='Projects'>
            <Grid container>
                {projects.map((project, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>
                                <Grid item md={2}>
                                    <Typography>
                                        {project.date}
                                    </Typography>
                                    <Typography>
                                        {project.client}
                                    </Typography>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {project.title}
                                    </Typography>
                                    <Typography>
                                        {project.company}
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
                    sm={6}
                    md={6}>
                    <TextField
                        required
                        label="Client"
                        sx={{ width: '100%' }}
                        inputRef={clientRef}
                        error={errors.client}
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
                    label="Title"
                    sx={{ width: '100%' }}
                    inputRef={titleRef}
                    error={errors.title}
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



                 {projects.length > 0 &&  
                
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

export default ProjectsForm;