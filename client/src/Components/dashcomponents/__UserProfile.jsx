import React, { useCallback } from 'react'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { upload } from '@vercel/blob/client';
import { useRef } from 'react';

function UserProfile() {

    // Dark Ligth Logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()
    var singleID = user.user_id
    console.log(singleID)

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

      data.forEach(element => {
        console.log(element)
        element._id == singleID  ? singleUser.push(element) : terVar = true
        return singleUser
      });


      const [file, setFile ] = useState()
      const [error, setError] = useState(null)
      const [good, setGood] = useState(null)

      const inputFileRef = useRef(null);
      const [blob, setBlob] = useState(null);


      //const onChangePicture = useCallback

      function closeModal(){
        document.getElementById('modale_workout').classList.remove("d-block")

      }
      function openModal(){
        document.getElementById('modale_workout').classList.add("d-block")

      }


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
                    <img src={`https://pulsefit-server.vercel.app/images/${e.image}`} style={{width:270}}/>
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

                         {/** Put here new component */}
                         <form
                            onSubmit={async (event) => {
                              event.preventDefault();

                              const file = inputFileRef.current.files[0];

                              const newBlob = await upload(file.name, file, {
                                access: 'public',
                                handleUploadUrl: '/api/avatar/upload',
                              });

                              setBlob(newBlob);
                            }}
                          >
                            <input name="file" ref={inputFileRef} type="file" required />
                            <button type="submit">Upload</button>
                          </form>
                          {blob && (
                            <div>
                              Blob url: <a href={blob.url}>{blob.url}</a>
                            </div>
                          )}


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