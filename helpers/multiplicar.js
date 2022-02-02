//Libreria para usar el file system
const fs = require("fs");
//Libreria para dar color a los textos en la consola
const colors = require("colors");

const crearArchivo = async(base = 5, listar, hasta) => {
    let salida = "";

    try {
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
    
        //validar si se debe de listar en consola
        if (listar) {
            //Imprimir datos antes de guardar en archivo
            console.log(salida.rainbow);
        }
    
        //Se usa la libreria file system para guardar los datos en un archivo txt
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //En caso de que todo sea correcto
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

//Exportar función
module.exports = {
    crearArchivo
}