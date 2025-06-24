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

  //const [data, setData] = useState([]);
   const {user} = UseAuthContext()

      const makeAPICall = async () => {
        try {
          const response = await fetch("https://pulsefit-server.vercel.app/api/bookings/vedi-singola-prenotazione/" + userID, {mode:'cors'});
          const data = await response.json();
          setPrenotazione(data)

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

      console.log("prenotazione")
      console.log(prenotazione)

      const [status, setStatus] = useState("CHIUSO")
      
      const approvaPrenotazione = async (e) =>{

       

        setStatus("CHIUSO")
        

        const workout = {status}

        const response = await fetch("https://pulsefit-server.vercel.app/api/bookings/conferma-prenotazione/" + userID, {

            method: 'PATCH',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
              }
        })


        const json = await response.json()

        if(!response.ok){
            setError(json.error)
         }

        if(response.ok){
            setStatus("CHIUSO")
            setError(null)
            console.log('Modificato', json)
          } }

  



  return (
    <React.Fragment>
        <div className={"container-fluid pb-5"+ " " + bgType + " " + textType} id='pricing'>
        <h1 className="section-title pt-5 mt-5">Conferma</h1>
        <p className='mb-5 text-center'>Clicca Conferma per approvare la prenotazione</p>

        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              {prenotazione.map((e)=>{
                   return(

                <div className="col" key={e._id}>
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Prenotazione</h4>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title pricing-card-title {e.mese}">Status: {e.status}</h3>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>GIORNO: {e.giorno} {e.mese}</li>
                        <li>ORA: {e.ora} {e.minuto}</li>
                        <li>{e.user.email}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={()=>approvaPrenotazione()}>Approva</button>
                    </div>
                    </div>
                </div>
                )})}       


            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ConfermaPrenotazione
