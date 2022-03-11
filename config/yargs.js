const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Es la opcion para visualizar en consola',
  })
  .option('t', {
    alias: 'limite',
    type: 'number',
    demandOption: true,
    describe: 'Esto limita la tabla de multiplicar',
  })
  .check((argv, option) => {
    if(isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    }
    return true;
  })
  .check((argv, option) => {
    if(isNaN(argv.t)) {
      throw 'El limite tiene que ser un numero';
    }
    return true;
  })
  .argv;

module.exports = argv;