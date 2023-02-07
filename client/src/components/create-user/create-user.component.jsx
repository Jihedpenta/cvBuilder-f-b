import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useCreateUser from '../../hooks/useCreateUser';
import { useMutation } from 'react-query';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { UserListContext } from '../../context/user-list.context';




export default function CreateUser() {
    // const axiosPrivate = useAxiosPrivate();
    const  { refetch } =React.useContext(UserListContext)
    
    // const createUser = async (body) => {
    //     try {
    //         const {data} = await axiosPrivate.post('/register', body);
    //         return data
    //     } catch (error) {
    //         console.log(error);
    //         throw Error(error)
    //     }
    // }

    const createUser = useCreateUser()
    const { mutate } = useMutation(createUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = {
            email: data.get('email'),
            pwd: data.get('password'),
        };
        console.log("body",body);
        mutate(body, {
            onSuccess: (data)=>{ 
                console.log('succeeded /*******----************/', data);
                refetch()
            }, 
            onError:(err)=>{
                console.log('error /*******----************/', err);

            }
        });



    };

    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="off"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>


        </>
    );
}