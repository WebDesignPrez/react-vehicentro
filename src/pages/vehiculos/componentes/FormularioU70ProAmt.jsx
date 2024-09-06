import { useEffect, useState, React } from "react";
import env from "../../../config";
import "./styles/vehiculo.css";
import { useParams } from "react-router";
import precios from "../../../precios";
import FormContact from "../../../components/FormContact";

let nombreCamion;
let bdc;
let camionSerie;
let nombreSerie;
let bdcFicha =
  "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC";

const FormularioU70ProAmt = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [modalFormIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeFormContact();
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function openFormContact() {
    setFormIsOpen(true);
  }

  function closeFormContact() {
    setFormIsOpen(false);
  }

  //Comparacion paginas
  switch (useParams("id").id) {
    //U70PRO
    case "U70PROAMT":
      nombreCamion = "U70PROAMT";
      camionSerie = "U70PROAMT";
      nombreSerie = "autos";
      bdc =
        "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBAUTU70P";
  }

  switch (useParams("id").id) {
    case "UU70PROAMT70PRO":
      break;
    default:
      break;
  }

  const urlMedia = env.url + "u70proamt/";

  const [selectedImage, setSelectedImage] = useState(urlMedia + "blanco.png");

  const handleButtonClick = (newImage) => {
    setSelectedImage(urlMedia + newImage + ".png");
  };

  return (
    <div className="boxesIni posRelative">
      <div className="centrado">
        <img
          src={urlMedia + "imgForm.jpg"}
          width="1400"
          height="1000"
          className="slideMain"
          alt="Imagen - auto 7 pasajeros"
          title="auto 7 pasajeros"
        />
      </div>
      <div>
        <FormContact
          url={
            "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBAUTU70PAMT"
          }
          camion={"U70PROAMT"}
          serie={"autos"}
          camionSerie={"U70PROAMT"}
        />
      </div>
    </div>
  );
};

export default FormularioU70ProAmt;
