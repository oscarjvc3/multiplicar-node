const { crearArchivo, listar } = require('C:/Users/oscar/OneDrive/Desktop/node/multiplicar/multiplicar');
const argv = require('C:/Users/oscar/OneDrive/Desktop/node/03-bases-node/config/yargs').argv;
let comando = argv._[0];
var colors = require('colors');
switch (comando) {
    case 'listar':
        console.log('listar');
        console.log(argv.base, argv.limite);
        listar(argv.base, argv.limite)
            .then(lista => console.log(lista.blue))
            .catch(e => console.log(e));
        break
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo  creado ${ archivo }`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}