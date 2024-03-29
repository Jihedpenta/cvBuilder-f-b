import { Button, Grid, TextField, Typography, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import useResume from '../../../hooks/useResume';
import FormCard from '../form-card/form-card.component';

const SummeryForm = () => {
    const { resumeContent, setResumeContent } = useResume()
    const ref = useRef()
    const [errMsg, setErrMsg] = useState('')
    const [resumeSummery, setResumeSummery] = useState('');

    const handleSave = () => {
        const summary = ref.current.value
        setErrMsg(summary === '' ? 'Please enter summery' : '')
        if (summary !== '') {
            const resumeData = JSON.parse(JSON.stringify({ ...resumeContent, summary }))
            setResumeContent(resumeData);
        }
    };

    useEffect(() => {
      if (JSON.stringify(resumeContent.summary) !== JSON.stringify(resumeSummery)) {
        if(resumeContent.summary){
            setResumeSummery(resumeContent.summary);
        }else{
        setResumeSummery('');

        }
      }
      
    }, [resumeContent]);
  
    useEffect(()=>{
        if (resumeSummery !== ''){
            if (ref.current) {
                ref.current.value = resumeSummery;
            }
        }else{
            if (ref.current) {
                ref.current.value = '';
            }
        }
    }, [resumeSummery])
    return (
        <FormCard title='Summery'>
            <Grid container spacing={2}>
                <Grid item xs={12}
                    sm={12}
                    md={12}
                >
                    <TextField
                        label="Profile Summery"
                        inputRef={ref}
                        multiline
                        rows={4}
                        variant="filled"
                        sx={{
                            width: '100%'
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                {
                    errMsg !== '' &&
                    <Grid item xs={12}
                        sm={12}
                        md={12}
                    >
                        <Typography variant='body1' color='red'>
                            {errMsg}
                        </Typography>
                    </Grid>
                }

                <Grid item xs={12}
                    sm={12}
                    md={12}
                >
                    <Button onClick={handleSave}>Save</Button>

                </Grid>
            </Grid>
        </FormCard>

    );
};

export default SummeryForm;