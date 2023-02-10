import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResumeConstruction from "./pages/resume-construction/resume-construction.component";
import SignIn from "./pages/sign-in/sign-in.component";
import RedirectionAuthBased from "./components/auth/redirection-auth-based/redirection-auth-based.component";
import RequireAuth from "./components/auth/require-auth/require-auth.component";
import { ROLES_LIST } from "./roles_list";
import ResumeListing from "./pages/resume-listing/resume-listing.component";
// import UserManagement from "./pages/user-management/user-management.component";
import UserManagement from "./pages/user-management/user-management.component";

import PersistLogin from './components/auth/persist-login/persist-login.component'
import Layout from "./components/layout/layout.component";

import {adminNavItems, userNavItems} from './utils/nav-items'

function App() {

  return (
    <Routes>

      <Route path="/sign-in" element={<SignIn />} />

      <Route element={<PersistLogin />}>
        <Route index element={<RedirectionAuthBased />} />

        <Route element={<RequireAuth allowedRoles={[ROLES_LIST.User]} />}>

        <Route element={<Layout menuItems={userNavItems} />}>
        
          <Route path="/resume-listing" element={<ResumeListing />} />
          <Route path="/new-resume" element={<ResumeConstruction />} />
          </Route>
        </Route>
        
        <Route element={<RequireAuth allowedRoles={[ROLES_LIST.Admin]} />}>
          <Route path="/user-management" element={<UserManagement />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
