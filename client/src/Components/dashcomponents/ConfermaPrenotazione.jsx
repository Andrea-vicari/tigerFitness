import React from 'react'
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/pulseFit_logo.svg";
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { useSelector } from 'react-redux'

var userID

function ConfermaPrenotazione() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  let clicked = useLocation();

  userID = clicked.state

  console.log(userID)
  
  const [prenotazione, setPrenotazione] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
 

  const makeAPICall = async () => {
      try {
        const response = await fetch('https://pulsefit-server.vercel.app/api/bookings/vedi-singola-prenotazione/' + userID);
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

  return (
    <React.Fragment>
        <div className={"container-fluid pb-5"+ " " + bgType + " " + textType} id='pricing'>
        <h1 className="section-title pt-5 mt-5">Conferma</h1>
        <p className='mb-5 text-center'>Clicca Conferma per approvare la prenotazione</p>

        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Prenotazione</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Conferma</button>
                    </div>
                    </div>
                </div>


            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ConfermaPrenotazione
