import SignInForm from '../signin-form';
import SignUpForm from '../signup-form';
import { AuthPageRoutes } from '@/features/auth/model/types';

interface IAuthForm {
  route: AuthPageRoutes;
}

export default function AuthForm({ route }: IAuthForm) {
  switch (route) {
    case AuthPageRoutes.SIGN_IN:
      return <SignInForm />;
    case AuthPageRoutes.SIGN_UP:
      return <SignUpForm />;
    default:
      return <SignInForm />;
  }
}
