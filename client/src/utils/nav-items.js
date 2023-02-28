import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const adminNavItems = [
    {
      name:'User management',
      path:'user-management',
      icon:<PeopleIcon />
    },
    {
      name:'Resume Listing',
      path:'admin-resume-listing',
      icon:<AssignmentIcon />
    }
  ]
export const userNavItems = [
    {
      name:'Resume Listing',
      path:'resume-listing',
      icon:<AssignmentIcon />
    },
    {
      name:'New Resume',
      path:'resume-construction',
      icon: <AddCircleOutlineIcon/>
    }
  ]