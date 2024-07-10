import React from 'react'

function TrainerMenu() {
  return (
    <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link fs-4" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "elencoschedeapertepage" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/elencoschedeapertepage'} >Prenotazioni confermate</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "newbooking" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/newbooking'}>Elenco utenti</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "elencoprenotazioniutente" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/elencoprenotazioniutente'}>Controlla prenotazioni</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "elencoschedechiusepage" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/elencoschedechiusepage'}>Schede Completate</Link>
              </li>


              {user && <li className="nav-item">
                <Link className="nav-link fs-4" to={'/dashboardpage'}>DashBoard</Link>
              </li>}

            </ul>
  )
}

export default TrainerMenu
