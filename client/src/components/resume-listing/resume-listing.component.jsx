import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useQuery } from 'react-query';
import useAuth from '../../hooks/useAuth';
import useCrudResume from '../../hooks/useCrudResume';
import useGetUserId from '../../hooks/useGetUserId';
import { ROLES_LIST } from '../../roles_list';

const ResumeListingComponent = () => {
    const getUserId = useGetUserId()
    const { getResumesByAuthorId, getAllResumes } = useCrudResume()
    const userId = getUserId()
    const { auth } = useAuth()


    const isAdmin = auth?.roles?.find(role => role === ROLES_LIST.Admin)

    const { data, error, isLoading } = useQuery(
        'resumesForListing',
        () => {
            if (isAdmin) {
                return getAllResumes()
            }
            return getResumesByAuthorId(userId);
        },
        {
            onSuccess: (data) => {
                console.log('fetching succeeded', data);
            }
        }
    );

    const setResumeInAppContext = (id) => {
        // fetch resume by id 
        // setResume in context
        console.log(id);
    }
    const handleEdit = (id) => {
        setResumeInAppContext(id)
        // redirect to edit path
    }
    const handleDownloadPdf = (id) => {
        setResumeInAppContext(id)
        // redirect to save path 
    }


    console.log('data, data', data);
    if (isLoading) return (<h2>The page is loading</h2>)
    return (
        <Container sx={{ py: 5, width: '100%' }} >
            <Card sx={{ padding: '50px', width: '100%' }} >
                <Grid container spacing={4} sx={{ mb: 3 }}>
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography gutterBottom variant="h3" component="div">
                            Resumes Listing
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <TextField label="Candidate Name" type="search" sx={{
                            width: '100%'
                        }} />

                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                        <TextField label="Job Title" type="search" sx={{
                            width: '100%'
                        }} />
                    </Grid>
                </Grid>


                {/* End hero unit */}
                <Grid container spacing={4}>
                    {data.map((resume) => {
                        const candidateName = resume.data.header.firstName + ' ' + resume.data.header.lastName
                        const candidateJobTitle = resume.data.header.jobTitle
                        return (
                            <Grid item key={resume._id} xs={6} sm={4} md={3}>
                                <Card
                                    sx={{ display: 'flex', flexDirection: 'column' }}
                                >

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
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