import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResumeConstruction from "./pages/resume-construction/resume-construction.component";
import SignIn from "./pages/sign-in/sign-in.component";
import RedirectionAuthBased from "./components/auth/redirection-auth-based/redirection-auth-based.component";
import RequireAuth from "./components/auth/require-auth/require-auth.component";
import { ROLES_LIST } from "./roles_list";
import ResumeListing from "./pages/resume-listing/resume-listing.component";
import UserManagement from "./pages/user-management/user-management.component";

import PersistLogin from './components/auth/persist-login/persist-login.component'
import Layout from "./components/layout/layout.component";

import { adminNavItems, userNavItems } from './utils/nav-items'
// import ResumePage from "./components/resume-page/resume-page.component";
import ResumeSave from "./pages/resume-save/resume-save.component";
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Pentabell from './fonts/Pentabell-Regular.ttf';

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: 'Pentabell',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Pentabell';
            src: local('Pentabell'), url(${Pentabell});
          }
        `,
      },
    },
    palette: {
      primary: {
        main: '#245097',
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>

        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PersistLogin />}>

          <Route index element={<RedirectionAuthBased />} />

          <Route element={<RequireAuth allowedRoles={[ROLES_LIST.User]} />}>

            <Route element={<Layout menuItems={userNavItems} />}>
              <Route path="/resume-listing" element={<ResumeListing />} />
              <Route path="/new-resume" element={<ResumeConstruction />} />
              <Route path="/resume" element={<ResumeSave />} />

            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES_LIST.Admin]} />}>
            <Route element={<Layout menuItems={adminNavItems} />}>

              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/admin-resume-listing" element={<ResumeListing />} />
              <Route path="/resume" element={<ResumeSave />} />

            </Route>

          </Route>

        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
