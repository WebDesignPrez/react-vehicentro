import $ from "jquery";
import { useState, useEffect } from 'react';
import "../form.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import env from '../config';

//Este formulario es de los camiones

let urlMedia = env.url
function FormContact(props) {
  let redireccion = "https://vehicentro.com/gracias-por-contactarnos"
  let url = props.url
  let nomCamion = props.camion
  let listSerie = (props.serie == "") ? '' : props.serie
  let listCamion = (props.camionSerie == "") ? '' : props.camionSerie

  let [nombre_y_apellido, setName] = useState('');
  let [ciudad, setCity] = useState('');
  let [email, setEmail] = useState('');
  let [celular, setTel] = useState('');
  let [cedula, setCed] = useState('');
  let [serie, setSerie] = useState(listSerie);
  let [camionSerie, setSerieCamion] = useState(listCamion);
  let [camion, setCam] = useState(nomCamion);
  let [escoge_tu_concesionario_mas_cercano, setCon] = useState('Concesionario');



  const handleChange = (e) => {
    setName((e.target.value));
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
    let auxNom = e.trim()
    if (auxNom == "" || auxNom.length < 5)
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

  /*   const validateTel = (e) => {
      if (e === "" || !(/^\d+$/.test(e)) || e.length < 10 || e.length > 10)
        return true
      else
        return false
    } */

  const validateTel = (phoneNumber) => {
    const phoneRegex = /^0[1-9][0-9]{8}$/;
    return !phoneRegex.test(phoneNumber);
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

  const handleFocusCon = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateCon(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Seleccionar concesionario.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateCon = (e) => {
    if (e === "" || e === "Concesionario")
      return true
    else
      return false
  }

  function codigodecamion(x) {
    let a
    switch (x) {
      case serie100[0]:
        a = "34"
        break;
      case serie100[1]:
        a = "19"
        break;
      case serie100[2]:
        a = "59"
        break;
      case serie100[3]:
        a = "67"
        break;
      case serie100[4]:
        a = "10"
        break;
      case serieT5G[0]:
        a = "51"
        break;
      case serieT5G[1]:
        a = "68"
        break;
      case serieT5G[2]:
        a = "14"
        break;
      case serieT5G[3]:
        a = "61"
        break;
      case serieT5G[4]:
        a = "62"
        break;
      case serieT5G[5]:
        a = "63"
        break;
      case serieT5G[6]:
        a = "3"
        break;
      case serieT5G[7]:
        a = "24"
        break;
      case serieT7H[0]:
        a = "36"
        break;
      case serieT7H[1]:
        a = "64"
        break;
      case serieT7H[2]:
        a = "29"
        break;
      case serieT7H[3]:
        a = "27"
        break;
      case serieC7H[0]:
        a = "2"
        break;
      case serieC7H[1]:
        a = "9"
        break;
      case serieC7H[2]:
        a = "57"
        break;
      case especiales[0]:
        a = "6"
        break;
      case especiales[1]:
        a = "65"
        break;
      case especiales[2]:
        a = "43"
        break;
      case especiales[3]:
        a = "72"
        break;
      case especiales[4]:
        a = "47"
        break;
      case excavadora[0]:
        a = "55"
        break;
      case excavadora[1]:
        a = "56"
        break;
      case furgoneta[0]:
        a = "24"
        break;
      case miniCargadora[0]:
        a = "74";
        break;
      case autos[0]:
        a = "77"
        break;
      case autos[1]:
        a = "78"
        break;
      case autos[2]:
        a = "80"
        break;

      default:
        a = ""
        break;
    }
    return a
  }

  function cadena(data) {
    var queryString = data.map(function (obj) {
      return encodeURIComponent(obj.name) +
        '=' + encodeURIComponent(obj.value);
    }).join('&');
    return queryString
  }


  function handleSumbit(e) {
    e.preventDefault();

    let form = $(e.target);
    let datosaenviar = form.serializeArray()
    let cod = codigodecamion(datosaenviar[7].value)
    datosaenviar[7].value = cod;

    let arraryfinal = cadena(datosaenviar)

    console.log(arraryfinal)


    if (!validateName(e.target[0].value) && !validateName(e.target[1].value) && !validateEmail(e.target[2].value) && !validateTel(e.target[3].value) && !validateCed(e.target[4].value) && !validateCon(e.target[5].value)) {
      console.log("Valid")
      // alert(form.attr("action"));
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        // data: form.serialize(),
        data: arraryfinal,
        success(data) {
          NotificationManager.success('Datos enviados.', '');
        },
        error(data) {
          NotificationManager.success('Datos enviados.', '');
          setName('')
          setCity('')
          setEmail('')
          setTel('')
          setCed('')

          window.location.href = redireccion;
          // window.location.href = redireccion;
        }
      })
    } else {
      NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
    }
  }
  useEffect(() => {
    setValues();
  }, [nomCamion])


  function setValues() {
    setSerie(listSerie)
    setSerieCamion(listCamion)
    setCam(nomCamion)
  }

  const serie100 = ['1047 / 3.6 TON', '1067 / 5 TON', '1067 / 6 TON', '1147 / 8 TON'];
  const serieN = ['2.5 TON', 'NKS 3.5 TON', 'NKS 3.6 TON'];
  const serieMAX = ['530 / 48 TON MAX'];
  const serieT5G = ['T5G 1167 / 9 TON', 'T5G 1167 / 10 TON', 'T5G 1167 / 12 TON', 'T5G 1167 / 13 TON (280HP)', 'T5G 1167 / 13 TON (330HP)', 'T5G 1257 / 18 TON', 'T5G 1257 / 19.5 TON', 'T5G 4187 / 24 TON'];
  const serieT7H = ['T7H 390 / 28 TON', 'T7H 340 / 28 TON', 'T7H 390 / 28 TON con retardador', 'T7H 390 / 42 TON', 'T7H 430 / 45 TON'];
  const serieC7H = ['C7H 1256 / 20 TON', 'C7H 1256 / 20 TON con Catalinas', 'C7H 540 / 48 TON', 'C7H 540 / 48 TON con Catalinas', 'Cabezal de 48 toneladas con Catalinas | C7H-540 Nueva Versión', 'C7H 530 / 48 TON MAX'];
  const especiales = ['VOLQUETA T5G 330 8-9M3', 'VOLQUETA T7H 430 10-14M3', 'VOLQUETA T7H 430 20M3', 'VOLQUETA C7H 540 20M3', 'MIXER A7 8-9M3', 'MIXER C7H 12-14M3'];
  const excavadora = ['SWE210', 'SWE370E'];
  const furgoneta = ['M70L', 'M70L-EV'];
  const miniCargadora = ['SWL3220'];
  const autos = ['U70PRO', 'U70-FULL'];
  //const nls = ['2.5 TON'];

  let type = null;
  let options = null;

  if (serie === "Serie 100") {
    type = serie100;
  } else if (serie === "Serie T5G") {
    type = serieT5G;
  } else if (serie === "Serie T7H") {
    type = serieT7H;
  } else if (serie === "Serie C7H") {
    type = serieC7H;
  } else if (serie === "Especiales") {
    type = especiales;
  } else if (serie === "Excavadora") {
    type = excavadora;
  } else if (serie === "Furgoneta") {
    type = furgoneta;
  } else if (serie === "miniCargadoras") {
    type = miniCargadora;
  } else if (serie === "autos") {
    type = autos;
  } else if (serie === "Serie N") {
    type = serieN;
  } else if (serie === "Serie MAX") {
    type = serieMAX;
  }





  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
    // console.log(options);
  }

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return <div>
    <div className="form-box">
      <h5 className="form-step"> ¿Necesitas información? </h5>
      <form action={url} method="post" onSubmit={(ev) => handleSumbit(ev)}>
        <div className="field1">
          <label> Cotizador Sinotruk Modelo {listCamion} </label>

          <label className="input_title">*Nombre y Apellido</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "user-solid.png"} /></span>
            <input placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChange(e) }} value={nombre_y_apellido} />
          </div>

          <label className="input_title">*Ciudad</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "address-card-solid.png"} /></span>
            <input placeholder="" name="ciudad" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCity(e) }} value={ciudad} />
          </div>

          <label className="input_title">*Email</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "envelope-solid.png"} /></span>
            <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocusEmail(e) }} onChange={(e) => { handleChangeEmail(e) }} value={email} />
          </div>

          <label className="input_title">*Celular</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "phone-solid.png"} /></span>
            <input placeholder="" name="celular" type="text" onBlur={(e) => { handleFocusTel(e) }} onChange={(e) => { handleChangeTel(e) }} value={celular} />
          </div>

          <label className="input_title">*Cédula</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "portrait-solid.png"} /></span>
            <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
          </div>

          <label className="input_title">*Escoge tu concesionario más cercano</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <select name="escoge_tu_concesionario_mas_cercano" onBlur={(e) => { handleFocusCon(e) }} onChange={(e) => { handleChangeCon(e) }} value={escoge_tu_concesionario_mas_cercano}>
              <option value="Concesionario">Concesionario</option>
              <option value="Ambato - Av. Indoamérica Sector Izamba">Ambato - Av. Indoamérica Sector Izamba</option>
              <option value="Ambato - Av. Guaytambos Sector Ficoa">Ambato - Av. Guaytambos Sector Ficoa</option>
              <option value="Riobamba">Riobamba</option>
              <option value="Quito - Carapungo">Quito - Carapungo</option>
              <option value="Quito - Sur">Quito - Sur</option>
              {/* <option value="Quito - Los Chillos">Quito - Los Chillos</option> */}
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

          <label className="input_title">*Serie</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <select name="serie" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeSerie(e) }} value={serie}>
              {/* <option value="NLS">NLS</option> */}
              <option value="Serie N">Serie N</option>
              <option value="Serie MAX">Serie MAX</option>
              <option value="Serie 100">Serie 100</option>
              <option value="Serie T5G">Serie T5G</option>
              <option value="Serie T7H">Serie T7H</option>
              <option value="Serie C7H">Serie C7H</option>
              <option value="Especiales">Especiales</option>
              <option value="Excavadora">Excavadora</option>
              <option value="Furgoneta">Furgoneta</option>
              <option value="miniCargadoras">Minicargadora</option>
              <option value="autos">Autos</option>
            </select>
          </div>

          <label className="input_title">*Modelo</label>
          <div className="input-group">
            <span className="userIcon"><img src={urlMedia + "map-marker-solid.png"} /></span>
            <select name="modelo_sinotruk" onChange={(e) => { handleChangeSerieCamion(e) }} value={camionSerie} >
              {options}
            </select>
          </div>


          <div className="input-group inputCamionInt">
            <span className="userIcon"></span>
            <input name="camion" type="text" value={camion} onChange={(e) => { handleChangeCam(e) }} />
          </div>

          <input name="redirect_url" value="https://vehicentro.com/gracias-por-contactarnos" type="hidden" />
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
            Cotizar
          </button>
        </h2>

        <NotificationContainer />
      </form>
    </div>

  </div>
}

export default FormContact
