import env from './../../../config'
import './styles/galeria.css'

const Galeria = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <div className='galeria'>

      <h3 className='title'>Descubre la emoción de conducir tu propio sueño</h3>

      <div className='images'>

        <div className='image-container'>
          <img src={urlMedia + 'emocion1.jpg'} alt="" />
        </div>

        <div className='image-container'>

          <img src={urlMedia + 'emocion2.jpg'} alt="" />
        </div>

        <div className='image-container'>
          <img src={urlMedia + 'emocion4.jpg'} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Galeria