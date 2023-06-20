import React from 'react'

const MultiItemCarousel = ({ caracteristicas, setItem }) => {


  return (
    <div className='flex '>

      {
        caracteristicas.map((caracteristica, index) => (
          <div
            key={index}
            className='w-[400px] mb-10 cursor-pointer p-5'
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