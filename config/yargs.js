// Etiquetas
const direccion = {
    demand: true,
    alias: 'd',
    desc: 'Nombre de la ciudad para obtener el clima'
};

const argv = require('yargs')
    .command('hoy', 'Pronóstico del día actual', {
        direccion
    })
    .command('extendido', 'Pronóstico extendido', {
        direccion
    })
    .help()
    .argv;

module.exports = {
    argv
}