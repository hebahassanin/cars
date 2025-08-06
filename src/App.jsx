import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import CarDetails from './Components/CarDetails/CarDetails'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import AllCars from './Components/AllCars/AllCars'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<MasterLayout/>,
      children:[
        {index:true,element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'cardetails/:id', element:<CarDetails/>},
        {path:'allcars', element:<AllCars/>}
      ]
    }
  ])

  return (
    <>
    
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
