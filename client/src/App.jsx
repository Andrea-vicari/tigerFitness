import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext";
import { useDispatch } from 'react-redux'
import { user_fit, admin } from './redux/UserSlice'
import { useEffect } from 'react';


import ScrollToTop from './Components/ScrollToTop';
import PrivacyPage from './pages/PrivacyPage';
import FaqPage from './pages/FaqPage';
import Error404 from './pages/Error404';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import SentPassword from './pages/SentPassword';
import DashboardPage from './pages/dashpages/DashboardPage';
import UsersList from './pages/dashpages/UsersListPage';
import SingleUserPage from './pages/dashpages/SingleUserPage';
import CancellaUtentePage from './pages/dashpages/CancellaUtentePage';
import NewTrainingPage from './pages/dashpages/NewTrainingPage';
import NewBookingPage from './pages/dashpages/NewBookingPage';
import SchedaTrainerPage from './pages/dashpages/SchedaTrainerPage';
import SchedaUtentePage from './pages/dashpages/SchedaUtentePage';
import ElencoSchedeApertePage from './pages/dashpages/ElencoSchedeApertePage';
import ElencoSchedeChiusePage from './pages/dashpages/ElencoSchedeChiusePage';
import ConfermaPrenotazionePage from './pages/dashpages/ConfermaPrenotazionePage';
import RifiutaPrenotazionePage from './pages/dashpages/RifiutaPrenotazionePage';
import ElencoPrenotazioniUtentePage from './pages/dashpages/ElencoPrenotazioniUtentePage';
import ElencoPrenotazioniTrainerPage from './pages/dashpages/ElencoPrenotazioniTrainerPage';
import PrenotazioniConfermatePage from './pages/dashpages/PrenotazioniConfermatePage';
import TuttiWokoutPage from './pages/dashpages/TuttiWokoutPage';

function App() {

  const {user} = UseAuthContext()

  const dispatchRole = useDispatch()

  if(user === null){

    useEffect(() => {
    dispatchRole(user_fit())
  });
  }

  if(user !== null && user.user_id == "6654d132c3e78209fb9b37da"){
    useEffect(() => {
    dispatchRole(admin())
  });
  }

  return (
    <React.Fragment>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={!user ? <LoginPage /> : <Navigate to="/dashboardpage"/>} />
            <Route path="/faqpage" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/newtraining/:id" element={<NewTrainingPage />} />
            <Route path="/cancella-utente-page/:id" element={<CancellaUtentePage />} />
            <Route path="/newbooking" element={user ? <NewBookingPage /> : <Navigate to="/login"/>} />
            <Route path="/schedatrainerpage/:id" element={<SchedaTrainerPage />} />
            <Route path="/schedautentepage/:id" element={<SchedaUtentePage />} />
            <Route path="/conferma-prenotazione/:id" element={<ConfermaPrenotazionePage />} />
            <Route path="/rifiuta-prenotazione/:id" element={<RifiutaPrenotazionePage />} />
            <Route path="/singleuser/:id" element={user ? <SingleUserPage /> : <Navigate to="/login"/>} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/login" element={user ? <Navigate to="/dashboardpage"/> : <LoginPage />} />
            <Route path="/register" element={!user ? <RegisterPage/> : <Navigate to="/login"/>}/>
            <Route path="/dashboardpage" element={user ? <DashboardPage /> : <Navigate to="/login"/>} />
            <Route path="/elencoschedeapertepage" element={user ? <ElencoSchedeApertePage /> : <Navigate to="/login"/>} />
            <Route path="/elencoschedechiusepage" element={user ? <ElencoSchedeChiusePage /> : <Navigate to="/login"/>} />
            <Route path="/elencoprenotazioniutente" element={user ? <ElencoPrenotazioniUtentePage /> : <Navigate to="/login"/>} />
            <Route path="/elencoprenotazionitrainer" element={user ? <ElencoPrenotazioniTrainerPage /> : <Navigate to="/login"/>} />
            <Route path="/userslist" element={<UsersList />} />
            <Route path="/PrenotazioniConfermatePage" element={<PrenotazioniConfermatePage />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/sentpassword" element={<SentPassword />} />
            <Route path="/newpassword/:token" element={<NewPassword />} />
            <Route path="/vedi-tutti-allenamenti" element={<TuttiWokoutPage />} />
        </Routes>
        </ScrollToTop>

    </React.Fragment>

  )
}

export default App
