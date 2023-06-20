import { useState } from 'react'
import env from '../../../config'
import MultiItemCarousel from './MultiItemCarousel'
import './styles/interior.css'




const Interior = () => {

  const urlMedia = env.url + "vehiculos/"

  const [item, setItem] = useState(0)

  console.log(item);

  const caracteristicas = [
    {
      titulo: "Pantalla multimedia",
      descripcion: "The available 12.3-inch Dual Panoramic Displays with navigation offer over a combined 24-inches of touchscreen for entertainment, convenience, and more.",
      img: urlMedia + "intermedias.jpg"
    },
    {
      titulo: "Detalles 2",
      descripcion: "The available 12.3-inch Dual Panoramic Displays with navigation offer over a combined 24-inches of touchscreen for entertainment, convenience, and more.",
      img: urlMedia + "intermedias2.jpg"
    },
    {
      titulo: "Detalles 3",
      descripcion: "The available 12.3-inch Dual Panoramic Displays with navigation offer over a combined 24-inches of touchscreen for entertainment, convenience, and more.",
      img: urlMedia + "intermedias3.jpg"
    },
    {
      titulo: "Detalles 4",
      descripcion: "The available 12.3-inch Dual Panoramic Displays with navigation offer over a combined 24-inches of touchscreen for entertainment, convenience, and more.",
      img: urlMedia + "intermedias4.jpg"
    },

  ]

  return (
    <div className='interior'>

      <h3 className='title'> Upscale interior</h3>

      <MultiItemCarousel caracteristicas={caracteristicas} setItem={setItem} />

      <img src={caracteristicas[item].img} alt="" />

    </div>

  )
}

export default Interior
