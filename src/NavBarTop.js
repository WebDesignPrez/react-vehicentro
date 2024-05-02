import './styles.css';
import './responsive.css'
import { NavLink } from "react-router-dom"
import { useEffect } from "react";

import env from './config';

export default function NavBarTop() {
    var auxMovil = 0;

    let urlMedia = env.url

    useEffect(() => {
        window.scrollTo(0, 0);
        const navSlideClickH = () => {
            const burger = document.querySelector(".burger");
            const navLinks = document.querySelectorAll(".nav-links-h a");
            const navLinksIn = document.querySelectorAll(".rowMenu .colItem");

            navLinksIn.forEach((link, index) => {
                link.addEventListener("click", (ev) => {
                    burger.click()
                })
            })

            navLinks.forEach((link, index) => {
                link.addEventListener("click", (ev) => {
                    //burger.click()

                    switch (ev.target.getAttribute('option')) {
                        case "concesionarios":
                            menuSelect("concesionarios")
                            break;
                        case "sinotruk":
                            menuSelect("sinotruk")
                            break;
                        case "sunward":
                            menuSelect("sunward")
                            break;
                        case "vehiculos":
                            menuSelect("vehiculos")
                            break;
                        case "compania":
                            menuSelect("compania")
                            break;
                        case "tecnologia":
                            menuSelect("tecnologia")
                            break;
                    }
                })
            })
        }


        const menuSelect = (varTest) => {
            switch (varTest) {
                case "sinotruk":
                    document.querySelector(".item-level-0").classList.remove("nav-header-h")
                    document.querySelector(".item-level-0").classList.add("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-10").classList.remove("nav-header-s")
                    document.querySelector(".item-level-10").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "sunward":
                    document.querySelector(".item-level-1").classList.remove("nav-header-h")
                    document.querySelector(".item-level-1").classList.add("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-10").classList.remove("nav-header-s")
                    document.querySelector(".item-level-10").classList.add("nav-header-h")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;

                case "vehiculos":
                    document.querySelector(".item-level-10").classList.remove("nav-header-h")
                    document.querySelector(".item-level-10").classList.add("nav-header-s")
                    document.querySelector(".item-level-10").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "concesionarios":
                    document.querySelector(".item-level-3").classList.remove("nav-header-h")
                    document.querySelector(".item-level-3").classList.add("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-10").classList.remove("nav-header-s")
                    document.querySelector(".item-level-10").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "compania":
                    document.querySelector(".item-level-6").classList.remove("nav-header-h")
                    document.querySelector(".item-level-6").classList.add("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-10").classList.remove("nav-header-s")
                    document.querySelector(".item-level-10").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-7").classList.remove("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-h")
                    break;
                case "tecnologia":
                    document.querySelector(".item-level-7").classList.remove("nav-header-h")
                    document.querySelector(".item-level-7").classList.add("nav-header-s")
                    document.querySelector(".item-level-7").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-10").classList.remove("nav-header-s")
                    document.querySelector(".item-level-10").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")
                    break;

            }

        }

        const resetMenu = () => {
            document.querySelector(".item-level-0").classList.remove("nav-header-h")
            document.querySelector(".item-level-0").classList.add("nav-header-s")
            document.querySelector(".item-level-1").classList.remove("nav-header-s")
            document.querySelector(".item-level-1").classList.add("nav-header-h")
            document.querySelector(".item-level-10").classList.remove("nav-header-s")
            document.querySelector(".item-level-10").classList.add("nav-header-h")
            document.querySelector(".item-level-6").classList.remove("nav-header-s")
            document.querySelector(".item-level-6").classList.add("nav-header-h")
            document.querySelector(".item-level-7").classList.remove("nav-header-s")
            document.querySelector(".item-level-7").classList.add("nav-header-h")
        }

        const navSlide = () => {
            const burger = document.querySelector(".burger");
            const sinotruk = document.querySelector(".sinotruk");
            const sunward = document.querySelector(".sunward");
            const tecnologia = document.querySelector(".tecnologia");
            // const keyton = document.querySelector(".keyton");
            //const concesionarios = document.querySelector(".concesionarios");

            const nav = document.querySelector(".nav-links");
            const navh = document.querySelector(".nav-links-h");

            const navLinks = document.querySelectorAll(".nav-links a");
            const navSearch = document.querySelectorAll("div.navSearch");

            /*             burger.removeEventListener("click", ()=>{
            
            
            
                        }) */

            const burgerEvent = () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.4s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".internal").classList.add("logob")
                if (auxMovil == 0)
                    resetMenu();

                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".internal").classList.remove("logob")
                }
            }
            burger.addEventListener("click", burgerEvent);
            sinotruk.addEventListener("click", burgerEvent);
            sunward.addEventListener("click", burgerEvent);

            if (tecnologia != null) {
                tecnologia.addEventListener("click", burgerEvent);
            }
            // keyton.addEventListener("click", burgerEvent);
            // concesionarios.addEventListener("click", burgerEvent);

            //INI PARAMS
            /*         const playBtn = document.querySelector(".boxesIni .c7h");
                      playBtn.addEventListener("click", () => {
                          modalVideo("c7h.mp4", "1.webp")
                      })
                      
                    const playBtn2 = document.querySelector(".boxesIni .t5g");
                      playBtn2.addEventListener("click", () => {
                          modalVideo("t5g.mp4", "4.webp")
                      })
                      
                    const playBtn3 = document.querySelector(".boxesIni .tecnologia");
                      playBtn3.addEventListener("click", () => {
                          modalVideo("tecnologia.mp4", "5.webp")
                      })  
              
                    const searchBtn = document.querySelector(".searchIcon");
                        searchBtn.addEventListener("click", () => {
                          burger.click()
                    })   */

            const closeBtnMovil = document.querySelectorAll(".closeMovil");
            for (var i = 0; i < closeBtnMovil.length; ++i) {
                let dataId = closeBtnMovil[i].getAttribute('data-id')
                closeBtnMovil[i].addEventListener("click", () => {
                    resetMenuMovil(dataId)
                    auxMovil = 1
                })
            }


        }

        const resetMenuMovil = (opt) => {
            switch (opt) {
                case "0":
                    document.querySelector(".item-level-0").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-0").classList.toggle("nav-header-s")
                    break;
                case "1":
                    document.querySelector(".item-level-1").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-1").classList.toggle("nav-header-s")
                    break;
                case "3":
                    document.querySelector(".item-level-3").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-3").classList.toggle("nav-header-s")
                    break;
                case "6":
                    document.querySelector(".item-level-6").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-6").classList.toggle("nav-header-s")
                    break;
                case "7":
                    document.querySelector(".item-level-7").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-7").classList.toggle("nav-header-s")
                    break;
                case "10":
                    document.querySelector(".item-level-10").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-10").classList.toggle("nav-header-s")
                    break;
                default:
                    break;
            }
        }

        const navSlideClick = () => {
            const navLinks = document.querySelectorAll(".nav-links a");

            navLinks.forEach((link, index) => {
                link.addEventListener("click", (ev) => {

                    switch (ev.target.getAttribute('option')) {
                        case "concesionarios":
                            menuSelect("concesionarios")
                            break;
                        case "sinotruk":
                            menuSelect("sinotruk")
                            break;
                        case "sunward":
                            menuSelect("sunward")
                            break;

                        case "vehiculos":
                            menuSelect("vehiculos")
                            break;
                        case "compania":
                            menuSelect("compania")
                            break;
                        case "tecnologia":
                            menuSelect("tecnologia")
                            break;
                    }
                })
            })
        };


        // call the function
        navSlide()
        navSlideClick()
        navSlideClickH()

        // make sure to catch any error
    }, []);


    return <nav className="internal">
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="logo">
            <a href="/"><img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" /></a>
        </div>
        <ul className="nav-links">
            <li><NavLink className="" to="/">INICIO</NavLink></li>
            <li>
                <a className="" href="#" option="sinotruk">CAMIONES</a>
                <div className="item-level-0 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="0"></div>
                        <p className="tituloMenu">CAMIONES</p>
                        <img className="imgnMenu" src={urlMedia + "sinotrukTigre.webp"} width="637" height="147" alt="Sinotruck" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Serie N</p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-2-5-toneladas"><span className="nuevoCamion2">NUEVO</span> NLS 2.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-5-toneladas-1057"><span className="nuevoCamion2">NUEVO</span>  NKS 3.5 ton ( Liviano )</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-6-nks"><span className="nuevoCamion2">NUEVO</span>  NKS 3.6 ton ( Liviano )</NavLink></p>
                            {/* <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-6-toneladas-nks"><span className="nuevoCamion2">NUEVO</span>  NKS 3.6 ton ( pesado )</NavLink></p> */}
                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie 100</p>

                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-6-toneladas">1047 / 3.6 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-5-toneladas-1067">1067 / 5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-6-toneladas-1067">1067 / 6 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-8-toneladas-1147">1147 / 8 ton</NavLink></p>

                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Serie T5G</p>

                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-9-toneladas">1167 / 9 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-10-toneladas-t5g-1167">1167 / 10 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-12-toneladas-t5g-1167">1167 / 12 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167">1167 / 13 ton - <b>280HP</b></NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp">1167 / 13 ton - <b>330HP</b></NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-18-toneladas-t5g-1257">1257 / 18 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-19-toneladas-t5g-1257">1257 / 19.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t5g-4187">4187 / 24 ton</NavLink></p>

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie T7H</p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-340-28-toneladas"><span className="nuevoCamion2">NUEVO</span> 340 / 28 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-28-toneladas">390 / 28 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-28-toneladas-retardador">390 / 28 ton - retardador</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-42-toneladas">390 / 42 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-430-45-toneladas">430 / 45 ton</NavLink></p>

                        </div>

                    </div>
                    <div className="rowMenu espaciomenu">
                        <div className="colMenu">
                            <p className="colTitle">Serie C7H</p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-20-toneladas-1256">1256 / 20 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-20-toneladas-catalinas-1256">1256 / 20 ton - catalinas</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540">540 / 48 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">540 / 48 ton - catalinas</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas-nueva-version"><span className="nuevoCamion2">NUEVA VERSIÓN</span> 540 / 48 ton - catalinas</NavLink></p>

                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Volquetas</p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t5g-280">T5G-330 8-9m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t7h-430">T7H-430 10-14m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t7h-430-20m3">T7H-430 20m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-c7h-540">C7H-540 20m3</NavLink></p>
                            <div>
                            </div>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Mixer</p>
                            <p className="colItem meniu"><NavLink to="/mixer/mixer-a7-1257">A7 8-9m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/mixer/mixer-12-14m3-c7h-430">C7H 12-14m3</NavLink></p>
                            <div>
                            </div>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <a className="" href="#" option="sunward">MAQUINARIA</a>
                <div className="item-level-1 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="1"></div>
                        <p>MAQUINARIA</p>
                        <img className="imgnMenu" src={urlMedia + "sinotrukTigre.webp"} alt="sunward" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">EXCAVADORAS</p>
                            <p className="colItem meniu"><NavLink to="/excavadoras/swe210">SWE 210 21 Ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/excavadoras/swe370e">SWE 370E 37 Ton Heavy Duty</NavLink></p>

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">MINICARGADORAS</p>
                            <p className="colItem meniu"><NavLink to="/minicargadoras/swl3220">SWL3220</NavLink></p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <a className="" href="#" option="vehiculos">Vehículos</a>
                <div className="item-level-10 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="10"></div>
                        <p className="tituloMenu">Vehículos</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">SUV'S</p>
                            <p className="colItem meniu"><NavLink to="/sinotruk/autos/u70">U70 FULL</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/sinotruk/autos/u70pro">U70 PRO</NavLink></p>
                        </div>
                        {/* <div className="colMenu">
                            <p className="colTitle">Furgonetas</p>

                            <p className="colItem meniu"><NavLink to="/keyton/furgonetas/m70l">M70L</NavLink></p>
                        </div> */}
                    </div>

                </div>
            </li>

            <li>
                <a href="#" option="tecnologia">TECNOLOGÍA</a>
                <div className="item-level-7 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="7"></div>
                        <p>TECNOLOGÍA</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem meniu"><NavLink to="/requisitos-de-calidad">Requisitos de calidad</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabina">Cabina</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/motor-mc">Motor MC</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/bastidor-o-chasis">Bastidor o Chasis</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/ejes-man">Ejes Man</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/sistema-evb">Sistema Evb</NavLink></p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="item-level-5">
                <a href="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</a>
                <div className="item-level-5 nav-header nav-header-h" >
                </div>
            </li>

            <li>
                <a href="/concesionarios">CONCESIONARIOS</a>
                <div className="item-level-3 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="3"></div>
                        <p className="tituloMenu">CONCESIONARIOS</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Ambato</p>
                            <p className="colTitle2">Matriz</p>
                            <p className="colItem">Av. Indoamérica Km 3-1/2</p>
                            <p className="colTitle2">Ficoa</p>
                            <p className="colItem">Av. Los Guaytambos</p>
                            <p className="colTitle">Machala</p>
                            <p className="colItem">Av 25 de junio km 3 y medio vía a pasajemax)</p>
                            <p className="colTitle">Ibarra</p>
                            <p className="colItem">Panamericana Sur Km1 y calle los Andes</p>
                            <p className="colTitle">Manta</p>
                            <p className="colItem">Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al Aeropuerto</p>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Quito</p>
                            <p className="colTitle2">Carapungo</p>
                            <p className="colItem">Av. Simón Bolivar S/N diagonal al Supermercado Santa María.</p>
                            {/* <p className="colTitle2">Los Chillos</p> */}
                            <p className="colItem">Av. General Rumiñahui 8-40 y Av. San Luis (frente al San Luis Shopping)</p>
                            <p className="colTitle2">Sur</p>
                            <p className="colItem">Av. Maldonado y Romero Barberis</p>
                            <p className="colTitle2">El Colibrí</p>
                            <p className="colItem">E35 y Av. General Pintag</p>
                            <p className="colTitle2">Galo Plaza</p>
                            <p className="colItem">Av. Galo Plaza Lasso N66-106 y De las Avellanas</p>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Guayaquil</p>
                            <p className="colTitle2">Samborondón</p>
                            <p className="colItem">Samborondón, vía el puente alterno norte, Ofc. Almax 2.</p>
                            <p className="colTitle2">Norte</p>
                            <p className="colItem">Autopista. Narcisa. De Jesús km1. Junto. a ATM. Agencia de tránsito municipal</p>
                            <p className="colTitle">Cuenca</p>
                            <p className="colItem">Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la Gasolinera Primax)</p>
                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Riobamba</p>
                            <p className="colItem">Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco</p>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <a href="#" option="compania">COMPAÑÍA</a>
                <div className="item-level-6 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="6"></div>
                        <p>COMPAÑÍA</p>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem meniu"><NavLink to="/compania">Nosotros</NavLink></p>
                            {/* <a href="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/r/crm/login" className="colItem meniu negro">bdc</a> */}
                            <a href="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/r/crm/login" className="colItem meniu negro">bdc</a>
                            <p className="colItem meniu"><NavLink to="/trabaja-con-nosotros">Trabaja con nosotros</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/repuestos">Repuestos</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/terminosCondiciones">Terminos y Condiciones</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/politicaprivacidad">Políticas</NavLink></p>

                        </div>
                    </div>
                </div>
            </li>

            <li className="item-level-8 linkContact">
            </li>

        </ul>

        <ul className="nav-links-h">
            <li><NavLink to="/">INICIO</NavLink></li>
            <li ><a className="sinotruk mouseA" option="sinotruk">CAMIONES</a></li>
            <li ><a className="sunward mouseA" option="sunward">MAQUINARIA</a></li>
            <li className="concesionarios camionesCss"><NavLink to="/sinotruk/autos">VEHÍCULOS</NavLink></li>
            <li ><a className="tecnologia tecnologiaCss" option="tecnologia">TECNOLOGÍA</a></li>
            <li className="camionesCss"><NavLink to="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</NavLink></li>
            <li className="concesionarios camionesCss"><NavLink to="/concesionarios">CONCESIONARIOS</NavLink></li>
            <li className="companiaCss"><NavLink to="/compania">COMPAÑIA</NavLink></li>
        </ul>

        <div className="navSearch">
            <input className="search-nav-input" data-testid="search-input" type="search" title="Search" placeholder="Buscar..." id="global-search-input" aria-controls="searchNavSuggestions" aria-autocomplete="list" aria-expanded="false" aria-activedescendant="search-suggestion-null" role="combobox" aria-describedby="searchBoxHelpText" />
        </div>
    </nav>
} 