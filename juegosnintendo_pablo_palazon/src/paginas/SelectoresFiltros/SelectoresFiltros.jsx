import FiltroCategoria from '../../componentes/FiltroCategoria/FiltroCategoria';
import FiltroFecha from '../../componentes/FiltroFecha/FiltroFecha';
import FiltroNota from '../../componentes/FiltroNota/FiltroNota';
import './SelectoresFiltros.css';
import React from 'react';

const SelectoresFiltros = (props) => {
    return (
        <div className='filtros'>

            {/* Filtro por categoría */}

            <FiltroCategoria manejarSeleccionCategoria={props.manejarSeleccionCategoria} 
                categoriaElegida={props.categoriaElegida}></FiltroCategoria>
             {/* Le pasamos la función para manejar la 
                    selección de categoría y la categoría elegida que cogemos del componente Padre Home */}

            <FiltroFecha manejarFechaOrden={props.manejarFechaOrden} ordenFecha={props.ordenFecha}></FiltroFecha>

            <FiltroNota manejarNotaOrden={props.manejarNotaOrden} ordenNota={props.ordenNota}></FiltroNota>

               
        </div>
    );
};

export default SelectoresFiltros;