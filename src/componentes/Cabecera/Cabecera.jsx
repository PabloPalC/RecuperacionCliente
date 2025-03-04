import './Cabecera.css';
import logo from '../../assets/img/logoRestaurante.png';
import { Link } from 'react-router-dom';

const Cabecera = () => {
    return(
    <header>
        <Link to='/' className='cabecera'>
            <img src={logo} alt="logo restaurante" />
            <h4 className='titulo'>preparaTuComida.com</h4>
        </Link>
    </header>
    );
};

export default Cabecera;