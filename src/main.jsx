import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// For React Router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello From React Router!!!</div>,
  },
  {
    path: "/about",
    element: <div>I am in About Page</div>
  },
  {
    path: "/contact",
    element: <div>Call me right now</div>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
