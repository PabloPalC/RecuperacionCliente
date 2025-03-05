import './Botonera.css';
import letras from '../../mocks/mock-Abecedario';

const Botonera = (props) => {


    { /* Al hacer click en el botón, llamamos a la función obtenerRecetas 
        con la letra seleccionada */ }

    return(
        <nav className='botonera'>
            
            { /* Usamos el mock de letras para generar los botones */ }

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