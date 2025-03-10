import ListaJuegos from '../../componentes/ListaJuegos/ListaJuegos';
import SelectoresFiltros from '../SelectoresFiltros/SelectoresFiltros';
import './Home.css';
import React, { useState, useEffect, use } from 'react';
import usePerfumes from '../../hooks/usePerfumes';
import BusquedaJuego from '../../componentes/BusquedaJuego/BusquedaJuego';

const Home = () => {

    const { listaPerfumes, buscando } = usePerfumes(); // Hook de perfumes

    const [categoriaElegida, setCategoriaElegida] = useState("Todas"); // Estado para la categoría seleccionada

    const [perfumesFiltrados, setPerfumesFiltrados] = useState([]); // Estado para los perfumes filtrados

    const [keyword, setKeyword] = useState(""); // Estado para el el juego buscado

    

    //FILTRAR POR CATEGORIA

    function filtrarPorCategoriayNombre() { // Filtramos los perfumes por categoría

        let perfumesFiltrados = listaPerfumes; // Inicializamos los perfumes filtrados con la lista de perfumes
        
        if (categoriaElegida !== "Todas") { // Si se selecciona una categoría
            perfumesFiltrados = (listaPerfumes.filter(juego => juego.categoria === categoriaElegida));

            // Si se selecciona una categoría mostramos los perfumes de esa categoría
        }

        if (keyword) {

            perfumesFiltrados = (listaPerfumes.filter(juego => juego.nombre.toLowerCase().includes(keyword.toLowerCase()))); 
            // Si se selecciona una categoría mostramos los perfumes de esa categoría
        }
        
        setPerfumesFiltrados(perfumesFiltrados); // Si no se selecciona ninguna categoría mostramos todos los perfumes
}

    useEffect(filtrarPorCategoriayNombre, [categoriaElegida, listaPerfumes, keyword]); // Cada vez que cambie la categoría seleccionada o la lista de perfumes

    function manejarSeleccionCategoria(categoria){
        setCategoriaElegida(categoria); // Manejamos la selección de categoría
    };

    function manejarBusqueda(event) {
        setKeyword(event.target.value); // Manejamos la búsqueda de perfumes
    }

    return (
        <div>
            <div className='home'>

                <h1 className='titulo'>Perfumes Lujosos</h1> {/* Título de la página */}

                <BusquedaJuego keyword={keyword} manejarBusqueda={manejarBusqueda}></BusquedaJuego>

                <ListaJuegos perfumes={perfumesFiltrados} buscando={buscando}></ListaJuegos> {/* Le pasamos los perfumes filtrados y si estamos buscando */}

            </div>

            <div className='filtros'>

                <SelectoresFiltros manejarSeleccionCategoria={manejarSeleccionCategoria} categoriaElegida={categoriaElegida}
                                    perfumes={listaPerfumes}>
                </SelectoresFiltros> 
                
                {/* Le pasamos la función para manejar la selección de categoría y la categoría elegida */}

            </div>
           
        </div>
    );
};

export default Home;


//ES OTRA MANERA DE HACERLO EN UNICA FUNCION Y CON UN SOLO USE EFFECT.

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