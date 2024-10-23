import React, { useEffect, useState } from "react";
import NavBarTop from "../NavBarTop";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import env from "../config";
let urlMedia = env.url;

function Concesionarios() {
  const [concesionariosData, setConcesionariosData] = useState([]);

  useEffect(() => {
    // Leer el parámetro de la URL
    const params = new URLSearchParams(window.location.search);
    const ubicacion = params.get("ubicacion");

    // Si se proporcionó una ubicación válida, buscar los datos del concesionario correspondiente
    if (ubicacion) {
      const buscarDatos = datosConcesionarios.find(
        (dato) => dato.id === ubicacion
      );
      if (buscarDatos) {
        setConcesionariosData(buscarDatos.datos);
      }
    }
  }, []);

  const datosConcesionarios = [
    {
      id: "Ambato",
      datos: [
        {
          nombre: "AMBATO, MATRIZ",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Indoamérica Km 3 1/2 Vía a Quito",
          url: "https://goo.gl/maps/WSq8jBoHRTN9fcgu7",
          img: urlMedia + "/concesionariosNuevosLogos/ambato_matriz.webp",
          alt: "",
        },
        {
          nombre: "AMBATO, FICOA",
          descripcion: "Punto de Venta",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Los Guaytambos 04-156 y La Delicia",
          url: "https://goo.gl/maps/pBWeoKpyen13WrWR6",
          img: urlMedia + "/concesionariosNuevosLogos/ambato_ficoa.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Quito",
      datos: [
        {
          nombre: "QUITO, CARAPUNGO",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "Av. Simón Bolívar S/N diagonal al Supermercado Santa María",
          url: "https://goo.gl/maps/UXSBqmZsCpRUTC6G6",
          img: urlMedia + "/concesionariosNuevosLogos/carapungo.webp",
          alt: "",
        },
        {
          nombre: "QUITO, SUR",
          descripcion: "Punto de Venta",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Maldonado y Romero Barberis",
          url: "https://goo.gl/maps/UZTTED3ThUqRJsTEA",
          img: urlMedia + "/concesionariosNuevosLogos/quito_sur.webp",
        },
        {
          nombre: "QUITO, SANGOLQUÍ EL COLIBRÍ",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion: "E35 y Av. General Pintag",
          url: "https://goo.gl/maps/GBPxe4h3yWRy58qZ8",
          img: urlMedia + "/concesionariosNuevosLogos/colibri.webp",
          alt: "",
        },
        {
          nombre: "QUITO, GALO PLAZA",
          descripcion: "Punto de Venta y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "AV. CAPITAN GEOVANNY CALLES LASCANO Y MARIA DUCHICELA – SECTOR CALDERON",
          url: "https://www.google.com/maps/search/-0.093901,+-78.436933?coh=219680&utm_campaign=tt-rcs&entry=tts&g_ep=EgoyMDI0MTAyMC4xIPu8ASoASAFQAw%3D%3D",
          img: urlMedia + "/concesionariosNuevosLogos/GaloPlaza.webp",
          alt: "",
        },
        {
          nombre: "QUITO, PIFO",
          descripcion: "Punto de Venta y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Interoceánica Km 8 (Vía Aeropuerto).",
          url: "https://goo.gl/maps/LTqZkCCed9DpdY949",
          img: urlMedia + "/concesionariosNuevosLogos/pifo.webp",
          alt: "",
        },
        {
          nombre: "QUITO, GRANADOS",
          descripcion: "Punto de Venta y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Granados y de los Naranjos",
          url: "https://maps.app.goo.gl/svN2ZWViBd9r11Yu7",
          img: urlMedia + "/concesionariosNuevosLogos/granados.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Guayaquil",
      datos: [
        {
          nombre: "GUAYAQUIL, SAMBORONDÓN",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion: "Samborondón, vía al Puente Alterno Norte, Ofc. Almax 2",
          url: "https://goo.gl/maps/rwwwz9xkhsmyKN659",
          img: urlMedia + "/concesionariosNuevosLogos/samborondon.webp",
          alt: "",
        },
        {
          nombre: "GUAYAQUIL, NORTE",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "Autopista Narcisa De Jesús km1 junto a la ATM. (Agencia de Tránsito Municipal)",
          url: "https://goo.gl/maps/y2rXLQNZamPz3rtm9",
          img: urlMedia + "/concesionariosNuevosLogos/guayaquil_norte.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Riobamba",
      datos: [
        {
          nombre: "RIOBAMBA",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco",
          url: "https://goo.gl/maps/dqkVXAErCdD3PN4z9",
          img: urlMedia + "/concesionariosNuevosLogos/riobamba.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Cuenca",
      datos: [
        {
          nombre: "CUENCA",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032 994 740 | 0992048229",
          direccion: "Huayna Cápac y Mariscal Sucre esquina",
          url: "https://maps.app.goo.gl/qSjqhaqVe5TKdDsdA",
          img:
            urlMedia + "/concesionariosNuevosLogos/cuenca_mariscalsucre.webp",
          alt: "",
        },
        {
          nombre: "CUENCA",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la Gasolinera Primax)",
          url: "https://goo.gl/maps/GkZgUEPmYVZHw8Ez5",
          img: urlMedia + "/concesionariosNuevosLogos/cuenca.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Machala",
      datos: [
        {
          nombre: "MACHALA",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "Av. Panamericana vía Pasaje - Machala, a 500 mts del redondel Parroquia El Cambio, Junto a Cementos Guapan",
          url: "https://maps.app.goo.gl/LthcjRKvdA6BCA116",
          img: urlMedia + "/concesionariosNuevosLogos/machala.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Ibarra",
      datos: [
        {
          nombre: "IBARRA",
          descripcion: "Punto de Venta",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Mariano Acosta y Manuelita Sáenz esq.",
          url: "https://maps.app.goo.gl/hUcaenKkGHTvRfyd6",
          img: urlMedia + "/concesionariosNuevosLogos/ibarra.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Manta",
      datos: [
        {
          nombre: "MANTA",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion:
            "Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al Aeropuerto",
          url: "https://goo.gl/maps/mXS7LLaZqfMj4NDv6",
          img: urlMedia + "/concesionariosNuevosLogos/manta.webp",
          alt: "",
        },
      ],
    },
    {
      id: "Loja",
      datos: [
        {
          nombre: "LOJA",
          descripcion: "Punto de Venta, Talleres y Repuestos",
          telefono: "032-994740 | 0992048229",
          direccion: "Av. Cuxibamba 77-51 E Ibarra",
          url: "https://maps.app.goo.gl/e4nKs7VGH3HoBU2u8",
          img: urlMedia + "/concesionariosNuevosLogos/loja.webp",
          alt: "",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Concesionarios en Ecuador | Vehicentro</title>
        <meta
          name="description"
          content="Tenemos concesionarios en todo el Ecuador: Ambato, Quito, Guayaquil, Riobamba, Machala, Cuenca, Ibarra, Manta"
        />
        <meta
          name="keywords"
          content="camion, camiones, venta de camiones, camiones en ecuador"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <NavBarTop />
      <p className="tituloConcesionario">
        ENCUENTRA TU CONCESIONARIO MÁS CERCANO
      </p>
      <div className="btnConcesionarios">
        <a className="btn6" href="?ubicacion=Ambato">
          Ambato
        </a>
        <a className="btn6" href="?ubicacion=Quito">
          Quito
        </a>
        <a className="btn6" href="?ubicacion=Ibarra">
          Ibarra
        </a>
        <a className="btn6" href="?ubicacion=Guayaquil">
          Guayaquil
        </a>
        <a className="btn6" href="?ubicacion=Manta">
          Manta
        </a>
        <a className="btn6" href="?ubicacion=Machala">
          Machala
        </a>
        <a className="btn6" href="?ubicacion=Riobamba">
          Riobamba
        </a>
        <a className="btn6" href="?ubicacion=Cuenca">
          Cuenca
        </a>
        <a className="btn6" href="?ubicacion=Loja">
          Loja
        </a>
      </div>
      <div className="boxConcesionarios">
        {concesionariosData.length > 0 ? (
          concesionariosData.map((datos, index) => (
            <div key={index} className="concesionariosFlex">
              <div className="concesionariosFlexText textConcesionario">
                <p className="nombreConcesionario">{datos.nombre}</p>
                <p className="descConcesionario">{datos.descripcion}</p>
                <span className="direccionConcesionario">
                  {datos.direccion}
                </span>
                <p className="telefonoConcesionario">
                  <span>Línea directa </span>
                  <a href="tel:032994740">032 994 740</a> |{" "}
                  <a href="tel:0992048229">0992048229</a>
                </p>
                <span className="linkConcesionario">
                  <a href={datos.url} target="_blank" rel="noreferrer">
                    UBICACIÓN
                  </a>
                </span>
                <a href=""></a>
              </div>
              <div className="concesionariosFlexImg imgConcesionario">
                <img src={datos.img} alt={datos.alt} />
              </div>
            </div>
          ))
        ) : (
          <span className="spanText">
            Selecciona el concesionario en la ciudad más cercana
          </span>
        )}
      </div>
      <BannerContacto />
      <Footer />
    </>
  );
}

export default Concesionarios;
