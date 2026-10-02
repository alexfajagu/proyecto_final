// BASE DE DATOS COMPLETA DE CURSOS SYSTEM PLUS
const courses = [
    // ================= ÁREA DE PROGRAMACIÓN =================
    { 
        id: 1, type: "curso", title: "Curso de Diseño Web", res: "Área de Programación", icon: "🌐", 
        desc: "Aprende a crear y a diseñar una página web utilizando componentes gráficos que también serán aprendidos dentro de este módulo de formación, conoce y aprende un lenguaje de marcas llamado HTML/HTML5.", 
        modules: ["INTRODUCCIÓN", "RECURSOS GRÁFICOS", "HTML 5", "CSS 3", "ADMINISTRACIÓN WEB", "CMS"] 
    },
    { 
        id: 2, type: "curso", title: "Curso de Bases de datos y PHP", res: "Área de Programación", icon: "🗄️", 
        desc: "Aprende a crear bases de datos con el lenguaje de programación SQL que te permitirá conectar tu base de datos con la página o aplicativo web, aprende un lenguaje orientado a objetos como lo es PHP.", 
        modules: ["ESTRUCTURA Y ANÁLISIS DE INFORMACIÓN", "SQL INTRODUCCIÓN A LA BASE DE DATOS", "SQL ESTRUCTURA Y CREACIÓN DE BASES DE DATOS", "PHP FUNDAMENTOS", "PHP ESTRUCTURA DE DATOS", "PHP ORIENTADO A OBJETOS"] 
    },
    { 
        id: 3, type: "curso", title: "Curso de Java y dispositivos móviles", res: "Área de Programación", icon: "📱", 
        desc: "Aprende un lenguaje de programación orientado a objetos cuyo objetivo es escribir el código una vez y ejecutarse en cualquier dispositivo. Aprende Android para crear apps móviles.", 
        modules: ["JAVA FUNDAMENTOS", "JAVA ENTORNO GRÁFICO", "JAVA BASE DE DATOS", "ANDROID FUNDAMENTOS", "ANDROID DESARROLLO DE APLICACIONES"] 
    },

    // ================= ÁREA ADMINISTRATIVA =================
    { 
        id: 4, type: "curso", title: "Curso de Excel avanzado", res: "Área Administrativa", icon: "📊", 
        desc: "Conozca y administre de forma asertiva, las diferentes herramientas que ofrece la aplicación Microsoft Excel. Tablas dinámicas, funciones, macros y filtros avanzados.", 
        modules: ["FUNDAMENTOS", "FUNCIONES", "MANEJO DE DATOS", "GRABADORA DE MACROS", "MACROS VBA", "MODELOS FINANCIEROS"] 
    },
    { 
        id: 5, type: "curso", title: "Curso de Informática Básica", res: "Área Administrativa", icon: "💻", 
        desc: "Desarrolla habilidades prácticas en el uso de las herramientas ofimáticas e internet para el uso del aprendizaje en un ambiente laboral o personal.", 
        modules: ["WINDOWS", "WORD", "EXCEL", "POWER POINT", "INTERNET"] 
    },
    { 
        id: 6, type: "curso", title: "Curso de Emprendimiento Empresarial", res: "Área Administrativa", icon: "💡", 
        desc: "Desarrolla habilidades prácticas en el montaje de una empresa utilizando tecnología para su crecimiento profesional y empresarial, conoce cómo realizar mercadeo y proyecciones financieras.", 
        modules: ["ECONOMÍA Y EMPRESA", "IDENTIFICACIÓN", "PRE-INCUBACIÓN", "INCUBACIÓN", "OPERACIÓN", "EXPANSIÓN"] 
    },
    { 
        id: 7, type: "curso", title: "Curso de Procesos Contables", res: "Área Administrativa", icon: "🧾", 
        desc: "Aprenda los conocimientos fundamentales de la Contabilidad manual y sistematizada como sistema de información para ofrecer información financiera útil en la toma de decisiones. Manejo de CG1.", 
        modules: ["CONTABILIDAD Y LA EMPRESA", "PARTIDA DOBLE", "ECUACIÓN FUNDAMENTAL LIBROS AUXILIARES", "LIBROS OFICIALES", "DOCUMENTOS CONTABLES, NÓMINA E INVENTARIO", "CONTABILIDAD SISTEMATIZADA (CGUNO)"] 
    },
    { 
        id: 8, type: "curso", title: "Curso de PROCESOS LEGALES", res: "Área Administrativa", icon: "⚖️", 
        desc: "Aprenda y conozca la estructura legal de una empresa, como es su funcionamiento en la parte legal, en el área comercial, laboral, tributaria y bancaria.", 
        modules: ["HISTORIA Y CONSTITUCIÓN", "LEGISLACIÓN COMERCIAL", "LEGISLACIÓN LABORAL", "LEGISLACIÓN Y TRIBUTARIA", "LEGISLACIÓN BANCARIA", "DERECHOS DE AUTOR, MARCAS Y PATENTES"] 
    },
    { 
        id: 9, type: "curso", title: "Procesos de Oficina y Comunicación Empresarial", res: "Área Administrativa", icon: "🗂", 
        desc: "Desarrollar habilidades prácticas para el manejo de una oficina, ortografía, redacción, elaboración de documentos, también la organización y logística de eventos.", 
        modules: ["INTRODUCCIÓN A LA OFIMÁTICA", "ORTOGRAFÍA Y REDACCIÓN", "CORRESPONDENCIA Y PRODUCCIÓN DE DOCUMENTOS", "CÁLCULOS DE OFICINA", "ARCHIVÍSTICA", "RELACIONES PÚBLICAS"] 
    },

    // ================= ÁREA DE MANTENIMIENTO =================
    { 
        id: 10, type: "curso", title: "Ensamble y Mantenimiento de Computadores", res: "Área de Mantenimiento", icon: "🔧", 
        desc: "Aprender a realizar mantenimiento preventivo y correctivo a un computador de mesa o portátil, armar y desarmar equipos, instalación de sistemas operativos y antivirus.", 
        modules: ["PARTES", "ENSAMBLE", "INSTALACIÓN DE SOFTWARE", "HARDWARE MULTIMEDIA E INTERNET", "SISTEMA OPERATIVO PARA TÉCNICOS", "DIAGNÓSTICO Y CORRECCIÓN"] 
    },
    { 
        id: 11, type: "curso", title: "Curso de Redes Windows", res: "Área de Mantenimiento", icon: "📡", 
        desc: "Construir entornos de red Punto a Punto y Cliente Servidor, utilizando los diferentes conceptos, herramientas y sistemas operativos de microsoft para garantizar conectividad.", 
        modules: ["TEORÍA GENERAL DE REDES ALÁMBRICAS E INALÁMBRICAS", "REDES PUNTO A PUNTO", "REDES CLIENTE SERVIDOR", "REDES CLIENTE SERVIDOR (ADMINISTRACIÓN)", "REDES CLIENTE SERVIDOR INTERNET, EXTRANET", "SEGURIDAD Y MANTENIMIENTO DEL SISTEMA"] 
    },
    { 
        id: 12, type: "curso", title: "Curso de Mantenimiento de Celulares", res: "Área de Mantenimiento", icon: "📲", 
        desc: "Aprender a diagnosticar fallas de los equipos móviles, realizar mantenimiento preventivo y correctivo, realizando las reparaciones y cambio de componentes.", 
        modules: ["Herramientas básicas y profesionales", "Tecnología existente y Opciones de negocio", "Manejo del multímetro y Lectura con tester", "Componentes de tarjetas lógicas", "Cambiar táctil, display y visor", "Fallas comunes y Mantenimiento", "Reconstruir flex y Liberación de bandas", "Soldadura, puentes y puertos", "Manejo del software, flasheo y hard reset"] 
    },
    { 
        id: 13, type: "curso", title: "Curso de Electrónica", res: "Área de Mantenimiento", icon: "⚡", 
        desc: "Conocer los conceptos de electrónica, aprender a construir dispositivos que permitan dar respuesta a una necesidad del mercado laboral y reparación electrónica.", 
        modules: ["FUNDAMENTOS DE ELECTRÓNICA", "HERRAMIENTAS Y COMPONENTES ELECTRÓNICOS", "MEDICIONES Y PRUEBAS", "SOLDADURA Y CAMBIOS DE COMPONENTES", "PROYECTO FINAL"] 
    },

    // ================= ÁREA DE DISEÑO =================
    { 
        id: 14, type: "curso", title: "Curso de Piezas Gráficas", res: "Área de Diseño", icon: "✏️", 
        desc: "Aprende a crear piezas gráficas que posibilitan comunicar visualmente información, hechos, ideas y valores. Utilizando volantes, afiches, pendones, tarjetas, entre otros.", 
        modules: ["CONCEPTOS DE DISEÑO Y PUBLICIDAD", "COREL DRAW - ILUSTRACIÓN", "COREL PIEZAS GRÁFICAS", "ILLUSTRATOR (ILUSTRACIÓN)", "ILLUSTRATOR (HERRAMIENTAS Y PIEZAS GRÁFICAS)", "SOPORTE PUBLICITARIO"] 
    },
    { 
        id: 15, type: "curso", title: "Curso de Fotografía y Montaje", res: "Área de Diseño", icon: "📸", 
        desc: "Aprende a capturar imágenes desde tu celular y con una cámara profesional, utilizar los enfoques, editar, crear fotomontajes y realizar revelados digitales.", 
        modules: ["FOTOGRAFÍA E INTRODUCCIÓN LA FOTOGRAFÍA", "TÉCNICAS DE FOTOGRAFÍA", "PHOTOSHOP HERRAMIENTAS", "PHOTOSHOP FOTOMONTAJES Y PIEZAS GRÁFICAS", "REVELADO DIGITAL (ADOBE LIGHTROOM)", "CAMPAÑA PUBLICITARIA"] 
    },
    { 
        id: 16, type: "curso", title: "Curso de Audio y Animación 2D", res: "Área de Diseño", icon: "🎬", 
        desc: "Aprende a crear y editar audios que te permitan elaborar diferentes tipos de campañas auditivas o editar y realizar montajes con videos, animar objetos en 2D.", 
        modules: ["INTRODUCCIÓN A LA ANIMACIÓN", "AUDITION", "ANIMATE (ENTORNO GRÁFICO)", "ANIMATE (PIEZAS AUDIOVISUALES)", "MARKETING DIGITAL (CONCEPTOS)", "MARKETING DIGITAL (HERRAMIENTAS)"] 
    },
    { 
        id: 17, type: "curso", title: "Edición de Video (Producción Audiovisual)", res: "Área de Diseño", icon: "🎞️", 
        desc: "Aprende a crear guiones, ensamblar productos multimedia, crear y editar videos para promocionar una empresa, aplicar efectos y montar estructuras de video.", 
        modules: ["SOPORTE DE GUIÓN (PRE-PRODUCCIÓN)", "CÁMARA DE VIDEO (PRE-PRODUCCIÓN)", "PREMIER (EDICIÓN DE VIDEO – PRODUCCIÓN)", "PREMIER (MONTAJE DE VIDEO – PRODUCCIÓN)", "AFTER EFFECTS (POST- PRODUCCIÓN)", "PROYECTO TELEVISIVO (POST- PRODUCCIÓN)"] 
    },

    // ================= ÁREA DE SEGURIDAD Y SALUD =================
    { 
        id: 18, type: "curso", title: "Introducción al SG – SST", res: "Área de Seguridad y Salud en el Trabajo", icon: "🛡️", 
        desc: "Aprenda los conceptos de seguridad y salud, el ciclo PHVA, actualidad de accidentes a nivel mundial, legislación pertinente y matriz de riesgos de una organización.", 
        modules: ["LEGISLACIÓN", "INTRODUCCIÓN A LA SALUD OCUPACIONAL", "RIESGOS FÍSICOS", "RIESGOS MECÁNICOS Y BIOMECÁNICOS", "RIESGO PSICOSOCIAL", "RIESGO QUÍMICO"] 
    },
    { 
        id: 19, type: "curso", title: "Curso de Inspecciones de seguridad", res: "Área de Seguridad y Salud en el Trabajo", icon: "🔎", 
        desc: "Aprenda a mantener las instalaciones y equipos en condiciones de seguridad de acuerdo con el reglamento interno de la empresa y la normatividad de ley.", 
        modules: ["CONCEPTO DE INSPECCIÓN", "INSPECCIÓN DEL PUESTO DE TRABAJO", "INSPECCIÓN E INTERVENCIÓN DE RIESGOS", "INSPECCIONES NO PLANEADAS", "INDICADORES DE INSPECCIÓN", "PRIORIZACIÓN DE RIESGO"] 
    },
    { 
        id: 20, type: "curso", title: "Curso de Planes de emergencia", res: "Área de Seguridad y Salud en el Trabajo", icon: "🚨", 
        desc: "Aprenda a cómo reducir los riesgos de acuerdo con las características del entorno y generar acciones de prevención de incidentes acorde con la normativa vigente.", 
        modules: ["MARCO LEGAL", "INVENTARIO DE AMENAZAS", "ANÁLISIS DE VULNERABILIDAD", "PLAN DE EVACUACIÓN", "PROCEDIMIENTO OPERATIVO DE SEGURIDAD", "SIMULACIONES Y SIMULACROS"] 
    },
    { 
        id: 21, type: "curso", title: "Procedimiento de trabajo seguro", res: "Área de Seguridad y Salud en el Trabajo", icon: "📋", 
        desc: "Aprende a apoyar las actividades de SST de acuerdo con el programa establecido y normativa legal vigente. Cumplimiento de normas ambientales y de seguridad.", 
        modules: ["PTS SOLDADURA", "PTS ENERGÍAS PELIGROSAS", "PTS ESPACIOS CONFINADOS", "PTS TRABAJO EN ALTURAS", "PTS PRODUCTOS QUÍMICOS", "PTS HERRAMIENTAS MANUALES"] 
    },
    { 
        id: 22, type: "curso", title: "Curso de Inglés Básico", res: "Área de Seguridad y Salud en el Trabajo", icon: "💬", 
        desc: "Aprenda los conocimientos básicos en las 4 habilidades del idioma inglés (Hablar, escuchar, leer y escribir), para desarrollar la competencia comunicativa a nivel básico.", 
        modules: ["ELEMENTARY A1.1", "ELEMENTARY A1.2", "ELEMENTARY A1.3", "ELEMENTARY A1.4", "ELEMENTARY A1.5"] 
    }
];

let currentCourseId = null;

function loadCursosCortos() {
    switchView('catalog-view');
    document.getElementById('catalog-title').innerText = "Catálogo de Programas";
    renderCoursesGrid(courses);
}

function handleNavSearch(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('nav-search-input').value.toLowerCase().trim();
        if(query === '') return;

        switchView('catalog-view');
        document.getElementById('catalog-title').innerText = `Resultados para: "${query}"`;

        const results = courses.filter(c => c.title.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
        renderCoursesGrid(results);
    }
}

function renderCoursesGrid(listToRender, isMyCourses = false) {
    const grid = document.getElementById('course-grid');
    grid.innerHTML = '';

    if(listToRender.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No se encontraron cursos disponibles.</p>`;
        return;
    }

    // === LÓGICA DE AGRUPACIÓN POR ÁREAS ===
    const groupedCourses = {};
    listToRender.forEach(course => {
        const area = course.res;
        if (!groupedCourses[area]) {
            groupedCourses[area] = [];
        }
        groupedCourses[area].push(course);
    });

    let isFirst = true; // Para abrir la primera categoría por defecto

    for (const area in groupedCourses) {
        // 1. Contenedor de la sección
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'area-section';

        // 2. Título desplegable
        const areaTitle = document.createElement('div');
        areaTitle.className = `area-title collapsible ${isFirst ? 'active' : ''}`;
        areaTitle.innerHTML = `
            <h3>${area.toUpperCase()}</h3>
            <span class="toggle-icon" style="transform: ${isFirst ? 'rotate(180deg)' : 'rotate(0deg)'}">▼</span>
        `;

        // 3. Contenedor interno de cursos (el grid de las tarjetas)
        const coursesContainer = document.createElement('div');
        coursesContainer.className = `area-courses-grid ${isFirst ? 'open' : ''}`;

        // Llenamos el contenedor interno con tarjetas
        groupedCourses[area].forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            
            let badgeHtml = isMyCourses ? `<div class="badge-en-progreso">En Progreso</div>` : '';

            card.innerHTML = `
                ${badgeHtml}
                <div class="course-img">${course.icon}</div>
                <div class="course-content">
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                    <button class="btn-inscribirse" onclick="openCourse(${course.id})">Estudiar Curso</button>
                </div>
            `;
            coursesContainer.appendChild(card);
        });

        // Evento para abrir y cerrar (Acordeón)
        areaTitle.addEventListener('click', function() {
            this.classList.toggle('active');
            coursesContainer.classList.toggle('open');
            
            const icon = this.querySelector('.toggle-icon');
            if (coursesContainer.classList.contains('open')) {
                icon.style.transform = "rotate(180deg)";
            } else {
                icon.style.transform = "rotate(0deg)";
            }
        });

        // Juntamos todo y lo pegamos en la pantalla
        sectionDiv.appendChild(areaTitle);
        sectionDiv.appendChild(coursesContainer);
        grid.appendChild(sectionDiv);
        
        isFirst = false;
    }
}

function openCourse(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;
    currentCourseId = id;

    document.getElementById('dash-title').innerText = course.title;
    document.getElementById('dash-res').innerText = course.res;
    document.getElementById('dash-desc').innerText = course.desc;

    let myCourses = JSON.parse(localStorage.getItem('my_courses') || '[]');
    if(!myCourses.includes(id)) {
        myCourses.push(id);
        localStorage.setItem('my_courses', JSON.stringify(myCourses));
    }

    renderModulesList(course, 0);
    updateProgressUI(course);
    switchView('dashboard-view');
}

function renderModulesList(course, activeIndex) {
    const moduleList = document.getElementById('module-list');
    moduleList.innerHTML = '';

    let completedModules = JSON.parse(localStorage.getItem(`completed_course_${course.id}`) || '[]');

    course.modules.forEach((mod, index) => {
        const isCompleted = completedModules.includes(index);
        const isActive = index === activeIndex;

        const li = document.createElement('li');
        li.className = `module-item ${isActive ? 'active-module' : ''} ${isCompleted ? 'completed-module' : ''}`;
        
        li.innerHTML = `
            <div class="module-left" onclick="selectModule(${course.id}, ${index})">
                <div class="module-number">${index + 1}</div>
                <div style="font-size: 0.85rem; font-weight: 500;">${mod}</div>
            </div>
            <button class="btn-check" onclick="event.stopPropagation(); toggleModuleComplete(${course.id}, ${index})">
                ${isCompleted ? '✓ Visto' : 'Marcar visto'}
            </button>
        `;
        moduleList.appendChild(li);
    });

    document.getElementById('current-lesson-title').innerText = `Estudiando: Módulo ${activeIndex + 1} - ${course.modules[activeIndex]}`;
}

function selectModule(courseId, modIndex) {
    const course = courses.find(c => c.id === courseId);
    if(course) {
        renderModulesList(course, modIndex);
    }
}

function toggleModuleComplete(courseId, modIndex) {
    const course = courses.find(c => c.id === courseId);
    let completedModules = JSON.parse(localStorage.getItem(`completed_course_${courseId}`) || '[]');

    if(completedModules.includes(modIndex)) {
        completedModules = completedModules.filter(i => i !== modIndex);
    } else {
        completedModules.push(modIndex);
    }

    localStorage.setItem(`completed_course_${courseId}`, JSON.stringify(completedModules));
    renderModulesList(course, modIndex);
    updateProgressUI(course);
}

function updateProgressUI(course) {
    let completedModules = JSON.parse(localStorage.getItem(`completed_course_${course.id}`) || '[]');
    const totalModules = course.modules.length;
    const percentage = Math.round((completedModules.length / totalModules) * 100);

    document.getElementById('progress-bar-fill').style.width = percentage + '%';
    document.getElementById('progress-text').innerText = `${percentage}% Completado (${completedModules.length}/${totalModules} módulos)`;
}

function loadMyCourses() {
    switchView('catalog-view');
    document.getElementById('catalog-title').innerText = "Mis Cursos en Progreso";
    
    let myCourseIds = JSON.parse(localStorage.getItem('my_courses') || '[]');
    let enrolledCourses = courses.filter(c => myCourseIds.includes(c.id));

    if(enrolledCourses.length === 0) {
        enrolledCourses = [courses[0], courses[3]]; 
        localStorage.setItem('my_courses', JSON.stringify([courses[0].id, courses[3].id]));
    }

    renderCoursesGrid(enrolledCourses, true);
    
    const navLinks = document.getElementById('nav-links');
    if(navLinks.classList.contains('mobile-active')) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('mobile-active');
}

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    const nav = document.getElementById('main-nav');
    if (viewId === 'login-view') {
        nav.style.display = 'none';
        document.getElementById('usuario').value = '';
        document.getElementById('password').value = '';
    } else {
        nav.style.display = 'flex';
    }
}

// LOGIN LIBERADO: Sin importar lo que escribas, entra al portal
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(evento) {
            evento.preventDefault(); 
            // Carga el catálogo sin validar usuario ni contraseña
            loadCursosCortos();
        });
    }
});