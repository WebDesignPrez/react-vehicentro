import { useEffect, useState, React } from "react";
import env from './../../../config';
import './styles/vehiculo.css';
import { useParams } from "react-router";
import precios from '../../../precios';
import FormContact from '../../../components/FormContact';
import dataLeads from "../../../data/dataLeads";



let nombreCamion
let bdc
let camionSerie
let nombreSerie
let bdcFicha = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC"

const Vehiculo = () => {

    const comercioObj = dataLeads.find((obj) => obj.name === "comercio");
    const comercioAutos = comercioObj ? comercioObj.u70 : "";
    const revistaMotorObj = dataLeads.find((obj) => obj.name === "revista-motors");
    const revistaMotorAutos = revistaMotorObj ? revistaMotorObj.u70 : "";
    const expressoObj = dataLeads.find((obj) => obj.name === "expresso");
    const expressoAutos = expressoObj ? expressoObj.u70 : "";
    const ecdfObj = dataLeads.find((obj) => obj.name === "ecdf");
    const ecdfAutos = ecdfObj ? ecdfObj.u70 : "";
    const primiciasObj = dataLeads.find((obj) => obj.name === "primicias");
    const primiciasAutos = primiciasObj ? primiciasObj.u70 : "";
    const eluniversoObj = dataLeads.find((obj) => obj.name === "el-universo");
    const eluniversoAutos = eluniversoObj ? eluniversoObj.u70 : "";
    const elExtraObj = dataLeads.find((obj) => obj.name === "el-extra");
    const elExtraAutos = elExtraObj ? elExtraObj.u70 : "";
    const patiotuercaObj = dataLeads.find((obj) => obj.name === "patiotuerca");
    const patiotuercaAutos = patiotuercaObj ? patiotuercaObj.u70 : "";


    let bdcAutos;
   if(window.location.href.split('/')[4] === "comercio"){
    bdcAutos= comercioAutos;
   }else if(window.location.href.split('/')[4] === "revista-motors"){
    bdcAutos = revistaMotorAutos;
   }else if(window.location.href.split('/')[4] === "expresso"){
    bdcAutos = expressoAutos;
   }else if(window.location.href.split('/')[4] === "ecdf"){
    bdcAutos = ecdfAutos;
   }else if(window.location.href.split('/')[4] === "primicias"){
    bdcAutos = primiciasAutos;
   }else if(window.location.href.split('/')[4] === "el-universo"){
    bdcAutos = eluniversoAutos;
   }else if(window.location.href.split('/')[4] === "el-extra"){
    bdcAutos = elExtraAutos;
   }else if(window.location.href.split('/')[4] === "patiotuerca"){
    bdcAutos = patiotuercaAutos;
   }else if(window.location.href.split('/')[4] === "patiotuerca"){
    bdcAutos = patiotuercaAutos;
   }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  //Comparacion paginas
  switch ((useParams("id").id)) {

    //U70PRO
    case "U70":
      nombreCamion = "U70"
      camionSerie = "U70"
      nombreSerie = "autos"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBAUTU70"
  }

  switch ((useParams("id").id)) {

    case "U70":
      break;
    default:
      break;
  }



  const urlMedia = env.url + 'vehiculos/';

  const [selectedImage, setSelectedImage] = useState(urlMedia + 'blanco.png');

  const handleButtonClick = (newImage) => {
    setSelectedImage(urlMedia + newImage + '.png');
  };

  return (
    <div className="boxesIni posRelative">
      <div className="centrado">
        <img src={urlMedia + "formu70.jpg"} width="1400" height="1000" className="slideMain" alt="SUV U70" />
      </div>
      <div>
        <FormContact url={`https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/${bdcAutos}`} camion={'U70'} serie={'autos'} camionSerie={'U70'} />
      </div>
    </div>

  );
};

export default Vehiculo;
