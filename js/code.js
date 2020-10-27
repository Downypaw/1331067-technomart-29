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

// close.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupForm.classList.remove('modal-show');
// });
//
// close.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupMap.classList.remove('modal-show');
// });
//
// close.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupMessage.classList.remove('modal-show');
// });
