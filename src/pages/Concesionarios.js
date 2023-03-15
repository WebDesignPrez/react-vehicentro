import { useEffect } from 'react';
import NavBarTop from '../NavBarTop';
import BannerContacto from '../components/BannerContacto';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import env from '../config';
let urlMedia = env.url

function Concesionarios() {

  const datosConcesionarios = [{
    id: "Ambato",
    datos: [{
      nombre: "AMBATO, MATRIZ",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Indoamérica Km 3 1/2 Vía a Quito",
      url: "https://goo.gl/maps/WSq8jBoHRTN9fcgu7",
      img: urlMedia + "vehicentro-ambato-matriz-indoamerica.webp",
      alt: ""
    }, {
      nombre: "AMBATO, FICOA",
      descripcion: "Punto de Venta",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Los Guaytambos 04-156 y La Delicia",
      url: "https://goo.gl/maps/pBWeoKpyen13WrWR6",
      img: urlMedia + "vehicentro-ambato-ficoa.webp",
      alt: ""
    }]
  }, {
    id: "Quito",
    datos: [{
      nombre: "QUITO, CARAPUNGO",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Simón Bolívar S/N diagonal al Supermercado Santa María",
      url: "https://goo.gl/maps/UXSBqmZsCpRUTC6G6",
      img: urlMedia + "vehicentro-quito-carapungo-800x711.webp",
      alt: ""
    }, {
      nombre: "QUITO, LOS CHILLOS",
      descripcion: "Punto de Venta y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. General Rumiñahui 8-40 y Av. San Luis (frente al San Luis Shopping)",
      url: "https://goo.gl/maps/V8uKKDkRgmuqeLP79",
      img: urlMedia + "vehicentro-quito-los-chillos.webp",
      alt: ""
    }, {
      nombre: "QUITO, SUR",
      descripcion: "Punto de Venta",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Maldonado y Romero Barberis",
      url: "https://goo.gl/maps/UZTTED3ThUqRJsTEA",
      img: urlMedia + "CONCESIONARIOS-780X600-QUITO-SUR.jpg",
      alt: ""
    }, {
      nombre: "QUITO, SANGOLQUÍ EL COLIBRÍ",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "E35 y Av. General Pintag",
      url: "https://goo.gl/maps/GBPxe4h3yWRy58qZ8",
      img: urlMedia + "colibri.webp",
      alt: ""
    }, {
      nombre: "QUITO, GALO PLAZA",
      descripcion: "Punto de Venta y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Galo Plaza Lasso N66-106 y De las Avellanas",
      url: "https://goo.gl/maps/uhWzLJFXVygm1TSt9",
      img: urlMedia + "VEHI-1.jpg",
      alt: ""
    }]
  }, {
    id: "Guayaquil",
    datos: [{
      nombre: "GUAYAQUIL, SAMBORONDÓN",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Samborondón, vía al Puente Alterno Norte, Ofc. Almax 2",
      url: "https://goo.gl/maps/rwwwz9xkhsmyKN659",
      img: urlMedia + "vehicentro-guayaquil.webp",
      alt: ""
    }, {
      nombre: "GUAYAQUIL, NORTE",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Autopista Narcisa De Jesús km1 junto a la ATM. (Agencia de Tránsito Municipal)",
      url: "https://goo.gl/maps/y2rXLQNZamPz3rtm9",
      img: urlMedia + "GYE-NORTE-1551X1187-800x612.jpg",
      alt: ""
    }]
  }, {
    id: "Riobamba",
    datos: [{
      nombre: "RIOBAMBA",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco",
      url: "https://goo.gl/maps/dqkVXAErCdD3PN4z9",
      img: urlMedia + "vehicentro-riobamba.webp",
      alt: ""
    }]
  }, {
    id: "Cuenca",
    datos: [{
      nombre: "CUENCA",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la Gasolinera Primax)",
      url: "https://goo.gl/maps/GkZgUEPmYVZHw8Ez5",
      img: urlMedia + "CUENCA-780X600-1.jpg",
      alt: ""
    }]
  }, {
    id: "Machala",
    datos: [{
      nombre: "MACHALA",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av 25 de Junio km 3 1/2 Vía a Pasaje",
      url: "https://goo.gl/maps/ia5uLKucpSos4mSp7",
      img: urlMedia + "vehicentro-machala.webp",
      alt: ""
    }]
  }, {
    id: "Ibarra",
    datos: [{
      nombre: "IBARRA",
      descripcion: "Punto de Venta",
      telefono: "032-994740 | 0992048229",
      direccion: "Panamericana Sur Km1 y calle los Andes",
      url: "https://goo.gl/maps/G2Z3U7WHDspnpNNM8",
      img: urlMedia + "IBARRA-2.jpg",
      alt: ""
    }]
  }, {
    id: "Manta",
    datos: [{
      nombre: "MANTA",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al Aeropuerto",
      url: "https://goo.gl/maps/mXS7LLaZqfMj4NDv6",
      img: urlMedia + "WhatsApp-Image-2022-09-23-at-6.12.42-PM-800x612.jpeg",
      alt: ""
    }]
  }]


  useEffect(() => {
    const navButtons = document.querySelectorAll(".btnConcesionarios");
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
        <title>Concesionarios en Ecuador | Vehicentro</title>
        <meta name="description" content="Tenemos concesionarios en todo el Ecuador: Ambato, Quito, Guayaquil, Riobamba, Machala, Cuenca, Ibarra, Manta" />
        <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador"></meta>
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <NavBarTop />
      <p className="tituloConcesionario">ENCUENTRA TU CONCESIONARIO MÁS CERCANO</p>
      <div className="btnConcesionarios">
        <a className='btn6' option="Ambato" href='#'>Ambato</a>
        <a className='btn6' option="Quito" href='#'>Quito</a>
        <a className='btn6' option="Guayaquil" href='#'>Guayaquil</a>
        <a className='btn6' option="Riobamba" href='#'>Riobamba</a>
        <a className='btn6' option="Machala" href='#'>Machala</a>
        <a className='btn6' option="Cuenca" href='#'>Cuenca</a>
        <a className='btn6' option="Ibarra" href='#'>Ibarra</a>
        <a className='btn6' option="Manta" href='#'>Manta</a>
      </div>
      <div className="boxConcesionarios">
        <span className='spanText'>Selecciona el concesionario en la ciudad más cercana</span>
      </div>
      <BannerContacto />
      <Footer />
    </>
  )

}

export default Concesionarios