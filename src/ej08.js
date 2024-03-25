import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './Modules/omdb-wrapper.js'

let resultado;
resultado = await  OMDBSearchByPage("cars", 1);
console.log('resultado', resultado);



resultado = await  OMDBSearchComplete("cars");
console.log('resultado', resultado);

resultado = await  OMDBGetByImdbID("tt11981568");
console.log('resultado', resultado);