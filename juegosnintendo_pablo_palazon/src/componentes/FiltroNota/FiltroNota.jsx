import './FiltroNota.css';

const FiltroNota = (props) => {

    function asignarNota(event){

        {/* Manejamos la selección de categoría */}

        props.manejarNotaOrden(event.target.value); 

        // Llamamos a la función para manejar la selección de categoría

        {/* Actualizamos el estado de categoría seleccionada */}
    };

    return (
        <div className='ordenarNota'>

            <h4>Ordenar por valoración</h4>

            <select onChange={asignarNota} value={props.ordenNota}> 

                {/* Asignamos la función para manejar la ordenacion de la nota elegida */}
                <option value="Mejores">Mejor Valoración</option>

                <option value="Peores">Peor Valoración</option>

            </select>
        </div>
    );
};
export default FiltroNota;