export async function getRecetas() {
    const fetchRecetas = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`;

    const recetasResponse =  await fetch(fetchRecetas)
        .then(response => response.json());

    const listaRecetas = recetasResponse.meals.map(parteReceta => ({
        id: parteReceta.idMeal,
        nombre: parteReceta.strMeal,
        foto: parteReceta.strMealThumb,
        categoria: parteReceta.strCategory
    }));

    return {
        listaRecetas
    };
}