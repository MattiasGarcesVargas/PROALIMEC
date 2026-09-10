import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import HomeRoute from './routes/home.route'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomeRoute,
      },
    ],
  },
])
