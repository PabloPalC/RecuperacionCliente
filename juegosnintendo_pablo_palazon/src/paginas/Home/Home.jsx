import ListaJuegos from '../../componentes/ListaJuegos/ListaJuegos';
import SelectoresFiltros from '../SelectoresFiltros/SelectoresFiltros';
import './Home.css';
import React, { useState, useEffect } from 'react';
import useJuegos from '../../hooks/useJuegos';

const Home = () => {

    const { listaJuegos, buscando } = useJuegos(); // Hook de juegos

    const [categoriaElegida, setCategoriaElegida] = useState("Todas"); // Estado para la categoría seleccionada

    const [juegosFiltrados, setJuegosFiltrados] = useState([]); // Estado para los juegos filtrados

    function filtrarPorCategoria() { // Filtramos los juegos por categoría

        if (categoriaElegida === "Todas") {

            setJuegosFiltrados(listaJuegos); // Si se selecciona "Todas" mostramos todos los juegos

        } else {

            setJuegosFiltrados(listaJuegos.filter(juego => juego.categoria === categoriaElegida)); // Si se selecciona una categoría mostramos los juegos de esa categoría

        }
    }

    useEffect(filtrarPorCategoria, [categoriaElegida, listaJuegos]); // Cada vez que cambie la categoría seleccionada o la lista de juegos

    function manejarSeleccionCategoria(categoria){
        setCategoriaElegida(categoria); // Manejamos la selección de categoría
    };

    return (
        <div>
            <div className='home'>

                <h1 className='titulo'>Juegos de Nintendo</h1> {/* Título de la página */}

                <ListaJuegos juegos={juegosFiltrados} buscando={buscando}></ListaJuegos> {/* Le pasamos los juegos filtrados y si estamos buscando */}

            </div>

            <div className='filtros'>

                <SelectoresFiltros manejarSeleccionCategoria={manejarSeleccionCategoria} categoriaElegida={categoriaElegida}></SelectoresFiltros> 
                
                {/* Le pasamos la función para manejar la selección de categoría y la categoría elegida */}

            </div>
        </div>
    );
};

export default Home;