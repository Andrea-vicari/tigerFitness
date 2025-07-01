import React from 'react'
import { Link } from 'react-router-dom';


const ListaPren = ({ prenotazioni, loading }) => {

    console.log("== &&&& ===0")
    console.log(prenotazioni)


    if (loading) {
        return (
            <h1 className='text-center'>..Caricamento in corso</h1>
        )
    }




    return (
        <>

            {prenotazioni.length ===0 ?
              <h2 className='text-center pt-3 pb-3'>Nessuna prenotazione trovata</h2>
            : prenotazioni.map((data, index) => (
                <tr key={index}>

                    <td className='pt-3'>{data.user.email}</td>
                    <td className='pt-3'>{data.anno}</td>
                    <td className='pt-3'>{data.mese}</td>
                    <td className='pt-3'>{data.giorno}</td>
                    <td className='pt-3'>{data.ora}</td>
                    <td className='pt-3'>{data.minuto}</td>
                    <td className='pt-3'>{data.status}</td>
                    
                    
                   <td className='pt-3'>
                      <Link type="Link" to={`/conferma-prenotazione/${data._id}`} state={data._id} className="btn btn-outline-danger fs-6">
                         <i className="bi bi-check-square fs-4 mx-2"></i>
                      </Link>
                   </td>
              
                     <td className='pt-3'>
                      <Link type="Link" to={`/rifiuta-prenotazione/${data._id}`} state={data._id} className="btn btn-outline-danger fs-6">
                        <i className='bi bi-x-circle fs-4 mx-2'></i>
                      </Link>
                     </td>
                  


              </tr>

            ))}

        </>
    )
}

export default ListaPren
