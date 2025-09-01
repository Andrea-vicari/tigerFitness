import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaUtenti from '../../Components/dashcomponents/ListaUtenti';


function TuttiWorkoutPage() {
  return (
    <>
    <Navbar />
    <ListaUtenti />
    <Footer />
    </>
  )
}

export default TuttiWorkoutPage
