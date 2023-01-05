import { useEffect } from 'react';
import NavBarTop from '../NavBarTop';
import BannerContacto from '../components/BannerContacto';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function Concesionarios() {

  const datosConcesionarios = [{
    id: "Ambato",
    datos: [{
      nombre: "AMBATO, MATRIZ",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Indoamérica Km 3-1/2",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-ambato-matriz-indoamerica.webp",
      alt: ""
    }, {
      nombre: "AMBATO, FICOA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Los Guaytambos",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-ambato-ficoa.webp",
      alt: ""
    }]
  }, {
    id: "Quito",
    datos: [{
      nombre: "QUITO, CARAPUNGO",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av. Simón Bolivar S/N diagonal al Supermercado Santa María.",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-quito-carapungo-800x711.webp",
      alt: ""
    }, {
      nombre: "QUITO, LOS CHILLOS",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av. General Rumiñahui 8-40 y Av. San Luis (frente al San Luis Shopping)",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-quito-los-chillos.webp",
      alt: ""
    }, {
      nombre: "QUITO, SUR",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av. Maldonado y Romero Barberis",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/CONCESIONARIOS-780X600-QUITO-SUR.jpg",
      alt: ""
    }, {
      nombre: "QUITO, EL COLIBRÍ",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "E35 y Av. General Pintag",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/VEHI-1.jpg",
      alt: ""
    }, {
      nombre: "QUITO, GALO PLAZA",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av. Galo Plaza Lasso N66-106 y De las Avellanas",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/VEHI-1.jpg",
      alt: ""
    }]
  }, {
    id: "Guayaquil",
    datos: [{
      nombre: "GUAYAQUIL,  SAMBORONDÓN",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Samborondón, vía el puente alterno norte, Ofc. Almax 2",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-guayaquil.webp",
      alt: ""
    }, {
      nombre: "GUAYAQUIL, NORTE",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Autopista. Narcisa. De Jesús km1. Junto. A ATM. Agencia de tránsito municipal",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/GYE-NORTE-1551X1187-800x612.jpg",
      alt: ""
    }]
  }, {
    id: "Riobamba",
    datos: [{
      nombre: "RIOBAMBA",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-riobamba.webp",
      alt: ""
    }]
  }, {
    id: "Cuenca",
    datos: [{
      nombre: "CUENCA",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la Gasolinera Primax)",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/CUENCA-780X600-1.jpg",
      alt: ""
    }]
  }, {
    id: "Machala",
    datos: [{
      nombre: "MACHALA",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Av 25 de junio km 3 y medio vía a pasaje",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/vehicentro-machala.webp",
      alt: ""
    }]
  }, {
    id: "Ibarra",
    datos: [{
      nombre: "IBARRA",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Panamericana Sur Km1 y calle los Andes",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/IBARRA-2.jpg",
      alt: ""
    }]
  }, {
    id: "Manta",
    datos: [{
      nombre: "MANTA",
      descripcion: "Punto de venta, talleres y repuestos",
      direccion: "Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al Aeropuerto",
      url: "https://vehicentro.com/ambato-matriz/",
      img: "../images/WhatsApp-Image-2022-09-23-at-6.12.42-PM-800x612.jpeg",
      alt: ""
    }]
  }]


  useEffect(() => {
    const navButtons = document.querySelectorAll(".btnConcesionarios button");
    navButtons.forEach((link, index) => {
      link.addEventListener("click", (ev) => {
        clickConcesionario(ev.target.getAttribute('option'))
      })
    })

    const clickConcesionario = (val) => {
      let container = document.querySelector(".boxConcesionarios")

      let buscarDatos = datosConcesionarios.find((dato) => dato.id == val)
      let datosGrid = buscarDatos.datos
      let auxTable = ""

      datosGrid.forEach((datos) => {
        auxTable += "<div class='concesionariosFlex'><div class='concesionariosFlexText textConcesionario'><p class='nombreConcesionario'>" + datos.nombre + "</p><p class='descConcesionario'>" + datos.descripcion + "</p><span class='direccionConcesionario'>" + datos.direccion + "</span><p class='telefonoConcesionario'><span>Línea directa </span>" + datos.telefono + "</p><span class='linkConcesionario'><a href='" + datos.url + "' target='_blank'>UBICACIÓN</a></span></div><div class='concesionariosFlexImg imgConcesionario'><img src='" + datos.img + "' alt='" + datos.alt + "' /></div></div>"
      })
      
      container.innerHTML = auxTable
    }

  })
  return (
    <>
      <Helmet>
        <title>Concesionarios | Vehicentro</title>
        <meta name="description" content="Concesionarios" />
      </Helmet>
      <NavBarTop />
      <p className="tituloConcesionario">ENCUENTRA TU CONCESIONARIO MAS CERCANO</p>
      <div className="btnConcesionarios">
        <button type="button" option="Ambato">Ambato</button>
        <button type="button" option="Quito">Quito</button>
        <button type="button" option="Guayaquil">Guayaquil</button>
        <button type="button" option="Riobamba">Riobamba</button>
        <button type="button" option="Machala">Machala</button>
        <button type="button" option="Cuenca">Cuenca</button>
        <button type="button" option="Ibarra">Ibarra</button>
        <button type="button" option="Manta">Manta</button>
      </div>
      <div className="boxConcesionarios">
        <span className='spanText'>Selecciona el concesionario en la ciudad mas cercana</span>
      </div>
      <BannerContacto />
      <Footer />
    </>
  )

}

export default Concesionarios