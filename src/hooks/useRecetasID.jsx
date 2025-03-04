import { useEffect, useState } from "react";
import { getRecetasID } from "../servicios/getRecetasID";

function useRecetasID(idSeleccionado){   

    const [comida, setComida] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerComida(){
        
            setBuscando(true);

            getRecetasID(idSeleccionado).then(data => {

                setComida(data.receta);

                setBuscando(false);

            });
    }
    useEffect(obtenerComida, []);

    return { buscando, comida };
}

export default useRecetasID;