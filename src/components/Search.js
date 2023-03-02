import { useState } from "react"
import { NavLink } from "react-router-dom"

function SearchBar(){

    let indexData = [{
        url: "camiones/camion-8-toneladas-1147",
        descripcion: "Camion de 8 toneladas",
        tags: ['8 ton', 'camion', '8 toneladas']
    }, {
        url: "camiones/camion-5-toneladas-1147",
        descripcion: "Camion de 5 toneladas",
        tags: ['5 ton', 'camion', '5 toneladas']
    }]

    const [message, setMessage] = useState('');
    const [menuBusqueda, setMenu] = useState([]);

    var obj
    const handleChange = (event) => {
        setMenu([])
        let s
        if (event.target.value.length > 0) {
            indexData.forEach(a => {
                s = a.tags

                //console.log(s)

                 if (s.includes(event.target.value)) {
                    //a.resultados.forEach(res => {
                        //console.log(a.url)

                        setMenu(menuBusqueda => [...menuBusqueda, { url: a.url, desc: a.descripcion }])
                        
                   //})

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