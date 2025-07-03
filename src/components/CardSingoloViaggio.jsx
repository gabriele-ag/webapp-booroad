import viaggi from "../data/array.js"
import { Link } from "react-router-dom"

const SingoloViaggio = () => {

    return (
        <>
            {viaggi.map((curViaggio, index) => {
                    <div className="card" key={curViaggio.id}>
                        <div className="card-body">
                            <h5 className="card-title">{curViaggio.partecipanti.Nome}{curViaggio.partecipanti.Cognome}</h5>
                            <p className="card-text">{curViaggio.partecipanti.Email}</p>
                            <a className="card-text">{curViaggio.partecipanti.Telefono}</a>
                            <a className="card-text">{curViaggio.partecipanti.indirizzo}</a>
                        </div>
                    </div>
            })}
        </>
    )
}

export default SingoloViaggio