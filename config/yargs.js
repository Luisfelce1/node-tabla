
const argv = require('yargs')

.option('b', {
    alias: 'base',
    type: 'number',
    demandedOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandedOption: true,
    default: false,
    describe: 'muestra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 40,
    describe: 'muestra hasta el limite indicado'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv;

module.exports = argv;

