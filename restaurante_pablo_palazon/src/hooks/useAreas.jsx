import { useEffect, useState } from "react";
import { getAreas } from "../servicios/getAreas";

const useAreas = () => {    
    
    {/* Estados */}
    
    const [listaAreas, setListaAreas] = useState([]);

    {/* Función para obtener las areas */}

    function obtenerAreas() {

        {/* Obtenemos las areas */}

        getAreas().then(data => {
            
            {/* Guardamos las areas en el estado */}

            setListaAreas(data.listaAreas);
        });
    }

    {/* Cargar areas al montar el componente */}
    
    useEffect(obtenerAreas, []);

    {/* Retornamos tambien la funcion porque nos hace falta en Datos para filtrar por area. */}

    return {listaAreas};

}

export default useAreas;