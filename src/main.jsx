import React from "react";
import ReactDOM from "react-dom/client";
import { TaskProvider } from "./context/task-context/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, TasksPage, ProjectsPage } from "./pages";
import { ProjectProvider } from "./context/project-context/index.jsx";
import "./main.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/tasks",
    element: <TasksPage />,
  },

  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectProvider>
    <TaskProvider>
        <RouterProvider router={router} />
    </TaskProvider>
    </ProjectProvider>
  </React.StrictMode>,
);
