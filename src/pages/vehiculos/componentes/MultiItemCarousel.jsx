import React from 'react'
import './styles/tailwind.css'



const MultiItemCarousel = ({ caracteristicas, setItem }) => {



  return (
    <div className='flex container '>

      {
        caracteristicas.map((caracteristica, index) => (
          <div
            key={index}
            className='w-[400px] mb-10 cursor-pointer p-5 item'
            onClick={() => setItem(index)}
          >
            <p className='font-bold text-2xl'>{caracteristica.titulo}</p>
            <p>{caracteristica.descripcion}</p>
          </div>
        ))
      }



    </div>
  )
}

export default MultiItemCarousel