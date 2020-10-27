const linksBuy = document.querySelectorAll(".buy-button");
const linkMap = document.querySelector(".map");
const writeUsButton = document.querySelector(".write-us-button");
const popupForm = document.querySelector(".modal-window-form");
const popupMap = document.querySelector(".modal-window-map");
const popupMessage = document.querySelector(".modal-window-message");
const closes = document.querySelectorAll(".modal-close");
const close = document.querySelector(".modal-close");
const name = popupForm.querySelector("[name=name]");
const email = popupForm.querySelector("[name=email]");
const letter = popupForm.querySelector("[name=letter]");
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const menuButtons = document.querySelectorAll(".slide");
const deliveryMenu = document.querySelector(".menu-delivery");
const guaranteeMenu = document.querySelector(".menu-guarantee");
const creditMenu = document.querySelector(".menu-credit");
const sectionDelivery = document.querySelector(".section-delivery");
const sectionGuarantee = document.querySelector(".section-guarantee");
const sectionCredit = document.querySelector(".section-credit");

deliveryMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  sectionDelivery.classList.remove('hidden-slide');
  deliveryMenu.classList.add('active-menu');
  sectionGuarantee.classList.add('hidden-slide');
  sectionCredit.classList.add('hidden-slide');
  deliveryMenu.classList.add('active-menu');
  guaranteeMenu.classList.remove('active-menu');
  creditMenu.classList.remove('active-menu');
});

guaranteeMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  sectionGuarantee.classList.remove('hidden-slide');
  guaranteeMenu.classList.add('active-menu');
  deliveryMenu.classList.remove('active-menu');
  creditMenu.classList.remove('active-menu');
  sectionDelivery.classList.add('hidden-slide');
  sectionCredit.classList.add('hidden-slide');
});

creditMenu.addEventListener('click', function(evt) {
  evt.preventDefault();
  sectionCredit.classList.remove('hidden-slide');
  creditMenu.classList.add('active-menu');
  sectionGuarantee.classList.add('hidden-slide');
  sectionDelivery.classList.add('hidden-slide');
  creditMenu.classList.add('active-menu');
  deliveryMenu.classList.remove('active-menu');
  guaranteeMenu.classList.remove('active-menu');
});

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 2;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
buttonNext.addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
});

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
buttonPrev.addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);
});

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    }

let isStorageSupport = true;
let storage = {
  name: "",
  email: ""
};

try {
  storage.name = localStorage.getItem("name");
  storage.email = localStorage.getItem("email");
} catch(err) {
  isStorageSupport = false;
}

closes.forEach((close) => close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMessage.classList.remove('modal-show');
  }
));

closes.forEach((close) => close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.remove('modal-show');
  }
));

closes.forEach((close) => close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupForm.classList.remove('modal-show');
  }
));

linksBuy.forEach((linkBuy) => linkBuy.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMessage.classList.add('modal-show');
  }
));

linkMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.add('modal-show');
});

writeUsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupForm.classList.add('modal-show');

  if(storage) {
    name.value = storage.name;
    email.value = storage.email;
    letter.focus();
  } else {
    name.focus();
  }
});
