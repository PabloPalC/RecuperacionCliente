import './ListaJuegos.css';
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import loader from '../../assets/img/ajax-loader.gif';
import { useNavigate } from "react-router-dom";
import fotoPerfume from '../../assets/img/perfume.png';
const ListaJuegos = (props) => {

    const navigate = useNavigate();

    function mostrarJuego(id) {
        navigate(`/juego/${id}`);
    };
    console.log(props.perfumes);
    return(

        <div className="listaJuegos">

            {/* Si estamos buscando, mostramos el loader, si no, mostramos las recetas */}

            {/* Si no hay juegos, mostramos un mensaje */}

            {props.buscando
                ? <AjaxLoader loader={loader}></AjaxLoader>

                :  !props.perfumes || props.perfumes.length === 0 ? <h4>No se encontraron perfumes.</h4>
                
                : props.perfumes.map((perfume) => ( 
                    <div key={perfume.id} className="juego">

                        {/* Botón para mostrar el juego */}

                        <button className="botonJuegos" onClick={() => mostrarJuego(perfume.id)}>
                            <p><strong>Nombre: </strong>{perfume.nombre}</p>
                            <img src={fotoPerfume} alt="" />
                            <p><strong>Categoria: </strong> {perfume.categoria}</p>
                            <p><strong>Marca: </strong>{perfume.marca}</p>
                        </button>


                    </div>
                ))}
        </div>
    );

};

export default ListaJuegos;