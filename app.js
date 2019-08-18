//Requireds
const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(colors.green('======== Por Hacer ========'));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.green('==========================='));
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}