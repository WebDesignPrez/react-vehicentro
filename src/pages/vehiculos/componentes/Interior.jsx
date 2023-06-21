import { useState } from 'react'
import env from '../../../config'
import './styles/interior.css'




const Interior = () => {

  const urlMedia = env.url + "vehiculos/"


  const [caracteristica, setCaracteristica] = useState(0)
  const [subCaracteristica, setSubCaracteristica] = useState(0)



  const interiores = [
    {
      id: 0,
      titulo: 'Tablero',
      subCategorias: [
        {
          titulo: 'Pantalla multimedia',
          descripcion: 'Pantalla multimedia de 7 pulgadas con conectividad Apple CarPlay y Android Auto.',
          img: urlMedia + 'intermedias.jpg'
        },
        {
          titulo: 'Pantalla multimedia 2',
          descripcion: 'Pantalla multimedia de 124 pulgadas con conectividad Apple CarPlay y Android Auto.',
          img: urlMedia + 'intermedias2.jpg'
        },
        {
          titulo: 'Pantalla multimedia 3',
          descripcion: 'Pantalla multimedia de 3425326 pulgadas con conectividad Apple CarPlay y Android Auto.',
          img: urlMedia + 'intermedias3.jpg'
        },
        {
          titulo: 'Pantalla multimedia 4',
          descripcion: 'Pantalla multimedia de 24353256 pulgadas con conectividad Apple CarPlay y Android Auto.',
          img: urlMedia + 'intermedias4.jpg'
        },



      ]
    },
    {
      id: 1,
      titulo: 'Volante',
      subCategorias: [

        {
          titulo: 'Suspension',
          descripcion: 'Volante multifunción con ajuste en altura y profundidad.',
          img: urlMedia + 'intermedias.jpg'
        },

        {
          titulo: 'Suspension2',
          descripcion: 'Volante multifunción con ajuste en altura y profundidad.',
          img: urlMedia + 'intermedias2.jpg'
        },

        {
          titulo: 'Suspension3',
          descripcion: 'Volante multifunción con ajuste en altura y profundidad.',
          img: urlMedia + 'intermedias3.jpg'
        },

        {
          titulo: 'Suspension4',
          descripcion: 'Volante multifunción con ajuste en altura y profundidad.',
          img: urlMedia + 'intermedias4.jpg'
        },


      ]
    },
    {
      id: 2,
      titulo: 'Interior 3 ',
      subCategorias: [

        {
          titulo: 'Aire acondicionado',
          descripcion: 'Aire acondicionado manual.',
          img: urlMedia + 'intermedias.jpg'
        },
        {
          titulo: 'Aire acondicionado 2',
          descripcion: 'Aire acondicionado manual.',
          img: urlMedia + 'intermedias2.jpg'
        },
        {
          titulo: 'Aire acondicionado 3',
          descripcion: 'Aire acondicionado manual.',
          img: urlMedia + 'intermedias3.jpg'
        },
        {
          titulo: 'Aire acondicionado 4',
          descripcion: 'Aire acondicionado manual.',
          img: urlMedia + 'intermedias4.jpg'
        },
        {
          titulo: 'Aire acondicionado 5',
          descripcion: 'Aire acondicionado manual.',
          img: urlMedia + 'intermedias.jpg'
        },


      ]
    },
    {
      id: 3,
      titulo: 'Interior 4 ',
      subCategorias: [

        {
          titulo: 'Asientos',
          descripcion: 'Asientos tapizados en tela.',
          img: urlMedia + 'intermedias4.jpg'
        },
        {
          titulo: 'Asientos 2',
          descripcion: 'Asientos tapizados en tela.',
          img: urlMedia + 'intermedias3.jpg'
        },
        {
          titulo: 'Asientos 3',
          descripcion: 'Asientos tapizados en tela.',
          img: urlMedia + 'intermedias2.jpg'
        },
        {
          titulo: 'Asientos 4',
          descripcion: 'Asientos tapizados en tela.',
          img: urlMedia + 'intermedias.jpg'
        },
        {
          titulo: 'Asientos 5',
          descripcion: 'Asientos tapizados en tela.',
          img: urlMedia + 'intermedias4.jpg'
        },

      ]
    },

  ]

  const handleCaracteristica = (index) => {
    setCaracteristica(index)
    setSubCaracteristica(0)
  }


  return (
    <div className='interior'>

      <h3 className='title'> Interior</h3>

      <div className='caracteristicas web'>


        {/* menu col left */}
        <div className='menu'>
          {
            interiores.map((interior, index) => (
              <div key={index} className={`caracteristica `}>
                <p
                  className={`titulo-caracteristica ${interior.id === caracteristica && 'color-selected'}`}
                  onClick={() => handleCaracteristica(index)}
                >{interior.titulo}
                </p>

                <div>
                  {

                    interior.id === caracteristica &&
                    interior.subCategorias.map((subCategoria, index) => (
                      <div
                        key={index}
                        className={`sub-caracteristica ${interior.id === caracteristica && index === subCaracteristica && 'color-selected'}`}
                        onClick={() => setSubCaracteristica(index)}
                      >
                        <p>{subCategoria.titulo}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>

        {/* info col right */}
        <div className='info'>

          <h3 className='title-info'>{interiores[caracteristica].titulo}</h3>

          <h4 className='subtitle-info' >{interiores[caracteristica].subCategorias[subCaracteristica].titulo}</h4>
          <p className=' subtitle-description' >{interiores[caracteristica].subCategorias[subCaracteristica].descripcion}</p>
          <img src={interiores[caracteristica].subCategorias[subCaracteristica].img} alt="" />

        </div>


      </div>

      <br />
      <br />
      <br />
      <br />
      <br />


      <div className='caracteristicas mobile'>


        {/* menu col left */}
        <div className='menu'>
          {
            interiores.map((interior, index) => (
              <div key={index} className={`caracteristica `}>
                <p
                  className={`titulo-caracteristica ${interior.id === caracteristica && 'color-selected'}`}
                  onClick={() => handleCaracteristica(index)}
                >{interior.titulo}
                </p>

                <div>
                  {

                    interior.id === caracteristica &&
                    interior.subCategorias.map((subCategoria, index) => (
                      <div
                        key={index}
                        className={`sub-caracteristica ${interior.id === caracteristica && index === subCaracteristica && 'color-selected'}`}
                        onClick={() => setSubCaracteristica(index)}
                      >
                        <p>{subCategoria.titulo}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>

        {/* info col right */}
        <div className='info'>

          <h3 className='title-info'>{interiores[caracteristica].titulo}</h3>

          <h4 className='subtitle-info' >{interiores[caracteristica].subCategorias[subCaracteristica].titulo}</h4>
          <p className=' subtitle-description' >{interiores[caracteristica].subCategorias[subCaracteristica].descripcion}</p>
          <img src={interiores[caracteristica].subCategorias[subCaracteristica].img} alt="" />

        </div>


      </div>




    </div>



  )
}

export default Interior
