import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

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
            <p  className="textoTec">Los componentes del tren motriz están cubiertos contra defectos de fabricación por un período de 5 AÑOS y/o 100,000 Km, lo que ocurra primero a partir de la fecha de entrega del vehículo. Los componentes del tren motriz que están cubiertos son los siguientes: </p><br></br>
            <h3>VEHICULOS DE TRANSPORTE CARGA PESADA (TECNOLOGIA ALEMANA)</h3><br></br>
            <p className="textoTec">Los componentes del tren motriz están cubiertos contra defectos de fabricación por un periodo de 5 AÑOS y/o KILOMETRAJE ILIMITADO, lo que ocurra primero a partir de la fecha de entrega del vehículo. Los componentes del tren motriz que están cubiertos son los siguientes: </p><br></br>
            <div className="requisitosDos">
                <div className="boxNews companiaimg2 gar">
                    <span> <h3>Motor</h3>
                        <p>•Monoblock del motor y sus piezas .Cabeza de motor, balancines «Múltiples de admisión y escape -Engranes de distribución «Volante de motor .Damper «Tapa de punterías -Cárter de motor aomba de aceite «Soporte de montaje de motor «Sellos y empaques .Bomba de agua -Turbo </p>
                    </span>
                </div>
                <div className="boxNews companiaimg2 gar">
                    <span> <h3>Transmisión</h3>
                        <p>internas •Cubierta de transmisión y sus piezas internas •Convertidor de torsión(versión automática) •Soporte de transmisión «Sellos y empaques </p>
                        <h3>Tracción trasera</h3>
                        <p>•Cubierta del eje trasero y sus piezas internas •Semi - ejes y rodamientos •Soportes •Flechas cardán •Sellos y empaques</p>
                    </span>
                </div>
                <div className="boxNews companiaimg2 gar">
                    <span> <h3>Radio</h3>
                        <p>El período de garantía del radio es por 150 días contados a partir de la fecha de entrega de la unidad SINOTRUK nueva al cliente, el kilometraje medido en el odómetro no es una limitante para el reclamo de garantía del mismo durante el período de garantía antes mencionado. </p>
                    </span>
                </div>
            </div>

            <div className="requisitosDos">
                <div className="boxNews companiaimg2 gar">
                    <img src="./images/garantia/garantia_uno.webp" />
                </div>
                <div className="boxNews companiaimg2 gar">
                    <img src="./images/garantia/garantia_dos.webp" />
                </div>
                <div className="boxNews companiaimg2 gar">
                    <img src="./images/garantia/garantia_tres.webp" />
                </div>
                <div className="boxNews companiaimg2 gar">
                    <img src="./images/garantia/garantia_uno.webp" />
                </div>
            </div>
        </div>
    )
}

export default Garantia






