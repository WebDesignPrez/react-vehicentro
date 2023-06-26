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
      titulo: 'Asientos',
      subCategorias: [
        {
          titulo: '3 Filas de Asientos',
          descripcion: '',
          img: urlMedia + 'asientos1.webp'
        },
        {
          titulo: 'Amplio Espacio',
          descripcion: '',
          img: urlMedia + 'asientos2.webp'
        }
      ]
    },
    {
      id: 1,
      titulo: 'Sistema Multimedia',
      subCategorias: [

        {
          titulo: 'Radio de 12 pulgadas',
          descripcion: '',
          img: urlMedia + 'radio.webp'
        },

        {
          titulo: 'Tweeters',
          descripcion: '',
          img: urlMedia + 'tweeters.webp'
        },
      ]
    },
    {
      id: 2,
      titulo: 'Aire Acondicionado',
      subCategorias: [

        {
          titulo: 'Aire acondicionado',
          descripcion: '',
          img: urlMedia + 'aire1.webp'
        },
        {
          titulo: 'Aire acondicionado parte posterior',
          descripcion: '',
          img: urlMedia + 'aire2.webp'
        },
      ]
    },
    {
      id: 3,
      titulo: 'Volante',
      subCategorias: [

        {
          titulo: 'Acabados en cuero',
          descripcion: '',
          img: urlMedia + 'volante3.webp'
        },
        {
          titulo: 'Control Multimedia',
          descripcion: '',
          img: urlMedia + 'volante1.webp'
        },
        {
          titulo: 'Velocidad Crucero',
          descripcion: '',
          img: urlMedia + 'volante2.webp'
        }
      ]
    },
    {
      id: 4,
      titulo: 'Almacenamiento',
      subCategorias: [

        {
          titulo: 'Consola Central',
          descripcion: '',
          img: urlMedia + 'consola.webp'
        },
      ]
    },
    {
      id: 4,
      titulo: 'Palanca',
      subCategorias: [

        {
          titulo: 'Palanca de cambios 6 + 1',
          descripcion: '',
          img: urlMedia + 'aire1.webp'
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

          <div className='container'>

            <h3 className='title-info'>{interiores[caracteristica].titulo}</h3>

            <h4 className='subtitle-info' >{interiores[caracteristica].subCategorias[subCaracteristica].titulo}</h4>
            <p className=' subtitle-description' >{interiores[caracteristica].subCategorias[subCaracteristica].descripcion}</p>

            <div className='img-container'>
              <img src={interiores[caracteristica].subCategorias[subCaracteristica].img} alt="" />
            </div>

          </div>
        </div>


      </div>



      <div className='caracteristicas mobile'>


        {/* menu col left */}
        <div className='menu'>
          {
            interiores.map((interior, index) => (
              <div key={index} className={`caracteristica`}>
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

          {
            // TODO: Los items de abajo se deben renderizar con un map


            interiores[caracteristica].subCategorias.map((subCategoria, index) => (
              // console.log(subCategoria)
              <div key={index} className='items'>
                <h4 className='subtitle-info' >{subCategoria.titulo}</h4>
                <p className=' subtitle-description' >{subCategoria.descripcion}</p>
                <img src={subCategoria.img} alt="Galeria U70PRO" />
              </div>
            ))

          }


        </div>


      </div>




    </div>



  )
}

export default Interior
