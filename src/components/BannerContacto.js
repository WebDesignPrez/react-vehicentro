import { useState, useEffect } from "react";
import '../modalContact.css';
import FormContactFicha from "./FormContactFicha";

export default function BannerContacto(props){
  let url = props.url
  let nomCamion = props.camion
  let listSerie = (props.serie=="")?'':props.serie
  let listCamion = (props.camionSerie=="")?'':props.camionSerie
 
  const [modalContactIsOpen, setContactIsOpen] = useState(false);
  const [modalFormIsOpen, setFormIsOpen] = useState(false);

    useEffect(() => {
      const keyDownHandler = event => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeContact()
          closeFormContact()
        }
      };
  
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, []);

    function openModal() {
      openFormContact();
      closeContact()
    }

    function openFormContact(){
      setFormIsOpen(true)
    }
  
    function closeFormContact(){
      setFormIsOpen(false)
    }

    function openContact(){
      setContactIsOpen(true)
    }


    function closeContact(){
      setContactIsOpen(false)
    }

    const closeContactF = ()=>{
      setContactIsOpen(false)
    }


    function gotoWs(){
      window.open('https://api.whatsapp.com/send/?phone=593988593279', '_blank')
      closeContact()
    }

    function gotoCall(){
      window.open("tel:+0992048229")
      closeContact()
    }

  return (
    <>
          <div className="boxesContact posRelative fix">
              <p className="buttonContact f" onClick={openContact}>PROFORMA TU CAMIÓN</p>
              <p className="textContact escritorio">Déjanos tus datos y uno de nuestros asesores <br></br>se contactará de inmediato.</p>
              <p className="textContact movil">Déjanos tus datos y uno <br></br>de nuestros asesores se contactará de inmediato.</p>
          </div>

          {modalContactIsOpen &&
          <div className="modalContact" id="modalBanner" >
            <span className="closeBtnForm" onClick={closeContact}><img src="https://vehicentro.com/images/close-icon_w.png" alt="close" /></span>
            <div className="headerModalContact"><img src="https://desarollo.vehicentro.com/images/vehicentro-logo-blanco.png" alt="Vehicentro" /></div>
            <div className="bodyModalContact">
              <div className="btnModalContact" onClick={gotoWs}><span className="wa">ESCRÍBENOS</span></div>
              <div className="btnModalContact" onClick={gotoCall}><span className="ca">LLAMADA DIRECTA</span></div>
              <div className="btnModalContact" onClick={openModal}><span>COTIZA TU CAMIÓN</span></div>
            </div>
          </div>
          }
        
        {modalFormIsOpen &&
              <FormContactFicha url={url} camion={nomCamion} serie={listSerie} camionSerie={listCamion} close={closeFormContact}/>
        }
    </>

)
}