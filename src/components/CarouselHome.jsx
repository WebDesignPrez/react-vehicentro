import React, { useState } from "react";
import env from "../config";
import "../carouselHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import carouselData from "../data/carouselData";

let urlMedia = env.url;

const renderCategories = (categories) => {
  return categories.map((category, catIndex) => (
    <div key={catIndex} className="categoryBox">
      <p className="categoryTitle">{category.category}:</p>
      <div className="seriesFlex">
        {category.items.map((subItem, subIndex) => (
          <React.Fragment key={subIndex}>
            {subItem.isNew && <span className="newTag">NUEVO</span>}
            <a href={subItem.link}>{subItem.name}</a>
            {subIndex < category.items.length - 1 && (
              <p style={{ opacity: "30%" }}>|</p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  ));
};

const renderItems = (items) => {
  return (
    <div className="seriesFlex">
      {items.map((subItem, subIndex) => (
        <React.Fragment key={subIndex}>
          {subItem.isNew && <span className="newTag">NUEVO</span>}
          <a href={subItem.link}>{subItem.name}</a>
          {subIndex < items.length - 1 && <p style={{ opacity: "30%" }}>|</p>}
        </React.Fragment>
      ))}
    </div>
  );
};

export const CarouselHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("CAMIONES");

  // Filtrar los datos según el botón seleccionado
  const filteredData = carouselData.filter((item) =>
    selectedCategory === "AUTOS"
      ? item.seriesName === "SUV'S"
      : item.seriesName !== "SUV'S"
  );

  return (
    <div className="box">
      {/* Botones de filtro */}
      <div className="filterButtons">
        <button
          className="buttonOptions"
          onClick={() => setSelectedCategory("CAMIONES")}
        >
          CAMIONES
        </button>
        <button
          className="buttonOptions"
          onClick={() => setSelectedCategory("AUTOS")}
        >
          AUTOS
        </button>
      </div>

      {/* Carrusel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="boxSeries">
              <a href={item.link}>
                <img
                  src={`${urlMedia}${item.imgSrc}`}
                  width="900"
                  height="700"
                  alt={item.imgAlt}
                />
              </a>
              <div className="infoBox">
                <div className="boxtitle">
                  <p>{item.title}</p>
                  <a href={item.seriesLink}>{item.seriesName}</a>
                </div>

                {item.categories
                  ? renderCategories(item.categories)
                  : renderItems(item.items)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
