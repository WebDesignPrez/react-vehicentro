import "./styles.css";
import "./responsive.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import env from "./config";

export default function NavBar() {
  var auxMovil = 0;

  let urlMedia = env.url;

  // --- Función para gestionar los eventos del menú ---
  const burgerEvent = () => {
    const nav = document.querySelector(".nav-links");
    const navh = document.querySelector(".nav-links-h");
    const navSearch = document.querySelectorAll("div.navSearch");
    const burger = document.querySelector(".burger");

    if (nav && navSearch[0] && navh && burger) {
      nav.classList.toggle("nav-active");
      navSearch[0].classList.toggle("nav-search-active");
      document.querySelector("nav > .logo").classList.toggle("logoNav");
      navh.classList.toggle("nav-inactive");

      const flagContainer = document.querySelector(".contenerBannderasNavBar");
      if (flagContainer) flagContainer.classList.toggle("nav-inactive");

      const navLinks = document.querySelectorAll(".nav-links a");
      navLinks.forEach((link) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.4s ease forwards 0.5s `;
        }
      });

      document.querySelector(".internal").classList.add("logob");
      if (auxMovil === 0) resetMenu();

      if (!burger.classList.contains("toggle")) {
        document.querySelector(".internal").classList.remove("logob");
      }
    }
  };

  // --- Función para resetear el menú ---
  const resetMenu = () => {
    const items = [
      ".item-level-0",
      ".item-level-1",
      ".item-level-10",
      ".item-level-6",
      ".item-level-7",
    ];

    items.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.remove("nav-header-h");
        element.classList.add("nav-header-s");
      }
    });
  };

  const navSlideClickH = () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav-links-h a");
    const navLinksIn = document.querySelectorAll(".rowMenu .colItem");

    navLinksIn.forEach((link, index) => {
      link.addEventListener("click", (ev) => {
        burger.click();
      });
    });

    navLinks.forEach((link, index) => {
      link.addEventListener("click", (ev) => {
        switch (ev.target.getAttribute("option")) {
          case "concesionarios":
            menuSelect("concesionarios");
            break;
          case "sinotruk":
            menuSelect("sinotruk");
            break;
          case "sunward":
            menuSelect("sunward");
            break;
          case "vehiculos":
            menuSelect("vehiculos");
            break;
          case "compania":
            menuSelect("compania");
            break;
          case "tecnologia":
            menuSelect("tecnologia");
            break;
        }
      });
    });
  };

  const menuSelect = (varTest) => {
    const items = [
      "sinotruk",
      "sunward",
      "vehiculos",
      "concesionarios",
      "compania",
      "tecnologia",
    ];

    items.forEach((item) => {
      const elements = document.querySelectorAll(`.item-level-${item}`);
      elements.forEach((el) => {
        el.classList.remove("nav-header-h");
        el.classList.add("nav-header-s");
      });
    });

    const activeElements = document.querySelectorAll(`.item-level-${varTest}`);
    activeElements.forEach((el) => {
      el.classList.remove("nav-header-s");
      el.classList.add("nav-header-h");
      el.classList.add("nav-header-s-i");
    });
  };

  // --- Hook useEffect para inicializar eventos ---
  useEffect(() => {
    // Scroll inicial
    window.scrollTo(0, 0);

    // Obtener los elementos necesarios
    const burger = document.querySelector(".burger");
    const sinotruk = document.querySelector(".sinotruk");
    const tecnologia = document.querySelector(".tecnologia");
    const sunward = document.querySelector(".sunward");

    // Añadir eventos
    if (burger) burger.addEventListener("click", burgerEvent);
    if (sinotruk) sinotruk.addEventListener("click", burgerEvent);
    if (sunward) sunward.addEventListener("click", burgerEvent);
    if (tecnologia) tecnologia.addEventListener("click", burgerEvent);

    // Llamar funciones adicionales
    navSlideClickH();

    // Limpiar eventos al desmontar el componente
    return () => {
      if (burger) burger.removeEventListener("click", burgerEvent);
      if (sinotruk) sinotruk.removeEventListener("click", burgerEvent);
      if (sunward) sunward.removeEventListener("click", burgerEvent);
      if (tecnologia) tecnologia.removeEventListener("click", burgerEvent);
    };
  }, []); // Solo una vez al montar el componente

  return (
    <nav className="internal">
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="logo">
        <a href="/">
          <img
            src={urlMedia + "vehicentro-logo-blanco.png"}
            width="230"
            height="80"
          />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className="" to="/">
            INICIO
          </NavLink>
        </li>
        {/* <li>
          <a className="" href="#" option="sinotruk">
            CAMIONES
          </a>
          <div className="item-level-0 nav-header nav-header-h">
            <div className="headerSubMenu">
              <div className="closeMovil" data-id="0"></div>
              <p className="tituloMenu">CAMIONES</p>
              <img
                className="imgnMenu"
                src={urlMedia + "sinotrukTigre.webp"}
                width="637"
                height="147"
                alt="Sinotruck"
              />
            </div>
            <div className="rowMenu">
              <div className="colMenu">
                <p className="colTitle">Serie N</p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-2-5-toneladas">
                    <span className="nuevoCamion2">NUEVO</span> NLS 2.5 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-3-5-toneladas-1057">
                    <span className="nuevoCamion2">NUEVO</span> NKS 3.5 ton (
                    Liviano )
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-3-6-nks">
                    <span className="nuevoCamion2">NUEVO</span> NKS 3.6 ton (
                    Pesado )
                  </NavLink>
                </p>
              </div>
              <div className="colMenu">
                <p className="colTitle">Serie 100</p>

                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-5-toneladas-1067">
                    1067 / 5 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-6-toneladas-1067">
                    1067 / 6 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-8-toneladas-1147">
                    1147 / 8 ton
                  </NavLink>
                </p>
              </div>

              <div className="colMenu">
                <p className="colTitle">Serie T5G</p>

                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-9-toneladas">
                    1167 / 9 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-10-toneladas-t5g-1167">
                    1167 / 10 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-12-toneladas-t5g-1167">
                    1167 / 12 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-13-toneladas-t5g-1167">
                    1167 / 13 ton - <b>280HP</b>
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp">
                    1167 / 13 ton - <b>330HP</b>
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp-retardador">
                    1167 / 13 ton - <b>330HP</b> - RETARDADOR
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-18-toneladas-t5g-1257">
                    1257 / 18 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-de-19-toneladas-t5g-1257">
                    1257 / 19.5 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-t5g-4187">
                    4187 / 24 ton
                  </NavLink>
                </p>
              </div>
              <div className="colMenu">
                <p className="colTitle">Serie T7H</p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-t7h-340-28-toneladas">
                    <span className="nuevoCamion2">NUEVO</span> 340 / 28 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-t7h-390-28-toneladas">
                    390 / 28 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-28-toneladas-retardador">
                    390 / 28 ton - retardador
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-t7h-390-42-toneladas">
                    390 / 42 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-t7h-430-45-toneladas">
                    430 / 45 ton
                  </NavLink>
                </p>
              </div>
            </div>
            <div className="rowMenu espaciomenu">
              <div className="colMenu">
                <p className="colTitle">Serie C7H</p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-20-toneladas-1256">
                    1256 / 20 ton
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/camiones/camion-20-toneladas-catalinas-1256">
                    1256 / 20 ton - catalinas
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-c7h-540">
                    540 / 48 ton - Catalinas
                  </NavLink>
                </p>

                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas-nueva-version">
                    540 / 48 ton - Catalinas Off Road
                  </NavLink>
                </p>
              </div>

              <div className="colMenu">
                <p className="colTitle">Serie MAX</p>
                <p className="colItem meniu">
                  <NavLink to="/cabezales/cabezal-48-max">
                    <span className="nuevoCamion2">NUEVO</span> 530 / 48 ton
                  </NavLink>
                </p>
              </div>

              <div className="colMenu">
                <p className="colTitle">Volquetas</p>
                <p className="colItem meniu">
                  <NavLink to="/volquetas/volqueta-t5g-280">
                    T5G-330 8-9m3
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/volquetas/volqueta-t7h-430">
                    T7H-430 10-14m3
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/volquetas/volqueta-t7h-430-20m3">
                    T7H-430 20m3
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/volquetas/volqueta-c7h-540">
                    C7H-540 22m3
                  </NavLink>
                </p>
                <div></div>
              </div>

              <div className="colMenu">
                <p className="colTitle">Mixer</p>
                <p className="colItem meniu">
                  <NavLink to="/mixer/mixer-a7-1257">A7 8-9m3</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/mixer/mixer-12-14m3-c7h-430">C7H 12 m3</NavLink>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </li> */}
        {/* <li>
          <a className="" href="#" option="sunward">
            MAQUINARIA
          </a>
          <div className="item-level-1 nav-header nav-header-h">
            <div className="headerSubMenu maquinaria">
              <div className="closeMovil " data-id="1"></div>
              <p>MAQUINARIA</p>
     
            </div>
            <div className="rowMenu">
              <div className="colMenu">
                <p className="colTitle">CASE</p>
                <p className="colTitle2">RETROEXCAVADORAS</p>
                <p className="colItem meniu">
                  <NavLink>575SV</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>580N</NavLink>
                </p>
                <p className="colTitle2">EXCAVADORAS</p>
                <p className="colItem meniu">
                  <NavLink>CX220C</NavLink>
                </p>
                <p className="colTitle2">RODILLO COMPACTADOR</p>
                <p className="colItem meniu">
                  <NavLink>1107EX</NavLink>
                </p>
                <p className="colTitle2">MOTONIVELADORAS</p>
                <p className="colItem meniu">
                  <NavLink>845B SERIES 2</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>865B SERIES 2</NavLink>
                </p>
                <p className="colTitle2">TRACTOR DE ORUGAS</p>
                <p className="colItem meniu">
                  <NavLink>SWE210</NavLink>
                </p>
                <p className="colTitle2">MINI CARGADORA</p>
                <p className="colItem meniu">
                  <NavLink>1650L</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>2050M</NavLink>
                </p>
              </div>
              <div className="colMenu">
                <p className="colTitleextra">.</p>
                <p className="colTitle2">CARGADORAS</p>
                <p className="colItem meniu">
                  <NavLink>621E</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>721E</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>821E</NavLink>
                </p>
              </div>
              <div className="colMenu">
                <p className="colTitle">SUNWARD</p>
                <p className="colTitle2">MINI EXCAVADORA</p>
                <p className="colItem meniu">
                  <NavLink>SWE35UF</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/minicargadoras/swl3220">SWL3220</NavLink>
                </p>
                <p className="colTitle2">MINI CARGADORA</p>
                <p className="colItem meniu">
                  <NavLink to="/excavadoras/swe210">SWE210</NavLink>
                </p>
                <p className="colTitle2">EXCAVADORA</p>
                <p className="colItem meniu">
                  <NavLink to="/excavadoras/swe370e">SWE370E</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/excavadoras/swe600">SWE600F</NavLink>
                </p>
                <p className="colTitle2">CARGADORA FRONTAL</p>
                <p className="colItem meniu">
                  <NavLink>SL52W</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>SL61W</NavLink>
                </p>
                <p className="colTitle2">BULLDOZER</p>
                <p className="colItem meniu">
                  <NavLink>SD220Y1</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink>SD230Y1</NavLink>
                </p>
              </div>
            </div>
          </div>
        </li> */}

        {/* <li>
          <a className="" href="#" option="vehiculos">
            Vehículos
          </a>
          <div className="item-level-10 nav-header nav-header-h">
            <div className="headerSubMenu">
              <div className="closeMovil" data-id="10"></div>
              <p className="tituloMenu">Vehículos</p>
              <img
                className="imgnMenu"
                src={urlMedia + "sinotrukSinTigre.webp"}
                alt="sunward"
              />
            </div>
            <div className="rowMenu">
              <div className="colMenu">
                <p className="colTitle">SUV'S</p>
                <p className="colItem meniu">
                  <NavLink to="/sinotruk/autos/u70">U70 FULL</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/sinotruk/autos/u70pro">U70 PRO</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/sinotruk/autos/U70ProAmt">
                    U70 PRO AUTOMÁTICO
                  </NavLink>
                </p>
              </div>
              
            </div>
          </div>
        </li> */}

        {/* <li>
          <a href="#" option="tecnologia">
            TECNOLOGÍA
          </a>
          <div className="item-level-7 nav-header nav-header-h">
            <div className="headerSubMenu">
              <div className="closeMovil" data-id="7"></div>
              <p>TECNOLOGÍA</p>
            </div>
            <div className="rowMenu">
              <div className="colMenu">
                <p className="colItem meniu">
                  <NavLink to="/requisitos-de-calidad">
                    Requisitos de calidad
                  </NavLink>
                </p>

                <p className="colItem meniu">
                  <NavLink to="/sistema-evb">Sistema Evb</NavLink>
                </p>
              </div>
            </div>
          </div>
        </li> */}

        {/* <li className="item-level-5">
          <a href="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</a>
          <div className="item-level-5 nav-header nav-header-h"></div>
        </li> */}

        <li>
          <a href="/concesionariosEleccion">CONCESIONARIOS</a>
          <div className="item-level-3 nav-header nav-header-h">
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
                <p className="colItem">
                  Av 25 de junio km 3 y medio vía a pasajemax)
                </p>
                <p className="colTitle">Ibarra</p>
                <p className="colItem">
                  Panamericana Sur Km1 y calle los Andes
                </p>
                <p className="colTitle">Manta</p>
                <p className="colItem">
                  Vía Manta- Rocafuerte - Sin Calle Secundaria, Vía al
                  Aeropuerto
                </p>
              </div>

              <div className="colMenu">
                <p className="colTitle">Quito</p>
                <p className="colTitle2">Carapungo</p>
                <p className="colItem">
                  Av. Simón Bolivar S/N diagonal al Supermercado Santa María.
                </p>
                {/* <p className="colTitle2">Los Chillos</p> */}
                <p className="colItem">
                  Av. General Rumiñahui 8-40 y Av. San Luis (frente al San Luis
                  Shopping)
                </p>
                <p className="colTitle2">Sur</p>
                <p className="colItem">Av. Maldonado y Romero Barberis</p>
                <p className="colTitle2">El Colibrí</p>
                <p className="colItem">E35 y Av. General Pintag</p>
                <p className="colTitle2">Galo Plaza</p>
                <p className="colItem">
                  Av. Galo Plaza Lasso N66-106 y De las Avellanas
                </p>
              </div>

              <div className="colMenu">
                <p className="colTitle">Guayaquil</p>
                <p className="colTitle2">Samborondón</p>
                <p className="colItem">
                  Samborondón, vía el puente alterno norte, Ofc. Almax 2.
                </p>
                <p className="colTitle2">Norte</p>
                <p className="colItem">
                  Autopista. Narcisa. De Jesús km1. Junto. a ATM. Agencia de
                  tránsito municipal
                </p>
                <p className="colTitle">Cuenca</p>
                <p className="colItem">
                  Av. Gil Ramírez Dávalos 3-80 y Mario Rizzini (Junto a la
                  Gasolinera Primax)
                </p>
              </div>

              <div className="colMenu">
                <p className="colTitle">Riobamba</p>
                <p className="colItem">
                  Av. Lizarzaburu entre Monseñor L. Proaño y Padre M. Orozco
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="#" option="compania">
            COMPAÑÍA
          </a>
          <div className="item-level-6 nav-header nav-header-h">
            <div className="headerSubMenu">
              <div className="closeMovil" data-id="6"></div>
              <p>COMPAÑÍA</p>
            </div>
            <div className="rowMenu">
              <div className="colMenu">
                <p className="colItem meniu">
                  <NavLink to="/compania">Nosotros</NavLink>
                </p>
                {/* <a href="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/r/crm/login" className="colItem meniu negro">bdc</a> */}
                <a
                  href="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/r/crm/login"
                  className="colItem meniu negro"
                >
                  bdc
                </a>
                <p className="colItem meniu">
                  <NavLink to="/trabaja-con-nosotros">
                    Trabaja con nosotros
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/repuestos">Repuestos</NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/terminosCondiciones">
                    Terminos y Condiciones
                  </NavLink>
                </p>
                <p className="colItem meniu">
                  <NavLink to="/politicaprivacidad">Políticas</NavLink>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <NavLink className="" to="../home">
            Ecuador
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="https://vehicentro.com/co/">
            Colombia
          </NavLink>
        </li>
        <li className="item-level-8 linkContact"></li>
      </ul>

      <ul className="nav-links-h">
        <li className="concesionarios camionesCss">
          <NavLink to="/concesionariosEleccion">CONCESIONARIOS</NavLink>
        </li>
        <li className="companiaCss">
          <NavLink to="/compania">ACERCA DE NOSOTROS</NavLink>
        </li>
        {/* <li className="companiaCss">
          <NavLink to="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</NavLink>
        </li> */}
      </ul>

      <div className="contenerBannderasNavBar">
        <div className="contenerBannderasNavBarEc">
          <img
            className="banderaNavBar"
            src="images/home/banderaEcuador.webp"
          />
          <NavLink to="/#">EC</NavLink>
        </div>
        <div className="contenerBannderasNavBarCo">
          <img
            className="banderaNavBar"
            src="images/home/banderaColombia.webp"
          />
          <NavLink to="https://vehicentro.com/co/">CO</NavLink>
        </div>
      </div>

      <div className="navSearch">
        <input
          className="search-nav-input"
          data-testid="search-input"
          type="search"
          title="Search"
          placeholder="Buscar..."
          id="global-search-input"
          aria-controls="searchNavSuggestions"
          aria-autocomplete="list"
          aria-expanded="false"
          aria-activedescendant="search-suggestion-null"
          role="combobox"
          aria-describedby="searchBoxHelpText"
        />
      </div>
    </nav>
  );
}
