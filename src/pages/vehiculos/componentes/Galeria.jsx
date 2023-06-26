import env from './../../../config'
import './styles/galeria.css'
import Carousel from 'better-react-carousel'

const Galeria = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <>

      <div className='galeria'>

        <h3 className='title'>Exterior</h3>

      </div>


      <div className='carrousel'>
        <Carousel
          cols={3}
          rows={1}
          gap={30}
          loop
        >
          <Carousel.Item>
            <img width="100%" src={urlMedia + 'emocion1.webp'} alt="U70PRO" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={urlMedia + 'llantas.webp'} alt="U70PRO" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={urlMedia + 'emocion4.webp'} alt="U70PRO" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={urlMedia + 'faro.webp'} alt="U70PRO" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={urlMedia + 'sinLlave.webp'} alt="U70PRO" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={urlMedia + 'retro.webp'} alt="U70PRO" />
          </Carousel.Item>
        </Carousel>
      </div>


    </>
  )
}

export default Galeria