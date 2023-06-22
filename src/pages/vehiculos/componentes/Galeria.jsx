import env from './../../../config'
import './styles/galeria.css'
import Carousel from 'better-react-carousel'

const Galeria = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
  <>
  
    <div className='galeria'>

      <h3 className='title'>Descubre la emoción de conducir tu propio sueño</h3>

    </div>
    
    
    <div className='carrousel'>
          <Carousel
            cols={3}
            rows={1}
            gap={30}
            loop
          >
            <Carousel.Item>
                <img width="100%" src={urlMedia + 'emocion1.jpg'} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src={urlMedia + 'llantas.jpg'} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src={urlMedia + 'faro.jpg'} alt="" />
            </Carousel.Item>  
            <Carousel.Item>
                <img width="100%" src={urlMedia + 'emocion4.jpg'} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src={urlMedia + 'sinLlave.jpg'} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src={urlMedia + 'retro.jpg'} alt="" />
            </Carousel.Item>    
          </Carousel>
    </div>
        

    </>  
  )
}

export default Galeria