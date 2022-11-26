import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: '/:projectId',
    element: <Tasks />
  }
])

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
