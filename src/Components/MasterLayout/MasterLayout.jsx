import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home';
import './MasterLayout.css';
import { Outlet } from 'react-router-dom';


export default function MasterLayout() {
  return (
    <>
    <div className='container-fluid'>
      <Outlet/>
      
    </div>  
    </>
  )
}
