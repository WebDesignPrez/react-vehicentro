import FormHelpDesk from '../components/FormHelpDesk'
import env from '../config';
let urlMedia = env.url

function HelpDesk(){
    return <>
        <div className="containerHD">
            
            <div className='imageHD'>
                <img src={urlMedia+"vehicentro-logo-negro.png"} alt="Vehicentro logo" />
            </div>
            <div className='formHD'>
                <p className='titleHD'>HELPDESK VEHICENTRO</p>
                <FormHelpDesk />
            </div>
        </div>
    </>
}
export default HelpDesk