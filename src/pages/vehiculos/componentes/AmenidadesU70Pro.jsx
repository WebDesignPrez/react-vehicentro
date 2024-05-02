import React from 'react'
import "../../vehiculos/componentes/styles/compra.css";
import env from '../../../config';

let urlMedia = env.url + "/vehiculos/"

function AmenidadesU70Pro() {
  return (
    <>
      <div className='compraBox'>

        <div className='option'>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia + "icono1.png"} alt='Asiento de Pasajeros Auto U70PRO' />
              <p>7 Pasajeros</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono2.png"} alt='Icono Motor U70PRO 154HP' />
              <p>154 HP</p>
            </div>
            <div className='izquierda'>
              <img src={urlMedia + "icono3.png"} alt='Rin 18 pulgadas' />
              <p>20 Pulgadas</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono4.png"} alt='Frenos de disco U70PRO' />
              <p>Frenos de Disco</p>
            </div>
          </div>
          <div className='dos'>
            <div className='izquierda2'>
              <img className='suvCarro' src={urlMedia + "icono5.png"} alt='Largo del auto U70PRO' />
              <p>4825 mm</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia + "icono6.png"} alt='Techo panorámico U70PRO' />
              <p>Techo Panorámico</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia + "icono7.png"} alt='Gasolina Extra' />
              <p>Gasolina Extra</p>
            </div>
          </div>
        </div>
        <div className='image'>
          <video preload="none" autoPlay={true} width="930" height="1080" playsInline={true} loop muted id="myVideo" src={urlMedia + "cajuela.mp4"} className="videoWidth produ" />
        </div>
      </div>
      <div className='compraBox responsive'>
        <div className='option'>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia + "icono1.png"} alt='Asiento de Pasajeros Auto U70PRO' />
              <p>7 Pasajeros</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono2.png"} alt='Icono Motor U70PRO 154HP' />
              <p>154 HP</p>
            </div>
          </div>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia + "icono3.png"} alt='Rin 18 pulgadas' />
              <p>18 Pulgadas</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia + "icono4.png"} alt='Frenos de disco U70PRO' />
              <p>Frenos de Disco</p>
            </div>
          </div>
          <div className='dos'>
            <div className='izquierda2'>
              <img src={urlMedia + "icono5.png"} alt='Largo del auto U70PRO' />
              <p>4825 mm</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia + "icono6.png"} alt='Techo panorámico U70PRO' />
              <p>Techo Panorámico</p>
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

export default AmenidadesU70Pro