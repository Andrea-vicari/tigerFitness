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
          const response = await fetch(`https://tiger-fitness-server.vercel.app/api/workouts/closed/closedWorks`, {mode:'cors'});
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

         <div className={"container-fluid pt-5 mt-5" + " " + bgType + " " + textType}>
            <div className="col-md-6 pb-4 mx-auto">
            
                <div className='container'>
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
                  
                  </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    {data.map((e)=>{
                      return(
                    <div className={"card mb-4 rounded-3 shadow-sm" + " " + bgType + " " + textType} key={e._id}>
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">{e.title}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="fs-6 pricing-card-title">CHIUSA IL:</h1>
                            <h1 className="fs-5 pricing-card-title">{e.dataChiusura}</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>SERIE: {e.series}</li>
                            <li>REPS: {e.reps}</li>
                            <li>CARICO: {e.loads}</li>
                            <li>RIPOSO: {e.rest}</li>
                            </ul>
                            
                        </div>
                    </div>
                      )})}     
                </div>
                
                
            </div>
                <Link to={"/dashboardpage"} className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Torna alla Homepage
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>
        </div>

            </div>

        </div>
    )

}

export default ElencoSchedeChiuse
