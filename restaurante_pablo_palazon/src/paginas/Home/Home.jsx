import './Home.css';
import Botonera from '../../componentes/Botonera/Botonera';
import Datos from '../../componentes/Datos/Datos';
import useRecetas from '../../hooks/useRecetas';
import FiltroArea from '../../componentes/FiltroArea/FiltroArea';
import { useState, useEffect } from 'react';

const Home = () => {

    // Hook de recetas

    const { buscando, listaRecetas, obtenerRecetas } = useRecetas();

    // Estado para el area seleccionada

    const [areaElegida, setAreaElegida] = useState("Todas");

    // Estado para las recetas filtradas

    const [recetasFiltradas, setRecetasFiltradas] = useState([]);

    // Filtramos las recetas por area

    function filtrarPorArea(){

        {/* Filtramos las recetas por area */}

        if (areaElegida === "Todas") { // Si se selecciona "Todas" mostramos todas las recetas

            setRecetasFiltradas(listaRecetas); // Actualizamos el estado de recetas filtradas

        } else { // Si se selecciona un area mostramos las recetas de esa area

            setRecetasFiltradas(listaRecetas.filter(receta => receta.area === areaElegida)); // Actualizamos el estado de recetas filtradas
        }

    };

    {/* Filtramos las recetas por area */}

    useEffect(filtrarPorArea, [areaElegida, listaRecetas]); // Cada vez que cambie el area seleccionada o la lista de recetas


    function manejarSeleccionArea(area) {

        {/* Manejamos la seleccion de area */}

        setAreaElegida(area);

        {/* Actualizamos el estado de area seleccionada */}
    }

    return (
        <div>

            {/* Mostramos la botonera, el filtro de areas y los datos */}

            {/* Le pasamos la función para obtener recetas */}
            <Botonera obtenerRecetas={obtenerRecetas}></Botonera>

            {/* Le pasamos la función para manejar la selección de area al componente hijo */}
            <FiltroArea manejarSeleccionArea={manejarSeleccionArea}></FiltroArea>

            {/* Le pasamos las recetas filtradas y si se está buscando */}
            <Datos recetas={recetasFiltradas} buscando={buscando}></Datos>

        </div>
    );
};

export default Home;