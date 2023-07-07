import React from 'react'
import "../../vehiculos/componentes/styles/compra.css";
import env from '../../../config';

let urlMedia = env.url + "/vehiculos/"

function AmenidadesU70() {
  return (
    <>
      <div className='compraBox'>

        <div className='option'>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia + "icono1.png"} alt='Asiento de Pasajeros Auto U70' />
              <p>7 Pasajeros</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono2.png"} alt='Icono Motor U70 154HP' />
              <p>154 HP</p>
            </div>
            <div className='izquierda'>
              <img src={urlMedia + "icono3.png"} alt='Rin 17 pulgadas' />
              <p>17 Pulgadas</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono4.png"} alt='Frenos de disco U70' />
              <p>Frenos de Disco</p>
            </div>
          </div>
          <div className='dos'>
            <div className='izquierda2'>
              <img className='suvCarro' src={urlMedia + "icono5.png"} alt='Largo del auto u70' />
              <p>4825 mm</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia + "iconoAC.png"} alt='Aire acondicionado eléctrico' />
              <p>A/C Eléctrico</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia + "icono7.png"} alt='Gasolina Extra' />
              <p>Gasolina Extra</p>
            </div>
          </div>
        </div>
        <div className='image'>
          <video preload="none" autoPlay={true} width="930" height="1080" playsInline={true} loop muted id="myVideo" src="https://vehicentro.com/images/vehiculos/atrasu70.mp4" className="videoWidth produ" />
        </div>
      </div>
      <div className='compraBox responsive'>
        <div className='option'>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia + "icono1.png"} alt='Asiento de Pasajeros Auto U70' />
              <p>7 Pasajeros</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono2.png"} alt='Icono Motor U70 154HP' />
              <p>154 HP</p>
            </div>
          </div>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia + "icono3.png"} alt='Rin 17 pulgadas' />
              <p>17 Pulgadas</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono4.png"} alt='Frenos de disco U70' />
              <p>Frenos de Disco</p>
            </div>
          </div>
          <div className='dos'>
            <div className='izquierda2'>
              <img src={urlMedia + "icono5.png"} alt='Largo del auto u70' />
              <p>4825 mm</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia + "iconoAC.png"} alt='Aire acondicionado eléctrico'  />
              <p>A/C Eléctrico</p>
            </div>
          </div>
          <div className='dos'>
            <div className='derecha2'>
              <img src={urlMedia + "icono7.png"} alt='Gasolina Extra' />
              <p>Gasolina Extra</p>
            </div>
            <div className='derecha2'>
            </div>
          </div>
        </div>




        <div className='image'>
          <img src={urlMedia + "emocion1.webp"} />
        </div>


      </div>
    </>
  )
}

export default AmenidadesU70