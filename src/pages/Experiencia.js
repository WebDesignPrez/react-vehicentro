import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBar from "../NavBar"
import NavBarTop from "../NavBarTop"

function Experiencia() {
    return (
        <>
            <Helmet>
                <title>Experiencia sinotruk | Vehicentro</title>
                <meta name="description" content="Experiencia sinotruk" />
            </Helmet>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (
        <div className="block4 boxBlock boxesIni posRelative content3">
            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/experiencia/1.mp4" className="videoWidth" />
                </div>
            </div>

            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/experiencia/2a.mp4" className="videoWidth" />
                </div>
            </div>

            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/experiencia/3.mp4" className="videoWidth" />
                </div>
            </div>
            
            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/experiencia/6.mp4" className="videoWidth" />
                </div>
            </div>


            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/experiencia/7.mp4" className="videoWidth" />
                </div>
            </div>
        </div>
    )
}

export default Experiencia