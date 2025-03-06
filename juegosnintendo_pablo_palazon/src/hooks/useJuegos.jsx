import { useEffect, useState } from "react";
import { getJuegos } from "../servicios/getJuegos";

const useJuegos = () => {    
    
    {/* Estados */}
    
    const [listaJuegos, setListaJuegos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    {/* Función para obtener los juegos */}

    function obtenerJuegos() {

        {/* Cambiamos el estado de buscando */}

        setBuscando(true);

        {/* Obtenemos los juegos */}

        getJuegos().then(data => {
            
            {/* Guardamos los juegos en el estado */}

            setListaJuegos(data.listaJuegos);

            {/* Cambiamos el estado de buscando */}

            setBuscando(false);
        });
    }

    {/* Cargar juegos al montar el componente */}

    useEffect(obtenerJuegos, []);

    {/* Retornamos los juegos y el estado de buscando */}
    console.log(listaJuegos);
    return {buscando, listaJuegos};

}

export default useJuegos;