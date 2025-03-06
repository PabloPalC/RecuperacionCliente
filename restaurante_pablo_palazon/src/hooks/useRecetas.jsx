import { useEffect, useState } from "react";
import { getRecetas } from "../servicios/getRecetas";

const useRecetas = () => {    
    
    {/* Estados */}
    
    const [listaRecetas, setListaRecetas] = useState([]);
    const [buscando, setBuscando] = useState(false);

    {/* Función para obtener las recetas */}

    function obtenerRecetas(letraSeleccionada) {

        {/* Cambiamos el estado de buscando */}

        setBuscando(true);

        {/* Obtenemos las recetas */}

        getRecetas(letraSeleccionada).then(data => {
            
            {/* Guardamos las recetas en el estado */}

            setListaRecetas(data.listaRecetas);

            {/* Cambiamos el estado de buscando */}

            setBuscando(false);
        });
    }

    {/* Cargar recetas al montar el componente */}

    useEffect(obtenerRecetas, []);

    {/* Retornamos tambien la funcion porque nos hace falta en Datos para ordenar por letra. */}

    return {buscando, listaRecetas, obtenerRecetas};

}

export default useRecetas;