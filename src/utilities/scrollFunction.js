// Función para desplazar suavemente a una sección en pantallas grandes
const IrASeccionGrande = (sectionId, duration = 1000) => {
    // Obtiene el elemento de la sección objetivo
    const targetSection = document.getElementById(sectionId);
    // Obtiene la altura de la barra de navegación
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    // Verifica si la sección objetivo existe
    if (targetSection) {
        // Calcula la posición superior de la sección objetivo ajustada por la altura de la barra de navegación
        const targetSectionTop = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
        // Obtiene la posición inicial del desplazamiento
        const initialY = window.scrollY;
        // Calcula la distancia a desplazar
        const distance = targetSectionTop - initialY;
        // Obtiene el tiempo de inicio del desplazamiento
        const startTime = performance.now();

        // Función recursiva para el desplazamiento suave
        function scrollStep(timestamp) {
            const currentTime = timestamp || performance.now();
            const elapsed = currentTime - startTime;
            // Calcula el progreso del desplazamiento
            const progress = Math.min(elapsed / duration, 1);
            // Función de interpolación para suavizar el movimiento
            const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            // Realiza el desplazamiento
            window.scrollTo(0, initialY + distance * easeInOutQuad(progress));
            // Continúa el desplazamiento si no se ha completado
            if (progress < 1) {
                window.requestAnimationFrame(scrollStep);
            }
        }

        // Inicia el desplazamiento suave
        window.requestAnimationFrame(scrollStep);
    }
};

// Función para desplazar a una sección en pantallas pequeñas
const IrASeccionPequena = (sectionId) => {
    // Verifica si el ID de la sección está vacío
    if (sectionId === '') {
        // Desplaza suavemente al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    } else {
        // Obtiene el elemento de la sección objetivo
        const section = document.getElementById(sectionId);
        // Obtiene la altura de la barra de navegación
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        // Verifica si la sección objetivo existe
        if (section) {
            // Calcula la posición superior de la sección objetivo ajustada por la altura de la barra de navegación
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
            // Desplaza suavemente a la sección objetivo
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            });
        }
    }
};

// Función para desplazar a una sección, adaptando el comportamiento según el tamaño de la pantalla
const IrASeccion = (sectionId) => {
    // Verifica el tamaño de la pantalla y selecciona la función de desplazamiento correspondiente
    if (window.innerWidth > 767) {
        // En pantallas grandes, utiliza la función para desplazamiento suave
        IrASeccionGrande(sectionId);
    } else {
        // En pantallas pequeñas, utiliza la función para desplazamiento suave específica para ellas
        IrASeccionPequena(sectionId);
    }
};

// Exporta la función principal para desplazar a una sección
export default IrASeccion;
