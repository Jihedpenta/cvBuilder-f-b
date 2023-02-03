import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Grid, Paper, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../logo.webp'

// const theme = createTheme();

const LoginFormContainer = ({ children, theme }) => {

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>


                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(/images/cover.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img src={logo} alt="Logo" width="100px" />

                        <Typography component="h1" variant="h5" mt={5}>
                            Sign in
                        </Typography>
                        {children}
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                            {'Copyright © '}
                            <Link color="inherit" href="https://pentabell.com/">
                                Pentabell.com
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>

                </Grid>

            </Grid>

        </ThemeProvider>

    );
};

export default LoginFormContainer;