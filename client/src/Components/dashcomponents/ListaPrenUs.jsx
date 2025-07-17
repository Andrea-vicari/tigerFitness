import React from 'react'
import { Link } from 'react-router-dom';


const ListaPrenUs = ({ prenotazioni, loading }) => {

    console.log("== &&&& ===0")
    console.log(prenotazioni)

     const coloraRiga = () => {
        alert("CIAO")
    }
    

prenotazioni.forEach(prenot => {
  console.log(`Pippo: ${prenot.giorno}, Pluto: ${prenot.status}`);

 prenot.status == "Rifiutata" ? coloraRiga() : false
    
  
});

   


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


              </tr>

            ))}

        </>
    )
}

export default ListaPrenUs
