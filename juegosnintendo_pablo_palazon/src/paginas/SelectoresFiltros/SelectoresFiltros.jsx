import FiltroCategoria from '../../componentes/FiltroCategoria/FiltroCategoria';
import './SelectoresFiltros.css';
import React, { useState, useEffect } from 'react';
const SelectoresFiltros = (props) => {

    
    return (
        <div className='filtros'>
            <FiltroCategoria manejarSeleccionCategoria={props.manejarSeleccionCategoria}></FiltroCategoria>
        </div>
    );
};

export default SelectoresFiltros;