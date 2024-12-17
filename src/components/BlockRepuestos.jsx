import React from "react";
import carouselData from "../data/carouselData";
import "../homeRepuestos.css";

import env from "../config";

export const BlockRepuestos = () => {
  let urlMedia = env.url;
  return (
    <div className="bloqueRep">
      <div className="izquierdaRep">
        <a href="/concesionarios">
          <img src="images/home/concesionariosCuadrado.webp" />
        </a>
        <div className="redesRep">
          <div className="socialRep">
            <a href="https://www.facebook.com/Vehicentro">
              <img src={urlMedia + "facebook.png"} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/vehicentroec">
              <img src={urlMedia + "instagram.png"} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCW8gGawovE35cXcJ3P2kryQ">
              <img src={urlMedia + "youtube.png"} alt="youtube" />
            </a>
            <a href="https://www.tiktok.com/@sinotrukeros">
              <img src={urlMedia + "tiktok.webp"} alt="tiktok" />
            </a>
            <a href="https://www.linkedin.com/company/vehicentroecu/?originalSubdomain=ec">
              <img src={urlMedia + "linkdin.png"} alt="linkdin" />
            </a>
          </div>
        </div>
      </div>
      <div className="derechaRep">
        <a href="/repuestos">
          <img src="images/home/talleresRepuestos.webp" />
        </a>
        <a href="/repuestos">
          <img src="images/home/veinsteinCuadrado.webp" />
        </a>
      </div>
    </div>
  );
};

export default BlockRepuestos;
