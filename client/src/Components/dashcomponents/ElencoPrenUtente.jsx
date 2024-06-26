import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import userlistImg from '../../assets/images/UserList.jpg'
import elencoPren from '../../assets/images/elencoPrenotazioni_640.jpg'
import newTrainingImg from '../../assets/images/NewTraining.jpg'
import agendaImg from '../../assets/images/Agenda_640.jpg'
import { Link } from 'react-router-dom';
import UserProfile from '../dashcomponents/UserProfile'

function ElencoPrenUtente() {

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
                        <h1 className='display-2 text-white text-uppercase'>Elenco Prenotazioni</h1>
                    </div>
                </div>
            <section className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                    <h1 className="section-title pt-5">Elenco Prenotazioni</h1>
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary mx-2">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary mx-2">Edit</button>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>



                    </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default ElencoPrenUtente