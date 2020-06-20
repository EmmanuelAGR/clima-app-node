const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const econdedUrl = encodeURI(dir);

    //console.log(econdedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude1-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ econdedUrl }`,
        headers: { 'X-RapidAPI-Key': '7f024f37bfmsh37b807e1cb42f08p1d9e1ajsn68a260b4c506' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {

    getLugarLatLng

}