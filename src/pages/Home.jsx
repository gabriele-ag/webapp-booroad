// Qui è dove andranno le card dei viaggi
import viaggi from "../data/array.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <section className="container py-2">
          <h1 className="text-center my-4">Viaggi correnti</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {viaggi.map((curTrip) => (
              <div key={curTrip.id} className="col ">
                <div className="card h-100">
                  <img src={curTrip.Immagine} className="card-img-top" alt={curTrip.Destinazione} />
                  <div className="card-header">
                    <h5 className="card-title text-center">{curTrip.Destinazione}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">{curTrip.Descrizione}</p>
                    <ul className="list-group list-group-flush text-center">
                      <li className="list-group-item"> Partenza: {curTrip.partenza}</li>
                      <li className="list-group-item">Ritorno: {curTrip.ritorno}</li>
                    </ul>
                  </div>
                  <div className="card-footer text-center">
                    <h4>Coordinatore:</h4> <br /> {curTrip.Nome_Coordinatore} <br />
                    <button className="btn bg-warning my-3" >
                      <Link className="text-decoration-none text-light" to={`/singletravel/${curTrip.id}`}>Maggiori dettagli</Link>
                    </button>
                  </div>
                </div>
                <div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

