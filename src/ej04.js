import fs from 'fs';

const ARCHIVO_ENTRADA = './fede.txt';
const ARCHIVO_SALIDA = './beni.txt';

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
  fs.readFile(origen, (err, data) => {
    if (err) throw err;

    fs.writeFile(destino, data, err => {
      if (err) throw err;

      console.log('Archivo copiado exitosamente!');
    });
  });
}