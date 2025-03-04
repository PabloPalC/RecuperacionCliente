import { useEffect, useState } from "react";
import { getRecetas } from "../servicios/getRecetas";

const useRecetas = () => {    
    const [listaRecetas, setListaRecetas] = useState([]);
    const [buscando, setBuscando] = useState(false);


    function obtenerRecetas(letraSeleccionada) {

        setBuscando(true);

        getRecetas(letraSeleccionada).then(data => {
            setListaRecetas(data.listaRecetas);

            setBuscando(false);
        });
    }

    useEffect(obtenerRecetas, []);

    return {buscando, listaRecetas, obtenerRecetas};

}

export default useRecetas;