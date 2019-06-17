const axios = require('axios');

const appid = '5f2f7dc5eabc76408bafcd2a95f68390';
const units = 'metric';

const getClima = async ( lat, lon ) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ appid }&units=${ units }`,
    });

    const resp = await instance.get();
    const temp = resp.data.main.temp;
    const temp_max = resp.data.main.temp_max;
    const temp_min = resp.data.main.temp_min;
    const humedad = resp.data.main.humidity;
    const nubosidad = resp.data.clouds.all;

    return {
        temp,
        temp_max,
        temp_min,
        humedad,
        nubosidad
    };

}

module.exports = {
    getClima
}
