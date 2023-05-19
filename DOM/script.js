'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// it returns HTMLCollection and is diff than NodeList, and also updates automatically
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//     'We use cookies for imporved functionality and analytics.';

message.innerHTML =
    "We use cookies for imporved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// const body = document.body;
// body.append(message);

// It can only be at one place at a time
// header.prepend(message); //first child of head
header.append(message); //last child of head

// if we want to insert multiple copies
// header.append(message.cloneNode(true)); // true makes deep copy

// Inserting before / after element
// header.before(message);
// header.after(message);

// To remove the element
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', () => message.remove());
// before remove()
// message.parentElement.removeChild(message)
