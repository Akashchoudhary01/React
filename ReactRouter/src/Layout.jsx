import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default Layout
