const plantasData = [
    { 
        nombre: "Albahaca", nombreMaya: "Kakaltuum", equipo: "Equipo 6", tipo: "respiratorio", 
        cientifico: "Ocimum basilicum",
        desc: "Té para aliviar sofocación o estrés. Se recomienda una taza en ayunas y otra antes de dormir. (Precaución: No durante el embarazo).",
        imagen: "https://pxhere.com/es/photo/75211"
    },
    { 
        nombre: "Caña india", nombreMaya: "sak'ab o jíim", equipo: "Equipo N/A", tipo: "dolor", 
        cientifico: "Canna indica",
        desc: "Remedio de hojas calientes (emplasto) para el reumatismo y zonas adoloridas. (Precaución: No durante el embarazo).",
        imagen: "imagenes-web/cana_india.jpg"
    },
    { 
        nombre: "Chaya", nombreMaya: "Chay", equipo: "Equipo 6", tipo: "digestivo", 
        cientifico: "Cnidoscolus chayamansa",
        desc: "Infusión de tallos y hojas para diversas infecciones. (Precaución: No ingerir hojas crudas; evitar embarazo/lactancia).",
        imagen: "imagenes-web/chaya.png"
    },
    { 
        nombre: "Epazote", nombreMaya: "Lukum xi'iw", equipo: "Equipo 4", tipo: "digestivo", 
        cientifico: "Dysphania ambrosioides",
        desc: "Decocción desparasitante (solo una taza). También se usa en emplasto para picaduras y dolores articulares. (Prohibido en embarazo/lactancia).",
        imagen: "imagenes-web/epazote.png"
    },
    { 
        nombre: "Hierbabuena", nombreMaya: "Alaventa", equipo: "Equipo 4", tipo: "digestivo", 
        cientifico: "Mentha spicata",
        desc: "Infusión calmante estomacal, para náuseas y mejorar el sueño ligero. (Precaución: No en reflujo gastroesofágico).",
        imagen: "imagenes-web/hierbabuena.png"
    },
    { 
        nombre: "Jengibre", nombreMaya: "Jengibre", equipo: "Equipo 4", tipo: "respiratorio", 
        cientifico: "Zingiber officinale",
        desc: "Decocción calefactora, ideal con limón y miel. Útil para síntomas de resfriado. (Precaución: Causa acidez en gastritis).",
        imagen: "imagenes-web/jengibre.png"
    },
    { 
        nombre: "Maguey morado", nombreMaya: "Chak tsam", equipo: "Equipo 2", tipo: "digestivo", 
        cientifico: "Tradescantia spathacea",
        desc: "Té para usos cicatrizantes y desinflamatorios. (Precaución: No consumir en exceso; evitar embarazo/lactancia).",
        imagen: "/imagenes-web/maguey-morado.png"
    },
    { 
        nombre: "Manzanilla", nombreMaya: "Manzanilla", equipo: "Equipo 4", tipo: "dolor", 
        cientifico: "Matricaria chamomilla",
        desc: "Infusión calmante, segura para niños y ancianos. Usada para molestias digestivas leves y relajación.",
        imagen: "imagenes-web/manzanilla.png"
    },
    { 
        nombre: "Menta", nombreMaya: "mukuy xiiw", equipo: "Equipo 3", tipo: "digestivo", 
        cientifico: "Mentha",
        desc: "Té para tomar antes de dormir (mínimo 3 semanas). Ayuda a la relajación y digestión. (Precaución: No en reflujo gastroesofágico).",
        imagen: "/imagenes-web/menta.jpg"
    },
    { 
        nombre: "Naranjo (Hojas)", nombreMaya: "Pak'ál", equipo: "Equipo 4", tipo: "digestivo", 
        cientifico: "Citrus × sinensis",
        desc: "Infusión Calmante de Hojas de Naranja. Útil para calmar los nervios y mejorar el sueño ligero.",
        imagen: "imagenes-web/naranjo.png"
    },
    { 
        nombre: "Orégano", nombreMaya: "Xak'il che'", equipo: "Equipo 4", tipo: "respiratorio", 
        cientifico: "Lippia graveolens",
        desc: "Decocción caliente para problemas respiratorios. Se puede añadir miel y limón. (Precaución: Evitar en el embarazo).",
        imagen: "imagenes-web/oregano.png"
    },
    { 
        nombre: "Poleo y Estafiate", nombreMaya: "Polejo y Xicim", equipo: "Equipo 5", tipo: "digestivo", 
        cientifico: "Mentha pulegium y Artemisia ludoviciana",
        desc: "Té tradicional con jengibre para infecciones estomacales. (Prohibido en embarazo/lactancia. No tomar por más de 5 días).",
        imagen: ""
    },
    { 
        nombre: "Romero", nombreMaya: "Xol-té xnuk", equipo: "Equipo 4", tipo: "dolor", 
        cientifico: "Salvia rosmarinus",
        desc: "Compresa tópica para dolores musculares y tónico capilar para el cuero cabelludo.",
        imagen: "imagenes-web/romero.png"
    },
    { 
        nombre: "Ruda", nombreMaya: "k'ak'as ich", equipo: "Equipo 6", tipo: "dolor", 
        cientifico: "Ruta graveolens",
        desc: "Té para regulación menstrual y problemas digestivos leves. Máximo una taza al día por 3 días. (Estrictamente prohibido en el embarazo).",
        imagen: "imagenes-web/ruda.png"
    },
    { 
        nombre: "Sábila / Aloe vera", nombreMaya: "Tz'íitsíl che'", equipo: "Equipo 1", tipo: "piel", 
        cientifico: "Aloe Barbadenses Miller",
        desc: "Gel para combatir arrugas. Se usa para cremas, shampoo, agua desintoxicante y jabón. Retirar siempre la capa amarilla (látex).",
        imagen: "/imagenes-web/sabila.jpeg"
    },
    { 
        nombre: "Zacate Limón", nombreMaya: "su'uk pájte", equipo: "Equipo 5", tipo: "respiratorio", 
        cientifico: "Cymbopogon citratus",
        desc: "Expectorante para la tos con miel y limón. Tomar tibio para un mayor efecto. (No dar miel a menores de 1 año).",
        imagen: "imagenes-web/zacate_limon.png"
    }
];

// DOM referencias globales
let gridContainer;
let searchInput;
let filterSelect;
let sidebar;
let menuToggle;

function isDesktop() {
    return window.innerWidth >= 768;
}

function slugify(text) {
    return text.toString().toLowerCase()
        .normalize('NFD').replace(/\p{Diacritic}/gu, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim().replace(/\s+/g, '-');
}

function ordenarPlantas(data) {
    const dataCopy = [...data];
    return dataCopy.sort((a, b) => {
        return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
    });
}

function renderPlants(data) {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    if (data.length === 0) {
        gridContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">
                <i class="ph ph-plant" style="font-size: 4rem; opacity: 0.3;"></i>
                <p style="margin-top: 1rem; font-size: 1.1rem;">No se encontraron plantas con ese criterio.</p>
            </div>
        `;
        return;
    }

    data.forEach((planta) => {
        const card = document.createElement('div');
        card.className = 'plant-card';
        const imagenSrc = planta.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen';

        card.innerHTML = `
            <div class="plant-img-box">
                <span class="plant-team-badge">${planta.cientifico || ''}</span>
                <img src="${imagenSrc}" alt="${planta.nombre}" loading="lazy">
            </div>
            <div class="plant-content">
                <div class="plant-header">
                    <h3 class="plant-name" data-maya="${planta.nombreMaya}">${planta.nombre}</h3>
                </div>
                <p class="plant-cat"><i class="ph ph-tag"></i> ${planta.tipo}</p>
                <p class="plant-desc">${planta.desc}</p>
            </div>
        `;

        card.tabIndex = 0;
        card.setAttribute('role', 'link');
        card.style.cursor = 'pointer';

        card.addEventListener('click', () => {
            const nombrePlanta = encodeURIComponent(planta.nombre);
            window.location.href = `info.html?planta=${nombrePlanta}`;
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const nombrePlanta = encodeURIComponent(planta.nombre);
                window.location.href = `info.html?planta=${nombrePlanta}`;
            }
        });

        gridContainer.appendChild(card);
    });
    
    const langToggleLocal = document.getElementById('lang-toggle');
    const isMayaActive = langToggleLocal && langToggleLocal.checked;
    if (isMayaActive) {
        applyCardTranslations(true);
    }
}

function filtrarDatos() {
    const texto = searchInput.value.toLowerCase().trim();
    const categoria = filterSelect.value;

    let filtrados = plantasData.filter(item => {
        const coincideTexto = item.nombre.toLowerCase().includes(texto) || 
                             item.equipo.toLowerCase().includes(texto) ||
                             item.cientifico.toLowerCase().includes(texto) ||
                             (item.nombreMaya && item.nombreMaya.toLowerCase().includes(texto)); 
                             
        const coincideTipo = categoria === 'todos' || item.tipo === categoria;
        return coincideTexto && coincideTipo;
    });

    filtrados = ordenarPlantas(filtrados);
    renderPlants(filtrados);
}

function applyCardTranslations(isMayaActive) {
    const cardNames = document.querySelectorAll('.plant-name');
    cardNames.forEach(el => {
        const mayaName = el.getAttribute('data-maya');
        if (!mayaName) return;

        if (isMayaActive) {
            if (!el.dataset.original) el.dataset.original = el.textContent;
            el.textContent = mayaName;
        } else if (el.dataset.original) {
            el.textContent = el.dataset.original;
        }
    });
}

function initApp() {
    gridContainer = document.getElementById('plantas-grid');
    searchInput = document.getElementById('buscador');
    filterSelect = document.getElementById('filtro-enfermedad');
    sidebar = document.getElementById('sidebar');
    menuToggle = document.getElementById('menu-toggle');

    if (gridContainer) {
        renderPlants(ordenarPlantas(plantasData));
    }
    
    if (searchInput && !searchInput.dataset.inited) {
        searchInput.addEventListener('input', filtrarDatos);
        searchInput.dataset.inited = '1';
    }
    
    if (filterSelect && !filterSelect.dataset.inited) {
        filterSelect.addEventListener('change', filtrarDatos);
        filterSelect.dataset.inited = '1';
    }

    if (menuToggle && sidebar && !menuToggle.dataset.inited) {
        menuToggle.addEventListener('click', (e) => {
            if (isDesktop()) {
                document.body.classList.toggle('sidebar-hidden');
                localStorage.setItem('site_sidebar_hidden', document.body.classList.contains('sidebar-hidden'));
                sidebar.classList.remove('active');
            } else {
                sidebar.classList.toggle('active');
            }
            e.stopPropagation();
        });
        menuToggle.dataset.inited = '1';
    }
    
    if (isDesktop()) {
        const savedSidebar = localStorage.getItem('site_sidebar_hidden');
        if (savedSidebar === 'false') {
             document.body.classList.remove('sidebar-hidden');
        } else {
             document.body.classList.add('sidebar-hidden');
        }
    }

    if (!window.__clickOutsideAdded) {
        document.addEventListener('click', (e) => {
            const sb = document.getElementById('sidebar');
            const mt = document.getElementById('menu-toggle');
            if (!sb) return;
            
            const clickedOutside = !sb.contains(e.target) && 
                                  (!mt || !mt.contains(e.target));
            
            if (!clickedOutside) return;

            if (!isDesktop()) {
                if (sb.classList.contains('active')) sb.classList.remove('active');
            }
        });
        window.__clickOutsideAdded = true;
    }

    if (!window.__escapeAdded) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const sb = document.getElementById('sidebar');
                if (!sb) return;
                
                if (!isDesktop() && sb.classList.contains('active')) {
                    sb.classList.remove('active');
                } else if (isDesktop() && !document.body.classList.contains('sidebar-hidden')) {
                    document.body.classList.add('sidebar-hidden');
                    localStorage.setItem('site_sidebar_hidden', 'true');
                }
            }
        });
        window.__escapeAdded = true;
    }

    // TEMA
    const themeToggleInput = document.getElementById('theme-mode-toggle');
    if (themeToggleInput) {
        const savedTheme = localStorage.getItem('site_theme');
        const isDark = savedTheme === 'dark';

        if (isDark) {
            document.body.classList.add('dark-mode');
        }
        themeToggleInput.checked = isDark; 

        if (!themeToggleInput.dataset.inited) {
            themeToggleInput.addEventListener('change', () => {
                const isChecked = themeToggleInput.checked;
                document.body.classList.toggle('dark-mode', isChecked);
                localStorage.setItem('site_theme', isChecked ? 'dark' : 'light');
            });
            themeToggleInput.dataset.inited = '1';
        }
    }

    // IDIOMA - SOLUCIÓN DEFINITIVA PARA MÓVIL
    const langToggleLocal = document.getElementById('lang-toggle');
    let isMayaLocal = false;

    window.applyTranslationsLocal = function() {
        const lang = isMayaLocal ? 'my' : 'es';
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            
            if (el.dataset.originalEs === undefined) {
                el.dataset.originalEs = el.placeholder || el.textContent;
            }
    
            const translatedText = translations[key]?.[lang] ?? el.dataset.originalEs;
    
            if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
                el.placeholder = translatedText;
            } else {
                el.textContent = translatedText;
            }
        });
    
        applyCardTranslations(isMayaLocal);
    }

    if (langToggleLocal) {
        const savedLang = localStorage.getItem('site_lang');
        if (savedLang === 'maya') isMayaLocal = true;
        langToggleLocal.checked = isMayaLocal;
        
        if (!langToggleLocal.dataset.inited) {
            // Función para manejar el cambio de idioma
            const handleLangChange = () => {
                setTimeout(() => {
                    isMayaLocal = !!langToggleLocal.checked;
                    localStorage.setItem('site_lang', isMayaLocal ? 'maya' : 'es');
                    applyTranslationsLocal();
                }, 50);
            };
            
            // Event listener principal
            langToggleLocal.addEventListener('change', handleLangChange);
            
            // Para el label (que envuelve todo)
            const langLabel = document.querySelector('label[for="lang-toggle"]');
            if (langLabel) {
                langLabel.addEventListener('click', function(e) {
                    if (e.target === langLabel || e.target.classList.contains('slider')) {
                        e.preventDefault();
                        langToggleLocal.checked = !langToggleLocal.checked;
                        langToggleLocal.dispatchEvent(new Event('change'));
                    }
                });
                
                langLabel.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                    langToggleLocal.checked = !langToggleLocal.checked;
                    langToggleLocal.dispatchEvent(new Event('change'));
                }, { passive: false });
            }
            
            langToggleLocal.dataset.inited = '1';
        }
    }

    applyTranslationsLocal();

    try {
        const navLinks = document.querySelectorAll('.nav-links a');
        if (navLinks && navLinks.length) {
            const currentFile = (location.pathname.split('/').pop() || 'index.html');
            navLinks.forEach(a => {
                const href = (a.getAttribute('href') || '').split('/').pop();
                if (href === currentFile || (currentFile === 'info.html' && href === 'index.html')) {
                    a.classList.add('active');
                } else {
                    a.classList.remove('active');
                }
            });
        }
    } catch (err) {}
}

document.addEventListener('sidebarLoaded', () => {
    initApp();
    updateMobileHeaderPosition();
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('sidebar')) {
            initApp();
        }
    });
} else {
    if (document.getElementById('sidebar')) {
        initApp();
    }
}

function updateMobileHeaderPosition() {
    const sidebar = document.getElementById('sidebar');
    const mobileHeader = document.querySelector('.mobile-header');
    
    if (!sidebar || !mobileHeader) return;
    
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        const isActive = sidebar.classList.contains('active');
        if (isActive) {
            const sidebarRect = sidebar.getBoundingClientRect();
            const sidebarRightEdge = sidebarRect.width;
            mobileHeader.style.left = (sidebarRightEdge + 16) + 'px';
        } else {
            mobileHeader.style.left = '16px'; 
        }
    } else {
        const sidebarWidth = sidebar.offsetWidth;
        const sidebarHidden = document.body.classList.contains('sidebar-hidden');
        
        if (!sidebarHidden) {
            mobileHeader.style.left = (sidebarWidth + 32) + 'px';
        } else {
            mobileHeader.style.left = '32px';
        }
    }
}

const sidebarObserver = new MutationObserver(() => {
    updateMobileHeaderPosition();
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebarObserver.observe(sidebar, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });
    }
});

document.addEventListener('sidebarLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebarObserver.observe(sidebar, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });
        updateMobileHeaderPosition();
    }
});

window.addEventListener('load', () => {
    initApp(); 
    updateMobileHeaderPosition();
});
window.addEventListener('resize', updateMobileHeaderPosition);
