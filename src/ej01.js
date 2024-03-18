let textoEntrada01 = "Beni";
let textoEntrada02 = "Fede";
let textoSalida;

textoSalida = concatInvert(textoEntrada01,textoEntrada02);
console.clear();
console.log(textoSalida);

function concatInvert(textoEntrada01,textoEntrada02)
{
let inert1= "";
for (let i=textoEntrada01.length-1;i>=0;i--)
{
 inert1 = inert1 + textoEntrada01[i];  
}
console.log(`Palabra de Entrada: " ${textoEntrada01} "`);
console.log(`Palabra de Salida:" ${inert1}"`);

let inert2= "";
for (let i=textoEntrada02.length-1;i>=0;i--)
{
 inert2 = inert2 + textoEntrada02[i];  
}
textoSalida = inert1+inert2;
return textoSalida;
}