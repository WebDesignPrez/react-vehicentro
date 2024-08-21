import $ from "jquery";
import { useState } from "react";
import "../form.css";
import "../slider.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import env from "../config";

let urlMedia = env.url;

function FormNewBeneficios() {
  let [nombre, setNombre] = useState("");
  let [email, setEmail] = useState("");
  let [celular, setCelular] = useState("");
  let [producto, setProducto] = useState("Camiones Sinotruk");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCelular = (e) => {
    setCelular(e.target.value);
  };

  const handleChangeProducto = (e) => {
    setProducto(e.target.value);
  };

  const handleFocus = (e) => {
    let aux = e.target.closest(".input-group");
    if (validateName(e.target.value)) {
      aux.classList.add("errorClass");
      NotificationManager.error("Completar los datos requeridos.", "");
    } else {
      aux.classList.remove("errorClass");
    }
  };

  const validateName = (e) => {
    let auxNom = e.trim();
    if (auxNom == "" || auxNom.length < 5) return true;
    else return false;
  };

  const handleFocusEmail = (e) => {
    let aux = e.target.closest(".input-group");
    if (validateEmail(e.target.value)) {
      aux.classList.add("errorClass");
      NotificationManager.error("Email incorrecto.", "");
    } else {
      aux.classList.remove("errorClass");
    }
  };

  const validateEmail = (e) => {
    if (e == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))
      return true;
    else return false;
  };

  const handleFocusCelular = (e) => {
    let aux = e.target.closest(".input-group");
    if (validateTel(e.target.value)) {
      aux.classList.add("errorClass");
      NotificationManager.error("Número telefónico incorrecto.", "");
    } else {
      aux.classList.remove("errorClass");
    }
  };

  const validateTel = (phoneNumber) => {
    const phoneRegex = /^0[1-9][0-9]{8}$/;
    return !phoneRegex.test(phoneNumber);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let form = $(e.target);
    let formData = form.serializeArray();
    let url;

    switch (producto) {
      case "Autos Sinotruk":
        url =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDBENVHC";
        break;
      case "Camiones Sinotruk":
        url =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDBENVHC";
        break;
      case "Maquinaria Sunward":
        url =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDBENVHC";
        break;
      default:
        url = "";
    }

    if (
      !validateName(nombre) &&
      !validateEmail(email) &&
      !validateTel(celular)
    ) {
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success(data) {
          NotificationManager.success("Datos enviados.", "");
        },
        error(data) {
          NotificationManager.success("Datos enviados.", "");
          setNombre("");
          setEmail("");
          setCelular("");
          setProducto("Camiones Sinotruk");
        },
      });
    } else {
      NotificationManager.error(
        "No se puede enviar datos, completar los datos correctamente.",
        ""
      );
    }
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const foto1 = `${urlMedia}beneficios.webp`;
  const foto2 = `${urlMedia}beneficiosMovil.webp`;

  return (
    <div className="containerLanding2">
      <div className="left-side-landing">
        <div
          className="boxRightHeader  half noResponsive"
          style={{
            width: `100%`,
            backgroundImage: `url(${foto1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        ></div>
      </div>
      <div className="left-side-landing2">
        <div className="nuevoBeneficios" style={{ width: `100%` }}>
          <img
            src={foto2}
            alt="Beneficios"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="right-side-landing">
        <div className="form-box">
          <h5 className="form-step new"> Personaliza tu cotización </h5>
          <form onSubmit={handleSumbit}>
            <div className="field1">
              <label className="input_title">NOMBRE COMPLETO*</label>
              <div className="input-group">
                <input
                  name="nombre_y_apellido"
                  type="text"
                  onBlur={handleFocus}
                  onChange={handleChangeNombre}
                  value={nombre}
                />
              </div>

              <label className="input_title">EMAIL*</label>
              <div className="input-group">
                <input
                  name="email"
                  type="text"
                  onBlur={handleFocusEmail}
                  onChange={handleChangeEmail}
                  value={email}
                />
              </div>

              <label className="input_title">CELULAR*</label>
              <div className="input-group">
                <input
                  name="celular"
                  type="text"
                  onBlur={handleFocusCelular}
                  onChange={handleChangeCelular}
                  value={celular}
                />
              </div>

              <label className="input_title">PRODUCTO*</label>
              <div className="input-group">
                <select
                  name="producto"
                  onChange={handleChangeProducto}
                  value={producto}
                >
                  <option value="Camiones Sinotruk">Camiones Sinotruk</option>
                  <option value="Autos Sinotruk">Autos Sinotruk</option>
                  <option value="Maquinaria Sunward">Maquinaria Sunward</option>
                </select>
              </div>

              <input
                name="redirect_url"
                value="https://vehicentro.com/gracias-por-contactarnos"
                type="hidden"
              />
            </div>
            <div className="contenedorTerminos">
              <input
                className="inputTerminos"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label>
                Acepto{" "}
                <a
                  href="/politicaprivacidad"
                  target="_blank"
                  className="linkTerminos"
                >
                  términos y condiciones.
                </a>
              </label>
            </div>

            <button
              className={isChecked ? "nextBtn" : "nextBtnDisabled"}
              type="submit"
              disabled={!isChecked}
            >
              Enviar
            </button>

            <label>
              <a
                href="https://www.vehicentro.com/"
                target="_blank"
                className="linknew"
              >
                www.vehicentro.com
              </a>
            </label>

            <NotificationContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormNewBeneficios;
