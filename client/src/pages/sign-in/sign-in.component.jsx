import { createTheme } from '@mui/material/styles';
import LoginForm from '../../components/login-form/login-form.component';
import LoginFormContainer from '../../components/login-form-container/login-form-container.component';

const theme = createTheme();

export default function SignIn() {

  return (
    <LoginFormContainer theme={theme}>
      <LoginForm />
    </LoginFormContainer>
  );
}