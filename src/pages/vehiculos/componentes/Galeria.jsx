import env from './../../../config'
import './styles/galeria.css'

const Galeria = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <div className='galeria page'>

      <h3 className='title'>Descubre la emoción de conducir tu propio sueño</h3>

      <div className='images'>

        <div className='image-container'>
          <img src={urlMedia + 'galeria1.jpeg'} alt="" />
        </div>

        <div className='image-container'>

          <img src={urlMedia + 'galeria2.jpeg'} alt="" />
        </div>

        <div className='image-container'>
          <img src={urlMedia + 'galeria3.jpeg'} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Galeria