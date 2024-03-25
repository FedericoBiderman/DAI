
import { getCountryByAbbreviation, getCountry } from 'currency-map-country';


function obtenerMoneda(codigoPais) {


    let pais = getCountryByAbbreviation(codigoPais);


    let moneda = getCountry(pais);
    if (!moneda) {
        return null;
    }


    return moneda.cur;
}


let monedaPais;


let codigoPais = "AR";
monedaPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaPais}`);


codigoPais = "US";
monedaPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaPais}`);