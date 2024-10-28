import env from "../config";
import "../carouselHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import carouselData from "../data/caroselDataCase";
import React from "react";

let urlMedia = env.url;

export const CarouselHome2 = () => {
  return (
    <div className="box">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 }, // 1 slide en pantallas pequeñas
          768: { slidesPerView: 2 }, // 2 slides en tablets
          1024: { slidesPerView: 3 }, // 3 slides en pantallas grandes
        }}
      >
        {carouselData.map((item, index) => (
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
              <div className="infoBox2">
                <div className="boxtitle">
                  <p>{item.title}</p>
                  <a href={item.seriesLink}>{item.seriesName}</a>
                </div>

                {item.categories ? (
                  item.categories.map((category, catIndex) => (
                    <div key={catIndex} className="categoryBox">
                      <p className="categoryTitle">{category.category}:</p>
                      <div className="seriesFlex">
                        {category.items.map((subItem, subIndex) => (
                          <React.Fragment key={subIndex}>
                            {subItem.isNew && (
                              <span className="newTag">NUEVO</span>
                            )}
                            <a href={subItem.link}>{subItem.name}</a>
                            {subIndex < category.items.length - 1 && (
                              <p style={{ opacity: "30%" }}>|</p>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="seriesFlex">
                    {item.items.map((subItem, subIndex) => (
                      <React.Fragment key={subIndex}>
                        {subItem.isNew && <span className="newTag">NUEVO</span>}
                        <a href={subItem.link}>{subItem.name}</a>
                        {subIndex < item.items.length - 1 && (
                          <p style={{ opacity: "30%" }}>|</p>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
