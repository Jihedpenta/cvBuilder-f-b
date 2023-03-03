import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SkillsForm = () => {
    const titleRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [skills, setSkills] = useState([])

    const [resumeSkills, setResumeSkills] = useState([]);

    useEffect(() => {
        if (JSON.stringify(resumeContent.skills) !== JSON.stringify(resumeSkills)) {
            if (resumeContent.skills) {
                setResumeSkills(JSON.parse(JSON.stringify(resumeContent.skills)));
            } else {
                setResumeSkills(null);
            }
        }

    }, [resumeContent]);

    useEffect(() => {
        if (resumeSkills && resumeSkills.length > 0) {
            setSkills(resumeSkills)
        } else {
            setSkills([])
        }
    }, [resumeSkills])


    const handleAddNew = () => {

        const title = titleRef.current.value

        setErrors({
            title: title === '' ? true : false,
        });

        if (title !== '') {
            setRequiredErrMsg('')
            const newSkill = title
            if (idRef.current?.value) {
                const index = idRef.current.value
                skills[index] = newSkill
                const newSkills = [...skills]
                setSkills(newSkills)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newSkills = [...skills, newSkill]
                setSkills(newSkills)
            }
            titleRef.current.value = null

        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newSkills = [...skills]
        newSkills.splice(index, 1)
        setSkills(newSkills)
        console.log('clicked ', newSkills);
    }
    const handleEdit = (index) => {
        titleRef.current.value = skills[index]
        btnRef.current.innerText = 'Save'
        idRef.current.value = index
    }
    const handleSave = () => {
        console.log('handeling save resumeContent', resumeContent);
        console.log('handeling save, skills', skills);

        const newResumeData = { ...resumeContent, skills }
        console.log('handeling save resumeContent', resumeContent);

        setResumeContent(newResumeData)
        console.log(resumeContent);
    }
    return (
        <FormCard title="Skills">
            <Grid container>
                {skills.map((skill, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>

                                <Grid item md={10}>
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {skill}
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
                        label="Skill"
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

                {skills.length > 0 &&
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

export default SkillsForm;