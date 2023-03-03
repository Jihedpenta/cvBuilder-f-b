import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCrudUser from "../../hooks/useCrudUser";
import { useMutation, useQueryClient } from "react-query";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export default function CreateUser({userToEdit, setUserToEdit}) {
  const queryClient = useQueryClient();
  const {createUser, editUser} = useCrudUser();
  const createMutation = useMutation(createUser);
  const editMutation = useMutation(editUser);

  const [userCreation, setUserCreation] = useState(true)
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      email: data.get("email"),
      pwd: data.get("password"),
    };
    createMutation.mutateAsync(body, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("usersListing");
      },
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      email:userToEdit,
      newEmail: data.get("email"),
      newPwd: data.get("password"),
    };
    editMutation.mutateAsync(body, {
      onSuccess: (data) => {
        setUserCreation(true)
        queryClient.invalidateQueries("usersListing");
      },
    });
  };

  useEffect(()=>{
    emailRef.current.value = ''
    passwordRef.current.value = ''

  },[])

  useEffect(()=>{
    if (userCreation){
      setUserToEdit('')
      emailRef.current.value = ''
      passwordRef.current.value = ''
    }
  }, [userCreation])
  useEffect(()=>{
    if (userToEdit !== ''){
      setUserCreation(false)
      emailRef.current.value = userToEdit

      // setUserToEdit('')
    }
  }, [userToEdit])


  return (
    <>
    {
      !userCreation ? 
<Grid container>
        <Grid item md={9}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Edit User
      </Typography>
        </Grid>
        <Grid item md={3}>
        <Button variant="outlined" onClick={()=>{setUserCreation(true)}} >Create </Button>
        </Grid>
      </Grid>:
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Create User
     </Typography>
    }
      
      
      <Box component="form" onSubmit={userCreation ? handleSubmit : handleEdit} noValidate sx={{ mt: 1 }}>
        <TextField
        inputRef={emailRef}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
          autoFocus
          InputLabelProps={{
            shrink: true,
        }}
        />
        <TextField
        inputRef={passwordRef}
          margin="normal"
          required
          fullWidth
          name="password"
          
          label= {userCreation?"Password" : "New Password" }
          type="password"
          id="password"
          autoComplete="off"
          InputLabelProps={{
            shrink: true,
        }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
        {
          userCreation?
          'Create user'
          :
          'Edit user'
        }
          
        </Button>
      </Box>
    </>
  );
}
