import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import userlistImg from '../../assets/images/UserList.jpg'
import newTrainingImg from '../../assets/images/NewTraining.jpg'
import { Link } from 'react-router-dom';
import UserProfile from '../dashcomponents/UserProfile'

function Dashboard() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const role = useSelector((state) => state.setRole.value)

    const {user} = UseAuthContext()

    console.log(role)

    return (
        <React.Fragment>
                <div className='container-fluid pt-1 mt-5 bg-stripe'>
                    <div className='container text-center mt-5 pb-1'>
                        <h1 className='display-2 text-white text-uppercase'>DashBoard</h1>
                    </div>
                </div>
            <section className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                    <h1 className="section-title pt-5">{role} Dashboard</h1>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <h2 className="fw-bold text-body-emphasis">Area Gestionale</h2>
                                <UserProfile />

                            </div>

                            {/** Below only for ADMINS */}
                            {role == "admin" &&

                            <div className="col-md-9 mt-5">

                                <div className="p-5 bg-body-tertiary border rounded-3">
                                <div className="col-md-4">
                                    <img src={userlistImg} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <h2>Lista Utenti</h2>
                                    <p>Vedi l'elenco completo degli utenti da dove potrai vedere/aggiungere i workout di ogni singolo utente </p>
                                    <Link to="/userslist" type="button" className="btn btn-sm btn-outline-primary">Vai alla lista utenti</Link>
                                </div>
                            </div>}
                            {/** Below only for ADMINS */}
                            {role == "admin" &&
                            <div className="col-sm-4 mb-3">
                                <div className="list-group">
                                <Link to={`/singleuser/${e._id}`} state={e._id} className="list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
                                <img src={userlistImg}  style={{width:70}}/>
                                    <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div>

                                        <h4 className="mb-0">{e.username}</h4>
                                    </div>
                                    </div>
                                </Link>
                                </div>
                            </div>
                            }
                            {/** Below only for USERS */}
                            {role == "user" &&
                            <div className="col-md-9 mt-5">
                                <div className="p-5 bg-body-tertiary border rounded-3">
                                    <h2>Scheda Training</h2>
                                    <p>Clicca per accedere alla scheda allenamento attiva</p>
                                    <Link to="/elencoschedeapertepage" type="button" className="btn btn-sm btn-primary">Vai alla scheda</Link>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default Dashboard