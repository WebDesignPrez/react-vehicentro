import env from './../../../config'
import CarouselMultiItem from './CarouselMultiItem'

import './styles/interior.css'





const Caracteristica = ({ titulo, descripcion }) => {
  return (
    <div className='caracteristica'>
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
    </div>
  )
}

const Interior = () => {
  const urlMedia = env.url + "vehiculos/"

  console.log(urlMedia);
  return (
    <div className='interior'>

      <h3 className='title'> Upscale interior</h3>




      <CarouselMultiItem />




      <img src={urlMedia + "imagenInterior.webp"} alt="" />

    </div>

  )
}

export default Interior
