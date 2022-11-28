import { NavLink } from "react-router-dom"
import { useEffect } from "react";
export default function NavBarTop() {
    var auxMovil = 0;

    useEffect(() => {
        const navSlideClickH = () => {
            const burger = document.querySelector(".burger");
            const navLinks = document.querySelectorAll(".nav-links-h a");

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
                        case "keyton":
                            menuSelect("keyton")
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

                    document.querySelector(".item-level-2").classList.remove("nav-header-s")
                    document.querySelector(".item-level-2").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")
                    break;
                case "sunward":
                    document.querySelector(".item-level-1").classList.remove("nav-header-h")
                    document.querySelector(".item-level-1").classList.add("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-2").classList.remove("nav-header-s")
                    document.querySelector(".item-level-2").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")
                    break;
                case "keyton":
                    document.querySelector(".item-level-2").classList.remove("nav-header-h")
                    document.querySelector(".item-level-2").classList.add("nav-header-s")
                    document.querySelector(".item-level-2").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")
                    break;
                case "concesionarios":
                    document.querySelector(".item-level-3").classList.remove("nav-header-h")
                    document.querySelector(".item-level-3").classList.add("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-2").classList.remove("nav-header-s")
                    document.querySelector(".item-level-2").classList.add("nav-header-h")
                    break;

            }

        }

        const resetMenu = () => {
            document.querySelector(".item-level-0").classList.remove("nav-header-h")
            document.querySelector(".item-level-0").classList.add("nav-header-s")
            document.querySelector(".item-level-1").classList.remove("nav-header-s")
            document.querySelector(".item-level-1").classList.add("nav-header-h")
            document.querySelector(".item-level-2").classList.remove("nav-header-s")
            document.querySelector(".item-level-2").classList.add("nav-header-h")
        }

        const navSlide = () => {
            const burger = document.querySelector(".burger");
            const nav = document.querySelector(".nav-links");
            const navh = document.querySelector(".nav-links-h");

            const navLinks = document.querySelectorAll(".nav-links a");
            const navSearch = document.querySelectorAll("div.navSearch");

            burger.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                            }s `;
                    }
                });

                document.querySelector(".internal").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".internal").classList.remove("logob")
                }
            });

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
                case "2":
                    document.querySelector(".item-level-2").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-2").classList.toggle("nav-header-s")
                    break;
                case "3":
                    document.querySelector(".item-level-3").classList.toggle("nav-header-h")
                    document.querySelector(".item-level-3").classList.toggle("nav-header-s")
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
                        case "keyton":
                            menuSelect("keyton")
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


    });


    return <nav className="internal">
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="logo">
            <img src="../images/vehicentro-logo-blanco.png" width="230" height="80" />
        </div>
        <ul className="nav-links">
            <li>
                <a className="" href="#" option="sinotruk">SINOTRUK</a>
                <div className="item-level-0 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="0"></div>
                        <p>SINOTRUK</p>
                        <img src="../images/logoSinotruck.png" alt="Sinotruck" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Serie 100</p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-5-toneladas-1057">1057 / 3.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-5-toneladas-1067">1057 / 5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-6-toneladas-1067">1057 / 6 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-8-toneladas-1147">1047 / 8 ton</NavLink></p>

                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Serie T5G</p>

                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-9-toneladas">T5G 1167 / 9 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-10-toneladas-t5g-1167">T5G 1167 / 10.8 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-12-toneladas-t5g-1167">T5G 1167 / 12 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167">T5G 1167 / 13 ton (280hp)</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp">T5G 1167 / 13 ton (330hp)</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-19-toneladas-t5g-1257">T5G 1167 / 19.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/">T5G 1167 / 24 ton</NavLink></p>

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie T7H</p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-28-toneladas">T7H 390 / 28 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-42-toneladas">T7H 390 / 42 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-430-45-toneladas">T7H 430 / 45 ton</NavLink></p>

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie C7H</p>

                            <p className="colItem meniu"><NavLink to="/camion/camion-20-toneladas-1256">C7H 1256 / 20 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540">C7H 540 / 48 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">C7H 540 / 48 ton offroad</NavLink></p>

                        </div>
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Especiales</p>
                            <p className="colItem">Volqueta T5G 280-330 8-9m2</p>
                            <p className="colItem">Volqueta T5G 430-330 10-14m2</p>
                            <p className="colItem">A7 1257 / Mixer</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a className="" href="#" option="sunward">SUNWARD</a>
                <div className="item-level-1 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="1"></div>
                        <p>EXCAVADORA</p>
                        <img src="../images/logoSinotruck.png" alt="Sinotruck" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem">Excavadora SWE210</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a className="" href="#" option="keyton">KEYTON</a>
                <div className="item-level-2 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="2"></div>
                        <p>KEYTON</p>
                        <img src="../images/logoSinotruck.png" alt="Sinotruck" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem">Furgoneta M70L</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" option="concesionarios">CONCESIONARIOS</a>
                <div className="item-level-3 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="3"></div>
                        <p>CONCESIONARIOS</p>
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
                            <p className="colTitle2">Los Chillos</p>
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
            <li className="item-level-5">
                <a href="#">CAMIONES EN USO</a>
                <div className="item-level-5 nav-header nav-header-h" >

                </div>
            </li>
            <li className="item-level-6">
                <a href="#">COMPAÑIA</a>
                <div className="item-level-6 nav-header nav-header-h" >

                </div>
            </li>
            <li className="item-level-7">
                <a href="#">TECNOLOGIA</a>
                <div className="item-level-7 nav-header nav-header-h" >

                </div>
            </li>

            <li className="item-level-8 linkContact">
                <a href="#">QUIERO COMUNICARME CON UN ASESOR</a>
            </li>
        </ul>

        <ul className="nav-links-h">
            <li><NavLink to="/">INICIO</NavLink></li>
            <li>
                <NavLink to="/producto">SINOTRUCK</NavLink>
            </li>
            <li><NavLink to="/sinotruk">SUNWARD</NavLink></li>
            <li><NavLink to="/sinotruk">KEYTON</NavLink></li>
            <li className="concesionariosCss"><NavLink to="/sinotruk">CONCESIONARIOS</NavLink></li>
            <li className="camionesCss"><NavLink to="/sinotruk">CAMIONES EN USO</NavLink></li>
            <li className="companiaCss"><NavLink to="/sinotruk">COMPAÑIA</NavLink></li>
            <li className="tecnologiaCss"><NavLink to="/sinotruk">TECNOLOGIA</NavLink></li>
        </ul>
        <div className="navSearch">
            <input className="search-nav-input" data-testid="search-input" type="search" title="Search" placeholder="Buscar..." id="global-search-input" aria-controls="searchNavSuggestions" aria-autocomplete="list" aria-expanded="false" aria-activedescendant="search-suggestion-null" role="combobox" aria-describedby="searchBoxHelpText" />
        </div>
    </nav>
}