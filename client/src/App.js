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
import ResumeSave from "./pages/resume-save/resume-save.component";
import Page404 from "./Page404";

function App() {

  return (


      <Routes>

        <Route path="/sign-in" element={<SignIn />} />

        <Route element={<PersistLogin />}>

          <Route index element={<RedirectionAuthBased />} />

          <Route element={<RequireAuth allowedRoles={[ROLES_LIST.User]} />}>

            <Route element={<Layout menuItems={userNavItems} />}>
              <Route path="/resume-listing" element={<ResumeListing />} />
              <Route path="/resume-construction" element={<ResumeConstruction />} />
              <Route path="/resume-construction/:resumeId" element={<ResumeConstruction />} />
              <Route path="/resume/:resumeId" element={<ResumeSave />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES_LIST.Admin]} />}>
            <Route element={<Layout menuItems={adminNavItems} />}>

              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/admin-resume-listing" element={<ResumeListing />} />

            </Route>

          </Route>

        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>

  );
}

export default App;
