import React from 'react'
import "../../vehiculos/componentes/styles/compra.css";
import env from '../../../config';

let urlMedia = env.url +"/vehiculos/"

function CompraMenu() {
  return (
    <>
    <div className='compraBox'>
        <div className='option'>
            <div className='uno'>
                <div className='izquierda'>
                    <img src={urlMedia + "1.webp"} />
                    <p> Find a Dealer</p>
                </div>
                <div className='derecha'>
                     <img src={urlMedia + "2.webp"} />
                     <p>Offers and Incentives</p>
                </div>
                <div className='izquierda'>
                    <img src={urlMedia + "1.webp"} />
                    <p> Find a Dealer</p>
                </div>
                <div className='derecha'>
                     <img src={urlMedia + "2.webp"} />
                     <p>Offers and Incentives</p>
                </div>
            </div>
            <div className='dos'>
                <div className='izquierda2'>
                    <img src={urlMedia + "3.webp"} />
                    <p>Get a Local Price</p>
                </div>
                <div className='derecha2'>
                    <img src={urlMedia + "4.webp"} />
                    <p>Certified Pre- Owned</p>
                </div>
                <div className='derecha2'>
                    <img src={urlMedia + "4.webp"} />
                    <p>Certified Pre- Owned</p>
                </div>
                <div className='derecha2'>
                </div>
            </div>
        </div>
        <div className='image'>
            <img src={urlMedia + "banner.jpg"}/>
        </div>
    </div>
    <div className='compraBox responsive'>
        <div className='option'>
            <div className='uno'>
                <div className='izquierda'>
                    <img src={urlMedia + "1.webp"} />
                    <p> Find a Dealer</p>
                </div>
                <div className='derecha'>
                     <img src={urlMedia + "2.webp"} />
                     <p>Offers and Incentives</p>
                </div>
            </div>
            <div className='uno'>
            <div className='izquierda'>
                    <img src={urlMedia + "1.webp"} />
                    <p> Find a Dealer</p>
                </div>
                <div className='derecha'>
                     <img src={urlMedia + "2.webp"} />
                     <p>Offers and Incentives</p>
                </div>
            </div>
            <div className='dos'>
                <div className='izquierda2'>
                    <img src={urlMedia + "3.webp"} />
                    <p>Get a Local Price</p>
                </div>
                <div className='derecha2'>
                    <img src={urlMedia + "4.webp"} />
                    <p>Certified Pre- Owned</p>
                </div>
            </div>
            <div className='dos'>
            <div className='derecha2'>
                    <img src={urlMedia + "4.webp"} />
                    <p>Certified Pre- Owned</p>
                </div>
                <div className='derecha2'>
                </div>
            </div>
        </div>
        <div className='image'>
            <img src={urlMedia + "banner.jpg"}/>
        </div>
    </div>
    </>
  )
}

export default  CompraMenu