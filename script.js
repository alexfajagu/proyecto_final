// ======================================================
// SYSTEM PLUS LEARNING
// BASE DE DATOS Y FUNCIONES DEL SISTEMA
// ======================================================

// ======================================================
// BASE DE DATOS COMPLETA DE CURSOS
// ======================================================
const courses = [
    // ==================================================
    // ÁREA DE PROGRAMACIÓN
    // ==================================================
    {
        id: 1,
        type: "curso",
        title: "Curso de Diseño Web",
        res: "Área de Programación",
        icon: "🌐",
        img: "Curso de Diseño Web.png",
        desc: "Aprende a crear y a diseñar una página web utilizando componentes gráficos que también serán aprendidos dentro de este módulo de formación, conoce y aprende un lenguaje de marcas llamado HTML/HTML5.",
        modules: [
            "INTRODUCCIÓN",
            "RECURSOS GRÁFICOS",
            "HTML 5",
            "CSS 3",
            "ADMINISTRACIÓN WEB",
            "CMS"
        ]
    },
    {
        id: 2,
        type: "curso",
        title: "Curso de Bases de datos y PHP",
        res: "Área de Programación",
        icon: "🗄️",
        img: "curso de base de datos y PHP.png",
        desc: "Aprende a crear bases de datos con el lenguaje de programación SQL que te permitirá conectar tu base de datos con la página o aplicativo web, aprende un lenguaje orientado a objetos como lo es PHP.",
        modules: [
            "ESTRUCTURA Y ANÁLISIS DE INFORMACIÓN",
            "SQL INTRODUCCIÓN A LA BASE DE DATOS",
            "SQL ESTRUCTURA Y CREACIÓN DE BASES DE DATOS",
            "PHP FUNDAMENTOS",
            "PHP ESTRUCTURA DE DATOS",
            "PHP ORIENTADO A OBJETOS"
        ]
    },
    {
        id: 3,
        type: "curso",
        title: "Curso de Java y dispositivos móviles",
        res: "Área de Programación",
        icon: "📱",
        img: "curso de java y dispositivos moviles.png",
        desc: "Aprende un lenguaje de programación orientado a objetos cuyo objetivo es escribir el código una vez y ejecutarse en cualquier dispositivo. Aprende Android para crear apps móviles.",
        modules: [
            "JAVA FUNDAMENTOS",
            "JAVA ENTORNO GRÁFICO",
            "JAVA BASE DE DATOS",
            "ANDROID FUNDAMENTOS",
            "ANDROID DESARROLLO DE APLICACIONES"
        ]
    },

    // ==================================================
    // ÁREA ADMINISTRATIVA
    // ==================================================
    {
        id: 4,
        type: "curso",
        title: "Curso de Excel avanzado",
        res: "Área Administrativa",
        icon: "📊",
        img: "curso de excel avanzado.png",
        desc: "Conozca y administre de forma asertiva, las diferentes herramientas que ofrece la aplicación Microsoft Excel. Tablas dinámicas, funciones, macros y filtros avanzados.",
        modules: [
            "FUNDAMENTOS",
            "FUNCIONES",
            "MANEJO DE DATOS",
            "GRABADORA DE MACROS",
            "MACROS VBA",
            "MODELOS FINANCIEROS"
        ]
    },
    {
        id: 5,
        type: "curso",
        title: "Curso de Informática Básica",
        res: "Área Administrativa",
        icon: "💻",
        img: "curso de informatica basica.png",
        desc: "Desarrolla habilidades prácticas en el uso de las herramientas ofimáticas e internet para el uso del aprendizaje en un ambiente laboral o personal.",
        modules: [
            "WINDOWS",
            "WORD",
            "EXCEL",
            "POWER POINT",
            "INTERNET"
        ]
    },
    {
        id: 6,
        type: "curso",
        title: "Curso de Emprendimiento Empresarial",
        res: "Área Administrativa",
        icon: "💡",
        img: "curso de emprendimiento empresarial.png",
        desc: "Desarrolla habilidades prácticas en el montaje de una empresa utilizando tecnología para su crecimiento profesional y empresarial, conoce cómo realizar mercadeo y proyecciones financieras.",
        modules: [
            "ECONOMÍA Y EMPRESA",
            "IDENTIFICACIÓN",
            "PRE-INCUBACIÓN",
            "INCUBACIÓN",
            "OPERACIÓN",
            "EXPANSIÓN"
        ]
    },
    {
        id: 7,
        type: "curso",
        title: "Curso de Procesos Contables",
        res: "Área Administrativa",
        icon: "🧾",
        img: "curso de procesos contables.png",
        desc: "Aprenda los conocimientos fundamentales de la Contabilidad manual y sistematizada como sistema de información para ofrecer información financiera útil en la toma de decisiones. Manejo de CG1.",
        modules: [
            "CONTABILIDAD Y LA EMPRESA",
            "PARTIDA DOBLE",
            "ECUACIÓN FUNDAMENTAL LIBROS AUXILIARES",
            "LIBROS OFICIALES",
            "DOCUMENTOS CONTABLES, NÓMINA E INVENTARIO",
            "CONTABILIDAD SISTEMATIZADA (CGUNO)"
        ]
    },
    {
        id: 8,
        type: "curso",
        title: "Curso de PROCESOS LEGALES",
        res: "Área Administrativa",
        icon: "⚖️",
        img: "curso de procesos legales.png",
        desc: "Aprenda y conozca la estructura legal de una empresa, como es su funcionamiento en la parte legal, en el área comercial, laboral, tributaria y bancaria.",
        modules: [
            "HISTORIA Y CONSTITUCIÓN",
            "LEGISLACIÓN COMERCIAL",
            "LEGISLACIÓN LABORAL",
            "LEGISLACIÓN Y TRIBUTARIA",
            "LEGISLACIÓN BANCARIA",
            "DERECHOS DE AUTOR, MARCAS Y PATENTES"
        ]
    },
    {
        id: 9,
        type: "curso",
        title: "Procesos de Oficina y Comunicación Empresarial",
        res: "Área Administrativa",
        icon: "🗂",
        img: "procesos de oficina y comunicacion empresarial.png",
        desc: "Desarrollar habilidades prácticas para el manejo de una oficina, ortografía, redacción, elaboración de documentos, también la organización y logística de eventos.",
        modules: [
            "INTRODUCCIÓN A LA OFIMÁTICA",
            "ORTOGRAFÍA Y REDACCIÓN",
            "CORRESPONDENCIA Y PRODUCCIÓN DE DOCUMENTOS",
            "CÁLCULOS DE OFICINA",
            "ARCHIVÍSTICA",
            "RELACIONES PÚBLICAS"
        ]
    },

    // ==================================================
    // ÁREA DE MANTENIMIENTO
    // ==================================================
    {
        id: 10,
        type: "curso",
        title: "Ensamble y Mantenimiento de Computadores",
        res: "Área de Mantenimiento",
        icon: "🔧",
        img: "ensamble y mantenimiento de computadores.png",
        desc: "Aprender a realizar mantenimiento preventivo y correctivo a un computador de mesa o portátil, armar y desarmar equipos, instalación de sistemas operativos y antivirus.",
        modules: [
            "PARTES",
            "ENSAMBLE",
            "INSTALACIÓN DE SOFTWARE",
            "HARDWARE MULTIMEDIA E INTERNET",
            "SISTEMA OPERATIVO PARA TÉCNICOS",
            "DIAGNÓSTICO Y CORRECCIÓN"
        ]
    },
    {
        id: 11,
        type: "curso",
        title: "Curso de Redes Windows",
        res: "Área de Mantenimiento",
        icon: "📡",
        img: "curso de redes de windows.png",
        desc: "Construir entornos de red Punto a Punto y Cliente Servidor, utilizando los diferentes conceptos, herramientas y sistemas operativos de microsoft para garantizar conectividad.",
        modules: [
            "TEORÍA GENERAL DE REDES ALÁMBRICAS E INALÁMBRICAS",
            "REDES PUNTO A PUNTO",
            "REDES CLIENTE SERVIDOR",
            "REDES CLIENTE SERVIDOR (ADMINISTRACIÓN)",
            "REDES CLIENTE SERVIDOR INTERNET, EXTRANET",
            "SEGURIDAD Y MANTENIMIENTO DEL SISTEMA"
        ]
    },
    {
        id: 12,
        type: "curso",
        title: "Curso de Mantenimiento de Celulares",
        res: "Área de Mantenimiento",
        icon: "📲",
        img: "curso de mantenimiento de celulares.png",
        desc: "Aprender a diagnosticar fallas de los equipos móviles, realizar mantenimiento preventivo y correctivo, realizando las reparaciones y cambio de componentes.",
        modules: [
            "Herramientas básicas y profesionales",
            "Tecnología existente y Opciones de negocio",
            "Manejo del multímetro y Lectura con tester",
            "Componentes de tarjetas lógicas",
            "Cambiar táctil, display y visor",
            "Fallas comunes y Mantenimiento",
            "Reconstruir flex y Liberación de bandas",
            "Soldadura, puentes y puertos",
            "Manejo del software, flasheo y hard reset"
        ]
    },
    {
        id: 13,
        type: "curso",
        title: "Curso de Electrónica",
        res: "Área de Mantenimiento",
        icon: "⚡",
        img: "curso de electronica.png",
        desc: "Conocer los conceptos de electrónica, aprender a construir dispositivos que permitan dar respuesta a una necesidad del mercado laboral y reparación electrónica.",
        modules: [
            "FUNDAMENTOS DE ELECTRÓNICA",
            "HERRAMIENTAS Y COMPONENTES ELECTRÓNICOS",
            "MEDICIONES Y PRUEBAS",
            "SOLDADURA Y CAMBIOS DE COMPONENTES",
            "PROYECTO FINAL"
        ]
    },

    // ==================================================
    // ÁREA DE DISEÑO
    // ==================================================
    {
        id: 14,
        type: "curso",
        title: "Curso de Piezas Gráficas",
        res: "Área de Diseño",
        icon: "✏️",
        img: "curso de piezas graficas.png",
        desc: "Aprende a crear piezas gráficas que posibilitan comunicar visualmente información, hechos, ideas y valores. Utilizando volantes, afiches, pendones, tarjetas, entre otros.",
        modules: [
            "CONCEPTOS DE DISEÑO Y PUBLICIDAD",
            "COREL DRAW - ILUSTRACIÓN",
            "COREL PIEZAS GRÁFICAS",
            "ILLUSTRATOR (ILUSTRACIÓN)",
            "ILLUSTRATOR (HERRAMIENTAS Y PIEZAS GRÁFICAS)",
            "SOPORTE PUBLICITARIO"
        ]
    },
    {
        id: 15,
        type: "curso",
        title: "Curso de Fotografía y Montaje",
        res: "Área de Diseño",
        icon: "📸",
        img: "curso de fotografia y montaje.png",
        desc: "Aprende a capturar imágenes desde tu celular y con una cámara profesional, utilizar los enfoques, editar, crear fotomontajes y realizar revelados digitales.",
        modules: [
            "FOTOGRAFÍA E INTRODUCCIÓN LA FOTOGRAFÍA",
            "TÉCNICAS DE FOTOGRAFÍA",
            "PHOTOSHOP HERRAMIENTAS",
            "PHOTOSHOP FOTOMONTAJES Y PIEZAS GRÁFICAS",
            "REVELADO DIGITAL (ADOBE LIGHTROOM)",
            "CAMPAÑA PUBLICITARIA"
        ]
    },
    {
        id: 16,
        type: "curso",
        title: "Curso de Audio y Animación 2D",
        res: "Área de Diseño",
        icon: "🎬",
        img: "curso de audio y animacion 2d.png",
        desc: "Aprende a crear y editar audios que te permitan elaborar diferentes tipos de campañas auditivas o editar y realizar montajes con videos, animar objetos en 2D.",
        modules: [
            "INTRODUCCIÓN A LA ANIMACIÓN",
            "AUDITION",
            "ANIMATE (ENTORNO GRÁFICO)",
            "ANIMATE (PIEZAS AUDIOVISUALES)",
            "MARKETING DIGITAL (CONCEPTOS)",
            "MARKETING DIGITAL (HERRAMIENTAS)"
        ]
    },
    {
        id: 17,
        type: "curso",
        title: "Edición de Video (Producción Audiovisual)",
        res: "Área de Diseño",
        icon: "🎞️",
        img: "edicion de video (produccion audiovisual).png",
        desc: "Aprende a crear guiones, ensamblar productos multimedia, crear y editar videos para promocionar una empresa, aplicar efectos y montar estructuras de video.",
        modules: [
            "SOPORTE DE GUIÓN (PRE-PRODUCCIÓN)",
            "CÁMARA DE VIDEO (PRE-PRODUCCIÓN)",
            "PREMIER (EDICIÓN DE VIDEO – PRODUCCIÓN)",
            "PREMIER (MONTAJE DE VIDEO – PRODUCCIÓN)",
            "AFTER EFFECTS (POST- PRODUCCIÓN)",
            "PROYECTO TELEVISIVO (POST- PRODUCCIÓN)"
        ]
    },

    // ==================================================
    // ÁREA DE SEGURIDAD Y SALUD EN EL TRABAJO
    // ==================================================
    {
        id: 18,
        type: "curso",
        title: "Introducción al SG – SST",
        res: "Área de Seguridad y Salud en el Trabajo",
        icon: "🛡️",
        img: "introduccion al sg-sst.png",
        desc: "Aprenda los conceptos de seguridad y salud, el ciclo PHVA, actualidad de accidentes a nivel mundial, legislación pertinente y matriz de riesgos de una organización.",
        modules: [
            "LEGISLACIÓN",
            "INTRODUCCIÓN A LA SALUD OCUPACIONAL",
            "RIESGOS FÍSICOS",
            "RIESGOS MECÁNICOS Y BIOMECÁNICOS",
            "RIESGO PSICOSOCIAL",
            "RIESGO QUÍMICO"
        ]
    },
    {
        id: 19,
        type: "curso",
        title: "Curso de Inspecciones de seguridad",
        res: "Área de Seguridad y Salud en el Trabajo",
        icon: "🔎",
        img: "curso de inspeccion de seguridad.png",
        desc: "Aprenda a mantener las instalaciones y equipos en condiciones de seguridad de acuerdo con el reglamento interno de la empresa y la normatividad de ley.",
        modules: [
            "CONCEPTO DE INSPECCIÓN",
            "INSPECCIÓN DEL PUESTO DE TRABAJO",
            "INSPECCIÓN E INTERVENCIÓN DE RIESGOS",
            "INSPECCIONES NO PLANEADAS",
            "INDICADORES DE INSPECCIÓN",
            "PRIORIZACIÓN DE RIESGO"
        ]
    },
    {
        id: 20,
        type: "curso",
        title: "Curso de Planes de emergencia",
        res: "Área de Seguridad y Salud en el Trabajo",
        icon: "🚨",
        img: "curso de planes de emergencias.png",
        desc: "Aprenda a cómo reducir los riesgos de acuerdo con las características del entorno y generar acciones de prevención de incidentes acorde con la normativa vigente.",
        modules: [
            "MARCO LEGAL",
            "INVENTARIO DE AMENAZAS",
            "ANÁLISIS DE VULNERABILIDAD",
            "PLAN DE EVACUACIÓN",
            "PROCEDIMIENTO OPERATIVO DE SEGURIDAD",
            "SIMULACIONES Y SIMULACROS"
        ]
    },
    {
        id: 21,
        type: "curso",
        title: "Procedimiento de trabajo seguro",
        res: "Área de Seguridad y Salud en el Trabajo",
        icon: "📋",
        img: "procedimiento del trabajo seguro.png",
        desc: "Aprende a apoyar las actividades de SST de acuerdo con el programa establecido y normativa legal vigente. Cumplimiento de normas ambientales y de seguridad.",
        modules: [
            "PTS SOLDADURA",
            "PTS ENERGÍAS PELIGROSAS",
            "PTS ESPACIOS CONFINADOS",
            "PTS TRABAJO EN ALTURAS",
            "PTS PRODUCTOS QUÍMICOS",
            "PTS HERRAMIENTAS MANUALES"
        ]
    },
    {
        id: 22,
        type: "curso",
        title: "Curso de Inglés Básico",
        res: "Área de Seguridad y Salud en el Trabajo",
        icon: "💬",
        img: "curso de ingles basico.png",
        desc: "Aprenda los conocimientos básicos en las 4 habilidades del idioma inglés (Hablar, escuchar, leer y escribir), para desarrollar la competencia comunicativa a nivel básico.",
        modules: [
            "ELEMENTARY A1.1",
            "ELEMENTARY A1.2",
            "ELEMENTARY A1.3",
            "ELEMENTARY A1.4",
            "ELEMENTARY A1.5"
        ]
    }
];

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let currentCourseId = null;
let pendingCourseId = null;

// ======================================================
// USUARIO Y CONTRASEÑA PRINCIPAL
// ======================================================
const LOGIN_USER = "Admin";
const LOGIN_PASSWORD = "system2026";

// ======================================================
// CONTRASEÑAS POR ÁREA
// ======================================================
const areaPasswords = {
    "Área de Programación": "PROG2026",
    "Área Administrativa": "ADMIN2026",
    "Área de Mantenimiento": "MANT2026",
    "Área de Diseño": "DISENO2026",
    "Área de Seguridad y Salud en el Trabajo": "SST2026"
};

// ======================================================
// CARGAR CATÁLOGO
// ======================================================
function loadCursosCortos() {
    switchView("catalog-view");
    const title = document.getElementById("catalog-title");
    if (title) {
        title.innerText = "Catálogo de Programas";
    }
    renderCoursesGrid(courses);
}

// ======================================================
// BUSCADOR Y SUGERENCIAS
// ======================================================
function handleNavSearch(event) {
    if (event.key !== "Enter") return;
    
    const input = document.getElementById("nav-search-input");
    if (!input) return;
    
    const query = input.value.toLowerCase().trim();
    if (query === "") {
        loadCursosCortos();
        return;
    }

    switchView("catalog-view");
    const title = document.getElementById("catalog-title");
    if (title) {
        title.innerText = `Resultados para: "${query}"`;
    }

    const results = courses.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.desc.toLowerCase().includes(query) ||
        course.res.toLowerCase().includes(query)
    );
    renderCoursesGrid(results);
}

function showSearchSuggestions(query) {
    const dropdown = document.getElementById('search-suggestions');
    const cleanQuery = query.toLowerCase().trim();

    if (cleanQuery === '') {
        dropdown.style.display = 'none';
        return;
    }

    const results = courses.filter(c => 
        c.title.toLowerCase().includes(cleanQuery) || 
        c.res.toLowerCase().includes(cleanQuery)
    );

    dropdown.innerHTML = '';

    if (results.length === 0) {
        dropdown.innerHTML = '<div class="suggestion-item">No se encontraron cursos...</div>';
    } else {
        results.forEach(course => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `<span class="suggestion-icon">${course.icon}</span> <span>${course.title}</span>`;
            item.onclick = () => {
                document.getElementById('nav-search-input').value = '';
                dropdown.style.display = 'none';
                openCourse(course.id);
            };
            dropdown.appendChild(item);
        });
    }
    dropdown.style.display = 'block';
}

document.addEventListener('click', function(event) {
    const searchBox = document.querySelector('.nav-search-box');
    const dropdown = document.getElementById('search-suggestions');
    if (searchBox && dropdown && !searchBox.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// ======================================================
// MOSTRAR CURSOS CON ACORDEÓN E IMÁGENES
// ======================================================
function renderCoursesGrid(listToRender, isMyCourses = false) {
    const grid = document.getElementById("course-grid");
    if (!grid) return;
    grid.innerHTML = "";

    if (listToRender.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No se encontraron cursos disponibles.</p>`;
        return;
    }

    const groupedCourses = {};
    listToRender.forEach(course => {
        const area = course.res;
        if (!groupedCourses[area]) {
            groupedCourses[area] = [];
        }
        groupedCourses[area].push(course);
    });

    let isFirst = true;

    for (const area in groupedCourses) {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "area-section";

        const areaTitle = document.createElement("div");
        areaTitle.className = `area-title collapsible ${isFirst ? "active" : ""}`;
        areaTitle.innerHTML = `
            <h3>${area.toUpperCase()}</h3>
            <span class="toggle-icon" style="transform: ${isFirst ? "rotate(180deg)" : "rotate(0deg)"};">▼</span>
        `;

        const coursesContainer = document.createElement("div");
        coursesContainer.className = `area-courses-grid ${isFirst ? "open" : ""}`;

        groupedCourses[area].forEach(course => {
            const card = document.createElement("div");
            card.className = "course-card";
            let badgeHtml = "";

            if (isMyCourses) {
                badgeHtml = `<div class="badge-en-progreso">En Progreso</div>`;
            }

            card.innerHTML = `
                ${badgeHtml}
                <div class="course-img" style="padding: 0; overflow: hidden; background: transparent;">
                    <img src="img2/${course.img}" alt="${course.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.outerHTML='${course.icon}'">
                </div>
                <div class="course-content">
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                    <button class="btn-inscribirse" type="button" onclick="openCourse(${course.id})">Estudiar Curso</button>
                </div>
            `;
            coursesContainer.appendChild(card);
        });

        areaTitle.addEventListener("click", function() {
            this.classList.toggle("active");
            coursesContainer.classList.toggle("open");
            const icon = this.querySelector(".toggle-icon");
            if (coursesContainer.classList.contains("open")) {
                icon.style.transform = "rotate(180deg)";
            } else {
                icon.style.transform = "rotate(0deg)";
            }
        });

        sectionDiv.appendChild(areaTitle);
        sectionDiv.appendChild(coursesContainer);
        grid.appendChild(sectionDiv);
        isFirst = false;
    }
}

// ======================================================
// MODAL DE CONTRASEÑA
// ======================================================
function crearModalPassword() {
    if (document.getElementById("area-password-modal")) return;

    const style = document.createElement("style");
    style.id = "area-password-modal-style";
    style.innerHTML = `
        .area-password-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); display: none; align-items: center; justify-content: center; z-index: 99999; backdrop-filter: blur(8px); }
        .area-password-modal { width: 420px; max-width: 90%; background: #0d223d; border: 1px solid #29486b; border-radius: 18px; padding: 30px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); animation: modalEntrada 0.25s ease; }
        @keyframes modalEntrada { from { opacity: 0; transform: translateY(-25px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .area-password-header { text-align: center; margin-bottom: 20px; }
        .area-password-icon { font-size: 45px; margin-bottom: 10px; }
        .area-password-header h2 { color: white; margin: 0 0 8px 0; font-size: 24px; }
        .area-password-area { color: #ff314f; font-weight: bold; font-size: 15px; }
        .area-password-text { color: #b7c7da; text-align: center; font-size: 14px; line-height: 1.5; margin: 15px 0 20px; }
        .area-password-input { width: 100%; box-sizing: border-box; padding: 13px 15px; border: 1px solid #395775; border-radius: 10px; background: #081a31; color: white; outline: none; font-size: 16px; margin-bottom: 10px; }
        .area-password-input:focus { border-color: #ff314f; box-shadow: 0 0 0 2px rgba(255, 49, 79, 0.15); }
        .area-password-error { min-height: 20px; color: #ff526c; font-size: 13px; text-align: center; margin-bottom: 12px; }
        .area-password-buttons { display: flex; gap: 10px; }
        .area-password-buttons button { flex: 1; padding: 12px; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 14px; }
        .btn-password-cancel { background: #263a51; color: white; }
        .btn-password-access { background: #e91e45; color: white; }
        .btn-password-access:hover { background: #ff3154; }
        .btn-password-cancel:hover { background: #354c65; }
    `;
    document.head.appendChild(style);

    const modal = document.createElement("div");
    modal.id = "area-password-modal";
    modal.className = "area-password-overlay";
    modal.innerHTML = `
        <div class="area-password-modal">
            <div class="area-password-header">
                <div class="area-password-icon">🔐</div>
                <h2>Acceso al curso</h2>
                <div id="area-password-name" class="area-password-area">Área</div>
            </div>
            <p class="area-password-text">Este curso está protegido. Ingresa la contraseña correspondiente al área para continuar.</p>
            <input type="password" id="area-password-input" class="area-password-input" placeholder="Ingrese la contraseña" autocomplete="off">
            <div id="area-password-error" class="area-password-error"></div>
            <div class="area-password-buttons">
                <button type="button" class="btn-password-cancel" onclick="cerrarModalPassword()">Cancelar</button>
                <button type="button" class="btn-password-access" onclick="validarPasswordArea()">Ingresar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const input = document.getElementById("area-password-input");
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") validarPasswordArea();
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) cerrarModalPassword();
    });
}

function solicitarPasswordArea(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    pendingCourseId = courseId;
    crearModalPassword();

    const modal = document.getElementById("area-password-modal");
    const areaName = document.getElementById("area-password-name");
    const input = document.getElementById("area-password-input");
    const error = document.getElementById("area-password-error");

    areaName.innerText = course.res;
    input.value = "";
    error.innerText = "";
    modal.style.display = "flex";

    setTimeout(function() { input.focus(); }, 100);
}

function validarPasswordArea() {
    if (pendingCourseId === null) return;

    const course = courses.find(c => c.id === pendingCourseId);
    if (!course) return;

    const input = document.getElementById("area-password-input");
    const error = document.getElementById("area-password-error");
    const password = input.value;
    const passwordCorrecta = areaPasswords[course.res];

    if (password === passwordCorrecta) {
        error.innerText = "";
        cerrarModalPassword();
        ingresarAlCurso(course.id);
    } else {
        error.innerText = "❌ Contraseña incorrecta. Inténtalo nuevamente.";
        input.value = "";
        input.focus();
    }
}

function cerrarModalPassword() {
    const modal = document.getElementById("area-password-modal");
    if (modal) modal.style.display = "none";
    pendingCourseId = null;
}

// ======================================================
// ABRIR CURSO E INGRESAR
// ======================================================
function openCourse(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    if (areaPasswords[course.res]) {
        solicitarPasswordArea(id);
    } else {
        ingresarAlCurso(id);
    }
}

function ingresarAlCurso(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;

    currentCourseId = id;

    const dashTitle = document.getElementById("dash-title");
    const dashRes = document.getElementById("dash-res");
    
    if (dashTitle) dashTitle.innerText = course.title;
    if (dashRes) dashRes.innerText = course.res;

    let myCourses = JSON.parse(localStorage.getItem("my_courses") || "[]");
    if (!myCourses.includes(id)) {
        myCourses.push(id);
        localStorage.setItem("my_courses", JSON.stringify(myCourses));
    }

    renderModulesList(course, 0);
    updateVideoPlayer(id, 0); 
    changeTab("desc");
    updateProgressUI(course);
    switchView("dashboard-view");
}

// ======================================================
// REPRODUCTOR DE VIDEO Y PESTAÑAS (PDF)
// ======================================================
function updateVideoPlayer(courseId, modIndex) {
    const videoContainer = document.getElementById("video-player-container");
    const course = courses.find(c => c.id === courseId);
    
    if (!videoContainer || !course) return;

    if (courseId === 1 && modIndex === 0) {
        videoContainer.innerHTML = `
            <video class="local-video-element" controls>
                <source src="diseño web.mp4" type="video/mp4">
                Tu navegador no soporta la reproducción de videos.
            </video>
        `;
    } else {
        videoContainer.innerHTML = `
            <div style="text-align: center; padding: 1rem;">
                <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem; color: #555;">▶</span>
                <span id="current-lesson-title" style="color: #f8fafc; font-size: 1.1rem; font-weight: 600;">
                    Estudiando: Módulo ${modIndex + 1} - ${course.modules[modIndex]}
                </span>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px;">
                    El video de esta lección no está disponible actualmente.
                </p>
            </div>
        `;
    }
}

function changeTab(tabName) {
    document.getElementById("tab-desc").classList.remove("active");
    document.getElementById("tab-recursos").classList.remove("active");
    document.getElementById("tab-comentarios").classList.remove("active");
    
    document.getElementById(`tab-${tabName}`).classList.add("active");

    const contentContainer = document.getElementById("tab-content-container");
    const course = courses.find(c => c.id === currentCourseId);

    if (!contentContainer || !course) return;

    if (tabName === "desc") {
        contentContainer.innerHTML = `<p style="line-height: 1.6; color: var(--text-muted);">${course.desc}</p>`;
    } 
    else if (tabName === "recursos") {
        if (currentCourseId === 1) {
            contentContainer.innerHTML = `
                <div style="padding: 1rem 0;">
                    <h3 style="color: #fff; margin-bottom: 10px; font-size: 1.1rem;">Recursos del Módulo</h3>
                    <p style="color: var(--text-muted); margin-bottom: 15px;">Descarga la guía en formato PDF para acompañar tu aprendizaje en esta lección.</p>
                    <a href="introduccion-al-diseno-web.pdf" target="_blank" class="btn-descargar-pdf">
                        📄 Descargar PDF
                    </a>
                </div>
            `;
        } else {
            contentContainer.innerHTML = `<p style="color: var(--text-muted);">No hay recursos descargables para este módulo aún.</p>`;
        }
    } 
    else if (tabName === "comentarios") {
        contentContainer.innerHTML = `
            <div style="padding: 1rem 0;">
                <p style="color: var(--text-muted); margin-bottom: 15px;">Deja tus dudas o comentarios sobre esta lección.</p>
                <textarea style="width: 100%; height: 80px; background: var(--input-bg); border: 1px solid var(--border-color); color: white; padding: 10px; border-radius: 8px; resize: none; margin-bottom: 10px;" placeholder="Escribe tu comentario aquí..."></textarea>
                <button class="btn-inscribirse" style="width: auto; padding: 8px 20px;">Enviar</button>
            </div>
        `;
    }
}

// ======================================================
// FUNCIONES DE MÓDULOS Y PROGRESO
// ======================================================
function renderModulesList(course, activeIndex) {
    const moduleList = document.getElementById("module-list");
    if (!moduleList) return;
    moduleList.innerHTML = "";

    let completedModules = JSON.parse(localStorage.getItem(`completed_course_${course.id}`) || "[]");

    course.modules.forEach((mod, index) => {
        const isCompleted = completedModules.includes(index);
        const isActive = index === activeIndex;
        const li = document.createElement("li");

        li.className = `module-item ${isActive ? "active-module" : ""} ${isCompleted ? "completed-module" : ""}`;
        li.innerHTML = `
            <div class="module-left" onclick="selectModule(${course.id}, ${index})">
                <div class="module-number">${index + 1}</div>
                <div style="font-size: 0.85rem; font-weight: 500;">${mod}</div>
            </div>
            <button class="btn-check" type="button" onclick="event.stopPropagation(); toggleModuleComplete(${course.id}, ${index});">
                ${isCompleted ? "✓ Visto" : "Marcar visto"}
            </button>
        `;
        moduleList.appendChild(li);
    });

    const lessonTitle = document.getElementById("current-lesson-title");
    if (lessonTitle && course.modules[activeIndex]) {
        lessonTitle.innerText = `Estudiando: Módulo ${activeIndex + 1} - ${course.modules[activeIndex]}`;
    }
}

function selectModule(courseId, modIndex) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        renderModulesList(course, modIndex);
        updateVideoPlayer(courseId, modIndex);
        changeTab("desc");
    }
}

function toggleModuleComplete(courseId, modIndex) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    let completedModules = JSON.parse(localStorage.getItem(`completed_course_${courseId}`) || "[]");

    if (completedModules.includes(modIndex)) {
        completedModules = completedModules.filter(i => i !== modIndex);
    } else {
        completedModules.push(modIndex);
    }

    localStorage.setItem(`completed_course_${courseId}`, JSON.stringify(completedModules));
    renderModulesList(course, modIndex);
    updateProgressUI(course);
}

function updateProgressUI(course) {
    let completedModules = JSON.parse(localStorage.getItem(`completed_course_${course.id}`) || "[]");
    const totalModules = course.modules.length;
    if (totalModules === 0) return;

    const percentage = Math.round((completedModules.length / totalModules) * 100);
    const progressBar = document.getElementById("progress-bar-fill");
    if (progressBar) progressBar.style.width = percentage + "%";

    const progressText = document.getElementById("progress-text");
    if (progressText) {
        progressText.innerText = `${percentage}% Completado (${completedModules.length}/${totalModules} módulos)`;
    }
}

function loadMyCourses() {
    switchView("catalog-view");
    const title = document.getElementById("catalog-title");
    if (title) title.innerText = "Mis Cursos en Progreso";

    let myCourseIds = JSON.parse(localStorage.getItem("my_courses") || "[]");
    let enrolledCourses = courses.filter(c => myCourseIds.includes(c.id));

    if (enrolledCourses.length === 0) {
        enrolledCourses = [courses[0], courses[3]];
        localStorage.setItem("my_courses", JSON.stringify([courses[0].id, courses[3].id]));
    }

    renderCoursesGrid(enrolledCourses, true);

    const navLinks = document.getElementById("nav-links");
    if (navLinks && navLinks.classList.contains("mobile-active")) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById("nav-links");
    if (navLinks) navLinks.classList.toggle("mobile-active");
}

function switchView(viewId) {
    document.querySelectorAll(".view").forEach(view => {
        view.classList.remove("active");
    });

    const selectedView = document.getElementById(viewId);
    if (!selectedView) return;
    selectedView.classList.add("active");

    const nav = document.getElementById("main-nav");
    if (!nav) return;

    if (viewId === "login-view") {
        nav.style.display = "none";
        const usuario = document.getElementById("usuario");
        const password = document.getElementById("password");
        if (usuario) usuario.value = "";
        if (password) password.value = "";
    } else {
        nav.style.display = "flex";
    }
}

function cerrarSesion() {
    sessionStorage.removeItem("systemPlusLogged");
    switchView("login-view");
}

function logout() {
    cerrarSesion();
}

// ======================================================
// LOGIN Y SISTEMA
// ======================================================
function login() {
    const usuarioInput = document.getElementById("usuario");
    const passwordInput = document.getElementById("password");
    if (!usuarioInput || !passwordInput) return;

    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value;

    if (usuario === LOGIN_USER && password === LOGIN_PASSWORD) {
        sessionStorage.setItem("systemPlusLogged", "true");
        loadCursosCortos();
    } else {
        alert("Usuario o contraseña incorrectos.");
        passwordInput.value = "";
        passwordInput.focus();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    crearModalPassword();
    
    const nav = document.getElementById("main-nav");
    if (nav) nav.style.display = "none";

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            login();
        });
    }

    const logged = sessionStorage.getItem("systemPlusLogged");
    if (logged === "true") {
        if (nav) nav.style.display = "flex";
        loadCursosCortos();
    } else {
        switchView("login-view");
    }
});