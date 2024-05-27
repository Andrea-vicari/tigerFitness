import React from 'react'
import Dashboard from '../../Components/dashcomponents/Dashboard'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/NavbarFixedTop';


function DashboardPage() {
  return (
    <>
    <Navbar />
    <Dashboard />
    <Footer />
    </>
  )
}

export default DashboardPage