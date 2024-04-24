import NavBar from "../NavBar"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";
import env from '../config';
let urlMedia = env.url

let menuAux = 0
function Inicio2() {

    const [modalFormIsOpen, setFormIsOpen] = useState(false);


    useEffect(() => {

        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeFormContact()
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);


    function openFormContact() {
        setFormIsOpen(true)
    }

    function closeFormContact() {
        setFormIsOpen(false)
    }



    return (
        <>
            <NavBar />
            <div className="mensaje">
                <p>Gracias por contactarnos, muy pronto uno de nuestros asesores se comunicará con usted.</p>
                <img src={urlMedia + "mensaje.webp"} className="fotoGracias" />
            </div>
            <Menu2 />
            <Footer />
            <Modal />
        </>
    )
}

function Menu2() {
    return (
        <nav className="menu2 home2">
            <ul className="nav-links-h">
                <li><a className="sunward mouseA" option="sinotruk">CAMIONES</a></li>
                <li><a className="sinotruk mouseA" option="sunward">MAQUINARIA</a></li>
                <li><a className="mouseA" href="/sinotruk/autos">VEHÍCULOS</a></li>
                <li><a className="tecnologia mouseA" option="tecnologia">TECNOLOGÍA</a></li>
                <li><NavLink to="/camion-en-uso/camion-de-48-toneladas" className="camionesCss">CAMIONES EN USO</NavLink></li>
                <li><NavLink to="/concesionarios" className="concesionarios mouseA">CONCESIONARIOS</NavLink></li>
            </ul>
            <a href="tel:+59332994740" className="telefonoInicio">032994740</a>
        </nav>
    )
}

function Banner() {
    return (
        <div className="posRelative banner">
            <img src={urlMedia + "home/vehicentro-en-ecuador-venta-de-camiones-cabezales-y-volquetas-sinotruk.webp"} width="1790" height="590" className="slideMain" alt="Punto de Venta" />
            <div className="boxText flex-table row">
                <a href="/concesionarios"><div className="flex-row textMain textMain2 negro">Puntos Vehicentro a nivel Nacional</div></a>
            </div>
        </div>
    )
}

function Modal() {
    return (
        <div id="modalContainer"></div>
    )
}

export default Inicio2