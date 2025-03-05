export async function getRecetas(letra='a') {

    {/* Obtenemos las recetas que empiecen por la letra seleccionada */}

    const fetchRecetas = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`;

    {/* Obtenemos las recetas */}

    const recetasResponse =  await fetch(fetchRecetas)
        .then(response => response.json());
    
    {/* Mapeamos las recetas para obtener solo los datos que nos interesan */}
    
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