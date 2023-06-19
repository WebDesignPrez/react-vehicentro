import './styles/detalles.css'
import env from './../../../config'

const Detalles = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <div>
      <h3 className='title'>Detalles</h3>

      <div className='imagenes'>
        <img src={urlMedia + "detalles1.jpg"} alt="" />
        <img src={urlMedia + "detalles2.jpg"} alt="" />
      </div>
    </div>
  )
}

export default Detalles