import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import EnhancedTable from "../../components/user-list/user-list.component";

import CreateUser from "../../components/create-user/create-user.component";






function DashboardContent() {


  return (


          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={7}>
                <EnhancedTable />
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={6} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CreateUser />
                </Paper>
              </Grid>
            </Grid>
          </Container>


          
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
