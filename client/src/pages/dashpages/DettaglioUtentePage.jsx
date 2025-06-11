import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import DettaglioUtente from '../../Components/dashcomponents/SingleUser';



function DettaglioUtentePage() {
  return (
    <>
    <Navbar />
    <DettaglioUtente />
    <Footer />
    </>
  )
}

export default DettaglioUtentePage
