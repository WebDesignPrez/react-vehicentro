import './styles/detalles.css'
import env from './../../../config'

const Detalles = () => {

  const urlMedia = env.url + "vehiculos/"

  return (
    <>
      <div className='page'>


        <div className='imagenes'>
          <img src={urlMedia + "seguridadBlanco.jpg"} alt=" Seguridad - auto 7 pasajeros" title="auto 7 pasajeros"  />
        </div>
        <div className='seguridadBoxes'>
          <h3 className='title'>Sistemas de Seguridad</h3>
          <div className='arriba'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad1.png"} alt="2 Airbags - auto 7 pasajeros" title="auto 7 pasajeros"  />
              <p>2 Airbags</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad2.png"} alt="Sistema antibloqueo de frenos - auto 7 pasajeros" title="auto 7 pasajeros"  />
              <p>Frenos ABS</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad3.png"} alt="Distribución electrónica fuerza de frenado - auto 7 pasajeros" title="auto 7 pasajeros"  />
              <p>EBD Distribución electrónica fuerza de frenado</p>
            </div>
          </div>

          <div className='abajo'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad4.png"} alt="Asistente de arranque en pendiente- auto 7 pasajeros" title="auto 7 pasajeros"  />
              <p>HAC Asistente de arranque en pendiente</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad5.png"} alt='Programa electrónico de estabilidad - auto 7 pasajeros' title="auto 7 pasajeros"  />
              <p>EPS Programa electrónico de estabilidad</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad6.png"} alt='Control electrónico de tracción - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>TCS Control electrónico de tracción</p>
            </div>
          </div>
          <div className='abajo'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad7.png"} alt='Control de asistencia para descenso en pendiente - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>DAC Control de asistencia para descenso en pendiente</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad8.png"} alt='Sistema antivuelco - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>ARP Sistema antivuelco</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad9.png"} alt='Freno de estacionamiento electrónico - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>EPB Freno de estacionamiento electrónico</p>
            </div>
          </div>
        </div>

       {/*  Celular */}
       <div className='celular'>
          <h3 className='title'>Sistemas de Seguridad</h3>
          <div className='arribaCelular'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad1.png"} alt='2 Airbags - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>2 Airbags</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad2.png"} alt='Sistema antibloqueo de frenos - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>Frenos ABS</p>
            </div>
           
          </div>

          <div className='abajoCelular'>
          <div className='centrado'>
              <img src={urlMedia + "seguridad3.png"} alt='Distribución electrónica fuerza de frenado - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>EBD Distribución electrónica fuerza de frenado</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad4.png"} alt='Asistente de arranque en pendiente - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>HAC Asistente de arranque en pendiente</p>
            </div>
            
          </div>
          <div className='abajoCelular'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad5.png"} alt='Programa electrónico de estabilidad - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>EPS Programa electrónico de estabilidad</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad6.png"} alt='Control electrónico de tracción - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>TCS Control electrónico de tracción</p>
            </div>
          </div>
          <div className='abajoCelular'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad7.png"} alt='Control de asistencia para descenso en pendiente - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>DAC Control de asistencia para descenso en pendiente</p>
            </div>
            <div className='centrado'>
              <img src={urlMedia + "seguridad8.png"} alt='Sistema antivuelco - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>ARP Sistema antivuelco</p>
            </div>
          </div>
          <div className='abajoCelular ultimo'>
            <div className='centrado'>
              <img src={urlMedia + "seguridad9.png"} alt='Freno de estacionamiento electrónico - auto 7 pasajeros' title="auto 7 pasajeros" />
              <p>EPB Freno de estacionamiento electrónico</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detalles