import './FiltroFecha.css';

const FiltroFecha = (props) => {

    function asignarFecha(event){

        {/* Manejamos la selección de categoría */}

        props.manejarFechaOrden(event.target.value); 

        // Llamamos a la función para manejar la selección de categoría

        {/* Actualizamos el estado de categoría seleccionada */}
    };

    return (
        <div className='ordenarFecha'>

            <h4>Ordenar por fecha</h4>

            <select onChange={asignarFecha} value={props.ordenFecha}> 

                {/* Asignamos la función para manejar la ordenacion de la fecha elegida */}
                <option value="Nuevos">Más recientes</option>

                <option value="Antiguos">Más Antiguos</option>

            </select>
        </div>
    );
};
export default FiltroFecha;