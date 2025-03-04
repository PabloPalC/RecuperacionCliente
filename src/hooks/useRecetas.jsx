import { useEffect, useState } from "react";
import { getRecetas } from "../servicios/getRecetas";
import { set } from "react-hook-form";

const useRecetas = () => {    
    const [listaRecetas, setListaRecetas] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerRecetas() {

        setBuscando(true);

        getRecetas().then(data => {
            setListaRecetas(data.listaRecetas);

            setBuscando(false);
        });
    }

    useEffect(obtenerRecetas, []);

    return {buscando, listaRecetas};

}

export default useRecetas;