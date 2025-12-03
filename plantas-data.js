// plantas-data.js
// Contiene todos los datos de las 11 plantas medicinales mayas con sus recetas detalladas.

const plantasData = [
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 1. ALBACA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Albahaca", 
        nombreMaya: "Kakaltuum", 
        equipo: "Equipo 6", 
        tipo: "respiratorio",
        cientifico: "Ocimum basilicum",
        desc: "Té para aliviar sofocación o estrés. Se recomienda una taza en ayunas y otra antes de dormir. (Precaución: No durante el embarazo).",
        imagen: "/imagenes-web/albahaca.jpg", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Té de albahaca para alivio de la sofocación o el estrés",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: suaves, opuestas, ovaladas y puntiagudas (3 a 5 cm).' },
            { icon: 'ph ph-palette', text: 'Color: verde intenso.' },
            { icon: 'ph ph-scent', text: 'Olor: presentan glándulas de aceite que le otorgan su característico aroma.' },
            { icon: 'ph ph-tree-evergreen', text: 'Tallo: tetragonal, erecto y muy ramificado, puede alcanzar los 50 metros de altura.' }
        ],
        ingredientes_receta: [
            'Hojas de albahaca (un puñado)',
            'Agua caliente (250 ml)'
        ],
        preparacion: [
            'Colocar un puñado de hojas de albahaca en una taza (250 ml) de agua caliente.',
            'Dejar reposar por 5 minutos.',
            'Colar la taza y beber el agua tibia con hojas.',
            'Se recomienda beber una taza en ayunas y otra antes de dormir.'
        ],
        recomendaciones: [
            'Beber el té despacio mientras respiras profundamente.',
            'Tomar por la noche (ayuda a mejorar el sueño ligero).',
            'Endulzar ligeramente (por ejemplo, con miel).'
        ],
        precauciones: [
            '🚫 **No recomendable durante el embarazo.** El consumo de grandes dosis podría causar efectos adversos.',
            'No tomar en exceso (riesgo de malestar estomacal, náuseas, irritación digestiva).',
            'Precaución si usas medicamentos (consultar antes de usar el remedio).'
        ],
        ingredientes_receta_maya: [
            "Xa’ak’il",
            "o le' u buka'an",
            "o chokoj ja' (250ml)"
        ],
        preparacion_maya: [
            "Beet:",
            "Ts’a u láap’ ti' jump'éel luuch  (250 ml) chokoj ja'.",
            "P'at u je’elel ichil 5 minutos.",
            "Ku ts'áabal u luuch chokoj ja' yéetel le'  ku k’ubentaj  u yuk'ik jump'éel luuch ich su’uk’in nak',  uláak bey ma' bin weenel.",
            "Yáantajo'ob ti' le páak'alo':",
            "Le': Albahaca yaan u le' mamaykil yaanti u le’  5 cm yéetel bek’ech",
            "Boonil: jump'éel boonil ya'ax boox.",
            "Book: Yaan tsaats ku ts'aik u book",
            "Vástago: U chun che’ yaan bix k'íintik, yéetel jach yan u le’, ka je'el",
            "páajtal u chukpachtik 50 metros ka'anilo'."

        ],
        
        recomendaciones_maya:[
            "Uk’ul té Chaambeli tan ch’a’ iik’ (je'el u páajtal u ma'alo'obkíinsik a óol.",
            "Yuk'ej áak'ab (ku yáantik ma'alo'obkíinsiko'ob u weenel ).",
            "Ch’ujukkinsej (utia'al jump'éel ma'alo'ob kiíl, je'el u páajtal u biilankiltej kaab, je'ebix)."

        ],
        
        precauciones_maya:[
            "Ma' beetik ichil le xyo’om. nukuch ts’aaki je'el u beetik éemel aal",
            "Ma' yuk'ej ti' jach yaáb (je'el u páajtal u betik la  xej.",
            "kanantabaj  wa táan yuk'ik u je’ ts’aak (k’aatchi’ bey ma' biilankiltej le ts’aakoj)."
        ],
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 2. CAÑA INDIA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Caña india", 
        nombreMaya: "sak’ab o jíim", 
        equipo: "Equipo 2", 
        tipo: "dolor",
        cientifico: "Canna indica",
        desc: "Emplasto de hojas para el reumatismo y alivio de zonas adoloridas.",
        imagen: "/imagenes-web/cana_india.jpg", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Remedio de hojas de Caña India para el reumatismo",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: grandes, alternas, prolongadas en su base, ovadas, hasta 60 cm de largo y puntiagudas.' },
            { icon: 'ph ph-flower-lotus', text: 'Flores: grandes y vistosas, color amarillo, anaranjado o rojo intenso.' },
            { icon: 'ph ph-tree-evergreen', text: 'Tallo: ramificado hacia la inflorescencia.' }
        ],
        ingredientes_receta: [
            'Hojas de caña india (las que necesites)',
            '1 litro de agua'
        ],
        preparacion: [
            'Limpiar las hojas.',
            'Hervir 1 litro de agua y colocar las hojas de caña (10 minutos por hoja).',
            'Aplicar las hojas calientes sobre zonas adoloridas a manera de emplasto.'
        ],
        recomendaciones: [
            'Escoger hojas frescas (verdes, firmes).',
            'No dejar reposar las hojas en la piel más de 10–15 minutos.',
            'Aplicar 1–2 veces al día si no hay irritación.',
            'Hacer prueba antes de usar una hoja completa.'
        ],
        precauciones: [
            '🚫 **No recomendable durante el embarazo** (consumo en grandes dosis podría causar efectos adversos).',
            'No usar en quemaduras graves; su uso tradicional es para quemaduras superficiales.',
        ]
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 3. CHAYA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Chaya", 
        nombreMaya: "Chay", 
        equipo: "Equipo 1", 
        tipo: "digestivo",
        cientifico: "Nidoscolus chayamansa",
        desc: "Infusión utilizada tradicionalmente para el tratamiento de diversas infecciones y problemas digestivos.",
        imagen: "/imagenes-web/chaya.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Infusión/Decocción de Chaya para diversas infecciones",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: hojas tiernas y tallos gruesos y suculentos.' },
            { icon: 'ph ph-warning', text: 'Variedades: domésticas (chaya mansa) y silvestres (chaya brava — con pelos punzantes irritantes).' },
            { icon: 'ph ph-tree-evergreen', text: 'Tamaño: puede alcanzar entre 5 y 6 metros de altura.' }
        ],
        ingredientes_receta: [
            '5 tallos de chaya',
            'Hojas de chaya (3 puñados)',
            'Agua (500 ml)'
        ],
        preparacion: [
            'Hervir 5 tallos y 3 puñados de hojas de chaya en 2 tazas de agua (500 ml) durante 5 minutos.',
            'La infusión resultante se toma como té o se aplica externamente según la afección.',
        ],
        recomendaciones: [
            'No agregar más hierbas para evitar efectos desconocidos.',
            'Si hay molestias digestivas, reducir o suspender el consumo.',
            'Si es la primera vez, iniciar con menos cantidad.'
        ],
        precauciones: [
            '🚫 **Evitar durante el embarazo y la lactancia.**',
            'Las hojas crudas no deben ingerirse (contienen compuestos tóxicos que deben eliminarse con calor).',
            'No inhalar el vapor mientras hierve (puede irritar ojos, nariz y garganta).',
        ],
        ingredientes_receta_maya:[
            "5 chun che’ Chaya",
	        "le’ chaya",
            "J'a' (500 ml)"


        ],
        preparacion_maya:[
            "Lookansaj jump'éel 5 chun che’ yéetel 3 láap’ le' Chaya ti' 2 luuch ja' (500 ml) ichil 5 minutos.",
            "Le ja’o p’áatoj ku uk'ulta bey xan ku cho´oboj tux yajo’"

        ],
        recomendaciones_maya:[
            "ma' tsaik uláak' xíiwo'obo' utia'al Jech elel yéetel táanil ma’ k’ajóol. ",
            "Paakat te bix u bin u tajal janal; Wa yaan k’uuxile wa chuupil u naa’k, xu'ulsiko'ob le jant p'áatalij wa p'atik u yuk'ik tumen chuka’an."

        ],
        precauciones_maya:[
            "Ma' beetik ichil le xyo’om. nukuch ts’aaki je'el u beetik éemel aal.", 
            "le' che’eche’ ma' k'a'abéet a uuk’ik, ma’ ch’a’ iik ka' jo'op' u ts'o'ok u páajtal u yajtala wicho'ob, ni' yéetel garganal. "

        ]
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 4. EPAZOTE (Decocción)
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Epazote", 
        nombreMaya: "Lukum xi’iw / Ku’ukum xi’iw", 
        equipo: "Equipo 3", 
        tipo: "digestivo",
        cientifico: "Dysphania ambrosioides",
        desc: "Decocción tradicionalmente usada como desparasitante. Se utiliza en la cocina por su aroma fuerte y peculiar.",
        imagen: "/imagenes-web/epazote.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Decocción Desparasitante de Epazote",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: alargadas, de color verde, irregulares y ligeramente pecioladas.' },
            { icon: 'ph ph-scent', text: 'Olor: aroma fuerte, penetrante, peculiar (descrito a veces como a trementina).' },
            { icon: 'ph ph-tree-evergreen', text: 'Tamaño: puede alcanzar entre 40 cm y 1 m.' },
            { icon: 'ph ph-flower-lotus', text: 'Flores: pequeñas, agrupadas en racimos o espigas.' }
        ],
        ingredientes_receta: [
            '3 hojas frescas de epazote',
            '1 taza de agua (250 ml)'
        ],
        preparacion: [
            'Coloca las hojas en el agua y ponla a hervir.',
            'Una vez que suelte el hervor, baja el fuego y déjalo cocinar suavemente por 5 minutos.',
            'Retíralo, tápalo y deja que se enfríe completamente.',
            'Cuela y bébetelo. **¡Solo una taza!**'
        ],
        recomendaciones: [
            'Usarlo con respeto y moderación.',
            'Tomarlo preferiblemente en ayunas si es para desparasitar.',
        ],
        precauciones: [
            '⚠️ **Contiene ascaridol; en dosis altas es tóxico.** Nunca exceder la dosis recomendada.',
            '🚫 **Estrictamente prohibido durante el embarazo y lactancia** (propiedades abortivas).',
            'No administrar a niños menores de 3 años sin supervisión médica.',
        ],
        ingredientes_receta_maya:[
            "Óox hoja epazote (ak').",
            "Jump’éel táasa’ ja’ (250 ml)."

        ],
        preparacion_maya:[
            "Túump’utik le hojajo’ ichil le ja’o’ ka k’áaxtik tu káaj.",
            "Tu’ux u ts’a’ak u k’áaj, chéen k’a’ajsik u k’áaj; k’a’ajsik tu yáanal 5 minutos.",
            "Ts’o’okol ka máak’; máan u k’áaj chéen tu ts’íikbal tu’ux ja’ sáamal.",
            "Ts’a’atik ka xa’ach’. Sóol jump’éel táasa’."

        ],
        recomendaciones_maya:[
           "Chéen jump’éel táasa’, ma’ a uk’ik ya’ab."  
        ],
        precauciones_maya:[
            "Jach k’a’ana’an: Ma’ a uk’ik wa yo’om ech, je’el u beetik u lóobil ti’ a paal.",
            "Ma’ a ts’áaik ti’ mejen paalal wa ma’ u ya’alik ts’ak yaj."
        ]
        
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 5. EPAZOTE (Emplasto)
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Epazote (Emplasto)", 
        nombreMaya: "Lukum xi’iw / Ku’ukum xi’iw", 
        equipo: "Equipo 3", 
        tipo: "piel",
        cientifico: "Dysphania ambrosioides",
        desc: "Emplasto para cuidado de la piel (picaduras, verrugas, golpes, torceduras e inflamaciones) y dolores articulares.",
        imagen: "/imagenes-web/epazote.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Emplasto de Epazote — Cuidado de la piel y alivio de dolores articulares",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: alargadas, de color verde, irregulares y ligeramente pecioladas.' },
            { icon: 'ph ph-scent', text: 'Olor: aroma fuerte, penetrante, peculiar.' },
            { icon: 'ph ph-bandage', text: 'Uso: Tradicionalmente aplicado en picaduras, verrugas, golpes e inflamaciones.' }
        ],
        ingredientes_receta: [
            'Hojas frescas de epazote',
            'Agua tibia',
            'Tela o gasa'
        ],
        preparacion: [
            'Machacar las hojas frescas hasta formar una pasta espesa.',
            'Aplicar tibio sobre la piel limpia y cubrir con tela/gasa por 15–20 minutos.',
            'Retirar y lavar la zona con agua tibia.'
        ],
        recomendaciones: [
            'Usarlo solo para molestias leves.',
            'Puedes mezclar con aceite de oliva o coco para aligerar irritación.',
            'Evitar dejar reposar más del tiempo recomendado.'
        ],
        precauciones: [
            'El aceite esencial puro debe usarse bajo orientación profesional (margen estrecho entre dosis terapéutica y tóxica).',
            'No usar en piel lesionada (heridas abiertas, ampollas, etc.).',
            'Evitar hojas contaminadas (hongos, manchas).',
        ]
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 6. HIERBABUENA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Hierbabuena", 
        nombreMaya: "Alaventa o Hierbabuena", 
        equipo: "Equipo 4", 
        tipo: "digestivo",
        cientifico: "Mentha spicata",
        desc: "Infusión digestiva que ayuda con náuseas y malestar estomacal. Rica en sabor y aroma mentolado.",
        imagen: "/imagenes-web/hierbabuena.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Infusión de Hierbabuena para el malestar estomacal",
        caracteristicas: [ 
            { icon: 'ph ph-scent', text: 'Olor: aroma intenso, fresco y mentolado.' },
            { icon: 'ph ph-leaf', text: 'Hojas: lanceoladas, bordes aserrados, textura rugosa, color verde brillante.' },
            { icon: 'ph ph-tree-evergreen', text: 'Tamaño: vive varios años y puede crecer hasta aproximadamente medio metro o un poco más.' }
        ],
        ingredientes_receta: [
            '1 cucharadita de hojas secas o 3 hojas frescas',
            '1 taza de agua (250 ml)'
        ],
        preparacion: [
            'Lavar hojas si son frescas.',
            'Calentar agua; cuando empiece a hervir (≈80°C), apagar el fuego.',
            'Agregar hierbabuena, tapar y reposar 5–7 minutos.',
            'Colar y beber tibia.'
        ],
        recomendaciones: [
            'No hervir las hojas directamente; añadir cuando el agua esté apagada.',
            'Moderación: 1–2 tazas al día.'
        ],
        precauciones: [
            '🚫 **No consumir si se padece reflujo gastroesofágico (GERD) o hernia hiatal.**',
            'Evitar consumo medicinal grande en embarazo y lactancia.',
            'No administrar infusiones concentradas a niños menores de 5 años.',
        ],
        ingredientes_receta_maya:[
            "7 ú lé si´is su’uk pájte.",
            "1 pe´ litro ja’.",
            "3 nu´ukul ka´ab.",
            "1 mulix."
        ],
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 7. JENGIBRE
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Jengibre", 
        nombreMaya: "Jengibre", 
        equipo: "Equipo 5", 
        tipo: "respiratorio",
        cientifico: "Zingiber officinale",
        desc: "Decocción calefactora tradicionalmente usada para el resfriado y alivio de molestias de garganta.",
        imagen: "/imagenes-web/jengibre.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Decocción Calefactora de Jengibre",
        caracteristicas: [ 
            { icon: 'ph ph-sun', text: 'Rizoma: tallo subterráneo grueso, nudoso, marrón claro por fuera y amarillo pálido por dentro; sabor picante.' },
            { icon: 'ph ph-leaf', text: 'Hojas: largas, estrechas y lanceoladas.' },
            { icon: 'ph ph-tree-evergreen', text: 'Tamaño: planta tropical que puede alcanzar hasta 1 m de altura.' }
        ],
        ingredientes_receta: [
            '1 rodaja de jengibre fresco (~1 pulgada)',
            '1 taza de agua',
            'Jugo de limón y miel (al gusto)'
        ],
        preparacion: [
            'Pelar y rallar o machacar el jengibre.',
            'Poner en olla con agua y hervir 5–10 minutos.',
            'Colar, servir caliente; agregar limón y miel si se desea.'
        ],
        recomendaciones: [
            'Reducir el tiempo de hervor si el sabor es muy fuerte.',
            'Rallar el jengibre libera más sabor que cortarlo en rodajas.'
        ],
        precauciones: [
            'Puede causar acidez en personas con gastritis.',
            'Consultar médico si toma anticoagulantes.',
            'Puede estimular la vesícula (precaución en casos de cálculos biliares).'
        ]
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 8. MAGUEY MORADO
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Maguey morado", 
        nombreMaya: "Chak tsam", 
        equipo: "Equipo 6", 
        tipo: "digestivo",
        cientifico: "Tradescantia spathacea",
        desc: "Té usado tradicionalmente para desinflamar y ayudar en la cicatrización de heridas. Destaca por su color intenso.",
        imagen: "/imagenes-web/maguey-morado.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Té de Maguey Morado (Chak tsam)",
        caracteristicas: [ 
            { icon: 'ph ph-palette', text: 'Colores: morado oscuro/púrpura en hojas jóvenes.' },
            { icon: 'ph ph-leaf', text: 'Hojas: largas y rígidas, bordes con espinas pequeñas.' },
            { icon: 'ph ph-tree-evergreen', text: 'Tamaño: pueden medir 1–1.5 m de diámetro (varía por especie).' },
            { icon: 'ph ph-first-aid-kit', text: 'Usos tradicionales: cicatrización de heridas y desinflamatorio.' }
        ],
        ingredientes_receta: [
            '5 hojas de maguey morado (lavadas)',
            '1 litro de agua purificada'
        ],
        preparacion: [
            'Lavar las hojas y cortar en trozos.',
            'Hervir 1 L de agua; agregar trozos; bajar el fuego y hervir 10–15 minutos.',
            'Apagar, colar y dejar que esté tibio para beber.'
        ],
        recomendaciones: [
            'Usar cantidades moderadas.',
            'Lavar bien antes de usar.',
            'No recomendable utilizarlo semanas seguidas (ideal: 3–5 días y descansar).',
            'Preferir hojas frescas.'
        ],
        precauciones: [
            'No consumir en exceso (puede causar irritación gástrica o diarrea).',
            'Evitar en embarazo y lactancia (seguridad no establecida).',
            'No mezclar con medicamentos sin consultar.',
        ]
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 9. MANZANILLA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Manzanilla", 
        nombreMaya: "Manzanilla", 
        equipo: "Equipo 4", 
        tipo: "dolor",
        cientifico: "Matricaria chamomilla",
        desc: "Infusión universalmente conocida por sus propiedades calmantes, digestivas y antiinflamatorias.",
        imagen: "/imagenes-web/manzanilla.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Infusión Calmante de Manzanilla",
        caracteristicas: [ 
            { icon: 'ph ph-flower-lotus', text: 'Flores: pequeñas cabezuelas con centro amarillo cónico y pétalos blancos.' },
            { icon: 'ph ph-scent', text: 'Olor: dulce, suave, recuerda al aroma de manzana.' },
            { icon: 'ph ph-leaf', text: 'Hojas: finas y plumosas.' }
        ],
        ingredientes_receta: [
            '1 cucharadita de flores secas (o 1 bolsita)',
            '1 taza de agua (250 ml)'
        ],
        preparacion: [
            'Hervir el agua y verter sobre la manzanilla.',
            'Tapar y dejar infundir 5–7 minutos.',
            'Colar con cuidado y beber tibia.'
        ],
        recomendaciones: [
            'Para compresas en ojos, dejar enfriar completamente la infusión.',
            'Es de las hierbas más seguras para niños y ancianos.'
        ],
        precauciones: [
            'Personas alérgicas al polen o a la familia Asteraceae deben evitar su consumo.',
            'Si se usa para los ojos, colar la infusión de forma extremadamente cuidadosa para evitar residuos.'
        ]
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 10. MENTA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Menta", 
        nombreMaya: "mukuy xiiw", 
        equipo: "Equipo 3", 
        tipo: "digestivo",
        cientifico: "Mentha",
        desc: "Té popular para el alivio digestivo y como auxiliar para conciliar el sueño.",
        imagen: "/imagenes-web/menta.jpg", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Té de Menta para el alivio digestivo y el sueño",
        caracteristicas: [ 
            { icon: 'ph ph-scent', text: 'Aroma: fresco (por sus aceites volátiles).'},
            { icon: 'ph ph-leaf', text: 'Rica en compuestos como mentol, vitaminas A y C, y minerales.' },
            { icon: 'ph ph-palette', text: 'Color: verde vibrante, tallos con forma rectangular y a veces morados o rojizos.' }
        ],
        ingredientes_receta: [
            '2 cucharadas de hojas de menta',
            '1 taza de agua'
        ],
        preparacion: [
            'Colocar hojas en olla con agua y dejar hervir 2 minutos.',
            'Colar y servir; tomar media hora antes de dormir.',
            'Se recomienda beber todas las noches, por un mínimo de tres semanas.'
        ],
        recomendaciones: [
            'Ingerir 1–2 tazas al día.',
            'Tomarla después de la comida o antes de dormir.'
        ],
        precauciones: [
            'Tomar en grandes cantidades puede causar taquicardia, dolor de cabeza, náuseas o diarrea.',
            '🚫 **No ingerir si está embarazada o en lactancia.**',
            '🚫 **Evitar si se tiene reflujo gastroesofágico (ERGE).**'
        ]
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 11. ORÉGANO
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Orégano", 
        nombreMaya: "Xak’il che’ o Ah’al che’", 
        equipo: "Equipo 5", 
        tipo: "respiratorio",
        cientifico: "Lippia graveolens",
        desc: "Decocción tradicionalmente usada para afecciones respiratorias por sus propiedades cálidas y expectorantes.",
        imagen: "/imagenes-web/oregano.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Decocción Respiratoria de Orégano",
        caracteristicas: [ 
            { icon: 'ph ph-scent', text: 'Olor: intenso, cálido y picante.' },
            { icon: 'ph ph-leaf', text: 'Hojas: pequeñas, ovaladas, rugosas y vellosas.' },
            { icon: 'ph ph-tree-evergreen', text: 'Tamaño: arbusto que crece entre 0.5–1.5 m.' }
        ],
        ingredientes_receta: [
            '1 cucharadita de orégano seco (unas 4 hojitas)',
            '1 taza de agua (250 ml)',
            'Miel y limón (opcional)'
        ],
        preparacion: [
            'En olla, poner agua y orégano y llevar a ebullición.',
            'Hervir suavemente 2–3 minutos.',
            'Retirar del fuego, tapar y reposar 5 minutos.',
            'Colar y tomar caliente; añadir miel/limón si se desea.'
        ],
        recomendaciones: [
            'La miel suaviza la garganta y es un expectorante natural.',
            'Usar preferiblemente orégano seco para la decocción.'
        ],
        precauciones: [
            '🚫 **Evitar en el embarazo** (dosis medicinales por posibles efectos emenagogos).',
            'Puede aumentar el riesgo de sangrado si se toma en exceso o junto a anticoagulantes.'
        ],
        ingredientes_receta_maya:[
            "Jump’éel lak’in jengibre chéen tu’ux p’uuj (tuuch 1 pulgada).",
            "J'ump’éel táasa’ ja’.",
            "J'ugo limón ka miel (tu wíinkil).",
            "Tu’ux ka beetik:",
            "Pak’áax le jengibre ka’ ch’áach’a’ wa’ chuyk’ab.",
            "Túump’utik ichil le ja’o’ ka’ k’a’ajsik 5–10 minutos.",
            "Ts’a’atik ka ts’a’ats’íik tu ts’o’o’.",
            "Ka’ajchaj limón ka miel tu wíinkil."
        ],
        recomendaciones_maya:[

        ],
        precauciones_maya:[
            "Ma’ a uk’ik wa k’ux a nak’ (gastritis), tumen ch’áach’a’.",
            "Ma’ a uk’ik ya’ab wa ka ts’akik a k’i’ik’el (anticoagulantes)."

        ],

    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 12. POLEO y ESTAFIATE
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Poleo y Estafiate", 
        nombreMaya: "Polejo / Xicim", 
        equipo: "Equipo 5", 
        tipo: "digestivo",
        cientifico: "Mentha pulegium / Artemisia ludoviciana",
        desc: "Té combinado tradicionalmente para tratar infecciones estomacales, flatulencias y molestias digestivas.",
        imagen: "/imagenes-web/poleo_estafiate.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Té combinado para infección estomacal (Poleo + Estafiate + Jengibre)",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Poleo: hojas pequeñas (≈1 cm).' },
            { icon: 'ph ph-palette', text: 'Estafiate: colores pálidos según especie, muy aromático.' }
        ],
        ingredientes_receta: [
            'Poleo (1 ramita)',
            'Estafiate / Xicim (1 ramita)',
            'Jengibre (50 g)',
            '1 limón'
        ],
        preparacion: [
            'Lavar las hojas y el jengibre; picar el jengibre.',
            'Hervir 1 litro de agua; cuando hierva ligeramente, agregar las hojas y el jengibre.',
            'Dejar que el agua tome color y olor herbal.',
            'Sacar del fuego, colar (opcional) y servir caliente.'
        ],
        recomendaciones: [
            'Tomarlo en la noche o tarde.',
            'Beber caliente (no hirviendo) para aflojar flemas sin irritar la garganta.'
        ],
        precauciones: [
            '🚫 **No usar en embarazo ni lactancia** (ambas plantas están contraindicadas por posible toxicidad/contracciones en dosis altas).',
            'No tomar por más de 5 días seguidos.',
            'No usar en niños pequeños.',
            'Es receta tradicional, no sustituye atención médica.'
        ]
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 13. RUDA
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Ruda", 
        nombreMaya: "k’ak’as ich", 
        equipo: "Equipo 2", 
        tipo: "dolor",
        cientifico: "Ruta graveolens",
        desc: "Té para la regulación menstrual y alivio de problemas digestivos leves. De olor fuerte y característico.",
        imagen: "/imagenes-web/ruda.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Té para regulación menstrual y problemas digestivos leves",
        caracteristicas: [ 
            { icon: 'ph ph-tree-evergreen', text: 'Altura: arbusto que crece entre 70–100 cm.' },
            { icon: 'ph ph-leaf', text: 'Hojas: algo carnosas, color verde glauco.' },
            { icon: 'ph ph-scent', text: 'Olor: fuerte y sabor ligeramente amargo.' }
        ],
        ingredientes_receta: [
            'Hojas frescas o flores secas de ruda',
            'Agua hirviendo (50 ml)'
        ],
        preparacion: [
            'Colocar 1 cucharadita de hojas/flores secas en 50 ml de agua hirviendo, tapar y reposar 5–10 minutos.',
            'Colar y beber tibio, preferiblemente **una taza al día por máximo 3 días seguidos**.',
            'También puede aplicarse en compresas o enjuagues para piel/cabello.'
        ],
        recomendaciones: [
            'No usar más de 3 días seguidos.',
            'Evitar tomar en ayunas.',
            'Suspender si causa dolor, diarrea o irritación.'
        ],
        precauciones: [
            '🚫 **Evitar durante el embarazo** (puede causar contracciones uterinas intensas).',
            'No consumir durante lactancia, en niños, o en enfermedades de hígado/riñones.',
            'El consumo excesivo puede causar irritación gástrica, mareos, náuseas o vómito.'
        ],
        ingredientes_receta_maya:[

        ],
        preparacion_maya:[],
        recomendaciones_maya:[],
        precauciones_maya:[]


    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 14. ROMERO (Compresa)
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Romero", 
        nombreMaya: "Xol-té xnuk", 
        equipo: "Equipo 4", 
        tipo: "dolor",
        cientifico: "Salvia rosmarinus",
        desc: "Compresa tópica de romero, usada tradicionalmente para dolores musculares, articulares y contusiones.",
        imagen: "/imagenes-web/romero.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Compresa Tópica de Romero para el alivio del dolor",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: estrechas como agujas, verde oscuro por arriba y blancas por debajo.' },
            { icon: 'ph ph-scent', text: 'Aroma: hojas con aceite esencial, aroma muy fuerte y característico.' },
            { icon: 'ph ph-tree-evergreen', text: 'Altura: puede llegar a 2 m.' }
        ],
        ingredientes_receta: [
            '2 cucharadas de hojas y ramitas de romero fresco',
            '2 tazas de agua (500 ml)',
            'Un paño limpio'
        ],
        preparacion: [
            'Hervir el romero en agua durante 10 minutos.',
            'Dejar enfriar hasta que esté tibio (no debe quemar).',
            'Mojar el paño, escurrir y aplicar sobre la zona adolorida por 15–20 minutos.'
        ],
        recomendaciones: [
            'La compresa debe estar lo más caliente posible sin causar quemaduras.',
            'Probar en zona pequeña antes de usar ampliamente.'
        ],
        precauciones: [
            'Hipertensión: usar con moderación si se usa internamente (es estimulante).',
            'Piel sensible: probar primero en zona pequeña.'
        ]
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 15. ROMERO (Tónico capilar)
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Romero (Tónico Capilar)", 
        nombreMaya: "Xol-té xnuk", 
        equipo: "Equipo 4", 
        tipo: "piel",
        cientifico: "Salvia rosmarinus",
        desc: "Tónico capilar natural para el cuero cabelludo, que ayuda a fortalecer y nutrir el cabello.",
        imagen: "/imagenes-web/romero.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Tónico capilar de romero (fortalecimiento del cuero cabelludo)",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: estrechas como agujas.' },
            { icon: 'ph ph-scent', text: 'Aroma: fuerte y característico, ideal para fragancias naturales.' },
            { icon: 'ph ph-hair-complexion', text: 'Uso: Tradicionalmente usado para estimular el cuero cabelludo.' }
        ],
        ingredientes_receta: [
            '4 ramitas de romero fresco',
            '½ litro de agua potable'
        ],
        preparacion: [
            'Lavar las ramitas.',
            'Hervir en olla pequeña con agua hasta la mitad por 10 minutos.',
            'Retirar y dejar reposar 1 hora.',
            'Colar y colocar en botella con atomizador; guardar en refrigerador.'
        ],
        recomendaciones: [
            'Asegurar que las ramas estén bien lavadas.',
            'Aplicar uniformemente en las raíces del cabello.',
            'Dejar reposar 2–3 horas para mejor efecto.'
        ],
        precauciones: [
            'Probar en una pequeña parte del cuero cabelludo para evitar alergias.',
            'Conservar en lugar fresco (refrigerador) para evitar la proliferación de bacterias.',
            'No sustituye la atención médica en caso de reacción severa.'
        ],
        ingredientes_receta_maya:[
            "4 mejen xay xol te xnuk",
            "½ litro ja’"
        ],
        preparacion_maya:[
            "Yaaxile yaan a p’oik tulaakal u xay le mejen xol te xnuk.",
            "Colocar una olla pequeña con agua hasta la mitad y añadir las ramitas limpias y cortadas.",
            "Yaan a chak bi yeetel k’aak 10 wa 15 minutos",
            "Yaan p’atik tak up’ee hora hasta u sistal",
            "Ts’o’ole yaan butik ti up’ee botella yeetel u mejen atomizador.",
            "Yaan a wooksik te refriuti’al muun k’asta."
        ],
    },


    // ------------------------------------------------------------------------------------------------------------------------------------
    // 17. SÁBILA (Crema)
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Sábila / Aloe vera", 
        nombreMaya: "Tz’íits’ilche’", 
        equipo: "Equipo 1", 
        tipo: "piel",
        cientifico: "Aloe",
        desc: "Crema humectante de Sábila con aceite de coco y Vitamina E. Ideal para piel seca o dañada.",
        imagen: "/imagenes-web/aloe_vera.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Crema de Aloe vera (hidratante natural)",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: alargadas y carnosas.' },
            { icon: 'ph ph-drop', text: 'Ingredientes ricos: Aloe vera (hidratación), Aceite de coco (suavizante) y Vitamina E (antioxidante).' }
        ],
        ingredientes_receta: [
            '1 tallo de aloe vera',
            'Aceite de coco',
            'Vitamina E (gotas)'
        ],
        preparacion: [
            'Dejar reposar el tallo 1–2 días; extraer pulpa (~70 g).',
            'Agregar 70 g de aceite de coco; mezclar e incorporar 10 gotas de vitamina E.',
            'Refrigerar hasta solidificar y usar como crema.'
        ],
        recomendaciones: [
            'Guardar en refrigerador (1–2 semanas).',
            'Aplicar por la noche para máxima absorción.',
            'Añadir más aloe para una textura más suave.'
        ],
        precauciones: [
            'Prueba en antebrazo antes de usar en zonas sensibles.',
            'Suspender si hay ardor, enrojecimiento o irritación.',
            'No usar sobre piel irritada o con heridas.'
        ]
    },

    // ------------------------------------------------------------------------------------------------------------------------------------
    // 18. ZACATE LIMÓN
    // ------------------------------------------------------------------------------------------------------------------------------------
    { 
        nombre: "Zacate Limón", 
        nombreMaya: "su’uk pájte", 
        equipo: "Equipo 6", 
        tipo: "respiratorio",
        cientifico: "Cymbopogon citratuspathacea",
        desc: "Infusión expectorante para la tos, que combina sus propiedades con miel y limón para calmar la garganta.",
        imagen: "/imagenes-web/zacate_limon.png", 
        
        // --- INFORMACIÓN DETALLADA PARA info.html ---
        receta_titulo: "Infusión Expectorante de Zacate Limón para la tos",
        caracteristicas: [ 
            { icon: 'ph ph-leaf', text: 'Hojas: largas y delgadas.' },
            { icon: 'ph ph-palette', text: 'Colores: parte inferior del tallo con color blanquito.' },
            { icon: 'ph ph-scent', text: 'Aroma: fuerte, cítrico y fresco.' }
        ],
        ingredientes_receta: [
            '5–7 hojas frescas (lavadas) de zacate limón',
            '1 litro de agua purificada',
            '3 cucharadas de miel',
            '1 limón'
        ],
        preparacion: [
            'Lavar hojas y cortar en trozos.',
            'Hervir 1 L de agua; cuando hierva, agregar hojas y limón exprimido.',
            'Apagar, colar y dejar tibia.',
            'Al servir (250 ml), agregar 3 cucharadas de miel.'
        ],
        recomendaciones: [
            'El efecto expectorante es mayor si la infusión está calientita (no muy caliente).',
            'Lavar bien las hojas antes de usar.',
            'Endulzar preferentemente con miel.',
            'Usar hojas frescas cuando se emplee como planta medicinal.'
        ],
        precauciones: [
            'Es receta tradicional, no sustituye la atención médica.',
            '🚫 **No dar miel a menores de 1 año** (riesgo de botulismo infantil).',
            'Si hay fiebre alta, dificultad para respirar o tos por más de 1 semana, consultar al médico.',
        ]
    },
    
    // ------------------------------------------------------------------------------------------------------------------------------------
    // 19-22. OTROS (Mantener para consistencia si tu índice.html los usa)
    // Se han eliminado otras recetas de Sábila (Shampoo, Agua, Jabón) para mantener la lista en 18 entradas únicas y centradas en la salud.
    // ------------------------------------------------------------------------------------------------------------------------------------
   /*  { nombre: "Aloe Vera (Shampoo)", nombreMaya: "Tz’íits’ilche’", equipo: "Equipo 1", tipo: "piel", cientifico: "Aloe", desc: "Shampoo natural para fortalecimiento capilar.", imagen: "/imagenes-web/sabila-shampoo.jpg", receta_titulo: "Shampoo de Aloe vera (hidratante natural)", caracteristicas: [], ingredientes_receta: [], preparacion: [], recomendaciones: [], precauciones: [] },
    { nombre: "Aloe Vera (Agua)", nombreMaya: "Tz’íits’ilche’", equipo: "Equipo 1", tipo: "digestivo", cientifico: "Aloe", desc: "Agua desintoxicante con jengibre y limón.", imagen: "/imagenes-web/sabila-agua.jpg", receta_titulo: "Agua de Aloe vera (desintoxicante)", caracteristicas: [], ingredientes_receta: [], preparacion: [], recomendaciones: [], precauciones: [] },
    { nombre: "Aloe Vera (Jabón)", nombreMaya: "Tz’íits’ilche’", equipo: "Equipo 1", tipo: "piel", cientifico: "Aloe", desc: "Jabón de glicerina y sábila para piel sensible.", imagen: "/imagenes-web/sabila-jabon.jpg", receta_titulo: "Jabón de Aloe vera (para piel sensible)", caracteristicas: [], ingredientes_receta: [], preparacion: [], recomendaciones: [], precauciones: [] },
    { nombre: "Aloe Vera (Genérico)", nombreMaya: "Tz’íits’ilche’", equipo: "Equipo 1", tipo: "piel", cientifico: "Aloe", desc: "Uso general de la planta.", imagen: "/imagenes-web/sabila.jpg", receta_titulo: "Usos generales de Sábila", caracteristicas: [], ingredientes_receta: [], preparacion: [], recomendaciones: [], precauciones: [] }
 */];