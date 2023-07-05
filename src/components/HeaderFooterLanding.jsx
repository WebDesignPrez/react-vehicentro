import React from 'react'
import '../styles.css'
import '../responsive.css'
import env from '../config';

let urlMedia = env.url


const HeaderFooterLanding = () => {
    return (
        <div className="landing">
            <div className="menuHome">
                <div className="logoHome">
                    <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
                </div>
            </div>
        </div>
    )
}

export default HeaderFooterLanding