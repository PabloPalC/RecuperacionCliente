import './Detalle.css';
import { useParams } from 'react-router-dom';
import useRecetasID from '../../hooks/useRecetasID';
import AjaxLoader from '../../componentes/AjaxLoader/AjaxLoader';
import loader from '../../assets/img/ajax-loader.gif';

const Detalle = () => {

    {/* Usamos el hook useParams para obtener el id de la 
        receta que esta en la URL que le pasamos en el APP */}
        
    const { id } = useParams();

    {/* Usamos el hook useRecetasID para obtener la receta por id */}
    const { buscando, comida } = useRecetasID(id);
    
    {/* Si no hay recetas, mostramos un mensaje */}

    if (!comida || comida.length === 0) {

        return <div><h4>No se encontraron recetas.</h4></div>;

    }

    return (
        <div>
            { /* Si estamos buscando, mostramos el loader, sino, mostramos las recetas */ }

            { buscando ? <AjaxLoader loader={loader}></AjaxLoader> : comida.map((receta) => (
                <div key={receta.id}>
                    <h2>{receta.nombre}</h2>
                    <p>Categoría: {receta.categoria}</p>
                    <p>Area: {receta.area} </p>
                </div>
            ))}
        </div>
    );
};

export default Detalle;