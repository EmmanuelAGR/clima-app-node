const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=43799fb2071045436f01a6c772f67ff0&units=metric`)

    return resp.data.main.temp;

}

module.exports = {

    getClima

}