import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const LanguageForm = () => {
    const langRef = useRef(null)
    const levelRef = useRef(null)
    const btnRef = useRef(null)
    const idRef = useRef(null)
    const { resumeContent, setResumeContent } = useResume()
    const [errors, setErrors] = useState({})
    const [requiredErrMsg, setRequiredErrMsg] = useState('')
    const [langs, setLangs] = useState([])
    const [resumeLangs, setResumeLangs] = useState([]);

    useEffect(() => {
        if (JSON.stringify(resumeContent.langs) !== JSON.stringify(resumeLangs)) {
            if (resumeContent.langs) {
                setResumeLangs(JSON.parse(JSON.stringify(resumeContent.langs)));
            } else {
                setResumeLangs(null);
            }
        }

    }, [resumeContent]);

    useEffect(() => {
        if (resumeLangs && resumeLangs.length > 0) {
            setLangs(resumeLangs)
        } else {
            setLangs([])
        }
    }, [resumeLangs])
    const handleAddNew = () => {

        const lang = langRef.current.value
        const level = levelRef.current.value

        setErrors({
            lang: lang === '' ? true : false,
            level: level === '' ? true : false
        });

        if ( lang !== '' && level !== '') {
            setRequiredErrMsg('')
            const newLanguage = { lang, level }
            if (idRef.current?.value) {
                const index = idRef.current.value
                langs[index] = newLanguage
                const newLangs = [...langs]
                setLangs(newLangs)
                idRef.current.value = null
                btnRef.current.innerText = 'Add New'

            } else {
                const newLangs = [...langs, newLanguage]
                setLangs(newLangs)
            }
            langRef.current.value = null
            levelRef.current.value = null

        } else {
            setRequiredErrMsg('All fields are required')
        }
    }
    const handleDelete = (index) => {
        const newLangs = [...langs]
        newLangs.splice(index, 1)
        setLangs(newLangs)
        console.log('clicked ', newLangs);
    }
    const handleEdit = (index) => {
        langRef.current.value = langs[index].lang
        levelRef.current.value = langs[index].level
        btnRef.current.innerText = 'Save'
        idRef.current.value = index
    }
    const handleSave = () => {
        console.log('handeling save');
        const newResumeData = { ...resumeContent, langs }
        setResumeContent(newResumeData)
        console.log(resumeContent);
    }
    return (
        <FormCard title="Languages" mb={10}>
            <Grid container>
                {langs.map((language, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Grid container>
                                <Grid item md={5}>
                                     <Typography sx={{
                                        fontWeight: 'bold'
                                    }}>
                                        {language.lang}
                                    </Typography>
                                </Grid>
                                <Grid item md={5}>
                                   
                                    <Typography>
                                        {language.level}
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

                  <Grid item xs={6}
                    sm={6}
                    md={6}>
                    <TextField
                        required
                        label="Language"
                        sx={{ width: '100%' }}
                        inputRef={langRef}
                        error={errors.lang}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>



                <Grid item xs={6}
                    sm={6}
                    md={6}>
                    <TextField
                        required
                        label="Level"
                        sx={{ width: '100%' }}
                        inputRef={levelRef}
                        error={errors.level}
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

                {langs.length > 0 &&
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

export default LanguageForm;