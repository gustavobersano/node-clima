const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getHoy = async ( direccion ) => {
    try {
        const lugarCoords = await lugar.getLugarLatLon( direccion );
        const lugarClima = await clima.getClima( lugarCoords.lat, lugarCoords.lon );
        return `Hoy en ${ lugarCoords.direccion }:\nNubosidad: ${ lugarClima.nubosidad } %\nTemperatura: ${ lugarClima.temp }º Max:${ lugarClima.temp_max }º - Min:${ lugarClima.temp_min }º\nHumedad: ${ lugarClima.humedad } %\n`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getHoy(argv.direccion)
    .then( console.log )
    .catch( console.log );
;