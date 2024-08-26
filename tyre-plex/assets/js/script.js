import { loadReviews, createReviewHTML , createModalTopHeaderHTML} from './reviews.js';

function navbarCustomiztion(){
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const backButtons = document.querySelectorAll(".back-btn");
  
    const handleDropdownClick = function (toggle) {
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu.classList.contains("show")) {
        const backButton = dropdownMenu.querySelector(".back-btn");
        backButton.style.display = "block";
      }
    };
  
    const handleBackButtonClick = function (e) {
      e.preventDefault();
      const dropdownMenu = e.target.closest(".dropdown-menu");
      dropdownMenu.classList.remove("show");
      const dropdownToggle = dropdownMenu.previousElementSibling;
      const bootstrapDropdown =
        bootstrap.Dropdown.getInstance(dropdownToggle) ||
        new bootstrap.Dropdown(dropdownToggle);
      bootstrapDropdown.hide();
    };
  
    dropdownToggles.forEach((toggle) =>
      toggle.addEventListener("click", () => handleDropdownClick(toggle))
    );
    backButtons.forEach((backBtn) =>
      backBtn.addEventListener("click", handleBackButtonClick)
    );
  
    if (!("ontouchstart" in document.documentElement)) {
      const handleMouseEnter = function () {
        this.querySelector(".dropdown-menu").classList.add("show");
      };
  
      const handleMouseLeave = function () {
        this.querySelector(".dropdown-menu").classList.remove("show");
      };
  
      document.querySelectorAll(".nav-item.dropdown").forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", handleMouseEnter);
        dropdown.addEventListener("mouseleave", handleMouseLeave);
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarSupportedContent');
    const backdrop = document.getElementById('navBackdrop');
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarInnner = document.querySelector('.navbar-inner');
  
  
    toggleButton.addEventListener('click', function () {
      navbar.classList.toggle('show');
      backdrop.classList.toggle('active');
      navbarInnner.classList.toggle('show')
    });
  
    backdrop.addEventListener('click', function () {
      navbar.classList.remove('show');
      navbarInnner.classList.remove('show')
      backdrop.classList.remove('active');
    });
  });
  
}
navbarCustomiztion()

function gridGallery() {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90vw",
  });
}

gridGallery();

window.addEventListener("scroll", onScroll);

function onScroll(event) {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  document.querySelectorAll("#menu-center a").forEach(function (currLink) {
    var refElement = document.querySelector(currLink.getAttribute("href"));
    if (
      refElement.offsetTop - 200 <= scrollPos &&
      refElement.offsetTop + refElement.offsetHeight > scrollPos
    ) {
      document
        .querySelectorAll("#menu-center ul li a")
        .forEach(function (link) {
          link.classList.remove("active");
        });
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  });
}

// Handle click events on the tab-row links
document.querySelectorAll(".tab-row a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var currentId = this.getAttribute("href");
    setTimeout(function () {
      window.scrollTo({
        top: document.querySelector(currentId).offsetTop - 50,
        behavior: "smooth",
      });
    }, 0);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("dealer-info-section");
  const rowSection = document.getElementById("dealer-info-navigation");

  if (heroSection && rowSection) {
    // Get the height of the hero section dynamically
    const heroHeight = heroSection.getBoundingClientRect().height;

    document.addEventListener("scroll", function () {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Check if the scroll position has passed the hero section height
      if (scrollPosition >= heroHeight) {
        rowSection.style.display = "block"; // Show the row section
      } else {
        rowSection.style.display = "none"; // Hide the row section
      }
    });
  }
});

function swiperSlider() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When the window width is >= 320px (mobile)
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // When the window width is >= 768px (tablet)
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // When the window width is >= 1024px (desktop)
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
    },
  });
}
swiperSlider();

function serviceOfferdSlider() {
  const swiper = new Swiper(".serviceOffer", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When the window width is >= 320px (mobile)
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // When the window width is >= 768px (tablet)
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      // When the window width is >= 1024px (desktop)
      1280: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}
serviceOfferdSlider();

/*----------------------------------------------------
                  show card dealercard
 ----------------------------------------------------*/
function showmoreCard() {
  const cards = document.querySelectorAll(".sold-card");
  const viewMoreBtn = document.getElementById("viewmore-dealer");
  let cardsToShow = 8;

  viewMoreBtn.addEventListener("click", () => {
    const totalCards = cards.length;

    // Calculate the next range of cards to display
    const nextCardsToShow = cardsToShow + 8;

    // Show the next set of cards
    for (let i = cardsToShow; i < nextCardsToShow && i < totalCards; i++) {
      cards[i].style.display = "block";
    }

    cardsToShow = nextCardsToShow;
 // If all cards are displayed, hide the "View More" button
    if (cardsToShow >= totalCards) {
      viewMoreBtn.style.display = "none";
    }
  });
}

showmoreCard();

/*----------------------------------------------------
                  Review progressbar
 ----------------------------------------------------*/
function progressBar() {
  var bars = document.querySelectorAll(".meter > span");
  console.clear();

  setInterval(function () {
    bars.forEach(function (bar) {
      var targetWidth = bar.dataset.progress;
      bar.style.width = targetWidth + "%";
    });
  }, 500);
}
progressBar();


/*----------------------------------------------------
                  Review modal section
 ----------------------------------------------------*/

 document.addEventListener('DOMContentLoaded', async () => {
  const reviewsContainer = document.getElementById('reviewsContainer');
  const modalReviewContent = document.getElementById('modalReviewContent');
  const viewMoreBtns = document.getElementById('viewMoreRevieBtn');
  const modal = document.getElementById('reviewModal');
  const closeBtn = modal.querySelector('.close-btn');
  const modalBackdrop = modal.querySelector('.modal-backdrop');

  const reviews = await loadReviews();

  // Append the first two reviews
  reviews.slice(0, 2).forEach(review => {
    reviewsContainer.insertAdjacentHTML('beforeend', createReviewHTML(review));
  });

  // Handle View More button click
  viewMoreBtns.addEventListener('click', () => {
    modalReviewContent.innerHTML = '';
    modalReviewContent.insertAdjacentHTML('beforeend', createModalTopHeaderHTML());
    reviews.forEach(review => {
      modalReviewContent.insertAdjacentHTML('beforeend', createReviewHTML(review));
    });
    modal.classList.add('open');
    document.body.style.overflowY = 'hidden'; 
  });

  // Close the modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflowY = '';
  });

  modalBackdrop.addEventListener('click', () => {
    modal.classList.remove('open');
  });
});


