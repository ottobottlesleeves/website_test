// Custom Cursor - Disabled
document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor functionality removed

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animated Counter for Stats
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background: #10b981;' : 
              type === 'error' ? 'background: #ef4444;' : 
              'background: #3b82f6;'}
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-circle, .floating-square, .floating-triangle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in
    const fadeElements = document.querySelectorAll('.feature-card, .about-text, .contact-form');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Add particle effect to hero section
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.6;
        `;
        
        const hero = document.querySelector('.hero');
        hero.appendChild(particle);
        
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        // Animate
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 0.6 },
            { transform: 'translateY(150px)', opacity: 0 }
        ], {
            duration: 4500,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            hero.removeChild(particle);
        };
    }
    
    // Create particles even more frequently
    setInterval(createParticle, 200);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Advanced dynamic gradient system for sleeve-specific colors
    function initAdvancedDynamicGradients() {
        const collegesCarousel = document.querySelector('.colleges-carousel');
        if (!collegesCarousel) return;

        // Define primary colors for each sleeve
        const sleeveColors = {
            'ucla': '#2774AE',      // UCLA blue
            'ucsb': '#003660',      // UCSB blue  
            'ucdavis': '#022851',   // UC Davis blue
            'slo': '#154734',       // Cal Poly green
            'stanford': '#8C1515'   // Stanford red
        };

        // Create a dynamic background element
        const dynamicBackground = document.createElement('div');
        dynamicBackground.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        collegesCarousel.style.position = 'relative';
        collegesCarousel.appendChild(dynamicBackground);

        // Function to generate dynamic gradients based on sleeve positions
        function updateDynamicGradients() {
            const carouselTrack = collegesCarousel.querySelector('.collection-carousel-track');
            // Get ALL items including clones for position tracking
            const allItems = carouselTrack.querySelectorAll('.collection-carousel-item');
            const container = collegesCarousel.querySelector('.collection-carousel-container');
            
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            
            // Get positions of all sleeves (including clones)
            const sleevePositions = [];
            allItems.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const productName = item.querySelector('.collection-product-name').textContent.toLowerCase();
                
                // Determine sleeve type
                let sleeveType = 'ucla';
                if (productName.includes('ucsb')) sleeveType = 'ucsb';
                else if (productName.includes('davis')) sleeveType = 'ucdavis';
                else if (productName.includes('slo')) sleeveType = 'slo';
                else if (productName.includes('stanford')) sleeveType = 'stanford';
                
                            // Account for the CSS transform offset - adjusted to center products in color zones
            const offsetAdjustment = 15;
            sleevePositions.push({
                left: itemRect.left - containerRect.left - offsetAdjustment,
                right: itemRect.right - containerRect.left - offsetAdjustment,
                center: (itemRect.left + itemRect.right) / 2 - containerRect.left - offsetAdjustment,
                color: sleeveColors[sleeveType],
                type: sleeveType
            });
            });

            // Sort by position
            sleevePositions.sort((a, b) => a.left - b.left);

            // Generate gradient stops
            let gradientStops = [];
            
            // Add initial white
            gradientStops.push('white 0%');
            
            // Add gradients for each sleeve and transitions
            sleevePositions.forEach((sleeve, index) => {
                const sleeveWidth = sleeve.right - sleeve.left;
                const sleeveCenter = sleeve.center;
                
                            // Add transition from previous color to this sleeve's color
            if (index > 0) {
                const prevSleeve = sleevePositions[index - 1];
                const transitionStart = prevSleeve.right;
                const transitionEnd = sleeve.left;
                const transitionWidth = transitionEnd - transitionStart;
                
                if (transitionWidth > 0) {
                    const startPercent = (transitionStart / containerWidth) * 100;
                    const endPercent = (transitionEnd / containerWidth) * 100;
                    // Add a slightly earlier start and later end for smoother blending
                    const blendStart = Math.max(0, startPercent - 2);
                    const blendEnd = Math.min(100, endPercent + 2);
                    gradientStops.push(`${prevSleeve.color} ${blendStart}%`);
                    gradientStops.push(`${sleeve.color} ${blendEnd}%`);
                }
            }
                
                            // Add sleeve's color section with slight blending at edges
            const sleeveStartPercent = (sleeve.left / containerWidth) * 100;
            const sleeveEndPercent = (sleeve.right / containerWidth) * 100;
            // Slightly extend the color beyond the exact sleeve boundaries for smoother blending
            const extendedStart = Math.max(0, sleeveStartPercent - 1);
            const extendedEnd = Math.min(100, sleeveEndPercent + 1);
            gradientStops.push(`${sleeve.color} ${extendedStart}%`);
            gradientStops.push(`${sleeve.color} ${extendedEnd}%`);
            });
            
            // Add final white
            gradientStops.push('white 100%');

            // Create the dynamic horizontal gradient
            const horizontalGradient = `linear-gradient(90deg, ${gradientStops.join(', ')})`;
            
                            // Apply the horizontal gradient to the main background
        dynamicBackground.style.background = horizontalGradient;
        dynamicBackground.style.backgroundSize = '100% 100%';
        dynamicBackground.style.backgroundPosition = 'center center';
        dynamicBackground.style.backgroundRepeat = 'no-repeat';
        
        // Create a separate overlay for the vertical gradient
        let verticalOverlay = collegesCarousel.querySelector('#vertical-gradient-overlay');
        if (!verticalOverlay) {
            verticalOverlay = document.createElement('div');
            verticalOverlay.id = 'vertical-gradient-overlay';
            verticalOverlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                background: linear-gradient(180deg, 
                    #ffffff 0%, 
                    rgba(255, 255, 255, 0.6) 15%, 
                    rgba(255, 255, 255, 0.3) 25%, 
                    rgba(255, 255, 255, 0.1) 35%, 
                    rgba(255, 255, 255, 0) 45%, 
                    rgba(255, 255, 255, 0) 55%, 
                    rgba(255, 255, 255, 0.1) 65%, 
                    rgba(255, 255, 255, 0.3) 75%, 
                    rgba(255, 255, 255, 0.6) 85%, 
                    #ffffff 100%
                );
                mix-blend-mode: normal;
            `;
            collegesCarousel.appendChild(verticalOverlay);
        }
    }

        // Update gradients frequently
        setInterval(updateDynamicGradients, 50); // Update every 50ms for smooth animation
        
        // Initial update
        updateDynamicGradients();
    }

    // Initialize advanced dynamic gradients
    initAdvancedDynamicGradients();
    
    // Initialize seamless infinite carousel
    function initInfiniteCarousel() {
        const carouselTracks = document.querySelectorAll('.collection-carousel-track');
        
        carouselTracks.forEach(track => {
            const items = track.querySelectorAll('.collection-carousel-item');
            const itemsArray = Array.from(items);
            
            // Clone all items and append them to create seamless loop
            itemsArray.forEach(item => {
                const clone = item.cloneNode(true);
                // Mark clones so gradient calculation ignores them
                clone.setAttribute('data-clone', 'true');
                track.appendChild(clone);
            });
            
            // Adjust animation duration based on total width
            const totalItems = items.length * 2;
            const animationDuration = totalItems * 3; // 3 seconds per item
            track.style.animationDuration = `${animationDuration}s`;
        });
    }
    
    // Run after a short delay to ensure DOM is ready
    setTimeout(initInfiniteCarousel, 100);

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('.product-name').textContent;
            const productPrice = productItem.querySelector('.product-price').textContent;
            
            // Show success notification
            showNotification(`${productName} added to cart!`, 'success');
            
            // Add visual feedback
            this.textContent = 'Added!';
            this.style.background = '#10b981';
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = '';
                this.style.transform = '';
            }, 2000);
        });
    });
}); 