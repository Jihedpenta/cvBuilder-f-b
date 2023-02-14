import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const ResumeListingComponent = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Container sx={{ py: 5, width: '100%' }} >
            <Card sx={{ padding: '50px', width: '100%' }} >
                <Grid container spacing={4} sx={{ mb: 3 }}>
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography gutterBottom variant="h3" component="div">
                            Summeries Listing
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
                    {cards.map((card) => (
                        <Grid item key={card} xs={6} sm={4} md={3}>
                            <Card
                                sx={{ display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        //                      pt: '56.25%',
                                    }}
                                    image="https://via.placeholder.com/200"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Full name
                                    </Typography>
                                    <Typography>
                                        Job Title
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Download</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Card>


        </Container>
    );
};

export default ResumeListingComponent;