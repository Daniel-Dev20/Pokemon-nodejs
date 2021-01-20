const pokemon = require('./services/services');

const argv = require('yargs').options({
    nombre:{
        alias: 'n',
        demand:true,
        descripcion: 'Busca un pokemon con su nombre y muestra su información'
    }
}).argv;



//Funcion desde el servicio para enviar los argumentos de nombre 
pokemon.getInfo(argv.nombre).then(console.log()).catch(console.log());