//const fs = require('fs'); //esto esta en la documentació de node 
const { crearArchivo } = require('./helpers/miltiplicar');
//console.log('====================');
//console.log('     Tabla del 5    ');
//console.log('====================');
//console.clear();


const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');


crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

//    const base = 8;

//Esta parte se trabajo con miltiplicar.js.
//========================
//crearArchivo(base)
//    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//    .catch(err => console.log(err));
//
//=========================



//let salida = '';

//for (let i = 1; i <= 10; i++) {
//    salida += `${base} x ${i} = ${base * i}\n`;
//}
//
//console.log(salida);
//
//fs.writeFileSync( `tabla-${base}.txt`, salida); 
//
//
//    console.log(`tabla-${base}.txt crada`);




