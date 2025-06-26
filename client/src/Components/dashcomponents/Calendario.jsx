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
                  <div className="month">
  <ul>
    <li className="prev">&#10094;</li>
    <li className="next">&#10095;</li>
    <li>August<br><span style="font-size:18px">2021</span></li>
  </ul>
</div>

<ul className="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul className="days">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  
</ul>
                    
                   
                    
                    
                  


          </div>  
        </div>
        </div>
    </React.Fragment>
  )
}

export default Calendario
