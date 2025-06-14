import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/index.js'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes}/>
    <GlobalStyle/>
    <ToastContainer autoClose={1000} theme='dark'/>
  </StrictMode>
)
