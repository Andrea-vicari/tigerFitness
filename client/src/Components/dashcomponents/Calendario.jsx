
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/pulseFit_logo.svg";
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";

const Calendario = () =>{

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"   




    return (
      <div className="app">
          <div className="app__main">
      			<div className="calendar">
      					<div id="calendar"></div>
              </div>
          </div>
      </div>

  );

}

export default Calendario
