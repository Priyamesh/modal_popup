'use strict';

const btnsModal = document.querySelectorAll('.show-modal');
console.log(btnsModal);

const modal = document.querySelector('.modal');
console.log(modal);

const btnCloseModal = document.querySelector('.close-modal');
console.log(btnCloseModal);

const overlay = document.querySelector('.overlay');
console.log(overlay);

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
