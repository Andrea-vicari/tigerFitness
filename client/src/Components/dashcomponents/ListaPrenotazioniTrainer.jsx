import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ListaPren from './ListaPren'
import ScaricaListaCompCSV from './ScaricaListaCompCSV';
import Pagination from './Pagination'


function ListaPrenotazioniTrainer () {

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
  const [prenotazioniFiltrate, setprenotazioniFiltrate] = useState([])
  const [nomeFilter, setNomeFilter] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    fetch('https://pulsefit-server.vercel.app/api/bookings/')
      .then(response => response.json())
      .then(prenotazioniDalServer => {
        console.log("*****")
        console.log(prenotazioniDalServer)
        setPrenotazioni(prenotazioniDalServer)
        setprenotazioniFiltrate(prenotazioniDalServer)
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

  const resettaRicerca = () =>{
     setNomeFilter('')
  }

  const filteredPrenotazioni = prenotazioni.filter((booking) =>
    booking.status.toLowerCase().includes(nomeFilter.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPrenotazioni.slice(indexOfFirstPost, indexOfLastPost);

  console.log("currentPosts")
  console.log(currentPosts)

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  var totalePrenotazioni = prenotazioni.length
  console.log(totalePrenotazioni)

  return (
    <>
      <div className='container-fluid pt-1 mt-5 bg-stripe d-none d-sm-block'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco prenotazioni</h1>
        </div>
      </div>

      <div className={"container-fluid mb-0 py-3" + " " + bgType + " " + textType}>
        <h4 className="mx-2 mb-0" id='filtro_compon'>Filtra per status</h4>
        <div className="row border-bottom">
        <div className="col-sm-3 py-2 pt-3">
        <input
          className="mb-2 mx-2 pb-1"
          type="text"
          placeholder="Inserisci lo status (IN APPROVAZIONE, APPROVATO)"
          value={nomeFilter}
          onChange={(e) => setNomeFilter(e.target.value)}
        />
        
        <button className='btn btn-outline-info py-1 rounded-0' onClick={()=>resettaRicerca()}>RESET</button>
        </div>
        <div className="col-sm-2 d-none d-sm-block">
        <div className='py-4'>
          <label>
          Utenti per pagina:
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
                <ListaPren prenotazioni={currentPosts} loading={loading} />
              </tbody>
            </table>
            <Pagination length={prenotazioni.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
          </div>
        </div>

         </section>
    </>
  );
}

export default ListaPrenotazioniTrainer;
