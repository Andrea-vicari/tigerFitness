import React from 'react'
import { useState, useEffect } from "react";
import logo from "../../assets/images/pulseFit_logo.svg";
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { useSelector } from 'react-redux'



function Calendario() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

 



  return (
    <React.Fragment>
        <div className={"container-fluid pb-5"+ " " + bgType + " " + textType} id='pricing'>
        <h1 className="section-title pt-5 mt-5">CALENDARIO</h1>
        <p className='mb-5 text-center'>Clicca Conferma per approvare la prenotazione</p>

        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                  




                    
                   
                    
                    
                  


          </div>  
        </div>
        </div>
    </React.Fragment>
  )
}

export default Calendario
