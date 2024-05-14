const IrASeccion = (sectionId, duration = 1000) => {
    const targetSection = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (targetSection) {
        const targetSectionTop = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
        const initialY = window.scrollY;
        const distance = targetSectionTop - initialY;
        const startTime = performance.now();

        function scrollStep(timestamp) {
            const currentTime = timestamp || performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            window.scrollTo(0, initialY + distance * easeInOutQuad(progress));
            if (progress < 1) {
                window.requestAnimationFrame(scrollStep);
            }
        }

        window.requestAnimationFrame(scrollStep);
    }
}

export default IrASeccion;