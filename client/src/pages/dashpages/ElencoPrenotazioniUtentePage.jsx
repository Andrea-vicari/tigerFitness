import React from 'react'
import ListaPrenotazioniUtente from '../../Components/dashcomponents/ListaPrenotazioniUtente'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';


function ElencoPrenotazioniUtentePage() {
  return (
    <>
    <Navbar />
    <ListaPrenotazioniUtente />
    <Footer />
    </>
  )
}

export default ElencoPrenotazioniUtentePage
