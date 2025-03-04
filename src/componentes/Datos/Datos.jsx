import { useNavigate } from 'react-router-dom';
import './Datos.css';
import AjaxLoader from '../AjaxLoader/AjaxLoader';
import loader from '../../assets/img/ajax-loader.gif';

const Datos = (props) => {

    const navigate = useNavigate();
    
    function mostrarComida(id) {
        navigate(`/comida/${id}`);
    }

    return (
       <div>
        
               {props.buscando ? <AjaxLoader loader={loader}></AjaxLoader>
                                : props.recetas.map((receta) => (
                                    <button key={receta.id} className="botonRecetas" onClick={() => mostrarComida(receta.id)}>
                                        <img src={receta.foto} alt="Imagen Foto" />
                                        <p>{receta.categoria}</p>
                                        <p>{receta.nombre}</p>
                                    </button>
                                ))}
               
       </div>
    );
};
export default Datos;