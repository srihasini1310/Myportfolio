/**
 * ============================================================================
 * SRI HASINI DUNNA — PORTFOLIO JAVASCRIPT ENGINE (main.js)
 * High-performance, dependency-free vanilla ES6+ scripts
 * Features: Animated Typewriter, Statistics Counter (IntersectionObserver),
 *           Interactive Modals, Form Validation & Scroll-Spy Navigation.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Animated Dynamic Typing Effect (Hero Focus Area)
     -------------------------------------------------------------------------- */
  const typedTarget = document.getElementById('typed-tagline');
  const phrases = [
    'Mechanical Engineering | MANIT Bhopal',
    'Robotics & Automation Enthusiast',
    'Creative Problem-Solver',
    'Founder, JEE Formula Flash',
    'Lifelong Learner & Innovator'
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isBackspacing = false;
  let typeDelay = 90;

  function runTypingLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (isBackspacing) {
      typedTarget.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      typeDelay = 45;
    } else {
      typedTarget.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      typeDelay = 95;
    }

    if (!isBackspacing && letterIndex === currentPhrase.length) {
      isBackspacing = true;
      typeDelay = 1800; // Hold phrase for readability
    } else if (isBackspacing && letterIndex === 0) {
      isBackspacing = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeDelay = 350;
    }

    setTimeout(runTypingLoop, typeDelay);
  }

  if (typedTarget) {
    runTypingLoop();
  }

  /* --------------------------------------------------------------------------
     2. Navbar Elevation & Active Link Scroll-Spy
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const backToTop = document.getElementById('back-to-top');

  function handleWindowScroll() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Sticky header shadow elevation
    if (scrollPos > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Floating back to top visibility
    if (scrollPos > 450) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Scroll spy for highlighting current active nav link
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 140;
      const secId = sec.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href="#${secId}"]`);

      if (navItem) {
        if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', handleWindowScroll, { passive: true });
  handleWindowScroll(); // Run on initial render

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     3. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Auto-close menu on anchor selection
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. Animated Statistics Counter (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimatedCounters = false;

  function countUp(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const decimals = parseInt(element.getAttribute('data-decimals') || '0', 10);
    const duration = 1800; // milliseconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      // Ease out quad calculation
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      element.textContent = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal);

      if (frame === totalFrames) {
        element.textContent = decimals > 0 ? target.toFixed(decimals) : target;
        clearInterval(counterInterval);
      }
    }, frameRate);
  }

  const statsSection = document.getElementById('academics');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedCounters) {
          hasAnimatedCounters = true;
          statNumbers.forEach(el => countUp(el));
          statsObserver.unobserve(statsSection);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  } else {
    // Fallback if observer unsupported
    statNumbers.forEach(el => {
      const target = el.getAttribute('data-target');
      el.textContent = target;
    });
  }

  /* --------------------------------------------------------------------------
     5. Interactive Project Blueprint Modals
     -------------------------------------------------------------------------- */
  const modalTriggers = document.querySelectorAll('.modal-open-trigger');
  const allModals = document.querySelectorAll('.modal-backdrop');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('active');
      targetModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllModals() {
    allModals.forEach(m => {
      m.classList.remove('active');
      m.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = 'auto';
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      openModal(targetId);
    });
  });

  allModals.forEach(modal => {
    // Close button
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeAllModals);

    // Dismiss button
    const dismissBtn = modal.querySelector('.modal-dismiss');
    if (dismissBtn) dismissBtn.addEventListener('click', closeAllModals);

    // Background overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  // Global ESC key listener for modal closure
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  /* --------------------------------------------------------------------------
     6. Contact Form Validation & Real-Time Feedback
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('user-name');
  const emailInput = document.getElementById('user-email');
  const subjectInput = document.getElementById('user-subject');
  const messageInput = document.getElementById('user-message');
  const statusAlert = document.getElementById('form-status-alert');
  const submitButton = document.getElementById('form-submit-button');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function escapeSafe(str) {
    return str.replace(/[&<>"']/g, function(char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[char];
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Clear previous error messages
      document.getElementById('name-error').textContent = '';
      document.getElementById('email-error').textContent = '';
      document.getElementById('message-error').textContent = '';
      statusAlert.style.display = 'none';

      // 1. Name validation
      if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = 'Please provide your name.';
        hasError = true;
      }

      // 2. Email validation
      if (!emailInput.value.trim()) {
        document.getElementById('email-error').textContent = 'Please enter your email address.';
        hasError = true;
      } else if (!isValidEmail(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email format (e.g. name@domain.com).';
        hasError = true;
      }

      // 3. Message validation
      if (!messageInput.value.trim()) {
        document.getElementById('message-error').textContent = 'Please enter your message or inquiry.';
        hasError = true;
      } else if (messageInput.value.trim().length < 8) {
        document.getElementById('message-error').textContent = 'Message should be at least 8 characters long.';
        hasError = true;
      }

      if (!hasError) {
        // UI transmission state
        const originalBtnText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Preparing Dispatch...</span>';

        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.innerHTML = originalBtnText;

          const senderName = escapeSafe(nameInput.value.trim());
          const senderSubject = encodeURIComponent(subjectInput.value.trim() || 'Portfolio Inquiry');
          const senderBody = encodeURIComponent(`From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\nMessage:\n${messageInput.value.trim()}`);
          const targetMailto = `mailto:26116011141@stu.manit.ac.in?subject=${senderSubject}&body=${senderBody}`;

          statusAlert.className = 'form-status-box success';
          statusAlert.innerHTML = `
            <strong><i class="fa-solid fa-circle-check"></i> Message Prepared!</strong><br>
            Thank you, <strong>${senderName}</strong>. To send directly to Sri Hasini's official MANIT inbox:
            <div style="margin-top: 0.6rem;">
              <a href="${targetMailto}" class="btn btn-sm btn-primary" style="font-size:0.8rem; padding: 0.35rem 0.85rem;">
                <i class="fa-solid fa-envelope"></i> Click to Open Mail Client Directly
              </a>
            </div>
          `;
          statusAlert.style.display = 'block';

          // Reset form inputs
          contactForm.reset();
        }, 600);
      }
    });
  }

});
