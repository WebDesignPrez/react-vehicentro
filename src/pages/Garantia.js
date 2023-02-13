import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import env from '../config';
let urlMedia = env.url

function Garantia() {
    return (
        <>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </>
    )
}


function Content1() {
    return (
        <div className="requisitos garantia">

            <div>
                <h1 className="requisitosUno"><strong>Garantia</strong></h1><br></br>
            </div>

            <h2>TIEMPO DE VIGENCIA DE LA GARANTÍA Y COBERTURA</h2><br></br>
            <h3>VEHICULOS DE TRANSPORTE CARGA LIVIANA (HASTA 8 TON)</h3><br></br>
            <p  className="textoTec gar">Los componentes del tren motriz están cubiertos contra defectos de fabricación por un período de 5 AÑOS y/o 100,000 Km, lo que ocurra primero a partir de la fecha de entrega del vehículo. Los componentes del tren motriz que están cubiertos son los siguientes: </p><br></br>
            <h3>VEHICULOS DE TRANSPORTE CARGA PESADA (TECNOLOGIA ALEMANA)</h3><br></br>
            <p className="textoTec gar">Los componentes del tren motriz están cubiertos contra defectos de fabricación por un periodo de 5 AÑOS y/o KILOMETRAJE ILIMITADO, lo que ocurra primero a partir de la fecha de entrega del vehículo. Los componentes del tren motriz que están cubiertos son los siguientes: </p><br></br>

            <div className="requisitosDos gara">
                <div className="boxNews companiaimg2 gar">
                    <img src={urlMedia+"garantia/garantia_uno.webp"} />
                </div>
                <div className="boxNews companiaimg2 gar">
                    <img src={urlMedia+"garantia/garantia_dos.webp"} />
                </div>
                <div className="boxNews companiaimg2 gar">
                    <img src={urlMedia+"garantia/garantia_tres.webp"} />
                </div>
                <div className="boxNews companiaimg2 gar">
                    <img src={urlMedia+"garantia/garantia-cuatro.webp"} />
                </div>
            </div>
            <div className="requisitosDos gara">
                <div className="boxNews companiaimg2 ">
                    <span> <h3>Motor</h3>
                        <p className="textoTec gar">•Monoblock del motor y sus piezas <br></br>•Cabeza de motor, balancines <br></br>•Múltiples de admisión y escape <br></br>•Engranes de distribución <br></br>•Volante de motor <br></br>•Damper <br></br>•Tapa de punterías <br></br>•Cárter de motor aomba de aceite <br></br>•Soporte de montaje de motor <br></br>•Sellos y empaques <br></br>•Bomba de agua <br></br>•Turbo </p>
                    </span>
                </div>
                <div className="boxNews companiaimg2 ">
                    <span> <h3>Transmisión</h3>
                        <p className="textoTec gar">•Cubierta de transmisión y sus piezas internas <br></br>•Convertidor de torsión(versión automática) <br></br>•Soporte de transmisión <br></br>•Sellos y empaques </p><br></br>
                        <h3>Tracción trasera</h3>
                        <p className="textoTec gar">•Cubierta del eje trasero y sus piezas internas <br></br>•Semi-ejes y rodamientos <br></br>•Soportes <br></br>•Flechas cardán <br></br>•Sellos y empaques</p>
                    </span>
                </div>
                <div className="boxNews companiaimg2 ">
                    <span> <h3>Radio</h3>
                        <p className="textoTec gar">El período de garantía del radio es por 150 días contados a partir de la fecha de entrega de la unidad SINOTRUK nueva al cliente, el kilometraje medido en el odómetro no es una limitante para el reclamo de garantía del mismo durante el período de garantía antes mencionado. </p>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Garantia






