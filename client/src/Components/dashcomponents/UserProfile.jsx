import React from 'react'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios'

function UserProfile() {

    // Dark Ligth Logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()
    var singleID = user.user_id


    const makeUSERCall = async () => {
        try {
          const response = await fetch('https://pulsefit-server.vercel.app/api/users/');
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
           makeUSERCall();
        }

      }, [user])

      var singleUser = [];
      let terVar = false

    var urlImmagine;

      data.forEach(element => {
        console.log(element)
        element._id == singleID  ? singleUser.push(element) : terVar = true
        return singleUser
      });


      const [file, setFile] = useState(null);
      const [loading, setLoading] = useState(false);
      const [res, setRes] = useState({});
      const [immagineUrl, setImmagineUrl] = useState('')


      const handleSelectFile = (e) => setFile(e.target.files[0]);

      const handleUpload = async () => {



        try {
          setLoading(true);
          const data = new FormData();
          data.append("my_file", file);
          const res = await axios.post("https://pulsefit-server.vercel.app/api/users/upload", data);
          setRes(res.data);
          urlImmagine = res.data.secure_url
          setImmagineUrl(urlImmagine)
          console.log("@@@@@@@ SOTTO IMMAGINE URL")
          console.log(urlImmagine)

        } catch (error) {
          alert(error.message);
        } finally {
          setLoading(false);
        }
          modificaURL(urlImmagine)

      };

     function closeModal(){
        document.getElementById('modale_workout').classList.remove("d-block")


      }
      function openModal(){
        document.getElementById('modale_workout').classList.add("d-block")

      }

      console.log("singleUser")
      console.log(singleUser)
     console.log("urlImmagine '''''' ")
    console.log(urlImmagine)



    const navigate = useNavigate();


    const modificaURL = (imag) => {


    alert(singleUser)




    console.log("Qui sotto immagine")
    console.log(imag)


    const data = {
      urlImmagine:imag
    };




    axios
      .patch(`https://pulsefit-server.vercel.app/api/users/aggiungi-immagine-utente/6654d16cc3e78209fb9b37de`, data)
      .then((res) => {
        navigate(`/dashboardpage`);
      })
      .catch((err) => {
        console.log(err)
        console.log('Error in AggiornaInfoComp!');
      });
  };

/*
      const handleSubmit = async (e) =>{

        e.preventDefault()

        setStatus("CHIUSO")
        setDatachiusura(dataChiusura)

        const workout = {status, dataChiusura}

        const response = await fetch(`https://pulsefit-server.vercel.app/api/workouts/${title}`, {

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
            setDatachiusura(dataChiusura)
            setError(null)
            openModal()
            console.log('Modificato', json)
          } }


*/

  return (
    <>
    {singleUser.map((e)=>{

      var dataIsc = singleUser[0].createdAt
      var split = dataIsc.split('T')
      console.log(split)

    return(
    <div className="col" key={e._id}>
            <div className={bgType}>
                <div className=''>
                    <img src={e.image} style={{width:270}}/>
                </div>

                <div className="card-body">
                    <h4 className="card-title mb-4 mt-2">{e.username}</h4>
                    <hr></hr>
                    <p className="card-text">Data Iscrizione: {split[0]}</p>
                    <button className='btn btn-primary mt-1' onClick={()=>openModal()}>Aggiungi Immagine Profilo</button>
                </div>
            </div>

              <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_workout">
              <div className='container'>
                <div className='px-5'>
                  <div className="modal-dialog-centered bg-dark" role="document">
                    <div className="modal-content rounded-4 shadow bg-dark" >
                      <div className="modal-header d-flex justify-content-between">

                        <h2 className="modal-title text-white text-center">CARICA IMMAGINE</h2>

                      </div>
                      <div className="modal-body py-3 text-white">
                      <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">Seleziona il file e clicca CARICA</label>
                          <input className="form-control" type="file" required={true} id="formFile" onChange={(e)=> setFile(e.target.files[0])}/>
                          <button className='btn btn-primary mt-3' onClick={handleUpload}>CARICA</button>


                      </div>

                      </div>

                      <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                        <div className="modal-footer">
                          <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                          <i className='fa fa-times px-2 fs-4'></i>OK, Chiudi
                          </button>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>

              </div>
              </div>



     </div>
     )})}
    </>
  )
}

export default UserProfile
