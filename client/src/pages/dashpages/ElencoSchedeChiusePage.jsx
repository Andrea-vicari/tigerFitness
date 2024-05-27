import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/NavbarFixedTop';
import ElencoSchedeChiuse from '../../Components/dashcomponents/ElencoSchedeChiuse';

function ElencoSchedeChiusePage() {
  return (
    <>
    <Navbar />
    <ElencoSchedeChiuse />
    <Footer />
    </>
  )
}

export default ElencoSchedeChiusePage