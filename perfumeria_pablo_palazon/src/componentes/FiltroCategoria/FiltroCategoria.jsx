import './FiltroCategoria.css';
import React from 'react';

const FiltroCategoria = (props) => {

    function obtenerCategorias(){
        const categoriasUnicas = props.perfumes.map(perfume => perfume.categoria); // Obtenemos las categorías únicas
        return [...new Set(categoriasUnicas)]; // Devolvemos las categorías únicas
        
    }; // Obtenemos las categorías


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

    const categoriasUnicas = obtenerCategorias(); // Obtenemos las categorías únicas
    
    return (
        <div className='filtroCategoria'>

            <h4>Filtro por Categoría</h4>

            <select onChange={asignarCategoria} value={props.categoriaElegida}> 
                {/* Asignamos la función para manejar la selección de categoría y la categoría elegida */}
                <option value="Todas">Todas</option>

                {/* Mostramos la opción "Todas" */}

                {categoriasUnicas.map(mostrarCategorias)} {/* Mostramos las categorías */}

            </select>
        </div>
    );
};

export default FiltroCategoria;