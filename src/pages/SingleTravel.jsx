import { Link, useParams } from "react-router-dom"
import viaggi from "../data/array.js"

const SingleTravel = () => {

  const { id } = useParams()

  const viaggio = viaggi.find((curTrip) => curTrip.id === id);

  return (
    <>   
    
          <div className="container">
            <Link to={`/`}>Torna ai Viaggi</Link>
            <h2>{viaggio.Destinazione}</h2>
            {viaggio.partecipanti.map((curPartecipante, index) => (
              <div className="card mb-5" key={index}>
                <div className="card-body">
                  <img src={curPartecipante.Immagine}></img>
                  <h5 className="card-title mt-3">{curPartecipante.Nome} {curPartecipante.Cognome}</h5>
                  <p className="card-text">{curPartecipante.indirizzo}</p>
                  <div className="row">
                    <Link href="#">{curPartecipante.Email}</Link>
                    <Link href="#">{curPartecipante.Telefono}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

    </>
  )
}

export default SingleTravel