import { Link, NavLink } from "react-router-dom";

const GuestHeader = () => {

    const linkNav = [
        {
        name: "Viaggi",
        url: "/"
    },
     {
        name: "Prova",
        url: "/"
    },
    ]


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="#">Booroad</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {linkNav.map((curLink, index) => (
                            <li className="nav-item" key = {index}>
                                <NavLink className="nav-link active" aria-current="page" href="#" to={curLink.url}>{curLink.name}</NavLink>
                            </li>
                            ))}
       
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default GuestHeader;