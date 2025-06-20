import React from 'react'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/pulseFit_logo.svg";
import { useSelector } from 'react-redux'



function ConfermaPrenotazione() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  let clicked = useLocation();

  userID = clicked.state



  return (
    <div className='container'>

    </div>
  )
}

export default ConfermaPrenotazione
