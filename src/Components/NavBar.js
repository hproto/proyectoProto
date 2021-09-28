import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const navBar = () => {


return (
    <div class="navBar">
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.js">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.js">Ofertas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.js">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="./index.js">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

}


export default navBar