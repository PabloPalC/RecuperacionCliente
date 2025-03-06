export async function getAreas() {

    {/* Obtenemos las areas */}

    const fetchAreas = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;

    {/* Obtenemos las areas */}
    
    const areasResponse =  await fetch(fetchAreas)
        .then(response => response.json());
    
    {/* Mapeamos las recetas para obtener solo los datos que nos interesan */}

    const listaAreas = areasResponse.meals.map(area => ({
        area: area.strArea,
    }));

    {/* Retornamos las recetas */}
    return {
        listaAreas
    };
}