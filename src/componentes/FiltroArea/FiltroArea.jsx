import useAreas from '../../hooks/useAreas';
import React from 'react';
import './FiltroArea.css';

const FiltroArea = (props) => {

    // Obtenemos las areas

    const areas = useAreas();


    function mostrarAreas(area) {
        {/* Mostramos las areas en el select */}
        return (<option key={area.area} value={area.area}>{area.area}</option>);
    }

    function asignarArea(event) {

        {/* Manejamos la seleccion de area */}

        {/* Le pasamos el valor seleccionado al componente padre Home */}
        {/* para que filtre las recetas por area */} 

        props.manejarSeleccionArea(event.target.value);

    }

    return (
        <div className='selector'>

            <label>Areas: </label>

            {/* Mostramos un select con las areas */}

            <select onChange={asignarArea} value={areas.area}> 

            {/* Le pasamos el valor seleccionado
             y la función para manejar la selección de area al select */}

                {/* Opción para mostrar todas las areas */}
                <option value="Todas">Todas</option>

                {/* Mostramos todas las areas */}

                {areas.listaAreas.map(mostrarAreas)}

            </select>
        </div>
    );
};

export default FiltroArea;