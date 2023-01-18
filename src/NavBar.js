import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";



export default function NavBar() {
    var auxMovil = 0;

    useEffect(() => {
        const navSlideClickH = () => {
            const burger = document.querySelector(".burger");
            const navLinks = document.querySelectorAll(".nav-links-h a");
            const sinoLink = document.querySelector("#sinoLink");
            
            sinoLink.addEventListener("click", (ev) => {
                window.location = "https://www.sinotruk.com.ec"
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
                        case "compania":
                            menuSelect("compania")
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

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")
                    break;
                case "sunward":
                    document.querySelector(".item-level-1").classList.remove("nav-header-h")
                    document.querySelector(".item-level-1").classList.add("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")
                    break;

                case "concesionarios":
                    document.querySelector(".item-level-3").classList.remove("nav-header-h")
                    document.querySelector(".item-level-3").classList.add("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-6").classList.remove("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-h")
                    break;
                case "compania":
                    document.querySelector(".item-level-6").classList.remove("nav-header-h")
                    document.querySelector(".item-level-6").classList.add("nav-header-s")
                    document.querySelector(".item-level-6").classList.add("nav-header-s-i")

                    document.querySelector(".item-level-0").classList.remove("nav-header-s")
                    document.querySelector(".item-level-0").classList.add("nav-header-h")

                    document.querySelector(".item-level-1").classList.remove("nav-header-s")
                    document.querySelector(".item-level-1").classList.add("nav-header-h")

                    document.querySelector(".item-level-3").classList.remove("nav-header-s")
                    document.querySelector(".item-level-3").classList.add("nav-header-h")
                    break;

            }

        }

        const resetMenu = () => {
            document.querySelector(".item-level-0").classList.remove("nav-header-h")
            document.querySelector(".item-level-0").classList.add("nav-header-s")
            document.querySelector(".item-level-1").classList.remove("nav-header-s")
            document.querySelector(".item-level-1").classList.add("nav-header-h")
            document.querySelector(".item-level-6").classList.remove("nav-header-s")
            document.querySelector(".item-level-6").classList.add("nav-header-h")
        }

        const navSlide = () => {
            const burger = document.querySelector(".burger");
            const sinotruk = document.querySelector(".sinotruk");
            const sunward = document.querySelector(".sunward");
            /*const keyton = document.querySelector(".keyton"); */
            const concesionarios = document.querySelector(".concesionarios");
            const compania = document.querySelector(".compania");

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
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });
            sinotruk.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });

            sunward.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });
            /*sunward.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });
            keyton.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });
            */
            concesionarios.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                navSearch[0].classList.toggle("nav-search-active");

                document.querySelector('nav > .logo').classList.toggle("logoNav");
                navh.classList.toggle("nav-inactive");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                    }
                });

                document.querySelector(".menu1").classList.add("logob")

                if (auxMovil == 0)
                    resetMenu();

                burger.classList.toggle("toggle");
                if (burger.classList.contains('toggle')) {

                } else {
                    document.querySelector(".menu1").classList.remove("logob")
                }
            });

            /* compania.addEventListener("click", () => {
                 nav.classList.toggle("nav-active");
                 navSearch[0].classList.toggle("nav-search-active");
 
                 document.querySelector('nav > .logo').classList.toggle("logoNav");
                 navh.classList.toggle("nav-inactive");
 
                 navLinks.forEach((link, index) => {
                     if (link.style.animation) {
                         link.style.animation = "";
                     } else {
                         link.style.animation = `navLinkFade 0.5s ease forwards 0.5s `;
                     }
                 });
 
                 document.querySelector(".menu1").classList.add("logob")
 
                 if (auxMovil == 0)
                     resetMenu();
 
                 burger.classList.toggle("toggle");
                 if (burger.classList.contains('toggle')) {
 
                 } else {
                     document.querySelector(".menu1").classList.remove("logob")
                 }
             });*/
            //INI PARAMS


            /*             const searchBtn = document.querySelector(".searchIcon");
                        searchBtn.addEventListener("click", () => {
                            burger.click()
                        }) */

            const closeBtnMovil = document.querySelectorAll(".closeMovil");
            for (var i = 0; i < closeBtnMovil.length; ++i) {
                let dataId = closeBtnMovil[i].getAttribute('data-id')
                closeBtnMovil[i].addEventListener("click", () => {
                    resetMenuMovil(dataId)
                    auxMovil = 1
                })
            }

            /*   const motorPlayer = document.getElementById('audioMotor')
              motorPlayer.src = './motor.mp3' */
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
                default:
                    break;
            }
        }

        /*  const modalVideo = (vid, poster) => {
              const para = document.createElement("div");
              para.classList.add("modal");
              document.querySelector("body").appendChild(para);
  
              para.addEventListener('click', () => {
                  para.remove()
              })
  
              //CLOSE BTN
              var img = document.createElement('img');
              img.src = './images/close-icon.png';
              img.addEventListener("click", () => {
                  para.remove()
              })
              img.classList.add("modalClose");
              para.appendChild(img);
  
              //VIDEO ELEMENT
              var video = document.createElement('video');
              video.classList.add("modalVideo");
              video.src = './images/' + vid;
              video.poster = './images/' + poster
              video.autoplay = true;
              video.controls = true;
              video.muted = false;
              para.appendChild(video);
  
              video.addEventListener('click', (event) => {
                  event.stopPropagation();
              })
          }*/

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
                        case "compania":
                            menuSelect("compania")
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

    const [message, setMessage] = useState('');
    const [menuBusqueda, setMenu] = useState([]);

    var obj
    const handleChange = (event) => {
        setMenu([])
        let s
        if (event.target.value.length > 0) {
            indexData.forEach(a => {
                s = a.buscar
                if (s.includes(event.target.value)) {
                    a.resultados.forEach(res => {
                        //console.log(res.url)
                        setMenu($menuBusqueda => [...menuBusqueda, { url: res.url, desc: res.descripcion }])
                    })

                }
            })
        }
    };

    let indexData = [{
        buscar: "8 toneladas",
        resultados: [{
            url: "camiones/camion-8-toneladas-1147",
            descripcion: "Camion de 8 toneladas"
        }]
    }, {
        buscar: "5 toneladas",
        resultados: [{
            url: "camiones/camion-5-toneladas-1147",
            descripcion: "Camion de 5 toneladas"
        }]
    }]

    return <nav className="menu1 internal">
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <div className="logo">
            <a href="/"><img src="./images/vehicentro-logo-blanco.png" width="230" height="80" alt="Vehicentro" /></a>
        </div>
        <div className="navSearch">
            <input className="search-nav-input" data-testid="search-input" type="search" title="Search" placeholder="Buscar..." id="global-search-input" onChange={handleChange} />
            {menuBusqueda.length > 0 &&
                <div className="result">
                    {menuBusqueda.map((item, index) => (
                        <li>
                            <NavLink to={item.url}>
                                {item.desc}
                            </NavLink>
                        </li>
                    ))}
                </div>
            }
        </div>
        <ul className="nav-links">


            <li>
                <a className="" href="#" option="sinotruk">SINOTRUK</a>
                <div className="item-level-0 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="0"></div>
                        <p className="tituloMenu">CAMIONES</p>
                        <img className="imgnMenu" src="../images/home/logo-sinotruk-negro.png" width="663" height="163" alt="Sinotruck" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colTitle">Serie 100</p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-5-toneladas-1057">1057 / 3.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-3-6-toneladas">1047 / 3.6 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-5-toneladas-1067">1067 / 5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-6-toneladas-1067">1067 / 6 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-8-toneladas-1147">1147 / 8 ton</NavLink></p>

                        </div>

                        <div className="colMenu">
                            <p className="colTitle">Serie T5G</p>

                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-9-toneladas">T5G-1167 / 9 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-10-toneladas-t5g-1167">T5G-1167 / 10.8 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-12-toneladas-t5g-1167">T5G-1167 / 12 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167">T5G-1167 / 13 ton <b>(280HP)</b></NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp">T5G-1167 / 13 ton <b>(330HP)</b></NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-18-toneladas-t5g-1257">T5G-1257 / 18 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-de-19-toneladas-t5g-1257">T5G-1257 / 19.5 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t5g-4187">T5G-4187 / 24 ton</NavLink></p>

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie T7H</p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-28-toneladas">T7H-390 / 28 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-28-toneladas-retardador">T7H-390 / 28 ton con retardador</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-390-42-toneladas">T7H-390 / 42 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-t7h-430-45-toneladas">T7H-430 / 45 ton</NavLink></p>

                        </div>
                        <div className="colMenu">
                            <p className="colTitle">Serie C7H</p>
                            <p className="colItem meniu"><NavLink to="/camiones/camion-20-toneladas-1256">C7H-1256 / 20 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540">C7H-540 / 48 ton</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">C7H-540 / 48 ton con catalinas</NavLink></p>

                        </div>
                    </div>
                    <div className="rowMenu espaciomenu">
                        <div className="colMenu">
                            <p className="colTitle">Especiales</p>
                            <p className="colItem meniu"><NavLink to="/mixer/mixer-a7-1257">A7-1257 / Mixer</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t5g-280">Volqueta T5G-330 8-9m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/volquetas/volqueta-t7h-430">Volqueta T5G-430 10-14m3</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/">Volqueta C7H-540 20m3</NavLink></p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a className="" href="#" option="sunward">EXCAVADORAS SUNWARD</a>
                <div className="item-level-1 nav-header nav-header-h" >
                    <div className="headerSubMenu">
                        <div className="closeMovil" data-id="1"></div>
                        <p className="tituloMenu">EXCAVADORAS</p>
                        <img className="imgnMenu" src="../images/logo-sunward.webp" alt="sunward" width="100" height="32" />
                    </div>
                    <div className="rowMenu">
                        <div className="colMenu">
                            <p className="colItem meniu"><NavLink to="/excavadoras/swe210">Excavadora SWE210</NavLink></p>
                            <p className="colItem meniu"><NavLink to="/excavadoras/swe365e">Excavadora SWE365E</NavLink></p>

                        </div>

                    </div>
                </div>
            </li>
            <li>
                <a href="/concesionarios" option="concesionarios">CONCESIONARIOS</a>
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
                <a href="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</a>
                <div className="item-level-5 nav-header nav-header-h" >

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
                            <a href="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/r/crm/login" className="colItem meniu negro">BDC</a>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item-level-7">
                <a href="#">TECNOLOGÍA</a>
                <div className="item-level-7 nav-header nav-header-h" >

                </div>
            </li>
            <li className="item-level-8 linkContact">
            </li>
        </ul>
            <img id="sinoLink" className="sinoIcon" src="./images/home/logo-sinotruk-leon.webp" width="663" height="163" alt="Sinotruk" />
        
    </nav>
} 