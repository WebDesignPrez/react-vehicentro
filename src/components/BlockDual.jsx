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
    {
      image1: "images/home/concesionarios.webp",
      image2: "images/home/repuestos.webp",
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
              <div style={{ flex: "1" }}>
                <img
                  src={data.image}
                  alt={`carousel ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Información */}
              <div
                style={{
                  flex: "1",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  backgroundColor: "red",
                  backgroundImage: "url('images/home/sinotrukPorductos.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  height: "90vh",
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "center",
                  paddingTop: "100px",
                }}
              >
                {carouselData.map((series, seriesIndex) => (
                  <div key={seriesIndex} style={{ paddingLeft: "20px" }}>
                    {/* Título de la serie */}
                    <h3 style={{ marginBottom: "10px", color: "#333" }}>
                      {series.seriesName}
                    </h3>
                    {/* Lista de items */}
                    <ul style={{ padding: "0", listStyle: "none" }}>
                      {series.items.map((item, itemIndex) => (
                        <li key={itemIndex} style={{ marginBottom: "3px" }}>
                          <a
                            href={item.link}
                            style={{
                              textDecoration: "none",
                              color: item.isNew ? "green" : "black",
                            }}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
