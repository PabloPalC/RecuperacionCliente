import useJuegos from "../../hooks/useJuegos";
import './ListaJuegos.css';
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import loader from '../../assets/img/ajax-loader.gif';
import { useNavigate } from "react-router-dom";
import fotoJuego from '../../assets/img/fotoJuego.webp';
const ListaJuegos = (props) => {

    const navigate = useNavigate();

    function mostrarJuego(id) {
        navigate(`/juego/${id}`);
    };

    return(
        <div className="listaJuegos">

            {/* Si estamos buscando, mostramos el loader, si no, mostramos las recetas */}

            {/* Si no hay juegos, mostramos un mensaje */}

            {props.buscando
                ? <AjaxLoader loader={loader}></AjaxLoader>

                :  !props.juegos || props.juegos.length === 0 ? <h4>No se encontraron juegos.</h4>
                
                : props.juegos.map((juego) => ( 
                    <div key={juego.id} className="juego">

                        {/* Botón para mostrar el juego */}

                        <button className="botonJuegos" onClick={() => mostrarJuego(juego.id)}>
                            <p><strong>Nombre: </strong>{juego.nombre}</p>
                            <img src={fotoJuego} alt="" />
                            <p><strong>Categoria: </strong> {juego.categoria}</p>
                            <p><strong>Fecha de lanzamiento: </strong>{juego.fecha}</p>
                            <p><strong>Nota: </strong>{juego.nota}</p>
                        </button>


                    </div>
                ))}
        </div>
    );

};

export default ListaJuegos;