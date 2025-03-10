export async function getPerfumes() {

    {/* Obtenemos los perfumes */}

    const fetchPerfumes = `/api/api/HgYvr1w`;

    const perfumesResponse =  await fetch(fetchPerfumes)
        .then(response => response.json());
    
    {/* Mapeamos los perfumes para obtener solo los datos que nos interesan */}

    {/* Si no hay perfumes , retornamos un array vacio para posteriormente
         mostrar un mensaje en el componente ListaPerfumes que es donde se muestra listaPerfumes*/}

    if (!perfumesResponse || perfumesResponse.length === 0) {
        return {listaPerfumes: []};
    }

    const listaPerfumes = perfumesResponse.map(perfume => ({
        id: perfume.id,
        nombre: perfume.nombre,
        categoria: perfume.categoria,
        marca: perfume.marca,
    }));

    console.log(listaPerfumes);
    {/* Retornamos los perfumes */}
    return {
        listaPerfumes
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