import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import UserList from "../../components/user-list/user-list.component";
import CreateUser from "../../components/create-user/create-user.component";


function DashboardContent() {
  const [userToEdit, setUserToEdit] = React.useState('')
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={7}>
          <UserList setUserToEdit={setUserToEdit}/>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CreateUser userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
          </Paper>
        </Grid>
      </Grid>
    </Container>



  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
