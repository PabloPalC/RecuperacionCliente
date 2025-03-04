export async function getRecetasID(id) {
    const fetchRecetas = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const recetasResponse =  await fetch(fetchRecetas)
        .then(response => response.json());

        if(!recetasResponse) return "No hay recetas disponibles";

    const receta = recetasResponse.meals.map(parteReceta => ({
        id: parteReceta.idMeal,
        nombre: parteReceta.strMeal,
        categoria: parteReceta.strCategory,
        area: parteReceta.strArea
    }));

    return {
        receta
    };
}