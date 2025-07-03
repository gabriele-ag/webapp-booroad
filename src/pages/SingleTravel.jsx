import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import viaggi from "../data/array.js"

const SingleTravel = () => {

  const { id } = useParams()
  const [search, setSearch] = useState("")

  const viaggio = viaggi.find((curTrip) => curTrip.id === id);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  let filtraPartecipanti = (listaPartecipanti, filtro) => {
    return listaPartecipanti.filter((p) =>
      `${p.Nome} ${p.Cognome}`.toLowerCase().trim().includes(filtro.toLowerCase().trim())
    )
  }


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <form className="d-flex my-5" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="cerca partecipante"
              aria-label="Search"
              value={search}
              onChange={handleChange} />


          </form>
          <Link to={`/`} className="btn btn-success my-5">Torna ai Viaggi</Link>
        </div>
        <p className="mb-3">Viaggio corrente</p>
        <h2 className="mb-5">{viaggio.Destinazione}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filtraPartecipanti(viaggio.partecipanti, search).map((curPartecipante, index) => (
            <div className="card mx-3" key={index}>
              <div className="card-body">
                <img src={curPartecipante.Immagine} className="card-img-top"></img>
                <h3 className="card-title my-3 text-primary-emphasis">{curPartecipante.Nome} {curPartecipante.Cognome}</h3>
                <p className="card-text mb-4">Indirizzo: {curPartecipante.indirizzo}</p>
                <p className="mb-3 text-info">Contatti:</p>
                <div className="row">
                  <p>Email: <Link href="#">{curPartecipante.Email}</Link></p>
                  <p>Telefono: <Link href="#">{curPartecipante.Telefono}</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default SingleTravel