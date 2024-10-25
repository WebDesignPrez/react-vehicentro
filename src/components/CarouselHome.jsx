import env from "../config";

import "../carouselHome.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let urlMedia = env.url;

export const CarouselHome = () => {
  return (
    <div className="box">
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="boxSeries">
            <a href="/camiones/camion-de-2-5-toneladas">
              <img
                src={`${urlMedia}home/serieN.webp`}
                width="500"
                height="389"
                alt="Camiones de carga liviana en Ecuador"
              />
            </a>
            <div className="infoBox">
              <p>SERIE</p>
              <a href="/serie/n">N</a>
              <div className="seriesFlex">
                <a href="/camiones/camion-de-2-5-toneladas">NLS 2.5 TON</a>
                <p style={{ opacity: "30%" }}>|</p>
                <a href="/camiones/camion-de-3-5-toneladas-1057">
                  NKS 3.5 TON (LIVIANO)
                </a>
                <p style={{ opacity: "30%" }}>|</p>
                <a href="/camiones/camion-de-3-6-nks">NKS 3.6 TON (PESADO)</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="/serie/100">
              <img
                src={`${urlMedia}home/nuevasPortadas/serie-100.webp`}
                width="500"
                height="389"
                alt="Camiones de carga liviana en Ecuador"
              />
            </a>
            <div className="bottomContainer">
              <p className="titleBox">SERIE</p>
              <a className="titleBox2" href="/serie/100">
                100
              </a>
              <div className="linksBox">
                <a
                  className="line2"
                  href="/camiones/camion-de-5-toneladas-1067"
                >
                  5 TON
                </a>
                <p style={{ opacity: "30%" }}>|</p>
                <a
                  className="line2"
                  href="/camiones/camion-de-6-toneladas-1067"
                >
                  6 TON
                </a>
                <p style={{ opacity: "30%" }}>|</p>
                <a className="line2" href="/camiones/camion-8-toneladas-1147">
                  10 TON
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>hola</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>hola2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>hola3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
