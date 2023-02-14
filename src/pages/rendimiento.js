import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"



function rendimiento() {
    return (
        <div className="rendimiento">
            <NavBarTop />
            <Block1 />
            <BannerContacto />
            <Footer />
        </div>
    )
}



function Block1() {

  

    function clickBtnCalculo() {
        //valor de entrada
        let kmRec = document.getElementById("kmRec").value;
        //valores fijos
        var kmSinotruk = 11;
        var kmOtros = 8;
        var precioDies = 1.75;
        var precioGas = 1.75;
        //km anuales
        var kmAnua = kmRec * 12;
        //litros mensuales
        var litMensDiesDec = kmRec / kmSinotruk;
        var litMensDies = litMensDiesDec.toFixed(0);
        var litMensGasDec = kmRec / kmOtros;
        var litMensGas = litMensGasDec.toFixed(0);
        //costo menusal
        var costoMensDies = litMensDies * precioDies;
        var costoMensDies = costoMensDies.toFixed(0);
        var costoMensGas = litMensGas * precioGas;
        var costoMensGas = costoMensGas.toFixed(0);

        //*****AHORROS****///
        var ahorroMens = costoMensDies - costoMensGas;
        var porceAhorro = (ahorroMens / costoMensGas) * 100;
        var porceAhorro = porceAhorro.toFixed(0);
        var ahorroAnua = ahorroMens * 12;
        var ahorroCinco = ahorroAnua * 5;

        //Sinotruk
        document.getElementById('kmAnua').innerHTML = kmAnua;
        document.getElementById('kmAnua2').innerHTML = kmAnua;
        document.getElementById('litMensDies').innerHTML = litMensDies;
        document.getElementById('costoMensDies').innerHTML = costoMensDies;

        //otros
        document.getElementById('litMensGas').innerHTML = litMensGas
        document.getElementById('costoMensGas').innerHTML = costoMensGas

        //Ahorro
        document.getElementById('ahorroMens').innerHTML = ("$" + (ahorroMens * -1))
        document.getElementById('porceAhorro').innerHTML = ((porceAhorro * -1) + "%")
        document.getElementById('ahorroAnua').innerHTML = ("$" + (ahorroAnua * -1))
        document.getElementById('ahorroCinco').innerHTML = ("$" + (ahorroCinco * -1))

    }

    return (<>

        <div className="repuestosuno">

            <div className="container titulo">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h2>Calcula tu ahorro</h2>
                        <p>El Cabezal T5G-4187 puede ofrecer un ahorro de hasta el 28% en combustible</p>
                    </div>
                    <div className="ingreso">
                        <label className="control-label">
                            ¿Cuánto kilometraje recorre al mes?
                        </label>

                        <input className="form-control inputCalculo" name="kmRec" id="kmRec" type="number" placeholder="Ingresa tu kilometraje mensual" ></input>

                        <button className="btn6" onClick={clickBtnCalculo}> Calcular</button>
                    </div>
                </div>
            </div>

        </div>



        <div className="repuestosdos">
            <div className="tercio  plan">
                <h2>Sinotruk T5G-4187</h2>
                <h3 className="kmAnua formateado" id="kmAnua">-</h3>
                <p>Kilometraje anual</p>
                <h3 className="kmSinotruk ">11</h3>
                <p>KM/Galon promedio</p>
                <h3 className="litMensDies formateado" id="litMensDies">-</h3>
                <p>Galones consumidos mensualmente</p>
                <h3>$1.75</h3>
                <p>Costo por Galón de combustible</p>
                <h4 className="costoMensDies formateado" id="costoMensDies">-</h4>
                <p>Costo mensual de combustible</p>
            </div>
            <div className="tercio  plan">
                <h2>Competencia sin tecnología alemana</h2>
                <h3 className="kmAnua formateado" id="kmAnua2">-</h3>
                <p>Kilometraje anual</p>
                <h3>8</h3>
                <p>KM/Galon promedio</p>
                <h3 className="litMensGas formateado" id="litMensGas">-</h3>
                <p>Galones consumidos mensualmente</p>
                <h3>$1.75</h3>
                <p>Costo por Galón de combustible</p>
                <h4 className="costoMensGas formateado" id="costoMensGas">-</h4>
                <p>Costo mensual de combustible</p>
            </div>
            <div className="tercio plan resultadosDiv">
                <div className="col-md-10 offset-md-1 resultados">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <h2>Resultados</h2>
                        </div>
                        <div className="col-md-3 ahorro-mens text-center">
                            <h3 className="ahorroMens formateado" id="ahorroMens">-</h3>
                            <p>Ahorro mensual</p>
                        </div>
                        <div className="col-md-3 ahorro-porc text-center">
                            <h3 className="porceAhorro formateado" id="porceAhorro">-</h3>
                            <p>Porcentaje de ahorro</p>
                        </div>
                        <div className="col-md-3 ahorro-anua text-center">
                            <h3 className="ahorroAnua formateado" id="ahorroAnua">-</h3>
                            <p>Ahorro anual</p>
                        </div>
                        <div className="col-md-3 ahorro-cinco text-center">
                            <h3 className="ahorroCinco formateado" id="ahorroCinco">-</h3>
                            <p>Ahorro en 5 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)



}

export default rendimiento