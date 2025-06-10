import React from 'react'
import { Link } from 'react-router-dom';
//import LigthBox from './LigthBox';


const Lista = ({ utenti, loading }) => {

    console.log("== &&&& ===0")
    console.log(utenti)


    if (loading) {
        return (
            <h1 className='text-center'>..Caricamento in corso</h1>
        )
    }

  


    return (
        <>

            {utenti.length ===0 ?
              <h2 className='text-center pt-3 pb-3'>Nessun componente trovato</h2>
            : utenti.map((data, index) => (
                <tr key={index}>
                    
                <td><img src={data.image} className="img-fluid"/></td>
                <td className='pt-3'>{data.username}</td>
                <td className='pt-3'>{data.email}</td>
                <td className='pt-3'>{data.createdAt}</td>
                   <td className='pt-3'>
                  <Link type="button" to={`/newtraining/${userID}`} state={userID} className="btn btn-danger fs-6">
              <i className="bi bi-plus-square fs-4 mx-2"></i>
              Aggiungi
              </Link>
                  <Link to={`/cancella-utente-page/${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-trash'></i>
                  </Link>

                </td>



              </tr>

            ))}

        </>
    )
}

export default Lista
