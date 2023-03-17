import { Button, Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React,{useEffect} from 'react';
import { useQuery } from 'react-query';
import useAuth from '../../hooks/useAuth';
import useCrudResume from '../../hooks/useCrudResume';
import useResume from '../../hooks/useResume';

import useGetUserId from '../../hooks/useGetUserId';
import { ROLES_LIST } from '../../roles_list';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ResumeListingComponent = () => {
    const getUserId = useGetUserId()
    const { getResumesByAuthorId, getAllResumes } = useCrudResume()
    const userId = getUserId()
    const { auth } = useAuth()
    const navigate = useNavigate();
    const  [filterIndustry, setFilterIndustry] = useState('')
    const  [filterName, setFilterName] = useState('')
    const  [filterJob, setFilterJob] = useState('')

    const isAdmin = auth?.roles?.find(role => role === ROLES_LIST.Admin)
    const resumesQuery = useQuery(
        'resumesForListing',
        () => {
            if (isAdmin) {
                return getAllResumes()
            }
            return getResumesByAuthorId(userId);
        }
    );

    const handleEdit = async (id) => {
        navigate('/resume-construction/' + id)
        // redirect to edit path
    }
    const handleDownloadPdf = async (id) => {
        navigate('/resume/' + id)
        // redirect to save path 
    }


    if (resumesQuery.isLoading) return (<h2>The page is loading</h2>)
    return (
        <Container sx={{ py: 5, width: '100%' }} >
            <Card sx={{ padding: '50px', width: '100%' }} >
                <Grid container spacing={4} sx={{ mb: 3 }}>
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography gutterBottom variant="h4" component="div">
                            Resumes Listing
                        </Typography>
                    </Grid>

                    {

                        isAdmin ?
                            <React.Fragment>
                                <Grid item xs={2} sm={2} md={2}>
                                    <FormControl sx={{ minWidth: 120, width: '100%' }}>
                                        <InputLabel id="industry-picker">Industry</InputLabel>
                                        <Select
                                            labelId="industry-picker"
                                            label="Industry"
                                            defaultValue=''
                                            onChange={(e)=>{setFilterIndustry(e.target.value)}}
                                        >
                                            <MenuItem value={"transport"}>Transportation</MenuItem>
                                            <MenuItem value={"telecom"}>Telecom</MenuItem>
                                            <MenuItem value={"oilgas"}>Oil & gas</MenuItem>
                                            <MenuItem value={"energy"}>Energy</MenuItem>
                                            <MenuItem value={"other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={2} sm={2} md={2}>
                                    <TextField 
                                    label="Candidate Name" 
                                    type="search" 
                                    sx={{
                                        width: '100%'
                                    }} 
                                    onChange={(e)=>{setFilterName(e.target.value)}}/>

                                </Grid>
                                <Grid item xs={2} sm={2} md={2}>
                                    <TextField label="Job Title" type="search" sx={{
                                        width: '100%'
                                    }} 
                                    onChange={(e)=>{setFilterJob(e.target.value)}}
                                    />
                                </Grid>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Grid item xs={3} sm={3} md={3}>
                                    <TextField label="Candidate Name" type="search" sx={{
                                        width: '100%'
                                    }}
                                    
                                    onChange={(e)=>{setFilterName(e.target.value)}}
                                    />

                                </Grid>
                                <Grid item xs={3} sm={3} md={3}>
                                    <TextField label="Job Title" type="search" sx={{
                                        width: '100%'
                                    }}
                                    onChange={(e)=>{setFilterJob(e.target.value)}}
                                    
                                    />
                                </Grid>
                            </React.Fragment>
                    }

                </Grid>


                {/* End hero unit */}
                <Grid container spacing={4}>
                    {resumesQuery.data.map((resume) => {
                        const candidateName = resume.data.header.firstName + ' ' + resume.data.header.lastName
                        const candidateJobTitle = resume.data.header.jobTitle
                        const resumeIndustry = resume.industry

                        if (!candidateName.toLowerCase().includes(filterName.toLowerCase())) return (true)
                        if (!candidateJobTitle.toLowerCase().includes(filterJob.toLowerCase())) return (true)
                        if (filterIndustry!==''&& filterIndustry!==resumeIndustry) return (true)

                        return (
                            <Grid item key={resume._id} xs={6} sm={4} md={3}>
                                <Card
                                    sx={{ display: 'flex', flexDirection: 'column' }}
                                >

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {candidateName}
                                        </Typography>
                                        <Typography>
                                            {candidateJobTitle}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {!isAdmin && <Button size="small" onClick={() => {
                                            handleEdit(resume._id)
                                        }}>Edit</Button>}
                                        <Button size="small" onClick={() => {
                                            handleDownloadPdf(resume._id)
                                        }}>Save PDF</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }

                    )}
                </Grid>
            </Card>


        </Container>
    );
};

export default ResumeListingComponent;