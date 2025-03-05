export async function getRecetasID(id) {

    {/* Obtenemos las recetas por ID */}

    const fetchRecetas = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    {/* Obtenemos las recetas */}

    const recetasResponse =  await fetch(fetchRecetas)
        .then(response => response.json());


    {/* Mapeamos las recetas para obtener solo los datos que nos interesan */}

    const receta = recetasResponse.meals.map(parteReceta => ({
        id: parteReceta.idMeal,
        nombre: parteReceta.strMeal,
        categoria: parteReceta.strCategory,
        area: parteReceta.strArea
    }));
    
    {/* Retornamos las recetas */}
    return {
        receta
    };
}