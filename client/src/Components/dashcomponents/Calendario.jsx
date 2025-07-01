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

        <div className="d-flex justify-content-center align-items-center py-5">
          <div className={"p-3 rounded w-100 " + bgType + textType}>
            <h2 className={textType}>Prenota la tua prossima lezione</h2>
            <input type="date">
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="title">
                  <strong>Giorno</strong>
                </label>

                <select className="form-select" onChange={(e) => setGiorno(e.target.value)}>
                <option>Scegli il giorno</option>
                {elencoGiorni.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Mese</strong>
                </label>

                <select className="form-select" onChange={(e) => setMese(e.target.value)}>
                <option>Scegli il mese</option>
                {elencoMesi.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Anno</strong>
                </label>

                <select className="form-select" onChange={(e) => setAnno(e.target.value)}>
                <option>Scegli l'annno</option>
                {elencoAnni.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>
              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Ora</strong>
                </label>

                <select className="form-select" onChange={(e) => setOra(e.target.value)}>
                <option>Scegli l'ora</option>
                {elencoOre.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Minuto</strong>
                </label>

                <select className="form-select" onChange={(e) => setMinuto(e.target.value)}>
                <option>Scegli minuto</option>
                {elencoMinuti.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3" onClick={()=>setUser(userID)}>
                Inserisci
              </button>

              <Link to={`/dashboardpage`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
                Torna Indietro
              </Link>
              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>



          </div>
        </div>
      </div>
      </div>

  );

}

export default Calendario
