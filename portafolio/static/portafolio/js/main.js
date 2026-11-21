document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MENÚ DE NAVEGACIÓN MÓVIL (HAMBURGUESA)
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (en dispositivos móviles)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }


    // ==========================================
    // 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO
    // ==========================================
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que se recargue o envíe a servidor externo

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validación simple de campos vacíos
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            // Validación básica de formato de correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, introduce un correo electrónico válido.');
                return;
            }

            // Mensaje de confirmación en pantalla exitoso
            const formContainer = contactForm.parentElement;
            formContainer.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <h3 style="color: #22c55e; margin-bottom: 1rem; font-size: 1.5rem;">¡Mensaje enviado con éxito!</h3>
                    <p style="color: var(--text-muted);">Gracias por contactarme, <strong>${nombre}</strong>. Te responderé pronto al correo <em>${email}</em>.</p>
                </div>
            `;
        });
    }


    // ==========================================
    // 3. FILTRO DE PROYECTOS POR TECNOLOGÍA
    // ==========================================
    const projectsSection = document.querySelector('.projects-section');

    if (projectsSection) {
        // Creamos los botones de filtro dinámicamente arriba de las tarjetas
        const filterContainer = document.createElement('div');
        filterContainer.style.cssText = 'display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 2.5rem; flex-wrap: wrap;';
        
        filterContainer.innerHTML = `
            <button class="btn-filter active" data-filter="all" style="background-color: var(--accent-color); color: var(--text-main); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 2rem; cursor: pointer; font-weight: 500;">Todos</button>
            <button class="btn-filter" data-filter="web" style="background-color: var(--bg-surface); color: var(--text-muted); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 2rem; cursor: pointer; font-weight: 500;">Web</button>
            <button class="btn-filter" data-filter="movil" style="background-color: var(--bg-surface); color: var(--text-muted); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 2rem; cursor: pointer; font-weight: 500;">Móvil / Java</button>
        `;

        const sectionHeader = projectsSection.querySelector('.section-header');
        sectionHeader.after(filterContainer);

        // Identificamos las tarjetas y les asignamos categorías basándonos en su contenido
        const cards = projectsSection.querySelectorAll('.card');
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes('contaclick') || title.includes('scanner')) {
                card.setAttribute('data-category', 'movil');
            } else {
                card.setAttribute('data-category', 'web');
            }
        });

        // Lógica de filtrado al hacer clic en los botones
        const filterButtons = filterContainer.querySelectorAll('.btn-filter');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Cambiar estilos activos de los botones
                filterButtons.forEach(btn => {
                    btn.style.backgroundColor = 'var(--bg-surface)';
                    btn.style.color = 'var(--text-muted)';
                });
                button.style.backgroundColor = 'var(--accent-color)';
                button.style.color = 'var(--text-main)';

                const filterValue = button.getAttribute('data-filter');

                // Mostrar u ocultar tarjetas según el filtro
                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

});