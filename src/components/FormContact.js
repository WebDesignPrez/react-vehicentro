import $ from "jquery";
import { useState } from 'react';
import "../form.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useParams } from "react-router";

function FormContact(props) {

  const url = props.url
  const nomCamion = props.camion
  const listSerie = (props.serie=="")?'':props.serie
  const listCamion = (props.camionSerie=="")?'':props.camionSerie

  const [nombre_y_apellido, setName] = useState('');
  const [ciudad, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setTel] = useState('');
  const [cedula, setCed] = useState('');
  const [serie, setSerie] = useState(listSerie);
  const [camionSerie, setSerieCamion] = useState(listCamion);
  const [camion, setCam] = useState(nomCamion);
  const [escoge_tu_concesionario_mas_cercano, setCon] = useState('Concesionario');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  }

  const handleChangeCed = (e) => {
    setCed(e.target.value);
  }

  const handleChangeCon = (e) => {
    setCon(e.target.value);
  }

  //let camionesListOpt;
  const handleChangeSerie = (e) => {
    setSerie(e.target.value);
  }

  const handleChangeSerieCamion = (e) => {
    setSerieCamion(e.target.value)
  }

  const handleChangeCam = (e) => {
    setCam(e.target.value);
  }



  const handleFocus = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateName(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Completar los datos requeridos.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateName = (e) => {
    if (e == "" || e.length < 3)
      return true
    else
      return false
  }


  const handleFocusEmail = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateEmail(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Email incorrecto.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateEmail = (e) => {
    if (e == "" || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)))
      return true
    else
      return false
  }

  const handleFocusTel = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateTel(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Numero telefonico incorrecto.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateTel = (e) => {
    if (e === "" || !(/^\d+$/.test(e)) || e.length < 6 || e.length > 10)
      return true
    else
      return false
  }

  const handleFocusCed = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateCed(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Cedula incorrecta.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateCed = (e) => {
    if (e === "" || !(/^\d+$/.test(e)) || (e.length !== 10 && e.length !== 13))
      return true
    else
      return false
  }

  function handleSumbit(e) {
    e.preventDefault();

    if (!validateName(e.target[0].value) && !validateName(e.target[1].value) && !validateEmail(e.target[2].value) && !validateTel(e.target[3].value) && !validateCed(e.target[4].value)) {
      const form = $(e.target);
      alert(form.attr("action"));
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
          NotificationManager.success('Datos enviados.', '');
        }
      })
    } else {
      NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
    }
  }

  const serie100 = ['1057 / 3.5 TON', '1067 / 5 TON', '1067 / 6 TON', '1147 / 8 TON'];
  const serieT5G = ['T5G 1167 / 9 TON', 'T5G 1167 / 10.8 TON', 'T5G 1167 / 12 TON', 'T5G 1167 / 13 TON (280HP)', 'T5G 1167 / 13 TON (330HP)', 'T5G 1167 / 18 TON', 'T5G 1167 / 19.5 TON', 'T5G 1167 / 24 TON'];
  const serieT7H = ['T7H 390 / 28 TON', 'T7H 390 / 42 TON', 'T7H 430 / 45 TON'];
  const serieC7H = ['C7H 1256 / 20 TON', 'C7H 540 / 48 TON', 'C7H 540 / 48 TON OFFROAD'];
  const especiales = ['VOLQUETA T5G 280-330 8-9M2', 'VOLQUETA T5G 430-330 10-14M2', 'A7 1257 / MIXER'];

  let type = null;
  let options = null;

  if (serie === "Serie 100") {
    type = serie100;
  } else if (serie === "Serie T5G") {
    type = serieT5G;
  } else if (serie === "Serie T7H") {
    type = serieT7H;
  } else if (serie === "Serie C7H"){
    type = serieC7H;
  } else if (serie === "Especiales"){
    type = especiales;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return <div>
            <div className="form-box">
              <h5 className="form-step"> ¿Necesitas información? </h5>
              <form action={url} method="post" onSubmit={(ev) => handleSumbit(ev)}>
                <div className="field1">
                  <label> Cotizador Sinutruck Modelo T5G-1167 </label>

                  <label className="input_title">*Nombre y Apellido</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/user-solid.png" /></span>
                    <input placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChange(e) }} value={nombre_y_apellido} />
                  </div>

                  <label className="input_title">*Ciudad</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/address-card-solid.png" /></span>
                    <input placeholder="" name="ciudad" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCity(e) }} value={ciudad} />
                  </div>

                  <label className="input_title">*Email</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/envelope-solid.png" /></span>
                    <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocusEmail(e) }} onChange={(e) => { handleChangeEmail(e) }} value={email} />
                  </div>

                  <label className="input_title">*Telefono</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/phone-solid.png" /></span>
                    <input placeholder="" name="celular" type="text" onBlur={(e) => { handleFocusTel(e) }} onChange={(e) => { handleChangeTel(e) }} value={celular} />
                  </div>

                  <label className="input_title">*Cedula</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/portrait-solid.png" /></span>
                    <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
                  </div>

                  <label className="input_title">*Escoge tu concesionario mas cercano</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/map-marker-solid.png" /></span>
                    <select name="escoge_tu_concesionario_mas_cercano" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCon(e) }} value={escoge_tu_concesionario_mas_cercano}>
                      <option value="Concesionario">Concesionario</option>
                      <option value="Ambato - Av. Indoamérica Sector Izamba">Ambato - Av. Indoamérica Sector Izamba</option>
                      <option value="Ambato - Av. Guaytambos Sector Ficoa">Ambato - Av. Guaytambos Sector Ficoa</option>
                      <option value="Riobamba">Riobamba</option>
                      <option value="Quito - Carapungo">Quito - Carapungo</option>
                      <option value="Quito - Sur">Quito - Sur</option>
                      <option value="Quito - Los Chillos">Quito - Los Chillos</option>
                      <option value="Quito - Galo Plaza">Quito - Galo Plaza</option>
                      <option value="Quito - El Colibrí ">Quito - El Colibrí </option>
                      <option value="Guayaquil - Samborondón">Guayaquil - Samborondón</option>
                      <option value="Guayaquil - Norte">Guayaquil - Norte</option>
                      <option value="Cuenca">Cuenca</option>
                      <option value="Machala">Machala</option>
                      <option value="Ibarra">Ibarra</option>
                      <option value="Manta">Manta</option>
                    </select>
                  </div>

                  <label className="input_title">*Serie</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/map-marker-solid.png" /></span>
                    <select name="serie" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeSerie(e) }} value={serie}>
                      <option value="Serie 100">Serie 100</option>
                      <option value="Serie T5G">Serie T5G</option>
                      <option value="Serie T7H">Serie T7H</option>
                      <option value="Serie C7H">Serie C7H</option>
                      <option value="Especiales">Especiales</option>
                    </select>
                  </div>

                  <label className="input_title">*Camion</label>
                  <div className="input-group">
                    <span className="userIcon"><img src="../images/map-marker-solid.png" /></span>
                    <select name="serie" value={camionSerie}>
                      {options}
                    </select>
                  </div>


                  <div className="input-group inputCamionInt">
                    <span className="userIcon"></span>
                    <input name="camion" type="text" value={camion} onChange={(e) => { handleChangeCam(e) }} />
                  </div>

                  <input name="redirect_url" value="https://vehicentro.com/gracias-por-contactarnos-sobre-camiones/" type="hidden" />
                </div>
                <button className="nextBtn" type="submit"> Cotizar </button>
              </form>
            </div>
          <NotificationContainer />
        </div>
}

export default FormContact