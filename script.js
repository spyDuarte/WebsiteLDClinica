/**
 * Dr. Lucas Duarte - Website Scripts
 * Optimized and consolidated JavaScript
 */

(function() {
    'use strict';

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================
    const header = document.querySelector('#header');
    const menuToggle = document.querySelector('#menuToggle');
    const navMenu = document.querySelector('#navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contactForm');
    const phoneInput = document.getElementById('phone');
    const themeToggle = document.getElementById('themeToggle');
    const backToTopBtn = document.getElementById('backToTop');

    // ==========================================================================
    // THEME (DARK MODE) MANAGEMENT
    // ==========================================================================
    function initTheme() {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (systemPrefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });

    // ==========================================================================
    // MOBILE MENU
    // ==========================================================================
    function toggleMenu() {
        const isActive = menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ==========================================================================
    // SMOOTH SCROLLING
    // ==========================================================================
    function smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (!target) return;

        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                return;
            }

            if (document.querySelector(href)) {
                e.preventDefault();
                smoothScrollTo(href);
            }
        });
    });

    // ==========================================================================
    // CONSOLIDATED SCROLL HANDLER
    // ==========================================================================
    let ticking = false;

    function handleScroll() {
        const scrollPosition = window.pageYOffset;

        // Header scroll effect
        if (header) {
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Active navigation link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollPosition > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Parallax effect for hero (subtle)
        const hero = document.querySelector('.hero');
        if (hero && scrollPosition < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    // ==========================================================================
    // BACK TO TOP BUTTON
    // ==========================================================================
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================================================
    // FORM HANDLING
    // ==========================================================================
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const honeypot = contactForm.querySelector('#website');

        // Honeypot check (spam protection)
        if (honeypot && honeypot.value !== '') {
            showNotification('Erro ao enviar mensagem.', 'error');
            return;
        }

        // Get form data
        const formData = {
            name: document.getElementById('name')?.value?.trim(),
            email: document.getElementById('email')?.value?.trim(),
            phone: document.getElementById('phone')?.value?.trim(),
            location: document.getElementById('location')?.value,
            message: document.getElementById('message')?.value?.trim()
        };

        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.location || !formData.message) {
            showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Por favor, insira um email válido.', 'error');
            return;
        }

        // Phone validation (Brazilian format)
        const phoneClean = formData.phone.replace(/\D/g, '');
        if (phoneClean.length < 10 || phoneClean.length > 11) {
            showNotification('Por favor, insira um telefone válido.', 'error');
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
        }

        try {
            // Check if form has Formspree action
            const formAction = contactForm.getAttribute('action');

            if (formAction && formAction.includes('formspree.io')) {
                // Submit to Formspree
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Erro ao enviar');
                }
            } else {
                // Simulate submission for demo
                await new Promise(resolve => setTimeout(resolve, 1500));
                showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                contactForm.reset();
            }
        } catch (error) {
            showNotification('Erro ao enviar mensagem. Tente novamente ou entre em contato por WhatsApp.', 'error');
        } finally {
            if (submitBtn) {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        }
    }

    // ==========================================================================
    // NOTIFICATION SYSTEM
    // ==========================================================================
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Fechar notificação">&times;</button>
        `;

        // Styles
        const styles = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success-color, #38a169)' : 'var(--error-color, #e53e3e)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: 500;
            animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        notification.style.cssText = styles;

        // Close button styles
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            opacity: 0.8;
            transition: opacity 0.2s;
        `;
        closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
        closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.8');
        closeBtn.addEventListener('click', () => removeNotification(notification));

        // Add animation styles if not present
        if (!document.querySelector('#notification-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'notification-styles';
            styleSheet.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(styleSheet);
        }

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => removeNotification(notification), 5000);
    }

    function removeNotification(notification) {
        if (!notification || !notification.parentNode) return;

        notification.style.animation = 'slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    // ==========================================================================
    // PHONE NUMBER FORMATTING
    // ==========================================================================
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 11) {
                value = value.slice(0, 11);
            }

            if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }

            e.target.value = value;
        });
    }

    // ==========================================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // ==========================================================================
    // SCROLL REVEAL FOR .reveal ELEMENTS
    // ==========================================================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // ==========================================================================
    // COUNTER ANIMATION (Prova Social)
    // Animação de contagem para números de estatísticas
    // ==========================================================================
    function animateCounter(element) {
        const text = element.textContent;
        const target = parseInt(text.replace(/\D/g, ''));

        if (isNaN(target)) return;

        const duration = 2000; // 2 segundos
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const easeOutQuad = t => t * (2 - t); // Easing function

        let frame = 0;
        const suffix = text.match(/[+%]/) ? text.match(/[+%]/)[0] : '';
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');

        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentValue = Math.round(target * progress);

            // Formatar número
            let formattedValue = currentValue.toLocaleString('pt-BR');

            // Reconstruir o HTML com spans coloridos
            if (hasPlus) {
                element.innerHTML = `${formattedValue}<span class="accent">+</span>`;
            } else if (hasPercent) {
                element.innerHTML = `${formattedValue}<span class="accent">%</span>`;
            } else {
                element.textContent = formattedValue;
            }

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }

    // Observer para contadores
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================
    function init() {
        // Initialize theme
        initTheme();

        // Setup animation observers for cards
        const animatedElements = document.querySelectorAll(
            '.specialty-card, .location-card, .testimonial-card, .about-content, .feature-item'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            animationObserver.observe(el);
        });

        // Setup reveal observers
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        // Setup counter observers
        const counterElements = document.querySelectorAll('.counter-number');
        counterElements.forEach(el => {
            counterObserver.observe(el);
        });

        // Initial scroll check
        handleScroll();

        // Page load animation
        document.body.style.opacity = '1';
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Ensure body is visible on load
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    });

})();
