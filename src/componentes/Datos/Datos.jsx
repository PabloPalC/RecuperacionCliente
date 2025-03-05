import { useNavigate } from 'react-router-dom';
import './Datos.css';
import AjaxLoader from '../AjaxLoader/AjaxLoader';
import loader from '../../assets/img/ajax-loader.gif';
import likeIcon from '../../assets/img/like.svg';
import unlikeIcon from '../../assets/img/unlike.svg';
import { useState, useEffect } from 'react';


const Datos = (props) => {

    // Hook de navegación

    const navigate = useNavigate();

    // Estado de favoritos

    const [favoritos, setFavoritos] = useState([]);

    // Manejar favoritos

    function manejarFavoritos(){

        // Cargar favoritos de localStorage

        const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];

        // Actualizar el estado de favoritos

        setFavoritos(favoritosGuardados);
    }


    // Cargar favoritos al montar el componente

    useEffect(manejarFavoritos, []);
    

    function manejarClickFavorito(recetaId){

        // Si la receta está en favoritos, la quitamos

        let nuevosFavoritos;

        // Si la receta no está en favoritos, la agregamos

        if (favoritos.includes(recetaId)) {

            // Quitamos la receta de favoritos

            nuevosFavoritos = favoritos.filter(fav => fav !== recetaId);

        } else {

            // Agregamos la receta a favoritos

            nuevosFavoritos = [...favoritos, recetaId];

        }
            // Actualizamos el estado de favoritos

        setFavoritos(nuevosFavoritos);

            // Guardamos en localStorage

        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

    };

    // Función para mostrar la comida

    function mostrarComida(id) {
        navigate(`/comida/${id}`);
    }

    return (
        <div>

            {/* Si estamos buscando, mostramos el loader, si no, mostramos las recetas */}

            {props.buscando ? <AjaxLoader loader={loader}></AjaxLoader>
                : props.recetas.map((receta) => ( 
                    <div key={receta.id} className="receta">

                        {/* Botón para mostrar la comida */}

                        <button className="botonRecetas" onClick={() => mostrarComida(receta.id)}>
                            <img src={receta.foto} alt="Imagen Foto" />
                            <p>{receta.categoria}</p>
                            <p>{receta.nombre}</p>
                        </button>

                        {/* Botón para agregar a favoritos */}

                        <img
                            src={favoritos.includes(receta.id) ? likeIcon : unlikeIcon}
                            alt="like"
                            onClick={() => manejarClickFavorito(receta.id)}
                            className="like-icon"
                        />
                    </div>
                ))}
        </div>
    );
};

export default Datos;