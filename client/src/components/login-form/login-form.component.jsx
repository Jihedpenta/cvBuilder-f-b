import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Link,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api/auth/auth-utils";
import useAuth from "../../hooks/useAuth";
import { ROLES_LIST } from "../../roles_list";
import { useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setAuth, persist, setPersist, auth } = useAuth();
  const { refreshTokenLoading , refreshingToken } = useRefreshToken();

  const navigate = useNavigate();

  const togglePersist = () => {
    setPersist(prev => !prev);
  }


  useEffect(()=>{
    const refresh = async ()=>{
      const data = await refreshingToken()
      return data
    }
    refresh()
  },[])
  useEffect(()=>{
    if (auth?.accessToken){
      navigate('/', { replace: true });
    }
  },[auth])

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist])


  const { isLoading, error, isError, mutateAsync } = useMutation(
    'signIn',
    loginUser,
    {
      enabled:false,
      onSuccess: (data) => {
        console.log(data);
        sessionStorage.setItem("sessionSigned",true)
        setAuth({ roles: data.roles, accessToken: data.accessToken })
        const home = data.roles.find(role => role === ROLES_LIST.Admin)
          ? "/user-management"
          : "/resume-listing"

        navigate(home, { replace: true });
      },
    }
  );


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handling submit');
    await mutateAsync({ email, pwd })
  };

  if(refreshTokenLoading) return (<h2>Refreshing</h2>)


  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => { setEmail(e.target.value) }}
        value={email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => { setPwd(e.target.value) }}
        value={pwd}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" onChange={togglePersist} checked={persist} />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#245097" }}
      >
        {
          isLoading ?
            <CircularProgress color="inherit" size={16} />
            :
            'Sign In'
        }
      </Button>
      {isError && (
        <Grid container mb={2}>
          <Grid
            item
            sx={{
              width: "100%",
            }}
          >
            <Alert severity="error">{error.message}</Alert>
          </Grid>
        </Grid>
      )}

      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2" sx={{ color: "#245097" }}>
            Forgot password?
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
