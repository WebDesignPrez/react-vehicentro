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
      url: "https://goo.gl/maps/jg9s15HNPskvzUSt5",
      img: "../images/vehicentro-ambato-matriz-indoamerica.webp",
      alt: ""
    }, {
      nombre: "AMBATO, FICOA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Los Guaytambos",
      url: "https://goo.gl/maps/QPYEJBw4bpuxwid77",
      img: "../images/vehicentro-ambato-ficoa.webp",
      alt: ""
    }]
  }, {
    id: "Quito",
    datos: [{
      nombre: "QUITO, CARAPUNGO",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Simón Bolivar S/N diagonal al Supermercado Santa María.",
      url: "https://goo.gl/maps/SLyLD262Q3wtb3oVA",
      img: "../images/vehicentro-quito-carapungo-800x711.webp",
      alt: ""
    }, {
      nombre: "QUITO, LOS CHILLOS",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. General Rumiñahui 8-40 y Av. San Luis (frente al San Luis Shopping)",
      url: "https://goo.gl/maps/KVrF8Vbvo2GMbN3h7",
      img: "../images/vehicentro-quito-los-chillos.webp",
      alt: ""
    }, {
      nombre: "QUITO, SUR",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Maldonado y Romero Barberis",
      url: "https://goo.gl/maps/b1SRumCdPk5y2f7w8",
      img: "../images/CONCESIONARIOS-780X600-QUITO-SUR.jpg",
      alt: ""
    }, {
      nombre: "QUITO, EL COLIBRÍ",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "E35 y Av. General Pintag",
      url: "https://goo.gl/maps/qme9UhY53gyYueKd6",
      img: "../images/VEHI-1.jpg",
      alt: ""
    }, {
      nombre: "QUITO, GALO PLAZA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Galo Plaza Lasso N66-106 y De las Avellanas",
      url: "https://goo.gl/maps/8XCYvKJZcq5BxhhV9",
      img: "../images/VEHI-1.jpg",
      alt: ""
    }]
  }, {
    id: "Guayaquil",
    datos: [{
      nombre: "GUAYAQUIL,  SAMBORONDÓN",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Samborondón, vía el puente alterno norte, Ofc. Almax 2",
      url: "https://goo.gl/maps/WcLQRnYsvZr5DH1C8",
      img: "../images/vehicentro-guayaquil.webp",
      alt: ""
    }, {
      nombre: "GUAYAQUIL, NORTE",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Autopista. Narcisa. De Jesús km1. Junto. A ATM. Agencia de tránsito municipal",
      url: "https://goo.gl/maps/tUbPjM7GZxoPJieF6",
      img: "../images/GYE-NORTE-1551X1187-800x612.jpg",
      alt: ""
    }]
  }, {
    id: "Riobamba",
    datos: [{
      nombre: "RIOBAMBA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco",
      url: "https://goo.gl/maps/N5SY8tibit4eXBWN9",
      img: "../images/vehicentro-riobamba.webp",
      alt: ""
    }]
  }, {
    id: "Cuenca",
    datos: [{
      nombre: "CUENCA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la Gasolinera Primax)",
      url: "https://goo.gl/maps/s5rHpuF5EibNxDMH9",
      img: "../images/CUENCA-780X600-1.jpg",
      alt: ""
    }]
  }, {
    id: "Machala",
    datos: [{
      nombre: "MACHALA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Av 25 de junio km 3 y medio vía a pasaje",
      url: "https://goo.gl/maps/vrKzqkH8BMC9KDXM9",
      img: "../images/vehicentro-machala.webp",
      alt: ""
    }]
  }, {
    id: "Ibarra",
    datos: [{
      nombre: "IBARRA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Panamericana Sur Km1 y calle los Andes",
      url: "https://goo.gl/maps/zbkchTzEG1bXTH1dA",
      img: "../images/IBARRA-2.jpg",
      alt: ""
    }]
  }, {
    id: "Manta",
    datos: [{
      nombre: "MANTA",
      descripcion: "Punto de venta, talleres y repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al Aeropuerto",
      url: "https://goo.gl/maps/WXDrtH7Ugk7E8MRA6",
      img: "../images/WhatsApp-Image-2022-09-23-at-6.12.42-PM-800x612.jpeg",
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
        <title>Concesionarios | Vehicentro</title>
        <meta name="description" content="Concesionarios" />
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