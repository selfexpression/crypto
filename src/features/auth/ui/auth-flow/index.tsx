import SignInForm from '../forms/signin'
import SignUpForm from '../forms/signup'
import { AuthPageRoutes } from '@/features/auth/model/types'

interface IAuthFlow {
  route: AuthPageRoutes
}

export default function AuthFlow({ route }: IAuthFlow) {
  switch (route) {
    case AuthPageRoutes.SIGN_IN:
      return <SignInForm />
    case AuthPageRoutes.SIGN_UP:
      return <SignUpForm />
    default:
      return <SignInForm />
  }
}
