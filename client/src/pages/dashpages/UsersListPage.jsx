import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import UsersList from '../../Components/dashcomponents/UsersList';
import ListaUtenti from '../../Components/dashcomponents/ListaUtenti';


function UsersListPage() {
  return (
    <>
    <Navbar />
    <ListaUtenti />
    <Footer />
    </>
  )
}

export default UsersListPage
