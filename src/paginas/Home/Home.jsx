import './Home.css'
import Botonera from '../../componentes/Botonera/Botonera';
import Datos from '../../componentes/Datos/Datos';
import useRecetas from '../../hooks/useRecetas';
const Home = () => {

    const {buscando, listaRecetas, obtenerRecetas} = useRecetas();

    return(
        <div>

        <Botonera obtenerRecetas={obtenerRecetas}></Botonera>
        <Datos recetas={listaRecetas} buscando={buscando}></Datos>

    </div>
    )
    
};

export default Home;