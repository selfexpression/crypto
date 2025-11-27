import { AuthPageRoutes } from './types'

export function getAuthRoute(pathname: string): AuthPageRoutes {
  switch (pathname) {
    case AuthPageRoutes.SIGN_IN:
      return AuthPageRoutes.SIGN_IN
    case AuthPageRoutes.SIGN_UP:
      return AuthPageRoutes.SIGN_UP
    default:
      return AuthPageRoutes.SIGN_IN
  }
}
