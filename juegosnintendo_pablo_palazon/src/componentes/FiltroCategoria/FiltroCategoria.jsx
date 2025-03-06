import './FiltroCategoria.css';
import React from 'react';
import categorias from '../../mocks/categorias-Mock';

const FiltroCategoria = (props) => {

    function mostrarCategorias(categoria){

        return (
            <option key={categoria} value={categoria}>{categoria}</option> 
        );
            {/* Mostramos las categorías */}
    };

    function asignarCategoria(event){

        {/* Manejamos la selección de categoría */}

        props.manejarSeleccionCategoria(event.target.value); 

        // Llamamos a la función para manejar la selección de categoría

        {/* Actualizamos el estado de categoría seleccionada */}
    };

    return (
        <div className='filtroCategoria'>

            <h4>Filtro por Categoría</h4>

            <select onChange={asignarCategoria} value={props.categoriaElegida}> 
                {/* Asignamos la función para manejar la selección de categoría y la categoría elegida */}
                <option value="Todas">Todas</option>

                {/* Mostramos la opción "Todas" */}

                {categorias.map(mostrarCategorias)} {/* Mostramos las categorías */}

            </select>
        </div>
    );
};

export default FiltroCategoria;