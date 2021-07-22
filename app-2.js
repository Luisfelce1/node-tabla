
// Cree este archivo porque estaba saturando el otro con varios ejemplos.


//Exportaciones de otros archivos a este.
const { crearArchivo } = require('./helpers/miltiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.b);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));









