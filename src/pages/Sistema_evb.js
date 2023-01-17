import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

function Sistema_evb() {
    return (
        <div>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </div>
    )
}

function Content1() {
    return (
        <div className="requisitos">
            <div className="requisitosUno">
                <h1>Sistema EVB</h1>
            </div>
            <div className="requisitosDos textoTec">
                <p>“EVB” es la abreviatura de “Exhaust Valve Brake” su traducción es “Freno a la Válvula de Escape”. El sistema EVB es un dispositivo de freno auxiliar, pertenece al retardador del motor y se basa en el dispositivo de freno auxiliar de escape de la válvula de mariposa tradicional, y&nbsp; mejora&nbsp; la eficiencia de frenado del motor.</p><p><strong>COMO TRABAJA EL EVB:</strong></p><p>Cuando la válvula de mariposa esta cerrada, la válvula de escape se abre un espacio por la onda de presión del tubo de escape, la válvula unidireccional en el brazo oscilante de la válvula de escape se abre y el aceite lubricante en el orificio del brazo oscilante se llena en la cavidad vacía encima del componente del bloque deslizante. El aceite del motor cerrado no puede hacer el componente del bloque deslizante se contagia en el brazo oscilante, forzando a la válvula de escape abierta a mantener una abertura de aproximadamente 1-2mm. (mecanismo de freno de la válvula de escape).</p><p><strong>&nbsp;Composición</strong><strong>&nbsp;del sistema EVB:</strong></p><p>El sistema de freno de escape de EVB incluye: El dispositivo de freno auxiliar de escape de la válvula de mariposa y el actuador de control de la válvula de escape del motor diesel (EVB). Al frenar, los dos están relacionados entre sí y se utilizan al mismo tiempo.</p>
            </div>
        </div>
    )
}

export default Sistema_evb