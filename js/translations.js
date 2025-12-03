// translations.js
const translations = {
  es: {
    toggleIngredients: "Mostrar detalles de la receta",

    plantFeatures: "Características de la planta",
    ingredientsHeader: "Ingredientes",
    preparationHeader: "Preparación",
    recommendationsHeader: "Recomendaciones",
    precautionsHeader: "Precauciones importantes",
    backHome: "← Volver al inicio"
  },
  maya: { // clave "maya" (coincide con lo que guarda script.js)
    toggleIngredients: "Táan u béet u mejenil le ts’aako’",
   
    plantFeatures: "U tsa’ikal le páak’alo’",
    ingredientsHeader: "U máatsilo’ob",
    preparationHeader: "Bix u beetaj",
    recommendationsHeader: "U táanil beeta’al",
    precautionsHeader: "U táatsil / U ku yila’al",
    backHome: "← Táan u suut a k’áanche’"
  }
};

// Esta función la usa info.js (y también existe una versión similar en script.js).
// Si ya tienes applyTranslationsLocal en script.js puedes omitirla aquí, pero ponerla aquí
// garantiza que info.html la encuentre.
function applyTranslationsLocal() {
  const saved = localStorage.getItem('site_lang') || 'es';
  const lang = saved === 'maya' ? 'maya' : 'es';

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}
