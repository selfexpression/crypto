import { useLocation } from 'react-router-dom'

import { AuthForm, getAuthRoute } from '@/features/auth'

export default function AuthPage() {
  const location = useLocation()
  const route = getAuthRoute(location.pathname)

  return <AuthForm route={route} />
}
