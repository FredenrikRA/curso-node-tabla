const fs = require("fs");
const colors = require('colors');

const crearTabla = async (base = 0, listar = false, limite = 10) => {

  try {
    let salida = '';
    for(let i = 1; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i }\n`
    }

    if(listar) {
      console.log('=======================' .underline.green);
      console.log(` tabla en base ${base} `.inverse);
      console.log('=======================' .underline.green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return(`table-${base}.txt`);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  crearTabla,
}