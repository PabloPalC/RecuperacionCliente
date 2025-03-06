import { useEffect, useState } from "react";
import { getRecetasID } from "../servicios/getRecetasID";

function useRecetasID(idSeleccionado){  {/* Hook para obtener una receta por ID */}

    {/* Estados */}

    const [comida, setComida] = useState([]);
    const [buscando, setBuscando] = useState(false);

    {/* Función para obtener la comida */}

    function obtenerComida(){
        
            setBuscando(true);

        {/* Obtenemos la comida */}

            getRecetasID(idSeleccionado).then(data => { 

        {/* Guardamos la comida en el estado */}  

                setComida(data.receta);

                setBuscando(false);

            });
    }
    
    {/* Cargar comida al montar el componente */}

    useEffect(obtenerComida, []);

    {/* Retornamos la comida pero no la funcion ya que no la pasamos a ningun componente
         y el estado de buscando */}
         
    return { buscando, comida };
}

export default useRecetasID;