import{createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Components/Home.jsx';
import './index.css'
import './CSS/navbar.css'
import './CSS/style.css'
import './CSS/OurService.css' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)