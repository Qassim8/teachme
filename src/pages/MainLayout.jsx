import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
  return (
      <>
          <Header />
          <div className="container mx-auto">
            <Outlet/>
          </div>
          <Footer/>
      </>
  )
}

export default MainLayout