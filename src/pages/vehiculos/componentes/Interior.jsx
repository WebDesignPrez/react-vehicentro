import env from './../../../config'

import './styles/interior.css'


const Interior = () => {
  const urlMedia = env.url + "vehiculos/"

  console.log(urlMedia);
  return (
    <div>

      <h3>Upscale interior</h3>

      {/* Caracteristicas */}
      <div>

        <div>
          <h4>Pantalla multimedia</h4>
          <p>The available 12.3-inch Dual Panoramic Displays
            with navigation offer over a combined 24-inches of
            touchscreen for entertainment, convenience, and
            more.
          </p>
        </div>

        <div>
          <h4>Premium Seating Trim</h4>
          <p>The available 12.3-inch Dual Panoramic Displays
            with navigation offer over a combined 24-inches of
            touchscreen for entertainment, convenience, and
            more.
          </p>
        </div>

        <div>
          <h4>A first class Second row</h4>
          <p>The available 12.3-inch Dual Panoramic Displays
            with navigation offer over a combined 24-inches of
            touchscreen for entertainment, convenience, and
            more.
          </p>
        </div>

      </div>

      <img src={urlMedia + "imagenInterior.webp"} alt="" />

    </div>

  )
}

export default Interior