// Menu burger functionality
const menuBurger = document.getElementById('menu-burger');
const menu = document.getElementById('menu');

// Toggle menu on burger click
menuBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('nav')) {
        menu.classList.remove('active');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to top arrow
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== FORMULAIRE DE CONTACT =====
// Contact form submission handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nom = document.getElementById('contact-nom').value;
        const email = document.getElementById('contact-email').value;
        const sujet = document.getElementById('contact-sujet').value;
        const message = document.getElementById('contact-message').value;
        
        // Validation du message
        if (message.trim().length < 10) {
            alert('Le message doit contenir au moins 10 caractères !');
            return;
        }
        
        // Success message
        alert(`Merci ${nom} ! Votre message a été envoyé avec succès.\nNous vous répondrons au plus vite à ${email}`);
        contactForm.reset();
    });
}

// ===== ANIMATION SCROLL REVEAL =====
const revealItems = document.querySelectorAll('.section1 figure, .section2 .para1-a-propos-de-nous, .section2 .team-member, .section3 .galerie-item');

if (revealItems.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible so it doesn't animate again
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Triggers down as soon as 15% of the element is visible
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });
}
