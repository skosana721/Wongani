/**
 * Modern Portfolio JavaScript
 * Using ES6+ syntax and Intersection Observer API
 */

// ========================================
// Animated Text for Hero Section (Disabled - using CSS animations instead)
// ========================================
const initAnimatedText = () => {
  // Hero title now uses CSS animations for more dramatic effect
  // The title words animate via CSS keyframes defined in style.css
  
  // Add glitch effect on hover for extra drama
  const titleWords = document.querySelectorAll('.title-word');
  titleWords.forEach(word => {
    word.addEventListener('mouseenter', () => {
      word.style.animation = 'glitch 0.3s ease-in-out';
      setTimeout(() => {
        word.style.animation = '';
      }, 300);
    });
  });
};

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================
const initScrollAnimations = () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (!fadeElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    observer.observe(element);
  });
};

// ========================================
// Sidebar Navigation (MyResume Style)
// ========================================
const initSidebarNav = () => {
  const header = document.querySelector('#header');
  
  if (!header) return;

  // Close sidebar when clicking on a link (mobile)
  const navLinks = document.querySelectorAll('.navmenu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1199) {
        header.classList.remove('header-show');
      }
    });
  });

  // Close sidebar on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1199) {
      header.classList.remove('header-show');
    }
  });

  // Update active nav link based on scroll position
  const handleScroll = () => {
    updateActiveNavLink();
  };

  let ticking = false;
  const debouncedScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', debouncedScroll, { passive: true });
  
  // Initial check
  handleScroll();
};

// ========================================
// Update Active Navigation Link
// ========================================
const updateActiveNavLink = () => {
  const sections = document.querySelectorAll('section[id], .hero[id]');
  const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
  
  if (!sections.length || !navLinks.length) return;

  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

// ========================================
// Scroll to Top Button
// ========================================
const initScrollToTop = () => {
  const scrollTop = document.querySelector('#scroll-top');
  if (!scrollTop) return;

  const toggleScrollTop = () => {
    if (window.scrollY > 300) {
      scrollTop.classList.add('active');
    } else {
      scrollTop.classList.remove('active');
    }
  };

  window.addEventListener('scroll', toggleScrollTop, { passive: true });
  toggleScrollTop();

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
const initSmoothScroll = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip empty hash or just #
      if (href === '#' || href === '') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const targetPosition = target.offsetTop - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// ========================================
// Progress Bar Animation (if still needed)
// ========================================
const initProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-bar[data-progress]');
  
  if (!progressBars.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const value = progressBar.getAttribute('data-progress');
        
        progressBar.style.opacity = '1';
        progressBar.style.width = `${value}%`;
        
        observer.unobserve(progressBar);
      }
    });
  }, observerOptions);

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
};

// ========================================
// Initialize AOS (Animate On Scroll)
// ========================================
const initAOS = () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
};

// ========================================
// Initialize PureCounter
// ========================================
const initPureCounter = () => {
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }
};

// ========================================
// Initialize Swiper
// ========================================
const initSwiper = () => {
  const swipers = document.querySelectorAll('.init-swiper');
  
  swipers.forEach(swiperEl => {
    const configEl = swiperEl.querySelector('.swiper-config');
    if (!configEl) return;

    try {
      const config = JSON.parse(configEl.textContent);
      if (typeof Swiper !== 'undefined') {
        new Swiper(swiperEl, config);
      }
    } catch (error) {
      console.error('Error initializing Swiper:', error);
    }
  });
};

// ========================================
// Initialize Isotope for Portfolio Filtering
// ========================================
const initIsotope = () => {
  const isotopeLayouts = document.querySelectorAll('.isotope-layout');
  
  isotopeLayouts.forEach(layout => {
    const container = layout.querySelector('.isotope-container');
    const filters = layout.querySelectorAll('.isotope-filters li');
    
    if (!container || typeof Isotope === 'undefined') return;

    const defaultFilter = layout.getAttribute('data-default-filter') || '*';
    const layoutMode = layout.getAttribute('data-layout') || 'masonry';
    const sortBy = layout.getAttribute('data-sort') || 'original-order';

    const iso = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: layoutMode,
      sortBy: sortBy
    });

    // Filter functionality
    filters.forEach(filter => {
      filter.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all filters
        filters.forEach(f => f.classList.remove('filter-active'));
        this.classList.add('filter-active');
        
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });

    // ImagesLoaded for better masonry layout
    if (typeof imagesLoaded !== 'undefined') {
      imagesLoaded(container, () => {
        iso.layout();
      });
    }
  });
};

// ========================================
// Initialize GLightbox
// ========================================
const initGLightbox = () => {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
};

// ========================================
// Initialize Typed.js
// ========================================
const initTyped = () => {
  const typedElements = document.querySelectorAll('.typed');
  
  typedElements.forEach(element => {
    const typedItems = element.getAttribute('data-typed-items');
    if (!typedItems || typeof Typed === 'undefined') return;

    const items = typedItems.split(',');
    new Typed(element, {
      strings: items,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  });
};

// ========================================
// Form Validation and Submission
// ========================================
const initContactForm = () => {
  const forms = document.querySelectorAll('.php-email-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const loading = this.querySelector('.loading');
      const errorMessage = this.querySelector('.error-message');
      const sentMessage = this.querySelector('.sent-message');
      
      // Show loading
      loading.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
      
      // Simple validation
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      if (!name || !email || !subject || !message) {
        loading.style.display = 'none';
        errorMessage.textContent = 'Please fill in all fields';
        errorMessage.style.display = 'block';
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        loading.style.display = 'none';
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.style.display = 'block';
        return;
      }
      
      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        loading.style.display = 'none';
        sentMessage.style.display = 'block';
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          sentMessage.style.display = 'none';
        }, 5000);
      }, 1000);
      
      // For actual form submission, you can use Formspree or similar:
      // fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: formData,
      //   headers: { 'Accept': 'application/json' }
      // })
      // .then(response => {
      //   if (response.ok) {
      //     loading.style.display = 'none';
      //     sentMessage.style.display = 'block';
      //     this.reset();
      //   } else {
      //     throw new Error('Form submission failed');
      //   }
      // })
      // .catch(error => {
      //   loading.style.display = 'none';
      //   errorMessage.textContent = 'An error occurred. Please try again.';
      //   errorMessage.style.display = 'block';
      // });
    });
  });
};

// ========================================
// Initialize Everything
// ========================================
const init = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
    return;
  }

  try {
    initAnimatedText();
    initSidebarNav();
    initSmoothScroll();
    initScrollAnimations();
    initProgressBars();
    initScrollToTop();
    initAOS();
    initPureCounter();
    initSwiper();
    initIsotope();
    initGLightbox();
    initTyped();
    initContactForm();
  } catch (error) {
    console.error('Error initializing portfolio:', error);
  }
};

// Start initialization
init();
