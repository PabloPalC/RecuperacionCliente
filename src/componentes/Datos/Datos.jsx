import useRecetas from '../../hooks/useRecetas';
import './Datos.css';

const Datos = () => {

    const recetas = useRecetas();

    return (
       <div>
               {recetas.listaRecetas.map((receta) => (
                        <button key={receta.id} className="botonRecetas">
                            <img src={receta.foto} alt="Imagen Foto" />
                            <p>{receta.categoria}</p>
                            <p>{receta.nombre}</p>
                        </button>
                    ))};
       </div>
    );
};
export default Datos;