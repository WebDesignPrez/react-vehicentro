import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"


function PoliticaPrivacidad() {
    return (
        <>
            <Helmet>
                <title>Política | Vehicentro</title>
                <meta name="description" content="Politica de uso de datos" />
            </Helmet>
            <NavBarTop />
            <div className="privaty">
                <div className="texto">
                    <h1>POLÍTICA DE PRIVACIDAD</h1>
                    <br />
                    <br />
                    <p>Vehicentro Vehículos y Camiones Centro Sierra S.A, con RUC 1891724612001 domiciliada en Ambato, Av. Indoamérica Km 3 1/2 Vía a Quito,
                        como RESPONSABLE del tratamiento de los datos personales del titular, obtenidos por medio de consentimiento verbal o escrito y conforme a lo dispuesto por la LEY ORGÁNICA DE PROTECCIÓN DE DATOS PERSONALES (LOPDP), pone a disposición la siguiente POLÍTICA DE PRIVACIDAD para informar al titular de los datos a ser tratados y protegidos por la organización.</p>
                    <br />
                    <p className="black">1.	FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES</p>
                    <br />
                    <p>Vehicentro tratará los datos personales del titular con la siguiente finalidad:</p>
                    <br />
                    <p className="black">Clientes:</p>
                    <br />
                    <div className="espacioText">
                        <p>•    Pedir y enviar cotizaciones, asistencia, informes técnicos o información general de nuestros productos o servicios.</p>
                        <p>•	Hacer pedidos de productos o servicios o registrarse en nuestros portales de mensajería o RRSS.</p>
                        <p>•	Participar en encuestas, sorteos u otras actividades promocionales, sea que se lo haga en línea o en cualquier otro medio.</p>
                        <p>•	Suscribirse a boletines informativos, mensajes promocionales por correo electrónico, mensajería, RRSS u otros materiales.</p>
                        <p>•	Consultar e informar a las entidades de información crediticia (en los casos que se requiera).</p>
                        <p>•	Facturación y reportería contable.</p>
                        <p>•	Ponerse en contacto con nosotros.</p>
                        <p>•	Seguridad de las instalaciones de las instalaciones de Vehicentero (cuando aplique)</p>
                        <p>•	Datos necesarios para cumplimiento de prevención de lavado de activos.</p>
                    </div>
                    <br />
                    <p className="black">Colaboradores:</p>
                    <br />
                    <div className="espacioText">
                        <p>•	Solicitudes de puestos de trabajo, enviar su currículum vítae o crear un perfil de solicitante de empleo.</p>
                        <p>•	Gestión de nómina y beneficios del colaborador.</p>
                        <p>•	Gestión de inducción y capacitaciones.</p>
                        <p>•	Evaluación del desempeño y clima laboral.</p>
                        <p>•	Elaboración de planes de carrera y promoción de los colaboradores.</p>
                        <p>•	Seguridad y Salud ocupacional.</p>
                        <p>•	Cumplir con cualquier obligación laboral de requerida por la LOPDP y el Código del Trabajo o cualquier otra normativa laboral vigente.</p>
                    </div>
                    <br />
                    <p className="black">Proveedores:</p>
                    <br />
                    <div className="espacioText">
                        <p>•	Gestión de preselección, verificación de referencias, selección y calificación de proveedores.</p>
                        <p>•	Instrumentación de contratos.</p>
                        <p>•	Soporte a incidencias por continuidad de negocio.</p>
                        <p>•	Monitoreo de prestación del servicio y/o entrega del producto contratado.</p>
                        <p>•	Cumplir con las obligaciones legales, contractuales y normativa aplicable a Vehicentro.</p>
                    </div>
                    <br />
                    <p>Además, se utilizarán los datos de todos los titulares para cumplir con cualquier otro requisito dictaminado por la LOPDP.</p>
                    <br />
                    <p className="black">Datos Tratados:</p>
                    <br />
                    <p>Para Clientes, la información personal que pedimos puede incluir su dirección de correo electrónico, nombre y apellido, domicilio, nacionalidad, número de teléfono, cédula o RUC (solo para persona natural con RUC).</p>
                    <p>En caso de adquirir un bien o servicio con Vehicentro, será necesario recopilar información sensible necesaria para prevenir el lavado de activos como su pasado judicial como lo manda la UAFE.</p>
                    <p>Para servicio de taller o mecánica y repuestos, además de los datos anteriormente mencionados puede incluir la matrícula del vehículo.</p>
                    <p>Para procesar su solicitud de crédito o financiación, es posible que también se le pida acceder a su historial crediticio o buró crédito, cuentas bancarias, activos, pasivos, patrimonio, datos personales del cónyuge y/o garante y otros datos relevantes.</p>
                    <p>Dentro de las instalaciones de Vehicentro se podrán recopilar datos biométricos como su rostro a través de cámaras de videovigilancia para salvaguardar la seguridad de la empresa.</p>
                    <p>Además, se podrá transferir los datos del titular a otro responsable para que sea tratado en relación con seguros, solicitudes de crédito y prospección de clientes.</p>
                    <br />
                    <p>Para Aspirantes a Colaboradores, tendrán que suministrar toda la información antes detallada, además de sus antecedentes de educación, experiencia y formación laboral, además de necesitar saber si la persona posee alguna discapacidad. Por otro lado, en caso ser seleccionado para un puesto, pasando a ser Colaboradores en firme, la empresa deberá acceder y tratar datos sensibles como: relaciones familiares, identidad de género, etnia, salud, datos biométricos como huella dactilar y registro facial o rostro.</p>
                    <br />
                    <p>Para Proveedores, la información puede incluir su dirección de correo electrónico, nombre y apellido, domicilio laboral, nacionalidad y número de teléfono. Además, cualquier dato adicional que se necesite para calificar y seleccionar proveedores según corresponda por cada proceso.</p>
                    <br />
                    <p className="black">2.	TRATAMIENTO DE CATEGORÍAS ESPECIALES DE DATOS</p>
                    <br />
                    <p>Vehicentro no trata con categorías especiales de datos (datos sensibles, datos de niños, niñas y adolescentes y datos de personas con discapacidad) salvo en los siguientes casos contemplados en la LOPDP:</p>
                    <br />
                    <div className="espacioText">
                        <p>•	Datos de niños, niñas y adolescentes y de discapacidad a los colaboradores para cumplir con regulaciones del Código del Trabajo, para establecer pagos por cargas familiares y para determinar beneficios de ley por discapacidad.</p>
                        <p>•	Datos de salud a los colaboradores para cumplir con exámenes ocupacionales los cuales necesitan también del género o sexo del colaborador y su raza.</p>
                        <p>•	Datos biométricos a los colaboradores para cumplir con registro de ingreso y salida y por seguridad de las instalaciones.</p>
                        <p>• Datos biométricos para seguridad de las instalaciones mediante videovigilancia.</p>
                    </div>
                    <br />
                    <p className="black">3.	TRANSFERENCIA DE DATOS PERSONALES</p>
                    <br />
                    <p>Vehicentro no trata con categorías especiales de datos (datos sensibles, datos de niños, niñas y adolescentes y datos de personas con discapacidad) salvo en los siguientes casos contemplados en la LOPDP:</p>
                    <br />
                    <div className="espacioText">
                        <p>•	Proveedores de Software</p>
                        <p>•	Proveedores de Repuestos</p>
                        <p>•	Proveedores de Seguros</p>
                        <p>•	Entidades Crediticias y Financieras</p>
                        <p>•	Servicios de Marketing y Analítica de Datos</p>
                        <p>•	Asesoría legal</p>
                        <p>•	Servicios de Distribución y Mensajería</p>
                    </div>
                    <br />
                    <p>Vehicentro exigirá a los terceros a quienes se transfieran sus datos personales el cumplimiento de estándares adecuados de confidencialidad, protección y seguridad de la información.</p>
                    <br />
                    <p className="black">4. CONSENTIMIENTO, RECOPILACIÓN Y USO DE LOS DATOS E INTERÉS LEGÍTIMO.</p>
                    <br />
                    <p>El titular o interesado otorga su consentimiento de forma libre, voluntaria e inequívoca, el cual será recabado mediante la aceptación de manera verbal, física, a través de redes sociales, mensajería instantánea, correos electrónicos, página web, formularios o registros de clientes.</p>
                    <br />
                    <p>Los datos del titular serán conservados única y exclusivamente por el tiempo necesario especificado en la cláusula correspondiente de esta política. Luego de este período los datos se eliminarán o bloquearán conforme a los mecanismos, herramientas y estrategias implementados por Vehicentro. El titular podrá revocar su consentimiento para el uso y tratamiento de sus datos en cualquier momento, siempre que no exista algún otro requerimiento legal que lo impida.
                    </p>
                    <br />
                    <p className="black">5.	DERECHOS DEL TITULAR Y PROCESO PARA EJERCERLOS</p>
                    <br />
                    <p>Los datos personales y el control sobre ellos corresponden al titular. Por lo cual el titular o interesado, podrá ejercer los derechos de los datos que son tratados por Vehicentro, que se indican a continuación:</p>
                    <br />
                    <div className="espacioText">
                        <p>•	Acceso: el titular o interesado puede conocer qué datos personales son tratados.</p>    <br />
                        <p>•	Rectificación y actualización: el titular o interesado puede modificar o actualizar sus datos personales.</p>    <br />
                        <p>•	Eliminación: el titular o interesado puede solicitar la supresión de sus datos personales cuando:</p>    <br />
                        <div className="espacioText">
                            <p>• No sea necesaria o pertinente para la finalidad con la que se recolectó inicialmente; o a su vez, si el titular o interesado no tiene ningún producto, servicio activo u obligaciones con Vehicentro.</p>
                            <p>• Haya vencido el plazo de conservación.</p>
                            <p>• Se revoque el consentimiento o el titular indique no haberlo otorgado.</p>
                        </div>    <br />
                        <p>Todo ello siempre que no se contraponga con cualquier medida legal estipulada por el Estado Ecuatoriano que imposibilite el ejercicio a ese derecho o el titular no tenga una obligación contractual con Vehicentro.</p>    <br />
                        <p>•	Oposición: el titular o interesado puede oponerse o negarse al uso de sus datos personales cuando:</p>    <br />
                        <div className="espacioText">
                            <p>• Sus derechos y libertades fundamentales se vean afectadas.</p>
                            <p>• La ley permita su ejercicio.</p>
                            <p>• El tratamiento sea para finalidades distintas a las que se recabó y/o si no son necesarias para mantener la relación contractual.</p>
                            <p>• En los demás casos establecidos en la Ley Orgánica de Protección de Datos Personales.</p>
                            <p>• Este derecho se podrá ejercer siempre y cuando, no se trate de información pública, interés público o que el tratamiento se encuentre ordenado por una ley.</p>
                        </div>
                        <br />
                        <p>•	Suspensión: el titular o interesado puede solicitar el cese del tratamiento de sus datos cuando:</p>
                        <div className="espacioText">    <br />
                            <p>• Impugna la exactitud de sus datos personales.</p>
                            <p>• Se requiera limitar su uso</p>
                            <p>• No se pueda ejercer el derecho a la eliminación por temas legales o contractuales, pero sí es posible suspender el tratamiento de los datos del titular.</p>
                        </div>    <br />
                        <p>•	Portabilidad: el titular o interesado puede solicitar a Seguros Suárez la entrega de sus datos personales.</p>    <br />
                        <p>Para hacer efectivos sus derechos ponemos a disposición los contactos del delegado (DPO) de Vehicentro al final de esta política con quien podrá contactarse para atender su requerimiento.</p>    <br />
                        <p>Para ello, necesitamos que nos envíe el siguiente formulario <a href="https://vehicentro.com/documentos/FORMULARIO_DE_SOLICITUD_DEL_EJERCICIO_DE_DERECHOS_DEL_TITULAR.pdf" download target="_blank">Descarga el formulario</a> y lo envíe por correo a privacidad@vehicentro.com, y en un plazo de 15 días a partir de recibida la solicitud, como estipula la LOPDP, se notificará si la solicitud procede o no.</p>
                        <br />
                    <p className="black">6.	TIEMPO DE CONSERVACIÓN DE LOS DATOS</p>
                    <br/>
                    <p>Vehicentro no conservará los datos más tiempo del necesario, basándose en la necesidad del tratamiento y con los tiempos previstos por los organismos de control o en casos en los que no haya un fundamento legal de un organismo de control (7 años por facturación, 10 años por lavado de activos), el tiempo no será superior a 5 años por procedimientos internos y trazabilidad de la empresa. Pasado esos tiempos los datos serán eliminados o suspendidos su tratamiento según los procedimientos implementados en Vehicentro.</p>
                    <br />
                    <p className="black">7.	CONTACTOS DEL OFICIAL DE PROTECCIÓN DE DATOS</p>
                    <br/>
                    <p>El Oficial de Protección de Datos Personales es la figura encargada de supervisar el cumplimiento de la LOPDP a fin de garantizar la protección de los datos personales que el titular o interesado facilita a Vehicentro.</p>
                    <br />
                    <p>En caso de requerir contactar con Vehicentro para ejercer cualquier derecho del titular o para el acompañamiento en la revocatoria o modificaciones del consentimiento lo puede realizar mediante el correo privacidad@vehicentro.com, o acercarse a Vehicentro Matriz, Av. Indoamérica Km 3 1/2 Vía a Quito o mediante contacto telefónico de atención al cliente + 03 2 994740 ext. 1017.</p>
                    <br />
                    <p className="black">8.	CAMBIOS AL AVISO DE PRIVACIDAD</p>
                    <br/>
                   <p>La actualización al presente contenido será notificada a través del sitio web de Vehicentro: <a href="https://vehicentro.com" target="_blank">https://vehicentro.com/</a></p>
                   <br/>
                   <p>Última Versión: 18/11/2023</p>
                    </div>
                </div>
            </div>
            <BannerContacto />
            <Footer />
        </>
    )
}

export default PoliticaPrivacidad

