import './BusquedaJuego.css';

const BusquedaJuego = (props) => {
    return (
        <div className='busquedaJuego'>
            <h4>Buscar Juego</h4>
            <input 
                type="text" 
                placeholder="Buscar juego..." 
                value={props.keyword}
                onChange={props.manejarBusqueda}
            />
        </div>
    );
};

export default BusquedaJuego;