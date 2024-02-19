import React, { useState } from 'react';
import '../promo.css';
import $ from 'jquery'; // Importa jQuery

const PromoPopUp = ({ onClose }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');

  const [showMesage, setShowMesage] = useState(false)

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Celular:', celular);

    let url = '';

    if (vehicleType === 'auto') {
      url = 'https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHPROMOCJV';
    } else if (vehicleType === 'camion') {
      url = 'https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHPROMOKFC';
    }

    // Construye la cadena de consulta con los datos que no estén vacíos
    const queryString = [];
    if (nombre !== '') queryString.push(`nombre_y_apellido=${encodeURIComponent(nombre)}`);
    if (celular !== '') queryString.push(`celular=${encodeURIComponent(celular)}`);
    const params = queryString.join('&');

    $.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/x-www-form-urlencoded',
      data: params,
      success: function (data) {
        console.log('Datos enviados con éxito:', data);
        onClose()
        setShowMesage(false)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error('Error al enviar datos:', errorThrown);
        setShowMesage(true)

        setTimeout(() => {
          setShowMesage(false)
          onClose()
        }, 3000);

      }
    });
  };

  return (
    <>

      <form onSubmit={handleSave} >

        <div className="popup2">

          <span className="close-btn2" onClick={onClose}>X</span>
          <div className="popup2-inner">
            <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
              <option value="">Modelo de interés</option>
              <option value="auto">Suv Sinotruk</option>
              <option value="camion">Camión Sinotruk</option>
            </select>
            <input required type="text" placeholder="Nombre y Apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input required type="text" placeholder="Número" value={celular} onChange={(e) => setCelular(e.target.value)} />
            <button type='submit'  >CONSEGUIR PREMIO</button>
          </div>
          <div className='mensajeDesktop'>
            {
              showMesage && <p>En un momento nos <br /> comunicaremos con usted</p>
            }
          </div>
        </div>



        <div className="popup2Cell">
          <span className="close-btn2Cell" onClick={onClose}>X</span>
          <div className="popup2-innerCell">
            <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
              <option value="">Modelo de interés</option>
              <option value="auto">Suv Sinotruk</option>
              <option value="camion">Camión Sinotruk</option>
            </select>
            <input required type="text" placeholder="Nombre y Apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input required type="text" placeholder="Número" value={celular} onChange={(e) => setCelular(e.target.value)} />

            <button type='submit'>CONSEGUIR PREMIO</button>


          </div>
          <div className='mensajeDesktop2' >
            {
              showMesage && <p>En un momento <br /> nos comunicaremos <br /> con usted</p>
            }
          </div>
        </div>
      </form >
    </>
  );
};

export default PromoPopUp;
