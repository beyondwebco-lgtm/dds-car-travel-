/**
 * D.D.S FRIENDS CAR TRAVELS - Client Application Script
 * Features: WhatsApp Booking Integration, Vehicle Filter, Lightbox, Dynamic Pre-fills
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const COMPANY_PHONE = '+917729988388';
  const WHATSAPP_NUMBER = '917729988388'; // WhatsApp format with country code (India +91)

  // 1. Sticky Navigation Bar & Scroll Spy
  const navbar = document.querySelector('.navbar-custom');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-custom');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky navbar shadow
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scroll Spy active state
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Auto close mobile navbar collapse upon clicking nav-link or CTA buttons
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse) {
    const navItems = navbarCollapse.querySelectorAll('.nav-link, a[href^="#"]');
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  }

  // 2. Vehicle Collection Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const vehicleCards = document.querySelectorAll('.vehicle-item-col');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active class on buttons
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      vehicleCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 3. Vehicle "Book Now" Button Pre-Fill Handler
  const bookVehicleBtns = document.querySelectorAll('.btn-book-vehicle');
  const vehicleSelect = document.getElementById('vehicleCategory');

  bookVehicleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const vehicleName = btn.getAttribute('data-vehicle');

      if (vehicleSelect && vehicleName) {
        // Select matching option
        for (let i = 0; i < vehicleSelect.options.length; i++) {
          if (vehicleSelect.options[i].value.toLowerCase().includes(vehicleName.toLowerCase()) ||
              vehicleSelect.options[i].text.toLowerCase().includes(vehicleName.toLowerCase())) {
            vehicleSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Smooth scroll to booking section
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`Selected "${vehicleName}". Please complete your booking details below.`);
      }
    });
  });

  // 4. Popular Routes & State Pills Quick Selector
  const routePills = document.querySelectorAll('.route-select-pill');
  const destinationInput = document.getElementById('destination');

  routePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const dest = pill.getAttribute('data-destination');
      if (destinationInput && dest) {
        destinationInput.value = dest;
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
          showToast(`Destination set to "${dest}"!`);
        }
      }
    });
  });

  // Set minimum travel date to today
  const travelDateInput = document.getElementById('travelDate');
  if (travelDateInput) {
    const today = new Date().toISOString().split('T')[0];
    travelDateInput.min = today;
  }

  // 5. Booking Form -> WhatsApp Integration
  const bookingForm = document.getElementById('travelBookingForm');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect values
      const name = document.getElementById('customerName').value.trim();
      const phone = document.getElementById('customerPhone').value.trim();
      const pickup = document.getElementById('pickupLocation').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const travelDate = document.getElementById('travelDate').value;
      const pickupTime = document.getElementById('pickupTime').value;
      const vehicle = document.getElementById('vehicleCategory').value;
      const passengers = document.getElementById('passengers').value;
      const tripType = document.getElementById('tripType').value;
      const requirements = document.getElementById('requirements').value.trim();

      // Basic validation
      if (!name || !phone || !pickup || !destination || !travelDate || !pickupTime || !vehicle) {
        alert('Please fill in all mandatory fields to proceed with your booking.');
        return;
      }

      // Format WhatsApp message
      let message = `*NEW BOOKING REQUEST - D.D.S FRIENDS CAR TRAVELS*\n\n`;
      message += `━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `👤 *Customer Name:* ${name}\n`;
      message += `📞 *Mobile Number:* ${phone}\n`;
      message += `📍 *Pickup Location:* ${pickup}\n`;
      message += `🏁 *Destination:* ${destination}\n`;
      message += `📅 *Travel Date:* ${travelDate}\n`;
      message += `⏰ *Pickup Time:* ${pickupTime}\n`;
      message += `🚗 *Vehicle Category:* ${vehicle}\n`;
      message += `👥 *Passengers:* ${passengers || '1-4'}\n`;
      message += `🔄 *Trip Type:* ${tripType}\n`;

      if (requirements) {
        message += `📝 *Additional Notes:* ${requirements}\n`;
      }

      message += `━━━━━━━━━━━━━━━━━━━━━\n`;
      message += `_Sent via D.D.S Friends Car Travels Online Portal_`;

      // Build WhatsApp URL
      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

      // Show confirmation toast
      showToast('Opening WhatsApp with your booking details...');

      // Open WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 400);
    });
  }

  // 6. Gallery Lightbox Functionality
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  const galleryData = [];

  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-item-title') ? item.querySelector('.gallery-item-title').innerText : '';
    const category = item.querySelector('.gallery-item-category') ? item.querySelector('.gallery-item-category').innerText : '';

    galleryData.push({
      src: img.getAttribute('src'),
      title: `${title} (${category})`
    });

    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    if (!lightboxModal) return;
    currentGalleryIndex = index;
    lightboxImg.src = galleryData[index].src;
    lightboxCaption.innerText = galleryData[index].title;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    lightboxImg.src = galleryData[currentGalleryIndex].src;
    lightboxCaption.innerText = galleryData[currentGalleryIndex].title;
  }

  function prevLightbox() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    lightboxImg.src = galleryData[currentGalleryIndex].src;
    lightboxCaption.innerText = galleryData[currentGalleryIndex].title;
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  // Close lightbox on backdrop click
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // Touch Swipe Support for Lightbox (Phones & Tablets)
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance < 0) {
          nextLightbox(); // Swiped left -> next
        } else {
          prevLightbox(); // Swiped right -> prev
        }
      }
    }, { passive: true });
  }

  // 7. Toast Notification Utility
  function showToast(message) {
    let toast = document.getElementById('customToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'customToast';
      toast.className = 'custom-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-gold" style="font-size: 1.3rem;"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }
});

