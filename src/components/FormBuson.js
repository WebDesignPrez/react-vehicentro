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

  let [nombres, setName] = useState('');
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
    // console.log(data);


    if (!validateName(nombres) && !validateEmail(email) && !validateTel(celular) && !validateCed(cedula) && !validateAgencia(agencia)) {
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success() {
          NotificationManager.success('Datos enviados.', '');
          window.location.href = "https://vehicentro.com/gracias-por-contactarnos";
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
                <input placeholder="" name="nombres" type="text" onBlur={(e) => { handleFocus(e, validateName, 'Completar los datos requeridos.') }} onChange={handleChange} value={nombres} />
              </div>

              <label className="input_title">*Email</label>
              <div className="input-group">
                <span className="userIcon"><img src={urlMedia + "envelope-solid.png"} /></span>
                <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocus(e, validateEmail, 'Email incorrecto.') }} onChange={handleChangeEmail} value={email} />
              </div>

              <label className="input_title">*Teléfono</label>
              <div className="input-group">
                <span className="userIcon"><img src={urlMedia + "phone-solid.png"} /></span>
                <input placeholder="" name="celular" type="text" onBlur={(e) => { handleFocus(e, validateTel, 'Número telefónico incorrecto.') }} onChange={handleChangeTel} value={celular} />
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
              name="agencia"
              onBlur={(e) => { handleFocus(e, validateAgencia, 'Selecciona una agencia.') }}
              onChange={handleChangeAgencia}
              value={agencia}
            >
              <option value="">Selecciona una agencia</option>
              <option value="AMBATO MATRIZ">AMBATO MATRIZ</option>
              <option value="AMBATO FICOA">AMBATO FICOA</option>
              <option value="RIOBAMBA">RIOBAMBA</option>
              <option value="QUITO CARAPUNGO">QUITO CARAPUNGO</option>
              <option value="CUENCA">CUENCA</option>
              <option value="GUAYAQUIL SAMBORONDÓN">GUAYAQUIL SAMBORONDÓN</option>
              <option value="MACHALA">MACHALA</option>
              <option value="QUITO EL COLIBRÍ">QUITO EL COLIBRÍ</option>
              <option value="GUAYAQUIL NORTE">GUAYAQUIL NORTE</option>
              <option value="IBARRA">IBARRA</option>
              <option value="QUITO SUR">QUITO SUR</option>
              <option value="MANTA">MANTA</option>
              <option value="QUITO PIFO">QUITO PIFO</option>
              <option value="CUENCA HUAYNA CÁPAC">CUENCA HUAYNA CÁPAC</option>
              <option value="QUITO GRANADOS">QUITO GRANADOS</option>
            </select>
          </div>

          <label className="input_title">*Asunto</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <input
              placeholder=""
              name="asunto"
              type="text"
              onChange={handleChangeAsunto}
              value={asunto}
              maxLength={200}
            />
          </div>

          <label className="input_title">*Comentario</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <textarea
              placeholder=""
              name="comentario"
              onChange={handleChangeComentario}
              value={comentario}
              maxLength={4000}
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
              Acepto <a href="/politicaprivacidad" target="_blank" className="linkTerminos">términos y condiciones.</a>
            </label>
          </div>

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
