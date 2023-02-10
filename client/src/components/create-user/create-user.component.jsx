import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCreateUser from "../../hooks/useCreateUser";
import { useMutation, useQueryClient } from "react-query";

export default function CreateUser() {
  const queryClient = useQueryClient();
  const createUser = useCreateUser();
  const { mutateAsync } = useMutation(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      email: data.get("email"),
      pwd: data.get("password"),
    };
    console.log("body", body);
    mutateAsync(body, {
      onSuccess: (data) => {
        console.log("succeeded /*******----************/", data);
        queryClient.invalidateQueries("users");
      },
      onError: (err) => {
        console.log("error /*******----************/", err);
      },
    });
  };

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Create User
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create user
        </Button>
      </Box>
    </>
  );
}
