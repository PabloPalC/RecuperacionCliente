import './FiltroCategoria.css';

import React from 'react';
import categorias from '../../mocks/categorias-Mock';
import useJuegos from '../../hooks/useJuegos';

const FiltroCategoria = (props) => {

    const {juegos} = useJuegos();

    function mostrarCategorias(categoria) {
        
        return (
            <option key={categoria} value={categoria}>{categoria}</option>)
    };

    function asignarCategoria(event) {

        {/* Manejamos la seleccion de area */}

        {/* Le pasamos el valor seleccionado al componente padre SelectoresFiltros */}
        {/* para que filtre las recetas por area */} 

        props.manejarSeleccionCategoria(event.target.value);

    }

    return (
        <div className='filtroCategoria'>
            <h4>Filtro por Categoría</h4>

            {/* Mostramos un select con las categorias */}

            <select onChange={asignarCategoria} value={juegos?.categoria}> 

            {/* Le pasamos el valor seleccionado
             y la función para manejar la selección de categoria al select */}

                {/* Opción para mostrar todas las categorias */}
                <option value="Todas">Todas</option>

                {/* Mostramos todas las categorias */}

                {categorias.map(mostrarCategorias)}

            </select>
        </div>
    );
};

export default FiltroCategoria;