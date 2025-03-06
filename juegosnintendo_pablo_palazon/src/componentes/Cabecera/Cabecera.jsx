import './Cabecera.css';
import logo from '../../assets/img/logoVideojuegos.png';
import { Link } from 'react-router-dom';

const Cabecera = () => {
    return(
        <header>
            <Link to='/' className='cabecera'>
            
            {/* En el componente Cabecera, estamos usando el componente Link de react-router-dom 
                para navegar a la página de inicio */} 

                <img src={logo} alt="logo juego" />
                <h4>videojuegos<strong className='rojo'>.es</strong></h4>
            </Link>
        </header>
    );
};

export default Cabecera;