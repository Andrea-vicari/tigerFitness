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

                <td><img src={data.image} style={{width:70}}/></td>
                <td className='pt-3'>{data.username}</td>
                <td className='pt-3'>{data.email}</td>
                <td className='pt-3'>{data.createdAt}</td>
                   <td className='pt-3'>
                  <Link type="button" to={`/newtraining/${data._id}`} state={data._id} className="btn btn-outline-danger fs-6">
              <i className="bi bi-plus-square fs-4 mx-2"></i>
                            </Link>
                </td>
              
                   <td className='pt-3'>
                  <Link to={`/dettaglio-utente-page/${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-zoom-in fs-4 mx-2'></i>
                  </Link>

                </td>
                 <td className='pt-3'>
                  <Link to={`//singleuser//${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-trash fs-4 mx-2'></i>
                  </Link>

                </td>



              </tr>

            ))}

        </>
    )
}

export default Lista
