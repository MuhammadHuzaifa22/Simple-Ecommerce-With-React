import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout.jsx'


import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import SingleCountryPage from './Pages/SingleCountryPage.jsx'
import AllCountriesData from './Pages/Countries.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "countries",
        element: <AllCountriesData/>
      },
      {
        path: "/singlecountry/:cca3",
        element: <SingleCountryPage/>
      },
    ]
  }
])    
    

 


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

    <App />
  </RouterProvider>
  
)
