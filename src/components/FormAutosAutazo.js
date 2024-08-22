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

let url =
  "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/web/LDAUTAU";

function FormAutosAutazo() {
  let [nombre, setNombre] = useState("");
  let [email, setEmail] = useState("");
  let [celular, setCelular] = useState("");
  let [cedula, setCedula] = useState("");
  let [ciudad, setCiudad] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCelular = (e) => {
    setCelular(e.target.value);
  };

  const handleChangeCedula = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setCedula(value);
    }
  };

  const handleChangeCiudad = (e) => {
    setCiudad(e.target.value);
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

    if (
      !validateName(nombre) &&
      !validateEmail(email) &&
      !validateTel(celular) &&
      cedula.length === 10 &&
      ciudad.trim() !== ""
    ) {
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success(data) {
          NotificationManager.success("Datos enviados.", "");
          setNombre("");
          setEmail("");
          setCelular("");
          setCedula("");
          setCiudad("");
        },
        error(data) {
          NotificationManager.error("Error al enviar los datos.", "");
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

  const foto1 = `${env.url}autazoAutos.webp`;
  const foto2 = `${env.url}autazoAutosCelu.webp`;

  return (
    <div className="containerLanding2">
      <div className="left-side-landing">
        <div
          className="boxRightHeader  half noResponsive"
          style={{
            width: `100%`,
          }}
        >
          <img
            src={foto1}
            alt="Beneficios"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
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

              <label className="input_title">CÉDULA*</label>
              <div className="input-group">
                <input
                  name="cedula"
                  type="text"
                  onChange={handleChangeCedula}
                  value={cedula}
                />
              </div>

              <label className="input_title">CIUDAD*</label>
              <div className="input-group">
                <input
                  name="ciudad"
                  type="text"
                  onChange={handleChangeCiudad}
                  value={ciudad}
                />
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

export default FormAutosAutazo;
