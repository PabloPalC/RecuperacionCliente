export async function getRecetas(letra='a') {

    {/* Obtenemos las recetas que empiecen por la letra seleccionada */}

    const fetchRecetas = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`;

    {/* Obtenemos las recetas */}
    const recetasResponse =  await fetch(fetchRecetas)
        .then(response => response.json());
    
    {/* Mapeamos las recetas para obtener solo los datos que nos interesan */}

    {/* Si no hay recetas o la letra no es válida, retornamos un array vacio para posteriormente
         mostrar un mensaje en el componente Datos que es donde se muestra listaRecetas*/}

    if (!recetasResponse.meals || recetasResponse.meals.length === 0 || letra === 'Ñ') {
        return {listaRecetas: []};
    }

    const listaRecetas = recetasResponse.meals.map(parteReceta => ({
        id: parteReceta.idMeal,
        nombre: parteReceta.strMeal,
        foto: parteReceta.strMealThumb,
        categoria: parteReceta.strCategory
    }));

    {/* Retornamos las recetas */}
    return {
        listaRecetas
    };
}