import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWidjet from "./CardWidjet";

const navBar = ({items}) => {


return (
    
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand p-3" href="./index.js"> Venus de Milo </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="./index.js">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.js">Ofertas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.js">Productos</a>
                    </li>
                    <li className="nav-item justify-content-right">
                        <a className="nav-link float-right" href="./index.js"><CardWidjet items={items}/></a>
                    </li>
      
                </ul>
            </div>
        </nav>
    
)

}


export default navBar