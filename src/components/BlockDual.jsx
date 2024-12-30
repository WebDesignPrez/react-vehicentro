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
      url: "#",
    },
    {
      image1: "images/home/dualLinkCo.webp",
      image2: "images/home/dualLinkCoLogo.webp",
      url: "https://lynkcoautos.com.ec/",
    },
    {
      image1: "images/home/dualSunward.webp",
      image2: "images/home/dualSunwardLogo.webp",
      reverse: true,
      url: "#",
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
          {index === 0 ? (
            <>
              <div style={{ flex: "1" }}>
                <img
                  src={data.image}
                  alt={`carousel ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="nuevocell">
                <div className="linksproductos">
                  <a href="https://sinotruk.com.ec/">Camiones</a>
                  <p>•</p>
                  <a href="/sinotruk/autos/">Autos</a>
                  <p>•</p>
                  <a href="proximamente">Camionetas</a>
                </div>
                <div className="linksproductos2">
                  <a className="nonestyles" href="../home">
                    <div className="contenedorEcuadorBanderas">
                      <img src="images/home/banderaEcuador.webp" />
                      <p>Ecuador</p>
                    </div>
                  </a>
                  <a className="nonestyles" href="https://vehicentro.com/co/">
                    <div className="contenedorEcuadorBanderas2">
                      <img src="images/home/banderaColombia.webp" />
                      <p>Colombia</p>
                    </div>
                  </a>
                </div>
                <div
                  className="botonContainer"
                  style={{
                    color: index === 0 ? "black" : "white",
                  }}
                >
                  {/* <img
                    className="iconoimagen"
                    src={"images/home/iconoNegro.png"}
                    style={{ width: "15%", height: "auto" }}
                  /> */}
                  <a
                    href="https://sinotruk.com.ec/busqueda"
                    className={index === 0 ? "last-block" : ""}
                    style={{
                      color: index === 0 ? "black" : "white",
                      border: `1px solid ${index === 0 ? "black" : "white"}`,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.5rem 1rem",
                      borderRadius: "16px",
                    }}
                  >
                    Catálogo de productos
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ flex: "1" }}>
                <img
                  src={data.image1}
                  alt={`carousel ${index + 1} - left`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div style={{ position: "relative", flex: "1" }}>
                <img
                  src={data.image2}
                  alt={`carousel ${index + 1} - right`}
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="botonContainer"
                  style={{
                    color: index === layoutData.length - 1 ? "black" : "white",
                  }}
                >
                  {/* <img
                    className="iconoimagen"
                    src={
                      index === layoutData.length - 1
                        ? "images/home/iconoNegro.png"
                        : "images/home/icono.png"
                    }
                  /> */}
                  <a
                    href={data.url}
                    className={
                      index === layoutData.length - 1 ? "last-block" : ""
                    }
                    style={{
                      color:
                        index === layoutData.length - 1 ? "black" : "white",
                      border: `1px solid ${
                        index === layoutData.length - 1 ? "black" : "white"
                      }`,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.5rem 1rem",
                      borderRadius: "16px",
                    }}
                  >
                    Catálogo de productos
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlockDual;
