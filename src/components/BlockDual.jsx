import React from "react";
import carouselData from "../data/carouselData";
import "../home.css";

export const BlockDual = () => {
  const layoutData = [
    { image: "images/home/dualSinotruk.webp", series: carouselData },
    {
      image1: "images/home/dualCase.webp",
      image2: "images/home/dualCaseLogo.webp",
      reverse: true,
      url: "/proximamente",
    },
    {
      image1: "images/home/dualLinkCo.webp",
      image2: "images/home/dualLinkCoLogo.webp",
    },
    {
      image1: "images/home/dualSunward.webp",
      image2: "images/home/dualSunwardLogo.webp",
      reverse: true,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
      {layoutData.map((data, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: data.reverse ? "row-reverse" : "row",
            alignItems: "center",
          }}
        >
          {/* Primer bloque con información */}
          {index === 0 ? (
            <>
              {/* Imagen */}
              <div className="ocultarMovil" style={{ flex: "1" }}>
                <img
                  src={data.image}
                  alt={`carousel ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Información */}
              <div className="nuevocell" style={{}}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "60%",
                    paddingLeft: "75px",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <a href="https://sinotruk.com.ec/">Camiones</a>
                  <a href="/sinotruk/autos/">Autos</a>
                  <a href="proximamente">Camionetas</a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Bloques restantes con dos imágenes */}
              <div style={{ flex: "1" }}>
                <img
                  src={data.image1}
                  alt={`carousel ${index + 1} - left`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div style={{ flex: "1" }}>
                <img
                  src={data.image2}
                  alt={`carousel ${index + 1} - right`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlockDual;
