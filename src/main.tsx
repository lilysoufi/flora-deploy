import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path : "/" ,
    element : <Home />
  }
  ,
  {
    path : "/about" ,
    element : <Home />
  }
  ,
  {
    path : "/service" ,
    element : <Home />
  }
  ,
  {
    path : "/newproperty",
    element : <Home />
  }
  ,
  {
    path : "/conatct" ,
    element : <Home />
  }
  ,
  {
     path :"/login" ,
     element : <Home />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
