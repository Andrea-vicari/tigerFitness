import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import ListaTuttiWorkout from '../../Components/dashcomponents/ListaTuttiWorkout';


function TuttiWorkoutPage() {
  return (
    <>
    <Navbar />
    <ListaTuttiWorkout />
    <Footer />
    </>
  )
}

export default TuttiWorkoutPage
