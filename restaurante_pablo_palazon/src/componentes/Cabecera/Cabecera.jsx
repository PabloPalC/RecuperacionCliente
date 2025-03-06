import './Cabecera.css';
import logo from '../../assets/img/logoRestaurante.png';
import { Link } from 'react-router-dom';

const Cabecera = () => {
    return(
        <header>
            <Link to='/' className='cabecera'>
            
            {/* En el componente Cabecera, estamos usando el componente Link de react-router-dom 
                para navegar a la página de inicio */} 

                <img src={logo} alt="logo restaurante" />
                <h4>preparaTuComida<strong className='verde'>.com</strong></h4>
            </Link>
        </header>
    );
};

export default Cabecera;