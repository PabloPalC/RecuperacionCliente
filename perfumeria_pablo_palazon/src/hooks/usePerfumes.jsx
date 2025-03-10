import { useEffect, useState } from "react";
import { getPerfumes } from "../servicios/getPerfumes";

const usePerfumes = () => {    
    
    {/* Estados */}
    
    const [listaPerfumes, setListaPerfumes] = useState([]);
    const [buscando, setBuscando] = useState(false);

    {/* Función para obtener los perfumes */}

    function obtenerPerfumes() {

        {/* Cambiamos el estado de buscando */}

        setBuscando(true);

        {/* Obtenemos los perfumes */}

        getPerfumes().then(data => {
            
            {/* Guardamos los perfumes en el estado */}

            setListaPerfumes(data.listaPerfumes);

            {/* Cambiamos el estado de buscando */}

            setBuscando(false);
        });
    }

    {/* Cargar perfumes al montar el componente */}

    useEffect(obtenerPerfumes, []);
    {/* Retornamos los perfumes y el estado de buscando */}
    return {buscando, listaPerfumes};

}

export default usePerfumes;