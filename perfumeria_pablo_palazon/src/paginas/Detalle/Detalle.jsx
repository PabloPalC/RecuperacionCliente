import { useEffect, useState } from "react";
import { useParams } from "react-router";
import usePerfumes from "../../hooks/usePerfumes";
import AjaxLoader from "../../componentes/AjaxLoader/AjaxLoader";
import loader from "../../assets/img/ajax-loader.gif";

const Detalle = () => {

    const { id } = useParams(); // Obtenemos el id de los parámetros de la URL

    const {listaPerfumes, buscando} = usePerfumes(); // Obtenemos la lista de perfumes y el estado de buscando

    const [perfume, setPerfume] = useState(null); // Estado para el perfume

    function buscarPerfume(){ 
        const perfumeEncontrado = listaPerfumes.find(perfume => perfume.id === String(id)); // Buscamos el perfume por id
        setPerfume(perfumeEncontrado); // Guardamos el perfume encontrado
    }

    useEffect(buscarPerfume, [id, listaPerfumes]); // Cada vez que cambie el id o la lista de perfumes

    console.log(perfume); 

    return (
        <div>
            {buscando ? <AjaxLoader loader={loader}></AjaxLoader>  // Si estamos buscando, mostramos el loader
                : perfume ? ( // Si encontramos el perfume, mostramos los datos
                    <div>
                        <h3>{perfume.nombre}</h3>
                        <p>Categoria: {perfume.categoria}</p> {/* Mostramos los datos del perfume */}
                        <p>Marca: {perfume.marca}</p>
                    </div>
                ) : <h4>Perfume no encontrado</h4>
            }
        </div>
    )
}
export default Detalle;