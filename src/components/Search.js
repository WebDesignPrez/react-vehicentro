import { useState } from "react"
import { NavLink } from "react-router-dom"

function SearchBar(){

    let indexData = [{
        url: "camiones/camion-de-3-5-toneladas-1057",
        descripcion: "Camión de 3.5 toneladas 1057",
        tags: ['3.5 ton', 'camion', '3.5 toneladas', '1057']
    }, {
        url: "camiones/camion-de-3-6-toneladas",
        descripcion: "Camión de 3.6 toneladas",
        tags: ['3.6 ton', 'camion', '3.6 toneladas']
    }, {
        url: "camiones/camion-de-5-toneladas-1067",
        descripcion: "Camión de 5 toneladas",
        tags: ['5 ton', 'camion', '5 toneladas', '1067']
    }, {
        url: "camiones/camion-de-6-toneladas-1067",
        descripcion: "Camión de 6 toneladas",
        tags: ['6 ton', 'camion', '6 toneladas', '1067']
    }, {
        url: "camiones/camion-8-toneladas-1147",
        descripcion: "Camión de 8 toneladas 1147",
        tags: ['8 ton', 'camion', '8 toneladas', '1147']
    }, {
        url: "camiones/camion-de-9-toneladas",
        descripcion: "Camión de 9 toneladas",
        tags: ['9 ton', 'camion', '9 toneladas']
    }, {
        url: "camiones/camion-10-toneladas-t5g-1167",
        descripcion: "Camión de 10 toneladas T5G 1167",
        tags: ['10 ton', 'camion', '10 toneladas', 't5g', '1167']
    }, {
        url: "camiones/camion-12-toneladas-t5g-1167",
        descripcion: "Camión de 12 toneladas T5G 1167",
        tags: ['12 ton', 'camion', '12 toneladas', 't5g', '1167']
    }, {
        url: "camiones/camion-13-toneladas-t5g-1167",
        descripcion: "Camión de 13 toneladas T5G 1167",
        tags: ['13 ton', 'camion', '13 toneladas', 't5g', '1167']
    }, {
        url: "camiones/camion-13-toneladas-t5g-1167-330hp",
        descripcion: "Camión de 13 toneladas T5G 1167 330HP",
        tags: ['13 ton', 'camion', '13 toneladas', '330HP']
    }, {
        url: "camiones/camion-de-18-toneladas-t5g-1257",
        descripcion: "Camión de 18 toneladas T5G 1257",
        tags: ['18 ton', 'camion', '18 toneladas']
    }, {
        url: "camiones/camion-de-19-toneladas-t5g-1257",
        descripcion: "Camión de 19 toneladas T5G 1257",
        tags: ['19 ton', '19 toneladas', 'camion']
    }, {
        url: "cabezales/cabezal-t5g-4187",
        descripcion: "Cabezal T5G 4187",
        tags: ['cabezal', 't5g', '4187']
    }, {
        url: "cabezales/cabezal-t7h-390-28-toneladas",
        descripcion: "Cabezal T7H 390 28 toneladas",
        tags: ['cabezal', 't7h', '28 toneladas', '28 ton', '390']
    }, {
        url: "cabezales/cabezal-28-toneladas-retardador",
        descripcion: "Cabezal 28 toneladas retardador",
        tags: ['cabezal', 't7h', '28 toneladas', '28 ton', 'retardador']
    }, {
        url: "cabezales/cabezal-t7h-390-42-toneladas",
        descripcion: "Cabezal T7H 390 42 toneladas",
        tags: ['cabezal', 't7h', '42 toneladas', '42 ton']
    }, {
        url: "cabezales/cabezal-t7h-430-45-toneladas",
        descripcion: "Cabezal T7H 430 45 toneladas",
        tags: ['cabezal', 't7h', '45 toneladas', '45 ton']
    }, {
        url: "camiones/camion-20-toneladas-1256",
        descripcion: "Camión de 20 toneladas 1256",
        tags: ['20 ton', 'camion', '1256']
    }, {
        url: "cabezales/cabezal-c7h-540",
        descripcion: "Cabezal C7H 540",
        tags: ['cabezal', '540', 'c7h']
    }, {
        url: "cabezales/cabezal-c7h-540-catalinas-48-toneladas",
        descripcion: "Cabezal C7H 540 Catalinas 40 toneladas",
        tags: ['40 ton', '40', 'cabezal', 'catalinas', 'c7h']
    }, {
        url: "volquetas/volqueta-t5g-280",
        descripcion: "Volqueta T5G 280",
        tags: ['volqueta', 't5g', '280']
    }, {
        url: "volquetas/volqueta-t7h-430",
        descripcion: "Volqueta T7H 430",
        tags: ['volqueta', 't7h', '430']
    }, {
        url: "volquetas/volqueta-c7h-540",
        descripcion: "Volqueta C7H 540",
        tags: ['volqueta', 'c7h', '540']
    }, {
        url: "mixer/mixer-a7-1257",
        descripcion: "Mixer A7 1257",
        tags: ['mixer', 'A7', '1257']
    }, {
        url: "excavadoras/swe210",
        descripcion: "Excavadora SWE210",
        tags: ['excavadora', 'excavadoras','swe', '210']
    }, {
        url: "excavadoras/swe365e",
        descripcion: "Excavadora SWE365e",
        tags: ['excavadora', 'excavadoras','swe', '365e']
    }, {
        url: "concesionarios",
        descripcion: "Concesionarios a nivel nacional",
        tags: ['quito', 'ambato', 'guayaquil', 'riobamaba', 'machala', 'cuenca', 'ibarra', 'manta', 'contacto', 'direccion', 'telefono', 'telefonos', 'ciudad']
    }]

    const [menuBusqueda, setMenu] = useState([]);
    const handleChange = (event) => {
        setMenu([])
        let s
        if (event.target.value.length > 0) {
            indexData.forEach(a => {
                s = a.tags
                 if (s.includes(event.target.value)) {
                       setMenu(menuBusqueda => [...menuBusqueda, { url: a.url, desc: a.descripcion }])
                } 
            })
        }
    }

    return (
        <div className="navSearch">
            <input className="search-nav-input" data-testid="search-input" type="search" title="Search" placeholder="Buscar..." id="global-search-input" onChange={handleChange} />
            {menuBusqueda.length > 0 &&
                <div className="result">
                    {menuBusqueda.map((item, index) => (
                        <li key={item.url}>
                            <NavLink to={item.url}>
                                {item.desc}
                            </NavLink>
                        </li>
                    ))}
                </div>
            }
        </div>
    )
}
export default SearchBar