import{createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Components/Home.jsx';

import './CSS/navbar.css'
import './CSS/style.css'
import './CSS/OurService.css' 

import './CSS/demo_edu.css' 
import './CSS/demo_dev.css' 
import './CSS/demo_drone.css' 
import './CSS/demo_holo.css' 
import './CSS/demo_space.css' 
import './CSS/demo_metaverse.css' 

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