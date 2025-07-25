import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ListaPrenUs from './ListaPrenUs'
import ScaricaListaCompCSV from './ScaricaListaCompCSV';
import Pagination from './Pagination'
import { UseAuthContext } from "../../hooks/UseAuthContext"


function ListaPrenotazioniUtente () {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, tableType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? tableType = "table-ligth" : tableType = "table-dark"

  const [prenotazioni, setPrenotazioni] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
 

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const {user} = UseAuthContext()

  console.log("user dal componente ListaPrenotazioniUtente")
  console.log(user)

  var idUtente = user.user_id

  console.log("idUtente dal componente ListaPrenotazioniUtente")
  console.log(idUtente)

  useEffect(() => {
    fetch('https://pulsefit-server.vercel.app/api/bookings/prenotazioni-singolo-utente/' + idUtente)
      .then(response => response.json())
      .then(prenotazioniSingoloUtenteDalServer => {
        console.log("*****")
        console.log(prenotazioniSingoloUtenteDalServer)
        setPrenotazioni(prenotazioniSingoloUtenteDalServer)
        
      })
      .catch(err => {
        console.log(err)
        // update the error state
        setError(err)
      })
      .finally(() => {
        // wether we sucessfully get the users or not,
        // we update the loading state
        setLoading(false)
      })
  }, [])





  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = prenotazioni.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPosts")
  console.log(currentPosts)

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  var totalePrenotazioni = prenotazioni.length
  console.log(totalePrenotazioni)

  return (
    <>
      <div className='container-fluid pt-1 mt-5 bg-stripe d-sm-block'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco prenotazioni</h1>
        </div>
      </div>

      <div className={"container-fluid mb-0 py-3" + " " + bgType + " " + textType}>
     
        <div className="row border-bottom">
        
        <div className="col-sm-2 d-none d-sm-block">
        <div className='py-4'>
          <label>
          Prenotazioni per pagina:
          <select value={postsPerPage}
            onChange={e => setPostsPerPage(e.target.value)}
            className='mx-3' name="compPerPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
        </div>


        </div>

          <div className="col-sm-2 d-none d-sm-flex justify-content-end">
            <div className='pt-3'>

              <ScaricaListaCompCSV prenotazioni={prenotazioni}/>

            </div>
          </div>
          </div>

      </div>


          <section className={"py-3" + " " + bgType + " " + textType}>
        <div className="container-fluid mt-1 pt-0">
          <div className='table-responsive-lg mt-2'>
            <table className={"table table-striped table-hover" + " " + tableType}>
              <thead className='text-uppercase'>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Anno</th>
                  <th scope="col">Mese</th>
                  <th scope="col">Giorno</th>                  
                  <th scope="col">Ora</th>
                  <th scope="col">Minuto</th>
                  <th scope="col">Status</th>

                  
                </tr>
              </thead>
              <tbody>
                <ListaPrenUs prenotazioni={currentPosts} loading={loading} />
              </tbody>
            </table>
            <Pagination length={prenotazioni.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
          </div>
        </div>

         </section>
    </>
  );
}

export default ListaPrenotazioniUtente;
