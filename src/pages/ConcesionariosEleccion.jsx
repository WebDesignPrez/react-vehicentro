import React, { useEffect, useState } from "react";
import NavBarTop from "../NavBarTop";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import env from "../config";

const urlMedia = env.url;

const datosConcesionarios = [
  // ... Move the full `datosConcesionarios` array here
];

function ConcesionariosEleccion() {
  return (
    <>
      <NavBarTop />
      <div className="btnConcesionarios">
        <a className="btn6" href="/concesionarios">
          Ecuador
        </a>
        <a className="btn6" href="https://vehicentro.com/co/concesionarios">
          Colombia
        </a>
      </div>
      <BannerContacto />
      <Footer />
    </>
  );
}

export default ConcesionariosEleccion;
