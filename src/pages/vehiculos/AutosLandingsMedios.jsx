import BannerContacto from "../../components/BannerContacto"
import Footer from "../../components/Footer"
import NavBarTop from "../../NavBarTop"
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../../components/FormContact";
import env from '../../config';
import { useEffect, useState } from "react";
import Detalles from './componentes/Detalles'
import { Link } from 'react-router-dom';
import HeaderFooterLanding from "../../components/HeaderFooterLanding";
import dataLeads from "../../data/dataLeads"

let series
let nombreCamion
let camionSerie
let urlMedia = env.url

    


function AutosLandingsMedios() {
    
   
    return (
        <>
            <Helmet>
                <title>Autos | Vehicentro</title>
                <meta name="description" content="Autos Sinotruk." />
                <meta name="keywords" content="autos, suv, venta de suv, carros en ecuador, carros, sinotruk"></meta>
                <meta name="robots" content="index, follow"></meta>
            </Helmet>
            <HeaderFooterLanding />
            <Content1 />
            <Content2 />
            <Content3 />
            {/*  <Content4 /> */}
            <Content5 />
            <Detalles />
            <HeaderFooterLanding />
        </>
    )
}

function Content1() {
    return (
        <>
            < div className="block2 noResponsive" >
                <video preload="none" width="1920" height="1076" controls autoPlay={true} playsInline={true} muted loop src="https://www.vehicentro.com/cotizacion/images/u70pro/u70pro.mp4" className="videoWidth" />
            </div >
        </>
    )
}

function Content2() {

    series = [{
        serie: "SUV",
        modelo: "U70",
        url: "/sinotruk/autos/u70"
    }, {
        serie: "SUV",
        modelo: "U70 Pro",
        url: "/sinotruk/autos/u70pro"
    }
    ]

    const urlMedia = "https://www.vehicentro.com/images/vehiculos/";


    const [selectedImage, setSelectedImage] = useState(urlMedia + 'blanco.webp');

    const handleButtonClick = (newImage) => {
        setSelectedImage(urlMedia + newImage + '.webp');
    };



    return (
        <>
            <div className="serieContainerAutos">

                <div className="containerAutos">
                    <div className="sinotrukContainer">
                        <img src="https://www.vehicentro.com/images/sinotruk.webp" />
                    </div>

                    <div className="serieSinotrukAutos">
                        <Link to="../sinotruk/autos/u70">
                            <img className="logos" src="https://www.vehicentro.com/images/u70Logo22.webp" alt="" />
                        </Link>
                        <Link to="../sinotruk/autos/u70pro">
                            <img className="logos" src="https://www.vehicentro.com/images/u70proLogoFlechasRoja2.webp" alt="" />
                        </Link>
                    </div>
                </div>

                <div className='vehiculos fondoautos'>

                    <img className='carImage' src={selectedImage} alt="U70PRO" />


                    <div className='description'>
                        <p>COLORES</p>
                        <div className='buttons'>
                            <button className='blanco' onClick={() => handleButtonClick('blanco')}></button>
                            <button className='bluesky' onClick={() => handleButtonClick('bluesky')}></button>
                            <button className='conchevino' onClick={() => handleButtonClick('conchevino')}></button>
                            <button className='gris' onClick={() => handleButtonClick('gris')}></button>
                            <button className='negro' onClick={() => handleButtonClick('negro')}></button>
                            <button className='plateado' onClick={() => handleButtonClick('plateado')}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Content3() {
    return (
        <>

            <div className="contentProduct">

                <div className="marcasbg textoImagenesProducto" >

                    <div className="boxRightHeader  half icon_center series" >
                        <div className="banner images autos1"><img src={urlMedia + "bosch.png"} /></div>
                    </div>

                    <div className="boxRightHeader  half text_icon_center series" >
                        <div className="banner images autos2"><img src={urlMedia + "delphi.png"} /></div>
                    </div>

                    <div className="boxRightHeader  half icon_right series">
                        <div className="banner images autos3"><img src={urlMedia + "magnettiAzul.png"} /></div>
                    </div>

                </div>


            </div>
        </>
    )
}

function Landingmenu() {
    return (
      <>
        <div  className="landing">
            <div className="menuHome">
              <div className="logoHome">
                <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
              </div>
            </div>
        </div>
      </>
    )
  }
  function Landingfooter() {
    return (
      <>
        <div className="landing">
            <div className="menuHome">
              <div className="logoHome">
                 <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
              </div>
            </div>
        </div>
      </>
    )
  }


function Content5() {
    const comercioObj = dataLeads.find((obj) => obj.name === "comercio");
    const comercioAutos = comercioObj ? comercioObj.autos : "";
    const revistaMotorObj = dataLeads.find((obj) => obj.name === "revista-motors");
    const revistaMotorAutos = revistaMotorObj ? revistaMotorObj.autos : "";
    const expressoObj = dataLeads.find((obj) => obj.name === "expresso");
    const expressoAutos = expressoObj ? expressoObj.autos : "";
    const ecdfObj = dataLeads.find((obj) => obj.name === "ecdf");
    const ecdfAutos = ecdfObj ? ecdfObj.autos : "";
    const primiciasObj = dataLeads.find((obj) => obj.name === "primicias");
    const primiciasAutos = primiciasObj ? primiciasObj.autos : "";
    const eluniversoObj = dataLeads.find((obj) => obj.name === "el-universo");
    const eluniversoAutos = eluniversoObj ? eluniversoObj.autos : "";
    const elExtraObj = dataLeads.find((obj) => obj.name === "el-extra");
    const elExtraAutos = elExtraObj ? elExtraObj.autos : "";
    const patiotuercaObj = dataLeads.find((obj) => obj.name === "patiotuerca");
    const patiotuercaAutos = patiotuercaObj ? patiotuercaObj.autos : "";


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



    return (
        <div className="boxesIni posRelative">
            <div className="centrado">
                <img src={urlMedia + "vehiculos/imgForm.png"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
            <div>
                <FormContact url={`https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/${bdcAutos}`} camion={nombreCamion} serie="autos" camionSerie={camionSerie} />
            </div>
        </div>
    )
}

export default AutosLandingsMedios