import env from "../../../config";
import "./styles/galeria.css";
import Carousel from "better-react-carousel";

const InteriroU70ProAmt = ({ path = "vehiculos/" }) => {
  const urlMedia = "https://www.vehicentro.com/images/vehiculos/";

  return (
    <>
      <div className="galeria">
        <h3 className="title">Interior</h3>
      </div>

      <div className="carrousel">
        <Carousel cols={3} rows={1} gap={30} loop>
          <Carousel.Item>
            <img
              width="100%"
              src={urlMedia + "asientos70.webp"}
              alt="Faro delantero U70PRO - auto 7 pasajeros"
              title="auto 7 pasajeros"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={urlMedia + "3filas70.webp"}
              alt="Direccionales U70PRO - auto 7 pasajeros"
              title="auto 7 pasajeros"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={urlMedia + "palanca70.webp"}
              alt="Faro trasero U70PRO - auto 7 pasajeros"
              title="auto 7 pasajeros"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              src={urlMedia + "tweters70.webp"}
              alt="Rines de 18 pulgadasU70PRO - auto 7 pasajeros"
              title="auto 7 pasajeros"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src={urlMedia + "volante70.webp"}
              alt="Techo Panoramico U70PRO - auto 7 pasajeros"
              title="auto 7 pasajeros"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default InteriroU70ProAmt;
