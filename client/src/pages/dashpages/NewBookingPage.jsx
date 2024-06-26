import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/NavbarFixedTop';
import NewBooking from '../../Components/dashcomponents/NewBooking';


function NewBookingPage() {
  return (
    <>
    <Navbar />
    <NewBooking />
    <Footer />
    </>
  )
}

export default NewBookingPage