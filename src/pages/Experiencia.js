import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBar from "../NavBar"
import NavBarTop from "../NavBarTop"
import env from '../config';
let urlMedia = env.url

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


            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/1.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/2.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/3.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/4.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/5.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/7.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/8.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/9.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/10.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/11.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/12.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/13.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/14.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/15.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/16.mp4"} className="videoWidth" />
                </div>
            </div>

            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"experiencia/17.mp4"} className="videoWidth" />
                </div>
            </div>

        </div>
    )
}

export default Experiencia