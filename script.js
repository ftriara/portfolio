document.addEventListener('DOMContentLoaded', function() {
  // ===== TYPING ANIMATION (Hanya jika elemen ada) =====
  const descElement = document.getElementById('desc');
  if (descElement) {
    const texts = ['a computer science student', 'a data enthusiast'];
    let count = 0;
    let index = 0;
    function typeFunc() {
      if (count === texts.length) count = 0;
      const currentText = texts[count];
      descElement.textContent = currentText.slice(0, ++index);
      if (index === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(typeFunc, 200);
    }
    typeFunc();
  }

  // ===== NAVIGATION EFFECTS =====
  function handleScroll() {
    const navbar = document.querySelector("nav");
    if (!navbar) return;
    
    const shouldAddClass = window.scrollY > 700;
    navbar.classList.toggle('scrolled', shouldAddClass);
    
    // Hamburger color (jika ada)
    const stackLines = document.querySelectorAll('.stack div');
    if (stackLines.length > 0) {
      stackLines.forEach(line => {
        line.style.background = shouldAddClass ? '#fff' : '#092a44';
      });
    }
  }

 // ===== MOBILE MENU TOGGLE =====
 function setupMobileMenu() {
    const stack = document.querySelector(".stack");
    const navLinks = document.querySelector(".nav-links");
    if (!stack || !navLinks) return;
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    
    // Toggle mobile menu
    stack.addEventListener('click', function() {
        // Periksa menu isOpening
        const isOpening = !navLinks.classList.contains("open");

        // Toggle class 'open' pada menu dan 'toggle' pada hamburger
        navLinks.classList.toggle("open");
        stack.classList.toggle("toggle");

        // Toggle scroll pada body
        document.body.classList.toggle("no-scroll");
        
        // Tutup dropdown ketika menu dibuka
        if (isOpening) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
    
    // Tutup menu setelah klik link
    document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Handle dropdown toggles on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 1000) {
                e.preventDefault();
                e.stopPropagation();
                
                const dropdown = this.nextElementSibling;
                const isOpen = dropdown.style.display === 'block';
                
                // Tutup semua dropdown lainnya
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdown) {
                        menu.style.display = 'none';
                    }
                });
                
                // Toggle dropdown saat ini
                dropdown.style.display = isOpen ? 'none' : 'block';
            }
        });
        
        // Tutup menu saat mengklik item dropdown
        const dropdownItems = toggle.nextElementSibling.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', closeMobileMenu);
        });
    });
    
    // // Close menu when clicking outside
    // document.addEventListener('click', function(e) {
    //     if (window.innerWidth <= 1000) {
    //         if (!e.target.closest('.nav-links') && !e.target.closest('.stack')) {
    //             closeMobileMenu();
    //         }
    //     }
    // });

    function closeMobileMenu() {
        if (window.innerWidth <= 1000) {
            navLinks.classList.remove("open");
            stack.classList.remove("toggle");
            document.body.classList.remove("no-scroll");
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    }
  }

  function setupDesktopDropdowns() {
      const dropdowns = document.querySelectorAll('.dropdown');
      
      dropdowns.forEach(dropdown => {
          const menu = dropdown.querySelector('.dropdown-menu');
          
          dropdown.addEventListener('mouseenter', function() {
              if (window.innerWidth > 1000) {
                  menu.style.display = 'block';
              }
          });
          
          dropdown.addEventListener('mouseleave', function() {
              if (window.innerWidth > 1000) {
                  menu.style.display = 'none';
              }
          });
          
          // Touch support for desktop (hybrid devices)
          dropdown.addEventListener('touchstart', function() {
              if (window.innerWidth > 1000) {
                  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
              }
          });
      });
  }

  // ===== SCROLL TO TOP =====
  function scrollToTop() {
    $(window).scrollTop(0);
  }

  // ===== INITIALIZE EVERYTHING =====
  setupMobileMenu();
  setupDesktopDropdowns();
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize scroll state
  window.scrollToTop = scrollToTop;
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1000) {
      // Reset mobile menu state when resizing to desktop
      document.querySelector(".nav-links").classList.remove("open");
      document.querySelector(".stack").classList.remove("toggle");
      document.body.classList.remove("no-scroll");
    }
  });
});