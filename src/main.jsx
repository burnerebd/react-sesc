import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.jsx'
import {HomePage, TasksPage, ProjectsPage} from './pages'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },

  {
    path: "/tasks",
    element: <TasksPage/>
  },

  {
    path: "/projects",
    element: <ProjectsPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
