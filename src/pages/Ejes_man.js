import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

function Ejes_man() {
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
                <h1>Ejes MAN</h1>
            </div>
            <div className="requisitosDos textoTec">
            <p>Eje delantero y trasero con la tecnología MAN para uso en la carretera</p><p><strong>1.</strong>&nbsp;<strong>VGD050QB</strong>&nbsp;conjunto del eje delantero: son los ejes de dirección de tipo general y ligero con tecnología MAN, las vigas en forma de I, los muñones de dirección en forma de horquilla, las unidades de cojinete del cubo libreas de mantenimiento, las cámaras de aire de freno en forma de diafragma, los brazos de ajuste automático de intervalo opcionales y los dispositivos antibloqueo (ABS), frenos de tambor de configuración estándar. Tiene peso ligero, vida útil larga y está libre de mantenimiento.</p><p><strong>2.</strong>&nbsp;<strong>VPD050QB</strong>&nbsp;El conjunto delantero VPD050QB utiliza las vigas forjadas en forma I, los muñones de dirección integrales, y se equipan con la unidad de cojinete libre de mantenimiento de nivel líder internacional y freno de tipo disco 19.5”, la cámara de aire de freno en forma de diafragma.</p><p><strong>3. MCY13Q</strong>&nbsp;conjunto del eje trasero: Es el eje motriz de la empresa MAN de Alemania, con tecnología de avanzado diseño y fabricación y excelente rendimiento en pruebas de carretera.</p><p>Se adopta una carcasa de eje estampado de alta resistencia, engranajes cónicos de&nbsp;&nbsp;&nbsp;&nbsp; contorno, rodamientos SKF y freno de disco. Tiene estructura simple, peso propio, ligero, frenado cómodo, alto factor de seguridad, mantenimiento conveniente y alta vida útil.</p><p>El momento del frenado del disco del eje MAN es de 17.000 N.m</p><p>La vida útil de ejes MAN puede alcanzar 1.5 millones de kilometraje</p>
            </div>
        </div>
    )
}

export default Ejes_man