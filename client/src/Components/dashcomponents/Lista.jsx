import React from 'react'
import { Link } from 'react-router-dom';
//import LigthBox from './LigthBox';


const Lista = ({ utenti, loading }) => {

    console.log("== &&&& ===0")
    console.log(componenti)


    if (loading) {
        return (
            <h1 className='text-center'>..Caricamento in corso</h1>
        )
    }


    return (
        <>

            {utenti.length ===0 ?
              <h2 className='text-center pt-3 pb-3'>Nessun componente trovato</h2>
            : componenti.map((data, index) => (
                <tr key={index}>
                    
                <td><img src={data.urlImmagine}/></td>
                <td className='pt-3'>{data.username}</td>
                <td className='pt-3'>{data.email}</td>
                <td className='pt-3'>{data.createdAt}</td>
                   <td className='pt-3'>
                  <Link to={`/modificacomponente/${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-zoom-in'></i>
                  </Link>
                  <Link to={`/cancellacomponente/${data._id}`} state={data._id} type="button" className="btn btn-sm btn-outline-danger mx-1">
                    <i className='bi bi-trash'></i>
                  </Link>

                </td>



              </tr>

            ))}

        </>
    )
}

export default Lista
