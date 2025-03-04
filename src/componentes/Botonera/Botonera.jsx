import './Botonera.css';
import letras from '../../mocks/mock-Abecedario';

const Botonera = (props) => {

   

    return(
        <nav className='botonera'>
            {letras.map((letra) => (
                <button key={letra} onClick={() => props.obtenerRecetas(letra)}>
                    {letra}
                </button>
            )
        )}
        </nav>
    )
};

export default Botonera;