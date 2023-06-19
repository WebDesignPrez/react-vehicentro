import env from './../../../config'
import './styles/vehiculo.css'

const Vehiculo = () => {

  const urlMedia = env.url + "vehiculos/"
  return (
    <div className='vehiculos'>

      <img src={urlMedia + 'vehiculo.jpeg'} alt="" />

      <div className='description'>
        <h4>Stand up to the elements.</h4>
        <p>Having been tested in some of the coldest climates on the planet, the EV6 is designed to handle the elements. Even in challenging weather, the EV6 can help keep you comfortable and in control with no sacrifice to speed. Take on more with these available features:</p>
        <ul>
          <li> A Heat Pump, which helps preserve all-electric range in cold weather driving conditions1 </li>
          <li>Standard heated front seats and available heated rear seats to help keep you and your passengers comfortable2</li>
          <li>Heated steering wheel designed to warm your hands on cold days</li>
          <li>Dual Motor e-All Wheel Drive3</li>
          <li>Standard remote start with cabin preconditioning4</li>
        </ul>

      </div>
    </div>
  )
}

export default Vehiculo