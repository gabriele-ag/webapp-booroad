import viaggi from "../data/array.js";
import { Link } from "react-router-dom";
import { useState } from "react"

export default function AggiungiViaggio() {
  const emptyTravel = {
    id: "",
    Immagine: "",
    Destinazione: "",
    Descrizione: "",
    partenza: "",
    ritorno: "",
    Nome_Coordinatore: "",
    partecipanti: [
      {
        id: "",
        Nome: "",
        Cognome: "",
        Email: "",
        Telefono: "",
        Immagine: "",
        indirizzo: "",
      },
    ]
  }


  const [newTravel, setNewTravel] = useState(emptyTravel)

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Immagine") {
      const file = event.target.files[0]
      setNewTravel({
        ...newTravel,
        Immagine: file,
      })
    } else {
      setNewTravel({
        ...newTravel,
        [name]: value,
      })
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    viaggi.push(newTravel)
    console.log(newTravel)
    console.log(viaggi)
    setNewTravel(emptyTravel)
  }



  return (
    <>
      <main>
        <section className="container py-5">
        <div className="row justify-content-center">
        <h1 className="mb-5 text-center">Aggiungi nuovo viaggio</h1>
        <div className="col-12 col-md-8 col-xl-6">
            <form className="border border-2 rounded p-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="Destinazione">Nome Viaggio</label>
                <input className="form-control" type="text" id="Destinazione" name="Destinazione" placeholder="Milano, Parigi, San Francisco..." onChange={handleChange} value={newTravel.Destinazione} />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Nome_Coordinatore">Coordinatore Viaggio</label>
                <input className="form-control" type="text" id="Nome_Coordinatore" name="Nome_Coordinatore" placeholder="Pinco e Pallino" onChange={handleChange} value={newTravel.Nome_Coordinatore} />
              </div>
              <div className=" row mb-3">
                <div className="col">
                  <label htmlFor="partenza">Partenza</label>
                  <input id="partenza" name="partenza" className="form-control" type="date" onChange={handleChange} value={newTravel.partenza} />
                  </div>
                  <div className="col">
                  <label htmlFor="ritorno">Ritorno</label>
                  <input id="ritorno" name="ritorno" className="form-control" type="date" onChange={handleChange} value={newTravel.ritorno} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Descrizione">Descrizione</label>
                <textarea className="form-control" type="text" id="Descrizione" name="Descrizione" placeholder="Un fantastico viaggio nella terra di mezzo..." onChange={handleChange} value={newTravel.Descrizione} />
              </div>
              <div>
                <label htmlFor="Immagine" className="form-label">Aggiungi immagine</label>
                <input type="file" className="form-control" id="Immagine" name="Immagine" onChange={handleChange} />
              </div>
              <button className="btn bg-warning my-3" type="submit" >Invia</button>
            </form>
          </div>
          </div>
          
        </section>
      </main>
    </>
  );
}

