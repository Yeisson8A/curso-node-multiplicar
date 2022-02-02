//const { argv } = require("process");
//Importar función de archivo multiplicar.js
const {crearArchivo} = require("./helpers/multiplicar");
//Importar yargs con su configuración
const argv = require("./config/yargs");
//Libreria para dar color a los textos de la consola
const colors = require("colors");

//const base = 4;
/*let salida = "";

for (let i = 1; i <= 10; i++) {
    salida += `${base} * ${i} = ${base * i}\n`;
}

//Imprimir datos antes de guardar en archivo
console.log(salida);

//Se usa la libreria file system para guardar los datos en un archivo txt
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //En caso de error
    if(err) throw err;
    //En caso de que todo sea correcto
    console.log(`tabla-${base}.txt creado`);
});*/

//// NO RECOMENDADO
//Leer argumentos de consola
//const [, , arg3 = "base=5"] = process.argv;
//const [, base = 5] = arg3.split("=");

//Llamar función importada
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.italic.green))
    .catch(err => console.log(err));