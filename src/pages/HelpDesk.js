import FormHelpDesk from '../components/FormHelpDesk'

function HelpDesk(){
    return <>
        <div className="containerHD">
            
            <div className='imageHD'>
                <img src="./images/vehicentro-logo-negro.png" alt="Vehicentro logo" />
            </div>
            <div className='formHD'>
                <p className='titleHD'>HELPDESK VEHICENTRO</p>
                <FormHelpDesk />
            </div>
        </div>
    </>
}
export default HelpDesk