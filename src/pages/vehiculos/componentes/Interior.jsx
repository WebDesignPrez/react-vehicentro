import env from '../../../config'
import MultiItemCarousel from './MultiItemCarousel'
import './styles/interior.css'




const Interior = () => {
  const urlMedia = env.url + "vehiculos/"



  return (
    <div className='interior'>

      <h3 className='title'> Interior</h3>



      {/* <MultiItemCarousel /> */}




      <div className='flex justify-center'>
        <img className='w-[1900px]' src={urlMedia + "intermedias.jpg"} alt="" />

      </div>

    </div>

  )
}

export default Interior
