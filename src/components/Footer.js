import env from '../config';

let urlMedia = env.url

export default function Footer() {


  return (
    <div className="footer posRelative">
      <div className="info">
        <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
        <p style={{ marginTop: 10 }}>VEHICENTRO VEHICULOS Y CAMIONES CENTRO SIERRA S.A</p>
        <ul className="list">
          <li><p className="titleFooter"><a href="/compania">NOSOTROS</a></p></li>
          <li><p className="titleFooter"><a href="/concesionarios">CONCESIONARIOS</a></p></li>
          <li><p className="titleFooter"><a href="/motor-mc">TECNOLOGÍA</a></p></li>
        </ul>
        <br />
        <p className="title titleContacto">CONTACTO DIRECTO</p>
        <p className="title titleNumero"><a href="tel:032994740">032 994 740</a></p>
        <div className="social row">
          <div className="flex-row imgMain">
            <a href="https://www.facebook.com/Vehicentro"><img src={urlMedia + "facebook.png"} alt="facebook" width="32" height="32" /></a>
            <a href="https://www.instagram.com/vehicentroec"><img src={urlMedia + "instagram.png"} alt="instagram" width="32" height="32" /></a>
            <a href="https://www.youtube.com/channel/UCW8gGawovE35cXcJ3P2kryQ"><img src={urlMedia + "youtube.png"} alt="youtube" width="32" height="32" /></a>
            <a href="https://www.tiktok.com/@sinotrukeros"><img src={urlMedia + "tiktok.webp"} alt="tiktok" width="32" height="32" /></a>
            <a href="https://www.linkedin.com/company/vehicentroecu/?originalSubdomain=ec"><img src={urlMedia + "linkdin.png"} alt="linkdin" width="32" height="32" /></a>
          </div>

        </div>
        {/*<p className="title titleContacto">Realizado por Agencia Prez</p>*/}

      </div>
      <div className="col1 colProd">
        <p className="title">PRODUCTOS</p>
        <ul className="list">
          <li><p className="subTitle">SINOTRUK CAMIONES</p></li>
          <li><p className="itemMenu"><a href="/serie/100">Serie 100</a></p></li>
          <li><p className="itemMenu"><a href="/serie/t5g">Serie T5G</a></p></li>
          <li><p className="itemMenu"><a href="/serie/t7h">Serie T7H</a></p></li>
          <li><p className="itemMenu"><a href="/serie/c7h">Serie C7H</a></p></li>
          <li><p className="itemMenu"><a href="/serie/volquetas">Volquetas</a></p></li>
          <li><p className="itemMenu"><a href="/serie/mixer">Mixer</a></p></li>
          <br />
          <li><p className="itemMenu">SINOTRUK AUTOS</p></li>
          <li><p className="itemMenu"><a href="/sinotruk/autos">Suvs</a></p></li>
        </ul >

        <ul className="list">
          <li><p className="subTitle">SUNWARD </p></li>



          <li><p className="titleFooter"><a href="/excavadoras">Excavadoras</a></p></li>
          <li><p className="titleFooter"><a href="/minicargadoras">Minicargadoras</a></p></li>



        </ul>
      </div >
      <div className="col1 colSell">
        <p className="title">POSVENTA</p>
        <ul className="list listNonTitle">
          <li><p className="itemMenu"><a href="/concesionarios">Concesionarios</a></p></li>
          <li><p className="itemMenu"><a href="/repuestos">Repuestos</a></p></li>
          <li><p className="itemMenu">Mantenimiento</p></li>
          <li><p className="itemMenu"><a href="/garantia">Garantía</a></p></li>
          <br />
          <br />
          <br />
          <br />
          <br />
        </ul >


        {/*    <ul className="list listNonTitle">
          <li><p className="itemMenu"><a href="/#">SINOTRUK AUTOS</a></p></li>
          <li><p className="itemMenu"><a href="/sinotruk/autos/u70pro">SUVS</a></p></li>

          <li><p className="itemMenu"><a href="/sinotruk/autos/u70pro">U70PRO</a></p></li>
        </ul> */}


      </div >
      <div className="col1 colTech">

        <p className="title">TECNOLOGÍA</p>
        <ul className="list listNonTitle">
          <li><p className="itemMenu"><a href="/motor-mc">Componentes</a></p></li>
          <li><p className="itemMenu"><a href="/rendimiento/100">Medición de rendimiento</a></p></li>
        </ul>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />




      </div >
      <a href="https://api.whatsapp.com/send?phone=593992872703" className="btn-wsp" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="64" viewBox="0 0 48 48">
          <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div >
  )
}