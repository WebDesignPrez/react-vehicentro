import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

function Bastidor_o_chasis() {
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
                <h1>Bastidor o chasis MAN</h1>
            </div>
            <div className="requisitosDos textoTec">
                <p>Generalmente el bastidor MAN aplica la forma trapezoidal angosto trasero y ancho delantero. El bastidor de ancho extendido en la parte delantera es adecuado a una variedad de motores y mejora la estabilidad de todo el vehículo, y es adecuado para los modelos de tracción 4×2, 6×2, 6×4. El bastidor de la serie TGA &nbsp;tiene las siguientes características:</p>
                <ol>
                    <li>El extremo delantero de la viga longitudinal del bastidor adopta el soporte de suspensión delantera integral reforzado y la viga transversal, y la rigidez de la parte delantera del bastidor se ha mejorado mucho, lo que mejora la fiabilidad del motor y la suspensión de la cabina.</li>
                    <li>La estructura del bastidor optimizada adopta la placa de conexión de la viga transversal de gran lapso + la estructura de refuerzo local, de modo que la distribución del estrés se disminuye más uniformemente.</li>
                    <li>El diseño de la distancia estándar entre los orificios de la viga longitudinal es propicio para la disposición modular y la instalación opcional de todo tipo de conjuntos de diferentes distancias entre ejes.</li>
                    <li>Bajo la premisa de no cambiar la capacidad de carga, el peso propio del camion se reduce considerablemente. Debido a las diferentes configuraciones de los vehículos, la reducción es de 200-550 kg.</li>
                    <li>La altura del sillín se reduce en gran medida, con carga vacía de 1320 mm, para satisfacer los requisitos convencionales.</li>
                </ol>
                <p><strong>Al mismo tiempo, el bastidor MAN también introduce una serie de nuevas estructuras para todo&nbsp; vehículo que tiene ciertas ventajas:</strong></p>
                <ol>
                    <li><strong>Suspensión delantera de menos hojas de ballesta</strong></li>
                </ol>
                <p>(1) La aplicación de menos hojas de ballesta con &nbsp;casquillo de tipo compuesto de &nbsp;tecnología MAN puede reducir efectivamente la intensidad de vibración y mejorar la comodidad de todo el vehículo.</p>
                <p>(2) Para la barra estabilizadora, se aplica la estructura hueca, que mejora la tasa de utilización del material y reduce el peso propio en aproximadamente 10 kg.</p>
                <p>(3) El resorte auxiliar de goma de alto rendimiento, que&nbsp; extiende efectivamente la vida útil de las ballestas.</p>
                <ol start="2">
                    <li><strong>Suspensión trasera de menos hojas de ballestas</strong></li>
                </ol>
                <p>(1) La aplicación de menos hojas de ballestas traseras con la estructura de resorte principal y auxiliar de tecnología MAN, que&nbsp; mejora efectivamente la comodidad de todo el vehículo de carga vacía y carga completa.</p>
                <p>(2) La aplicación de la barra estabilizadora hueca mejora la tasa de utilización del material y reduce el peso propio en aproximadamente 15 kg.</p>
                <p>(3) Combinación ingeniosa de una nueva posición auto limitada y un soporte de goma, que puede reducir efectivamente la intensidad de la vibración.</p>
                <p>(4) Nuevo eje de equilibrio, que reduce la altura de todo el vehículo en 34mm.</p>
                <ol start="3">
                    <li><strong>Soporte auxiliar de la transmisión</strong></li>
                </ol><p>Se utiliza la estructura de ballesta de una sola hoja esto hace que reduzca &nbsp;la altura del soporte auxiliar en 230 mm, lo que puede mejorar el espacio de disposición.</p>
            </div>
        </div>
    )
}

export default Bastidor_o_chasis