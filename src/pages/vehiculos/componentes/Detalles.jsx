import './styles/detalles.css'
import env from './../../../config'

const Detalles = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <div className='page'>
      <h3 className='title'>Detalles</h3>

      <div className='imagenes'>
        <img src={urlMedia + "detalles.jpg"} alt="Detalles U70PRO" />
        <img src={urlMedia + "detalle2.jpg"} alt="Detalles U70PRO" />
      </div>
    </div>
  )
}

export default Detalles