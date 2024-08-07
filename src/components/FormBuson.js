import $ from "jquery";
import { useState } from 'react';
import "../form.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import env from '../config';

let urlMedia = env.url;

function FormBuson(props) {

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  let redireccion = "https://vehicentro.com/gracias-por-contactarnos";
  let url = props.url || "https://example.com/form";

  let [nombre_y_apellido, setName] = useState('');
  let [email, setEmail] = useState('');
  let [celular, setTel] = useState('');
  let [cedula, setCed] = useState('');
  let [agencia, setAgencia] = useState('');
  let [asunto, setAsunto] = useState('');
  let [comentario, setComentario] = useState('');
  let [isAnonymous, setIsAnonymous] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  const handleChangeCed = (e) => {
    setCed(e.target.value);
  };

  const handleChangeAgencia = (e) => {
    setAgencia(e.target.value);
  };

  const handleChangeAsunto = (e) => {
    setAsunto(e.target.value);
  };

  const handleChangeComentario = (e) => {
    setComentario(e.target.value);
  };

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.checked);
  };

  const handleFocus = (e, validationFn, errorMessage) => {
    let aux = e.target.closest('.input-group');
    if (validationFn(e.target.value)) {
      aux.classList.add("errorClass");
      NotificationManager.error(errorMessage, '');
    } else {
      aux.classList.remove("errorClass");
    }
  };

  const validateName = (e) => e.trim() === "" || e.length < 5;
  const validateEmail = (e) => e === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e);
  const validateTel = (phoneNumber) => !/^0[1-9][0-9]{8}$/.test(phoneNumber);
  const validateCed = (e) => e === "" || !/^\d+$/.test(e) || (e.length !== 10 && e.length !== 13);
  const validateAgencia = (e) => e === "";

  function handleSubmit(e) {
    e.preventDefault();

    let form = $(e.target);
    let data = form.serializeArray();

    if (!validateName(nombre_y_apellido) && !validateEmail(email) && !validateTel(celular) && !validateCed(cedula) && !validateAgencia(agencia)) {
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success() {
          NotificationManager.success('Datos enviados.', '');
        },
        error() {
          NotificationManager.error('Error al enviar datos.', '');
        }
      });
    } else {
      NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
    }
  }

  return (
    <div>
      <div className="form-box">
        <h5 className="form-step"> Buzón de sugerencias y quejas </h5>
        <div className="contenedorTerminos">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={handleAnonymousChange}
          />
          <label>Marcar como anónimo</label>
        </div>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          {!isAnonymous && (
            <>
              <label className="input_title">*Nombres y Apellidos</label>
              <div className="input-group">
                <span className="userIcon"><img src={urlMedia + "user-solid.png"} /></span>
                <input placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocus(e, validateName, 'Completar los datos requeridos.') }} onChange={handleChange} value={nombre_y_apellido} />
              </div>

              <label className="input_title">*Email</label>
              <div className="input-group">
                <span className="userIcon"><img src={urlMedia + "envelope-solid.png"} /></span>
                <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocus(e, validateEmail, 'Email incorrecto.') }} onChange={handleChangeEmail} value={email} />
              </div>

              <label className="input_title">*Teléfono</label>
              <div className="input-group">
                <span className="userIcon"><img src={urlMedia + "phone-solid.png"} /></span>
                <input placeholder="" name="telefono" type="text" onBlur={(e) => { handleFocus(e, validateTel, 'Número telefónico incorrecto.') }} onChange={handleChangeTel} value={celular} />
              </div>

              <label className="input_title">*Cédula</label>
              <div className="input-group">
                <span className="userIcon"><img src={urlMedia + "portrait-solid.png"} /></span>
                <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocus(e, validateCed, 'Cédula incorrecta.') }} onChange={handleChangeCed} value={cedula} />
              </div>
            </>
          )}

          <label className="input_title">*Agencia</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <select
              name="escoge_tu_concesionario_mas_cercano"
              onBlur={(e) => { handleFocus(e, validateAgencia, 'Selecciona una agencia.') }}
              onChange={handleChangeAgencia}
              value={agencia}
            >
              <option value="">Selecciona una agencia</option>
              <option value="Concesionario">Concesionario</option>
              <option value="Ambato - Av. Indoamérica Sector Izamba">Ambato - Av. Indoamérica Sector Izamba</option>
              <option value="Ambato - Av. Guaytambos Sector Ficoa">Ambato - Av. Guaytambos Sector Ficoa</option>
              <option value="Riobamba">Riobamba</option>
              <option value="Quito - Carapungo">Quito - Carapungo</option>
              <option value="Quito - Sur">Quito - Sur</option>
              <option value="Quito - Galo Plaza">Quito - Galo Plaza</option>
              <option value="Quito - Pifo">Quito - Pifo</option>
              <option value="Quito - El Colibrí ">Quito - El Colibrí </option>
              <option value="Quito - Granados">Quito - Granados</option>
              <option value="Guayaquil - Norte">Guayaquil - Norte</option>
              <option value="Guayaquil - Samborondón">Guayaquil - Samborondón</option>
              <option value="Cuenca">Cuenca</option>
              <option value="Machala">Machala</option>
              <option value="Ibarra">Ibarra</option>
              <option value="Manta">Manta</option>
            </select>
          </div>

          <label className="input_title">*Asunto</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <input placeholder="" name="asunto" type="text" onChange={handleChangeAsunto} value={asunto} />
          </div>

          <label className="input_title">*Comentario</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <textarea placeholder="" name="comentario" onChange={handleChangeComentario} value={comentario} />
          </div>
          <div className="contenedorTerminos">
            <input
              className="inputTerminos"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label>
              Acepto <a href="/politicaprivacidad" target="_blank" className="linkTerminos">términos y condiciones.</a>
            </label>
          </div>


          <input name="redirect_url" value={redireccion} type="hidden" />

          <h2 >
            <button className={isChecked ? 'nextBtn' : 'nextBtnDisabled'} type="submit" disabled={!isChecked}>
              Enviar
            </button>
          </h2>

          <NotificationContainer />
        </form>
      </div>
    </div>
  );
}

export default FormBuson;
