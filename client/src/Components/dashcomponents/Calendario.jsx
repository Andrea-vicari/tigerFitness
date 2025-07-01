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


  const elencoMesi = [
    "Gennaio","Febbraio","Marzo","Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];
  const elencoGiorni = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ];
  const elencoOre = [
    8,9,10,11,12,13,14,15,16,17,18,19,20,21
  ];
  const elencoMinuti = [
    0,30
  ];
  const elencoAnni = [
    2024,2025,2026,2027,2028,2029,2030,2031
  ];

     
    const [giorno, setGiorno] = useState('')
    const [mese, setMese] = useState('')
    const [anno, setAnno] = useState('')
    const [ora, setOra] = useState('')
    const [minuto, setMinuto] = useState('')    
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])

    const handleSubmit = async (e) =>{

        e.preventDefault()        
        openModal()

    }

    function closeModal(){
      document.getElementById('modale_workout').classList.remove("d-block")
    }
    function openModal(){
      document.getElementById('modale_workout').classList.add("d-block")
    }


    return (
      <div className={"container-fluid py-5 " + bgType}>
        <div className={"container py-5 " + bgType}>
            <input type="date" ></input>
          
        </div>
      </div>

  );

}

export default Calendario
