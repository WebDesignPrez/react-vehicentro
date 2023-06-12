import $ from "jquery";
import { useState, useEffect } from 'react';
import "../form.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import env from '../config';

let urlMedia = env.url
function FormHelpDesk() {
  let redireccion = "https://vehicentro.com/gracias-por-contactarnos"
  let url = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/TICS"

  let [cedula, setCed] = useState('');
  let [nombre_y_apellido, setMensaje] = useState('');

  const handleChangeCed = (e) => {
    setCed(e.target.value);
  }

  const handleChangeMensaje = (e) => {
    setMensaje(e.target.value);
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


  const handleFocusMensaje = (e) => {
    let aux = e.target.closest('.input-group');
  }

  function handleSumbit(e) {
    if (!validateCed(e.target[0].value)) {
      const form = $(e.target);
      
        /* document.getElementById("btnSend").disabled = true; 
        document.getElementById("btnSend").style.display = "none";  */
        e.preventDefault();
        var formData = new FormData();
        formData.append('cedula', e.target[0].value);     
        formData.append('nombre_y_apellido', e.target[1].value);

        $.ajax({
          type: "POST",
          url: form.attr("action"),
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          enctype: 'multipart/form-data',
          processData: false,
          success(data) {
            window.location.href = redireccion;
            console.log("success");
          }, 
          error(data){
            document.getElementById("btnSend").disabled = false
            document.getElementById("btnSend").style.display = "block"; 
            window.location.href = redireccion;
            console.log("error");
          }
        })
   
    } else {
      document.getElementById("btnSend").disabled = false
      document.getElementById("btnSend").style.display = "block"; 
      NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
    }
  }

  useEffect(() => {
  }, []) 

  return <div>
            <div className="form-box">
              <h5 className="form-step"></h5>
              <form action={url} method="post" onSubmit={(ev) => handleSumbit(ev)}>
                <div className="field1">
                  <label className="input_title">*Cédula</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"portrait-solid.png"} /></span>
                    <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
                  </div>

                  <label className="input_title">*Mensaje</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"portrait-solid.png"} /></span>
                    <textarea placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocusMensaje(e) }} onChange={(e) => { handleChangeMensaje(e) }} value={nombre_y_apellido} />
                  </div>
                </div>
                <button id="btnSend" className="nextBtn" type="submit"> Enviar </button>
                <NotificationContainer />
              </form>
            </div>
        
        </div>
}

export default FormHelpDesk