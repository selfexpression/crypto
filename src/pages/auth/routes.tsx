import type { RouteObject } from 'react-router-dom'

import { AuthPage } from '.'

export const authRoutes: RouteObject = {
  path: '/auth',
  element: <AuthPage />,
  children: [
    {
      path: '*',
      element: <AuthPage />,
    },
  ],
}
