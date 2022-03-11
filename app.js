const { crearTabla } = require('./util/generarTabla')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();
console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.b);

crearTabla(argv.b, argv.l, argv.t)
  .then(nombreArchivo => console.log(nombreArchivo.trap, 'creado' ))
  .catch(err => console.log(err));

