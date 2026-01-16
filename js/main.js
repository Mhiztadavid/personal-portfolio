// show/hide faq answer

const faq = document.querySelectorAll('.faq');

faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-bars') {
            icon.className = "uil uil-multiply"
        } else{
            icon.className = "uil uil-bars"
        }
    })
});


// media query for tab screen navbar

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');   
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);
// close nav menu when click outside

// swiper js
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
  },
  on: {
    slideChange: function () {
      document.getElementById("current").textContent =
        this.realIndex + 1;
    },
  },
});