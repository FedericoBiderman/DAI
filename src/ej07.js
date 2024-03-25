
import { getCurrency } from 'currency-map-country';

function obtenerMoneda(codigoPais) {

    let moneda = getCurrency(codigoPais);

    if (!moneda) {
        return null;
    }

    return moneda.name;
}

let monedaPais;

let codigoPais = "AR";
monedaPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaPais}`);

codigoPais = "US";
monedaPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaPais}`);