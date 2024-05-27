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
            <section id="services" className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                    <h1 className="section-title pt-5">{role} Dashboard</h1>
                    <p className='mb-5 text-center fs-3'>Start with us your next training!</p>

                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {role == "admin" &&
                            <div className="col">
                                <div className="card shadow-sm">
                                <img src={userlistImg}/>
                                <div className="card-body">
                                    <h3>User List</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to="/userslist" type="button" className="btn btn-sm btn-outline-secondary">User List</Link>
                                    </div>

                                    </div>
                                </div>
                                </div>
                            </div>
                        }

                        {role == "admin" &&
                            <div className="col">
                                <div className="card shadow-sm">
                                <img src={newTrainingImg}/>
                                <div className="card-body">
                                    <h3>Add Training</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to="/newtraining" type="button" className="btn btn-sm btn-outline-secondary">Add training</Link>
                                    </div>

                                    </div>
                                </div>
                                </div>
                            </div>
                        }
                        {role == "user" && <UserProfile /> }

                    {role == "user" &&
                            <div className="col">
                                <div className="card shadow-sm">
                                <img src={newTrainingImg}/>
                                <div className="card-body">
                                    <h3>Scheda Training</h3>
                                    <p className="card-text">Clicca per accedere alla scheda allenamento attiva</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to="/elencoschedeapertepage" type="button" className="btn btn-sm btn-outline-secondary">Vai alla scheda</Link>
                                    </div>

                                    </div>
                                </div>
                                </div>
                            </div>
                        }




                        </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default Dashboard