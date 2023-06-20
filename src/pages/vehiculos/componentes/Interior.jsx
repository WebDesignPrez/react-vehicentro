import env from '../../../config'
import MultiItemCarousel from './MultiItemCarousel'
import './styles/interior.css'




const Interior = () => {
  const urlMedia = env.url + "vehiculos/"



  return (
    <div className='interior'>

      <h3 className='title'> Upscale interior</h3>



      {/* <MultiItemCarousel /> */}




      <img src={urlMedia + "imagenInterior.webp"} alt="" />

    </div>

  )
}

export default Interior
