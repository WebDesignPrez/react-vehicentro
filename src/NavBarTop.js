import "./styles.css";
import "./responsive.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import env from "./config";

export default function NavBarTop() {
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
        <li>
          <a href="/concesionarios">CONCESIONARIOS</a>
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
                  Av 25 de junio km 3 y medio vía a pasajemax
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
      </ul>

      <ul className="nav-links-h">
        <li>
          <NavLink to="/">INICIO</NavLink>
        </li>

        <li className="concesionarios camionesCss">
          <NavLink to="/concesionarios">CONCESIONARIOS</NavLink>
        </li>
        <li className="companiaCss">
          <NavLink to="/compania">ACERCA DE NOSOTROS</NavLink>
        </li>
        <li className="companiaCss">
          <NavLink to="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</NavLink>
        </li>
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
