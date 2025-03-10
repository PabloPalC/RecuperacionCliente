import FiltroCategoria from '../../componentes/FiltroCategoria/FiltroCategoria';

import './SelectoresFiltros.css';
import React from 'react';

const SelectoresFiltros = (props) => {
    return (
        <div className='filtros'>

            {/* Filtro por categoría */}

            <FiltroCategoria manejarSeleccionCategoria={props.manejarSeleccionCategoria} 
                categoriaElegida={props.categoriaElegida} perfumes={props.perfumes}></FiltroCategoria>
             {/* Le pasamos la función para manejar la 
                    selección de categoría y la categoría elegida que cogemos del componente Padre Home */}
                    
            {/* Tambien le paso los perfumes ya que recorro los perfumes para obtener las categorias. */}

               
        </div>
    );
};

export default SelectoresFiltros;