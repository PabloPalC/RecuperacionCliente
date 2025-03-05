import './Home.css'
import Botonera from '../../componentes/Botonera/Botonera';
import Datos from '../../componentes/Datos/Datos';
import useRecetas from '../../hooks/useRecetas';
const Home = () => {

    const {buscando, listaRecetas, obtenerRecetas} = useRecetas();

    return(
        <div>

            {/* Usamos el componente Botonera para mostrar los botones de las letras */}

            {/* Al componente Botonera le pasamos la funcion obtenerRecetas */}

        <Botonera obtenerRecetas={obtenerRecetas}></Botonera>

            {/* Usamos el componente Datos para mostrar las recetas */}

            {/* Al componente Datos le pasamos la lista de recetas y el estado buscando */}
            
        <Datos recetas={listaRecetas} buscando={buscando}></Datos>

    </div>
    )
    
};

export default Home;