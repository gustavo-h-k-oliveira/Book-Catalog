const axios = require('axios');

const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&timezone=America%2FSao_Paulo";

// axios.get(url)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log("\nEnd of resquest.")
//     });

async function getTemperature() {
    try {
        const response = await axios.get(url);
        console.log("Temperatura:", response.data.current.temperature_2m, "°C");
    } catch (error) {
        console.error(error);
    }
}

getTemperature();