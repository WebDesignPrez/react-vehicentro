import React from "react";
import env from "../config";
import "../homeRepuestos.css";

export const BlockRepuestos = () => {
  let urlMedia = env.url;
  return (
    <div className="bloqueRep">
      <div className="izquierdaRep">
        <a href="/concesionariosEleccion" className="image-wrapper">
          <img
            src="images/home/concesionariosCuadrado.webp"
            alt="Concesionarios"
          />
          <div className="overlay">
            <span className="text">Concesionarios</span>
            <span className="arrow">&rarr;</span>
          </div>
        </a>
      </div>
      <div className="derechaRep">
        <a href="/repuestos" className="image-wrapper">
          <img
            src="images/home/talleresRepuestos.webp"
            alt="Talleres y Repuestos"
          />
          <div className="overlay">
            <span className="text">Talleres</span>
            <span className="arrow">&rarr;</span>
          </div>
        </a>
        <a href="/repuestos" className="image-wrapper">
          <img src="images/home/veinsteinCuadrado.webp" alt="Veinstein" />
          <div className="overlay">
            <span className="text">Repuestos</span>
            <span className="arrow">&rarr;</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlockRepuestos;
