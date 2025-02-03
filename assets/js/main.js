document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Implementation
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  function setTheme(theme) {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      // Update icon
      const icon = themeToggle.querySelector('.material-icons');
      icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  }
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      setTheme(savedTheme);
  } else if (prefersDarkScheme.matches) {
      setTheme('dark');
  }
  
  themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Smooth Scroll Implementation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Header Scroll Effect
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
          header.classList.remove('scroll-up');
          return;
      }
      
      if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
          // Scroll Down - hide header
          header.classList.remove('scroll-up');
          header.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
          // Scroll Up - show header
          header.classList.remove('scroll-down');
          header.classList.add('scroll-up');
      }
      lastScroll = currentScroll;
  });

  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.subscribe-form');
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const emailInput = this.querySelector('input[type="email"]');
          if (emailInput.value) {
              // Show success message
              showNotification('Successfully subscribed!');
              emailInput.value = '';
          }
      });
  }

  // Shop Button Click Handler
  const shopButtons = document.querySelectorAll('.shop-btn');
  shopButtons.forEach(button => {
      button.addEventListener('click', function() {
          showNotification('Product added to cart!');
      });
  });

  // Notification System
  function showNotification(message) {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = message;
      document.body.appendChild(notification);

      // Trigger animation
      setTimeout(() => {
          notification.classList.add('show');
      }, 100);

      // Remove notification
      setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => {
              notification.remove();
          }, 300);
      }, 3000);
  }

  // Image lazy loading
  const images = document.querySelectorAll('img');
  if ('loading' in HTMLImageElement.prototype) {
      images.forEach(img => {
          img.loading = 'lazy';
      });
  }

  // Search Implementation
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
      searchBtn.addEventListener('click', function() {
          showNotification('Search feature coming soon!');
      });
  }

  // Cart Implementation
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
      cartBtn.addEventListener('click', function() {
          showNotification('Cart feature coming soon!');
      });
  }

  // Add animation on scroll
  const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  }, {
      threshold: 0.1
  });

  document.querySelectorAll('.category-card, .product-card, .newsletter').forEach(element => {
      animateOnScroll.observe(element);
  });
});
