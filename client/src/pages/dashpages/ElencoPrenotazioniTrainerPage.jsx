import React from 'react'
import ListaPrenotazioniTrainer from '../../Components/dashcomponents/ListaPrenotazioniTrainer'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';


function ElencoPrenotazioniTrainerPage() {
  return (
    <>
    <Navbar />
    <ListaPrenotazioniTrainer />
    <Footer />
    </>
  )
}

export default ElencoPrenotazioniTrainerPage
