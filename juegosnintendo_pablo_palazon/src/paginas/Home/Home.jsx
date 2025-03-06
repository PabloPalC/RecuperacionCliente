import ListaJuegos from '../../componentes/ListaJuegos/ListaJuegos';
import SelectoresFiltros from '../SelectoresFiltros/SelectoresFiltros';
import './Home.css';
import React, { useState, useEffect } from 'react';
import useJuegos from '../../hooks/useJuegos';
const Home = () => {

    const { juegos } = useJuegos();

    // Estado para el juego seleccionado

    const [categoriaElegida, setCategoriaElegida] = useState("Todas");

    // Estado para los juegos filtradas

    const [juegosFiltrados, setJuegosFiltrados] = useState([]);

    // Filtramos las recetas por area

    function filtrarPorCategoria(){

        {/* Filtramos los juegos por categoria */}

        if (categoriaElegida === "Todas") { // Si se selecciona "Todas" mostramos todos los juegos

            setJuegosFiltrados(juegos); // Actualizamos el estado de recetas filtradas

        } else { // Si se selecciona un area mostramos las recetas de esa area

            setJuegosFiltrados(juegos?.filter(juego => juego?.categoria === categoriaElegida)); // Actualizamos el estado de recetas filtradas
        }

    };

    {/* Filtramos las recetas por area */}

    useEffect(filtrarPorCategoria, [categoriaElegida, juegos]); // Cada vez que cambie el area seleccionada o la lista de recetas


    function manejarSeleccionCategoria(categoria) {

        {/* Manejamos la seleccion de area */}

        setCategoriaElegida(categoria);

        {/* Actualizamos el estado de area seleccionada */}
    }

    return (
        <div>
            <div className='home'>
                <h1 className='titulo'>Juegos de Nintendo</h1>
                <ListaJuegos juegos={juegosFiltrados}></ListaJuegos>
            </div>
            <div className='filtros'>
                <SelectoresFiltros manejarSeleccionCategoria={manejarSeleccionCategoria}></SelectoresFiltros>
            </div> 
        </div>
       
            
        
    );
};

export default Home;