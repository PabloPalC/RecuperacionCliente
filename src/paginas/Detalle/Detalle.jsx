import './Detalle.css';
import { useParams } from 'react-router-dom';
import useRecetasID from '../../hooks/useRecetasID';
import AjaxLoader from '../../componentes/AjaxLoader/AjaxLoader';
import loader from '../../assets/img/ajax-loader.gif';

const Detalle = () => {

    const { id } = useParams();

    const { buscando, comida } = useRecetasID(id);

    if (!comida || comida.length === 0) {

        return <div><h4>No se encontraron recetas.</h4></div>;

    }

    return (
        <div>
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