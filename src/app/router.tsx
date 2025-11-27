import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import { authRoutes } from '@/pages/auth'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello</div>,
  },
  {
    ...authRoutes,
  },
]

export const router = createBrowserRouter(routes)
