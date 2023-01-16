import { NavLink } from "react-router-dom"
export default function Footer() {
    return (
        <div className="footer posRelative">
            <div className="info">
                <img src="../images/vehicentro-logo-blanco.png" width="230" height="80" alt="Vehicentro" />
                <ul className="list">
                    <li><p className="titleFooter"><a href="/compania">NOSOTROS</a></p></li>
                    <li><p className="titleFooter"><a href="/concesionarios">CONCESIONARIOS</a></p></li>
                    <li><p>VEINSTEIN</p></li>
                    <li><p>TECNOLOGÍA ALEMANA</p></li>
                </ul>
                <br />
                <p className="title titleNumero"><a href="tel:032294740">032 994 740</a></p>
                <p className="title titleContacto">CONTACTO DIRECTO</p>
                <div className="social row">
                    <div className="flex-row imgMain">
                        <a href="https://www.facebook.com/Vehicentro"><img src="../images/facebook.png" alt="facebook" width="32" height="32" /></a>
                        <a href="https://www.instagram.com/vehicentroec"><img src="../images/instagram.png" alt="instagram" width="32" height="32" /></a>
                        <a href="https://www.youtube.com/channel/UCW8gGawovE35cXcJ3P2kryQ"><img src="../images/youtube.png" alt="youtube" width="32" height="32" /></a>
                        <a href="https://www.tiktok.com/@sinotrukeros"><img src="../images/tiktok.webp" alt="tiktok" width="32" height="32" /></a>
                        <a href="#"><img src="../images/linkdin.png" alt="linkdin" width="32" height="32" /></a>
                    </div>

                </div>
                
            </div>
            <div className="col1 colProd">
                <p className="title">PRODUCTOS</p>
                <ul className="list">
                    <li><p className="subTitle">SINOTRUK</p></li>
                    <li><p className="itemMenu">Serie 100</p></li>
                    <li><p className="itemMenu"><a href="/serie/t5g">Serie T5G</a></p></li>
                    <li><p className="itemMenu"><a href="/serie/t7h">Serie T7H</a></p></li>
                    <li><p className="itemMenu"><a href="/serie/c7h">Serie C7H</a></p></li>
                    <li><p className="itemMenu">Especiales</p></li>
                </ul>
                <ul className="list">
                    <li><p className="subTitle">SUNWARD</p></li>
                    <li><p className="titleFooter"><a href="/excavadoras/swe210">Excavadora SWE210</a></p></li>
                    <li><p className="titleFooter"><a href="/excavadoras/swe365e">Excavadora SWE365E</a></p></li>
                </ul>

            </div>
            <div className="col1 colSell">
                <p className="title">POST VENTA</p>
                <ul className="list listNonTitle">
                    <li><p className="itemMenu"><a href="/concesionarios">Concesionarios</a></p></li>
                    <li><p className="itemMenu"><a href="/repuestos">Repuestos</a></p></li>
                    <li><p className="itemMenu">Mantenimiento</p></li>
                    <li><p className="itemMenu">Garantía</p></li>
                </ul>
            </div>
            <div className="col1 colTech">
                <p className="title">TECNOLOGÍA</p>
                <ul className="list listNonTitle">
                    <li><p className="itemMenu">Componentes</p></li>
                    <li><p className="itemMenu">Medición de rendimiento</p></li>
                </ul>

                
            </div>
            <a href="https://api.whatsapp.com/send?phone=593988593279" className="btn-wsp" target="_blank">
                    <img className="imgWpp" width="60" height="60" src="../images/wpp.gif" alt="Whatsapp"></img>
                </a>
        </div>
    )
}
