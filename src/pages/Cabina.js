import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import env from '../config';

let urlMedia = env.url

function Cabina() {
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
        <div className="requisitos">
            <div className="requisitosUno">
                <h1>Cabina C7H</h1>
            </div>
            <div className="fotoCabina">
                <img src={urlMedia+"cabina.webp"} />
            </div>
            <div className="requisitosDos">

                <h2 className="espacioSubtitulo">Características principales</h2>
                <p className="textoTec">La cabina C7H es la cabina de la serie TG de la empresa MAN de Alemania, que cumple con los estándares de la resistencia de normas Europeas.<br></br>
                    ECE R29, sólido y fuerte, resistente y durable. El modelo es suave. Las líneas son fuertes y potentes, destacando el concepto de diseño moderno, dinámico y simple de los camiones pesados.
                </p>
                <h2 className="espacioSubtitulo">Alta seguridad:</h2>
                <p className="textoTec">
                    1. La rigidez y la intensidad del cuerpo propio de la cabina han alcanzado al nivel internacional, y cumple con la norma de seguridad de la cabina de EU ECE R29.<br></br>
                    2. La cubierta superior, la pared lateral y la pared trasera están soldadas generalmente con la placa de acero de doble capas.<br></br>
                    3. Las bisagras de alta fiabilidad aseguran que cuando se produce la deformación la puerta del vehículo también puede abrirse libremente.<br></br>
                    4. Además de las vigas longitudinales, también hay vigas de refuerzo transversales en el piso, de modo que la rigidez y la intensidad del cuerpo de la cabina son altas.<br></br>
                    5. El parachoques integral tiene una fuerte absorción de energía, lo que mejora la capacidad anti-impacto del vehículo y proporciona una garantía de seguridad para el conductor y pasajeros.
                </p>
                <h2 className="espacioSubtitulo">Cómodo como en casa:</h2>
                <p className="textoTec">
                    1) Espacioso<br></br>
                    2) Mucho espacio de almacenamiento<br></br>
                    3) Cabina de suspensión de cuatro puntos<br></br>
                    4) Fácil de operar
                </p>
            </div>
        </div>
    )
}
export default Cabina