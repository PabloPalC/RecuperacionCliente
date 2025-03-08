import ListaJuegos from '../../componentes/ListaJuegos/ListaJuegos';
import SelectoresFiltros from '../SelectoresFiltros/SelectoresFiltros';
import './Home.css';
import React, { useState, useEffect, use } from 'react';
import useJuegos from '../../hooks/useJuegos';
import BusquedaJuego from '../../componentes/BusquedaJuego/BusquedaJuego';

const Home = () => {

    const { listaJuegos, buscando } = useJuegos(); // Hook de juegos

    const [categoriaElegida, setCategoriaElegida] = useState("Todas"); // Estado para la categoría seleccionada

    const [juegosFiltrados, setJuegosFiltrados] = useState([]); // Estado para los juegos filtrados

    const [juegosOrdenados, setJuegosOrdenados] = useState([]); // Estado para los juegos ordenados
    const [ordenFecha, setOrdenFecha] = useState("Nuevos"); // Estado para el orden de la fecha

    const [ordenNota, setNotaOrden] = useState("Mejores"); // Estado para el orden de la nota
    const [juegosOrdenadosNota, setJuegosOrdenadosNota] = useState([]); // Estado para los juegos ordenados por nota

    const [keyword, setKeyword] = useState(""); // Estado para el el juego buscado

    

    //FILTRAR POR CATEGORIA

    function filtrarPorCategoriayNombre() { // Filtramos los juegos por categoría

        let juegosFiltrados = listaJuegos; // Inicializamos los juegos filtrados con la lista de juegos
        
        if (categoriaElegida !== "Todas") { // Si se selecciona una categoría
            juegosFiltrados = (listaJuegos.filter(juego => juego.categoria === categoriaElegida));

            // Si se selecciona una categoría mostramos los juegos de esa categoría
        }

        if (keyword) {

          juegosFiltrados = (listaJuegos.filter(juego => juego.nombre.toLowerCase().includes(keyword.toLowerCase()))); 
            // Si se selecciona una categoría mostramos los juegos de esa categoría
        }
        
            setJuegosFiltrados(juegosFiltrados); // Si no se selecciona ninguna categoría mostramos todos los juegos
}

    useEffect(filtrarPorCategoriayNombre, [categoriaElegida, listaJuegos, keyword]); // Cada vez que cambie la categoría seleccionada o la lista de juegos

    function manejarSeleccionCategoria(categoria){
        setCategoriaElegida(categoria); // Manejamos la selección de categoría
    };

    //ORDENAR POR FECHA

    function ordenarPorFecha() { // Ordenamos los juegos por fecha
        
        // Si el orden de la fecha es "Nuevos" ordenamos los juegos de más reciente a más antiguo, si no, de más antiguo a más reciente
        ordenFecha === "Nuevos" 
        
        ? setJuegosOrdenados(juegosFiltrados.sort((a, b) =>  new Date(a.fecha) - new Date(b.fecha))) // Ordenamos los juegos de más reciente a más antiguo

        : setJuegosOrdenados(juegosFiltrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))); // Ordenamos los juegos de más antiguo a más reciente
        
    };  

    useEffect(ordenarPorFecha, [ordenFecha, juegosFiltrados]); // Cada vez que cambie el orden de la fecha o los juegos filtrados


    function manejarFechaOrden(fecha) {
        setOrdenFecha(fecha); // Manejamos el orden de la fecha
    }


    //ORDENAR POR NOTA

    function ordenarPorNota() { // Ordenamos los juegos por nota

           // Si el orden de la nota es "Mejores" ordenamos los juegos de más valorados a menos, si no, de menos a más
           ordenNota === "Mejores" 
        
           ? setJuegosOrdenadosNota(juegosOrdenados.sort((a, b) =>  (a.nota) - (b.nota))) // Ordenamos los juegos de más valorados a menos
   
           : setJuegosOrdenadosNota(juegosOrdenados.sort((a, b) => (b.nota) - (a.nota))); // Ordenamos los juegos de menos valorados a más.
           
       };

    function manejarNotaOrden(nota) {
        setNotaOrden(nota); // Manejamos el orden de la nota
    }
     
    useEffect(ordenarPorNota, [ordenNota, juegosOrdenados]); // Cada vez que cambie el orden de la nota o los juegos ordenados por fecha

    function manejarBusqueda(event) {
        setKeyword(event.target.value); // Manejamos la búsqueda de juegos
    }
    
    return (
        <div>
            <div className='home'>

                <h1 className='titulo'>Juegos de Nintendo</h1> {/* Título de la página */}

                <BusquedaJuego keyword={keyword} manejarBusqueda={manejarBusqueda}></BusquedaJuego>

                <ListaJuegos juegos={juegosOrdenadosNota} buscando={buscando}></ListaJuegos> {/* Le pasamos los juegos filtrados y si estamos buscando */}

            </div>

            <div className='filtros'>

                <SelectoresFiltros manejarSeleccionCategoria={manejarSeleccionCategoria} categoriaElegida={categoriaElegida}

                    manejarFechaOrden={manejarFechaOrden} ordenFecha={ordenFecha}

                    manejarNotaOrden={manejarNotaOrden} ordenNota={ordenNota}
                    
                ></SelectoresFiltros> 
                
                {/* Le pasamos la función para manejar la selección de categoría y la categoría elegida */}

            </div>
           
        </div>
    );
};

export default Home;


//ES OTRA MANERA DE HACERLO EN UNICA FUNCION Y CON UN SOLO USEEFFECT.

// const { listaJuegos, buscando } = useJuegos(); // Hook de juegos

//     const [categoriaElegida, setCategoriaElegida] = useState("Todas"); // Estado para la categoría seleccionada
//     const [ordenFecha, setOrdenFecha] = useState("Nuevos"); // Estado para el orden de la fecha
//     const [ordenNota, setNotaOrden] = useState("Mejores"); // Estado para el orden de la nota

//     const [juegosFiltrados, setJuegosFiltrados] = useState([]); // Estado para los juegos filtrados

//     // Función para aplicar todos los filtros
//     const aplicarFiltros = () => {
//         let juegosFiltrados = listaJuegos;

//         // Filtrar por categoría
//         if (categoriaElegida !== "Todas") {
//             juegosFiltrados = juegosFiltrados.filter(juego => juego.categoria === categoriaElegida);
//         }

//         // Ordenar por fecha
//         juegosFiltrados = juegosFiltrados.sort((a, b) => {
//             return ordenFecha === "Nuevos"
//                 ? new Date(b.fecha) - new Date(a.fecha)
//                 : new Date(a.fecha) - new Date(b.fecha);
//         });

//         // Ordenar por nota
//         juegosFiltrados = juegosFiltrados.sort((a, b) => {
//             return ordenNota === "Mejores"
//                 ? b.nota - a.nota
//                 : a.nota - b.nota;
//         });

//         setJuegosFiltrados(juegosFiltrados);
//     };

//     useEffect(aplicarFiltros, [categoriaElegida, ordenFecha, ordenNota, listaJuegos]); // Aplicar filtros cada vez que cambie algún estado

//     const manejarSeleccionCategoria = (categoria) => {
//         setCategoriaElegida(categoria); // Manejamos la selección de categoría
//     };

//     const manejarFechaOrden = (fecha) => {
//         setOrdenFecha(fecha); // Manejamos el orden de la fecha
//     };

//     const manejarNotaOrden = (nota) => {
//         setNotaOrden(nota); // Manejamos el orden de la nota
//     };

//     return (
//         <div>
//             <div className='home'>
//                 <h1 className='titulo'>Juegos de Nintendo</h1> {/* Título de la página */}
//                 <ListaJuegos juegos={juegosFiltrados} buscando={buscando}></ListaJuegos> {/* Le pasamos los juegos filtrados y si estamos buscando */}
//             </div>
//             <div className='filtros'>
//                 <SelectoresFiltros 

//                     manejarSeleccionCategoria={manejarSeleccionCategoria} categoriaElegida={categoriaElegida}

//                     manejarFechaOrden={manejarFechaOrden} ordenFecha={ordenFecha}

//                     manejarNotaOrden={manejarNotaOrden} ordenNota={ordenNota}

//                 ></SelectoresFiltros> 

//                 {/* Le pasamos la función para manejar la selección de categoría y la categoría elegida */}
//             </div>
//         </div>
//     );
// };