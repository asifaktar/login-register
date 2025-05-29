import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/Login",
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> 
    </AuthProvider>
  </StrictMode>,
)
