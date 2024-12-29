import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../modalContact.css";
import FormContactFicha from "./FormContactFicha";

export default function BannerContacto(props) {
  let url = props.url;
  let nomCamion = props.camion;
  let listSerie = props.serie == "" ? "" : props.serie;
  let listCamion = props.camionSerie == "" ? "" : props.camionSerie;

  const [modalContactIsOpen, setContactIsOpen] = useState(false);
  const [modalFormIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeContact();
        closeFormContact();
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function openModal() {
    openFormContact();
    closeContact();
  }

  function openFormContact() {
    setFormIsOpen(true);
  }

  function closeFormContact() {
    setFormIsOpen(false);
  }

  function openContact() {
    url = props.url;
    setContactIsOpen(true);
  }

  function openContactDos() {
    url =
      "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHBOTONCOT";
    setContactIsOpen(true);
  }

  function closeContact() {
    setContactIsOpen(false);
  }

  const closeContactF = () => {
    setContactIsOpen(false);
  };

  function gotoWs() {
    window.open("https://api.whatsapp.com/send/?phone=593989205669", "_blank");
    closeContact();
  }

  function gotoCall() {
    window.open("tel:032994740");
    closeContact();
  }

  return (
    <>
      <div className="boxesContact posRelative fix">
        {/* <p className="buttonContact f fixed" onClick={openContactDos}>
          COTIZAR
        </p> */}
        <a href="/trabaja-con-nosotros">
          <p className="buttonContact f" onClick={openContact}>
            COTIZAR
          </p>
        </a>
        {/* <p className="textContact escritorio">
          Déjanos tus datos y uno de nuestros asesores <br></br>se contactará de
          inmediato.
        </p>
        <p className="textContact movil">
          Déjanos tus datos y uno <br></br>de nuestros asesores se contactará de
          inmediato.
        </p> */}
      </div>

      {modalContactIsOpen && (
        <div className="modalContact" id="modalBanner">
          <span className="closeBtnForm" onClick={closeContact}>
            <img
              src="https://vehicentro.com/images/close-icon_w.png"
              alt="close"
            />
          </span>
          <div className="headerModalContact">
            <img
              src="https://vehicentro.com/images/vehicentro-logo-blanco.png"
              alt="Vehicentro"
            />
          </div>
          <div className="bodyModalContact">
            {/* <p className="btnModalContact tagManagerWpp" onClick={gotoWs}><span className="wa">ESCRÍBENOS</span></p> */}
            <p className="btnModalContact tagManagerTel" onClick={gotoCall}>
              <span className="fontBlack">LLAMAR A ASESOR</span>
            </p>
            <p className="btnModalContact tagManagerForm" onClick={openModal}>
              <span className="fontBlack">PROFORMAR</span>
            </p>
          </div>
        </div>
      )}

      {modalFormIsOpen && (
        <FormContactFicha
          url={url}
          camion={nomCamion}
          serie={listSerie}
          camionSerie={listCamion}
          close={closeFormContact}
        />
      )}
    </>
  );
}
