// info.js

// Función auxiliar para obtener el nombre de la planta de la URL
function getPlantNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    // Obtiene el valor del parámetro 'planta' y lo decodifica
    const plantName = urlParams.get('planta');
    return plantName ? decodeURIComponent(plantName) : null;
}

// Función auxiliar para buscar la planta en el array global (definido en script.js)
function findPlantData(name) {
    // Usamos el array global 'plantasData' definido en plantas-data.js
    if (typeof plantasData === 'undefined') {
        console.error('Error: El array plantasData no está definido.');
        return null;
    }
    return plantasData.find(p => p.nombre === name);
}

// Función auxiliar para crear y renderizar listas (ul o ol)
function createAndRenderList(items, targetId, ordered = false) {
    const listElement = document.getElementById(targetId);
    if (!listElement || !items || items.length === 0) {
        // Opcional: Ocultar el grupo si no hay contenido (ej: Recomendaciones)
        // Esto depende de tu HTML, pero por ahora solo limpiamos.
        listElement.innerHTML = ''; 
        return;
    }
    
    listElement.innerHTML = ''; // Limpiar lista

    items.forEach(item => {
        const li = document.createElement('li');
        
        if (typeof item === 'object' && item.icon) {
            // Maneja el formato de características: { icon, text }
            // Asume que item.text ya está en el idioma correcto
            li.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
        } else {
            // Maneja listas simples de texto
            li.textContent = item; // Asume que item ya está en el idioma correcto
        }
        listElement.appendChild(li);
    });
}


function renderRecipe(planta) {
    // 1. Manejo de errores
    if (!planta) {
        document.getElementById('recipe-main-title').textContent = 'Error: No se especificó el nombre de la planta.';
        return;
    }

    // ------------------------------------------------------------------
    // LÓGICA DE IDIOMA - EL CÓMO
    // Obtener el idioma actual. Si no existe, usa 'es' (español).
    const currentLang = localStorage.getItem('site_lang') || 'es';
    const langSuffix = currentLang === 'maya' ? '_maya' : '';

    
    // Función auxiliar para obtener un campo.
    // Intenta usar campo_maya, si no existe, usa campo_base (español).
    const getField = (baseFieldName) => {
        const fieldName = baseFieldName + langSuffix;
        // La sintaxis planta[fieldName] accede dinámicamente al campo (ej: planta['desc_maya'])
        return planta[fieldName] || planta[baseFieldName]; 
    };
    // ------------------------------------------------------------------


    // 2. Cargar datos
    
    // Imagen
    document.getElementById('plant-image').src = planta.imagen;
    document.getElementById('plant-image').alt = 'Imagen de la planta ' + planta.nombre;

    // Títulos y Resumen usando la función getField()
    const mainTitle = getField('receta_titulo');
    document.getElementById('recipe-main-title').textContent = mainTitle;
    document.getElementById('page-title').textContent = mainTitle; 

    document.getElementById('recipe-summary').textContent = getField('desc'); 
    
    // Características
    const caracteristicasList = getField('caracteristicas');
    createAndRenderList(caracteristicasList, 'plant-features-list');

    // Título de la sección de receta
    document.getElementById('recipe-title-detail').textContent = getField('receta_titulo');

    // Ingredientes
    const ingredientesList = getField('ingredientes_receta');
    createAndRenderList(ingredientesList, 'recipe-ingredients-list');

    // Preparación
    const preparacionList = getField('preparacion');
    createAndRenderList(preparacionList, 'recipe-steps-list', true); 

    // Recomendaciones
    const recomendacionesList = getField('recomendaciones');
    createAndRenderList(recomendacionesList, 'recipe-recommendations-list');

    // Precauciones
    const precaucionesList = getField('precauciones');
    createAndRenderList(precaucionesList, 'recipe-precautions-list');
    
    
    // 3. Lógica de botones y funcionalidad de la UI
    // Lógica del botón de colapsar/expandir
    const toggleBtn = document.getElementById('toggle-ingredients');
    const detailsPanel = document.getElementById('ingredients');
    if (toggleBtn && detailsPanel) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = detailsPanel.classList.contains('hidden');
            detailsPanel.classList.toggle('hidden', !isHidden);
            // NOTA: El texto del botón se traduce con data-translate en info.html
            // Por lo tanto, no es necesario cambiar su .textContent aquí.
        });
    }

    // Lógica del botón de imprimir
    const printBtn = document.getElementById('print-btn');
    if(printBtn){
        printBtn.addEventListener('click', ()=> window.print());
    }

    // Lógica del botón de favoritos
    const fav = document.getElementById('fav-btn');
    if(fav){
        fav.addEventListener('click', ()=>{
            const pressed = fav.getAttribute('aria-pressed') === 'true';
            fav.setAttribute('aria-pressed', (!pressed).toString());
            fav.classList.toggle('fav', !pressed);
        })
    }


    // 4. Aplicar traducciones
    // Esto asegura que todos los elementos con data-translate se actualicen
    if (typeof applyTranslationsLocal === 'function') {
        applyTranslationsLocal();
    }
}

// Iniciar la carga de la receta cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplicar tema oscuro
    try {
        const savedTheme = localStorage.getItem('site_theme');
        if (savedTheme === 'dark') document.body.classList.add('dark-mode');
    } catch (e) {
        // ignore if localStorage not available
    }
    
    // 2. Cargar datos
    const plantName = getPlantNameFromURL();
    if (plantName) {
        // Nota: asume que plantasData está cargado (lo está por el tag script en info.html)
        const plantData = findPlantData(plantName);
        renderRecipe(plantData);
    } else {
        document.getElementById('recipe-main-title').textContent = 'Error: No se especificó el nombre de la planta.';
    }
});