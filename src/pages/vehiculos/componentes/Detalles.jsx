import './styles/detalles.css'
import env from './../../../config'

const Detalles = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <div className='page'>
      <h3 className='title'>Detalles</h3>

      <div className='imagenes'>
        <img className='w-1/2' src={urlMedia + "detalles.jpg"} alt="" />
        <img className='w-1/2' src={urlMedia + "detalle2.jpg"} alt="" />
      </div>
    </div>
  )
}

export default Detalles