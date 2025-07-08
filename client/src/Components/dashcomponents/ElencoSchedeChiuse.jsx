import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

var userID

function ElencoSchedeChiuse(){

    // Dark Theme Logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()

    let clicked = useLocation();

    userID = clicked.state

    console.log("Sotto user ID")
    console.log(userID)

   


    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://pulsefit-server.vercel.app/api/workouts/closed/closedWorks`, {mode:'cors'});
          const data = await response.json();
          setData(data)
          console.log({ data})
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        if(user){
           makeAPICall();
        }

      }, [user])

      var singleUserTraining = [];
      let fakeVar = false

      data.forEach(element => {
        element.user == userID ? singleUserTraining.push(element) : fakeVar = true

      });

    console.log("sotto sdingolo")
    console.log(singleUserTraining)
     var lunghezzaSchedeChiuse = data.length

    return(

        <div className="container-fluid pt-5 mt-5">
            <div className="col-md-6 pb-4 mx-auto">
            <div className={"p-3 rounded w-100" + " " + textType + " " + bgType}>
                  <h3 className="text-white">Schede Completate</h3>
                  <hr className="col-3 col-md-2 mb-3"/>

                  <div className="row mb-3">
                  {lunghezzaSchedeChiuse == 0 && 
                      <div className='row'>
                                        
                                            <div className="col-md-6">
                                                <h2>Nessuna Scheda completata</h2>
                                                <p>Vai alla tua scheda e completa gli allenamenti</p>
                                                <Link to="/elencoschedeapertepage" type="button" className="btn btn-sm btn-outline-primary">Vai alla Scheda</Link>
                                            </div>
                                    </div>
                  }
                  {data.map((e)=>{
                      return(

                    <div className="col-12" key={e._id}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h6 className="card-title">{e.title}</h6>

                                <p className="card-text mb-0">SERIE: {e.series}</p>
                                <p className="card-text mb-0">REPS: {e.reps}</p>
                                <p className="card-text mb-0">CARICO: {e.loads}</p>
                                <p className="card-text mb-0">RIPOSO: {e.rest}</p>
                            </div>
                            <div className="card-footer">
                            <small className="card-text mb-0">CHIUSA IL: {e.dataChiusura}</small>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h6 className="card-title">{e.title}</h6>

                                <p className="card-text mb-0">SERIE: {e.series}</p>
                                <p className="card-text mb-0">REPS: {e.reps}</p>
                                <p className="card-text mb-0">CARICO: {e.loads}</p>
                                <p className="card-text mb-0">RIPOSO: {e.rest}</p>
                            </div>
                            <div className="card-footer">
                            <small className="card-text mb-0">CHIUSA IL: {e.dataChiusura}</small>
                            </div>
                        </div>
                    </div>


                     )})}
                  </div>
                  <Link to={"/dashboardpage"} className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Torna alla Homepage
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>
            </div>
                <div className='container'>
                    <h3 className="text-white">Schede Completate</h3>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Free</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

            </div>

        </div>
    )

}

export default ElencoSchedeChiuse
