export async function getJuegos() {

    {/* Obtenemos los juegos */}

    const fetchJuegos = `/api/api/gEGCcwY`;

    {/* Obtenemos los juegos */}
    const juegosResponse =  await fetch(fetchJuegos)
        .then(response => response.json());
    
    {/* Mapeamos los juegos para obtener solo los datos que nos interesan */}

    {/* Si no hay juegos , retornamos un array vacio para posteriormente
         mostrar un mensaje en el componente ListaJuegos que es donde se muestra listaJuegos*/}

    if (!juegosResponse || juegosResponse.length === 0) {
        return {listaJuegos: []};
    }

    const listaJuegos = juegosResponse.map(dato => ({
        id: dato.id,
        nombre: dato.nombre,
        categoria: dato.categorias,
        fecha: dato.fechaLanzamiento,
        nota: dato.nota,
    }));

    
    {/* Retornamos los juegos */}
    return {
        listaJuegos
    };
}


// Es otra manera de hacer el fetch pero lo entiendo mejor de la otra manera peor lo dejo aquí por si acaso.

// export function getJuegos() {

//     const fetchJuegos = `/api/api/gEGCcwY`;

//     return fetch(fetchJuegos)
//         .then(response => response.json())
//         .then(juegosResponse => {

//             if (!juegosResponse || juegosResponse.length === 0) {
//                 return { listaJuegos: [] };
//             }


//             const listaJuegos = juegosResponse.map(dato => ({
//                 id: dato.id,
//                 nombre: dato.nombre,
//                 categoria: dato.categorias,
//                 fecha: dato.fechaLanzamiento,
//                 nota: dato.nota,
//             }));

//             return { listaJuegos };
//         });
// }