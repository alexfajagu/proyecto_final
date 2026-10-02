const courses = [
    { id: 1, type: "tecnico", title: "Técnico en DISEÑO GRÁFICO", res: "Resolución SEM-1900-193-201501", icon: "🎨", desc: "Será formado para construir artes gráficas, visuales, audiovisuales que soportan las fases de expectativa, lanzamientos, promoción y ventas.", modules: ["Informática Básica y Avanzada", "Emprendimiento", "Piezas Publicitarias", "Fotografía y Montaje", "Audio y Animación 2D y 3D", "Edición de Vídeo"] },
    { id: 2, type: "tecnico", title: "Técnico en PROGRAMACIÓN WEB", res: "Resolución SEM-1900-191-201502", icon: "💻", desc: "Los desarrolladores web pueden trabajar en todo tipo de organismos, como grandes empresas, gobiernos, o por cuenta propia como autónomos.", modules: ["Informática Básica y Avanzada", "Herramientas Avanzadas de Excel", "Emprendimiento", "Diseño Web", "Bases de datos y PHP", "Java y Dispositivos Móviles"] },
    { id: 3, type: "tecnico", title: "Técnico en CONTABILIDAD Y FINANZAS", res: "Resolución SEM-1900-189-201503", icon: "📊", desc: "Ocupaciones como asistente administrativo y de oficina, auxiliar contable, auxiliar de nómina, auxiliar de facturación.", modules: ["Informática Básica y Avanzada", "Herramientas Avanzadas de Excel", "Emprendimiento", "Procesos de Oficina", "Procesos Contables", "Proyección Financiera"] },
    { id: 4, type: "tecnico", title: "Técnico en SEGURIDAD OCUPACIONAL", res: "Resolución SEM-1900-195-201504", icon: "🦺", desc: "Como técnico laboral, puede desempeñarse como auxiliar en seguridad y salud en el trabajo con capacidad de identificar condiciones inseguras.", modules: ["Informática Básica y Avanzada", "Herramientas Avanzadas de Excel", "Emprendimiento", "Introducción al SG-SST", "Inspecciones de Seguridad", "Planes de Emergencia", "Procedimiento de Trabajo Seguro (PTS)", "Inglés"] },
    { id: 5, type: "tecnico", title: "Técnico en MANTENIMIENTO DE PC", res: "Resolución SEM-1900-188-201505", icon: "⚙️", desc: "Estará en capacidad de brindar soporte técnico en ensamble, instalación y mantenimiento de computadores, redes y soporte web.", modules: ["Informática Básica y Avanzada", "Herramientas Avanzadas de Excel", "Emprendimiento", "Mantenimiento de Computadores", "Redes Windows", "Diseño Web"] },
    { id: 6, type: "tecnico", title: "Técnico en MERCADEO Y VENTAS", res: "Resolución SEM-1900-196-201506", icon: "📈", desc: "Será formado para implementar procesos que soportan expectativa, lanzamiento, promoción, venta y atención post-venta.", modules: ["Informática Básica y Avanzada", "Herramientas Avanzadas de Excel", "Emprendimiento", "Procesos de Oficina", "Marketing y Ventas", "Investigación de Mercados"] },
    { id: 7, type: "tecnico", title: "Técnico en GERENCIA ADMINISTRATIVA", res: "Resolución SEM-1900-194-201507", icon: "🏢", desc: "Dar respuesta a las necesidades de la micro, mediana y pequeña empresa, haciéndose cargo del ciclo contable y secretarial.", modules: ["Informática Básica y Avanzada", "Herramientas Avanzadas de Excel", "Emprendimiento", "Procesos de Oficina", "Procesos Contables", "Procesos Legales"] },
    { id: 8, type: "tecnico", title: "Técnico en PRIMERA INFANCIA", res: "Resolución SEM-1900-719-201808", icon: "🧸", desc: "Estarán en capacidad de cuidar e instruir a los niños en actividades que estimulen su crecimiento intelectual, físico y social.", modules: ["Informática Básica", "Excel Avanzado", "Emprendimiento", "Protección de los Derechos de Primera Infancia", "Promoción de la Salud y Nutrición", "Atención al Cliente", "Prácticas Educativas", "Inglés"] },
    
    { id: 9, type: "curso", title: "Curso de Diseño Web", res: "Área de Programación - Curso Corto", icon: "🌐", desc: "Aprende a crear y a diseñar una página web utilizando componentes gráficos y un lenguaje de marcas llamado HTML/HTML5.", modules: ["Introducción", "Recursos Gráficos", "HTML 5", "CSS 3", "Administración Web", "CMS"] },
    { id: 10, type: "curso", title: "Curso de Bases de datos y PHP", res: "Área de Programación - Curso Corto", icon: "🗄️", desc: "Aprende a crear bases de datos con SQL para conectar tu sitio web, y utiliza PHP orientado a objetos.", modules: ["Estructura y Análisis de Información", "SQL Introducción a la Base de Datos", "SQL Estructura y Creación de Bases de Datos", "PHP Fundamentos", "PHP Estructura de Datos", "PHP Orientado a Objetos"] },
    { id: 11, type: "curso", title: "Curso de Java y dispositivos móviles", res: "Área de Programación - Curso Corto", icon: "📱", desc: "Aprende un lenguaje de programación orientado a objetos para PC y dispositivos móviles utilizando Android.", modules: ["Java Fundamentos", "Java Entorno Gráfico", "Java Base de Datos", "Android Fundamentos", "Android Desarrollo de Aplicaciones"] },
    { id: 12, type: "curso", title: "Curso de Excel avanzado", res: "Área Administrativa - Curso Corto", icon: "📑", desc: "Conozca y administre de forma asertiva las diferentes herramientas que ofrece la aplicación Microsoft Excel.", modules: ["Fundamentos", "Funciones", "Manejo de Datos", "Grabadora de Macros", "Macros VBA", "Modelos Financieros"] },
    { id: 13, type: "curso", title: "Curso de Informática Básica", res: "Área Administrativa - Curso Corto", icon: "💻", desc: "Desarrolla habilidades prácticas en el uso de las herramientas ofimáticas e internet para el aprendizaje laboral.", modules: ["Windows", "Word", "Excel", "Power Point", "Internet"] },
    { id: 18, type: "curso", title: "Ensamble y Mantenimiento de Computadores", res: "Área de Mantenimiento - Curso Corto", icon: "🔧", desc: "Aprender a realizar mantenimiento preventivo y correctivo a equipos de mesa o portátiles e instalación de sistemas.", modules: ["Partes", "Ensamble", "Instalación de Software", "Hardware Multimedia e Internet", "Sistema Operativo para Técnicos", "Diagnóstico y Corrección"] },
    { id: 22, type: "curso", title: "Curso de Piezas Gráficas", res: "Área de Diseño - Curso Corto", icon: "✏️", desc: "Aprende a crear piezas gráficas que posibilitan comunicar visualmente información usando volantes, afiches y pendones.", modules: ["Conceptos de Diseño y Publicidad", "Corel Draw - Ilustración", "Corel Piezas Gráficas", "Illustrator (Ilustración)", "Illustrator (Herramientas y Piezas)", "Soporte Publicitario"] },
    { id: 26, type: "curso", title: "Introducción al SG – SST", res: "Seguridad y Salud - Curso Corto", icon: "🦺", desc: "Aprenda los conceptos de seguridad y salud en el trabajo, el ciclo PHVA, legislación y tipos de riesgos.", modules: ["Legislación", "Introducción a la Salud Ocupacional", "Riesgos Físicos", "Riesgos Mecánicos y Biomecánicos", "Riesgo Psicosocial", "Riesgo Químico"] },

    { id: 31, type: "diplomado", title: "Proyecciones Financieras", res: "Diplomado Especializado", icon: "📈", desc: "Aprende y maneja los indicadores necesarios para realizar una mejor proyección financiera y correcta toma de decisiones.", modules: ["Fórmulas Financieras I y II", "Diagnóstico Financiero", "Indicadores Financieros", "Proyección, Inflación y Tasa", "Balance y Flujo de Caja", "Análisis y Evaluación con NIIF"] },
    { id: 32, type: "diplomado", title: "Social Media - Marketing Digital", res: "Diplomado Especializado", icon: "📱", desc: "Conoce cómo realizar mercadeo digital para una empresa, utilizando tecnología para su crecimiento profesional y comercial.", modules: ["Economía y Empresa", "Identificación de Mercados", "Preincubación de ideas", "Incubación y Operación", "Estrategias de Expansión"] },
    { id: 33, type: "diplomado", title: "Programación con Excel (Avanzado)", res: "Diplomado Especializado", icon: "📑", desc: "Maneje el programa para desarrollar plantillas para manejo de nóminas, cardex, facturación, inventarios, usando macros.", modules: ["Fundamentos de Excel", "Funciones y Manejo de Datos", "Tablas Dinámicas y Filtros Avanzados", "Grabadora de Macros", "Macros VBA", "Modelos Financieros"] }
];

let currentCourseId = null;
let currentActiveType = 'tecnico';

function handleNavSearch(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('nav-search-input').value.toLowerCase().trim();
        if(query === '') return;

        switchView('catalog-view');
        document.getElementById('catalog-title').innerText = `Resultados para: "${query}"`;
        document.getElementById('catalog-tabs-container').style.display = 'none';

        const results = courses.filter(c => c.title.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
        renderCoursesGrid(results);
    }
}

function goToCategory(type) {
    currentActiveType = type;
    switchView('catalog-view');
    document.getElementById('catalog-title').innerText = "Catálogo de Programas";
    document.getElementById('catalog-tabs-container').style.display = 'flex';
    const targetTab = document.getElementById('tab-' + type);
    if(targetTab) {
        filterCatalog(type, targetTab);
    }
}

function filterCatalog(type, btnElement) {
    currentActiveType = type;
    if(btnElement) {
        document.querySelectorAll('.cat-tab').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }
    renderCoursesGrid(courses.filter(c => c.type === type));
}

function renderCoursesGrid(listToRender, isMyCourses = false) {
    const grid = document.getElementById('course-grid');
    grid.innerHTML = '';

    if(listToRender.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 2rem;">No se encontraron cursos disponibles.</p>`;
        return;
    }

    listToRender.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        
        let badgeHtml = isMyCourses ? `<div class="badge-en-progreso">En Progreso</div>` : '';

        card.innerHTML = `
            ${badgeHtml}
            <div class="course-img">${course.icon}</div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <div class="course-res">${course.res}</div>
                <p class="course-desc">${course.desc}</p>
                <button class="btn-inscribirse" onclick="openCourse(${course.id})">Estudiar Curso</button>
            </div>
        `;
        grid.appendChild(card);
    });
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
    document.getElementById('catalog-tabs-container').style.display = 'none';
    
    let myCourseIds = JSON.parse(localStorage.getItem('my_courses') || '[]');
    let enrolledCourses = courses.filter(c => myCourseIds.includes(c.id));

    if(enrolledCourses.length === 0) {
        enrolledCourses = [courses[0], courses[8]];
        localStorage.setItem('my_courses', JSON.stringify([courses[0].id, courses[8].id]));
    }

    renderCoursesGrid(enrolledCourses, true);
    toggleMobileMenu();
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
    } else {
        nav.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(evento) {
            evento.preventDefault();
            switchView('selection-view');
        });
    }
});