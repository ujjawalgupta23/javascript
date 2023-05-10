'use strict';

/** Promise:
 * Promise is an object representing eventual completion of asynchronous operation
 * 
 * An object that is used as a placeholder for the future result of an asynchronous operation.
 *
 * A container for an asynchronously delivered value.
 *
 * A container for a future value(Response from AJAX call).
 *
 * We no longer need to rely on evetns and callbacks passed into asynchronous functions to handle asynchronous results
 *
 * Instead of nesting callbacks, we can chain promised for a sequence of async. operations:- escaping callback hell
 */

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country" ${className}>
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>
                ${Object.values(data.languages).join(' ')}
            </p>
            <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// fetch immediately returns the promise

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

// using arrow
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((response) => response.json(), err=> console.log(err))
        .then((data) => {
            console.log(data);
            return renderCountry(data[0]);
        });
};

const btn = document.querySelector('.btn-country')
btn.addEventListener('click', function (){
    getCountryData('india');

})

// getCountryData('france');
