'use strict';

const whereAmI = function (lat, lon) {
    fetch(
        `https://geocode.xyz/${lat},${lon}?geoit=json&auth=494345330400427613807x65575`
    )
        .then((response) => {
            if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`)
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.state}`);
        })
        // 4.
        .catch(err => console.error(`${err.message}`))
};

whereAmI(19.037, 72.873) // mumbai
whereAmI(29.3919, 79.4542); // nainital
whereAmI(-33.933, 18.474); // berlin
