import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ToolsForm = () => {
    const titleRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [tools, setTools] = useState([])
    const handleAddNew = () => {

        const title = titleRef.current.value

        setErrors({
            title: title === '' ? true : false,
        });

        if (title !== '') {
            setRequiredErrMsg('')
            const newTool = title 
            if (idRef.current?.value) {
                const index = idRef.current.value
                tools[index] = newTool
                const newTools = [...tools]
                setTools(newTools)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newTools = [...tools, newTool]
                setTools(newTools)
            }
            titleRef.current.value = null

        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newTools = [...tools]
        newTools.splice(index, 1)
        setTools(newTools)
        console.log('clicked ', newTools);
    }
    const handleEdit = (index) => {
        titleRef.current.value = tools[index]
        btnRef.current.innerText = 'Save'
        idRef.current.value = index
    }
    const handleSave = () => {
        console.log('handeling save resumeContent', resumeContent );
        console.log('handeling save, tools', tools);

        const newResumeData = { ...resumeContent, tools }
        console.log('handeling save resumeContent', resumeContent);

        setResumeContent(newResumeData)
        console.log(resumeContent);
    }
    return (
        <FormCard title="Tools">
            <Grid container>
                {tools.map((tool, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>
                                
                                <Grid item md={10}>
                                    <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {tool}
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
                        label="Tool"
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

                {tools.length > 0 &&
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

export default ToolsForm;