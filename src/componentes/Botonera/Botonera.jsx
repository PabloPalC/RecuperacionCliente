import './Botonera.css';
import letras from '../../mocks/mock-Abecedario';

const Botonera = () => {

    function mostrarLetras(letra, index){
        return <button key={index}>{letra}</button>
    }

    return(
        <nav className='botonera'>
            {letras.map(mostrarLetras)}
        </nav>
    )
};

export default Botonera;