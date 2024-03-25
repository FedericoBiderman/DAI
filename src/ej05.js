let miURL = "https://www.youtube.com/watch?v=YkCz8d3xxAM";
let miObjeto = null;
miObjeto = parsearUrl(miURL);
console.log(miObjeto);

function parsearUrl(laURL) {
    let returnValue, urlParseada;
    try{
        urlParseada = new URL(laURL);
    } catch(ex){
        console.log(ex.message);
    }

    returnValue = {
            host        : urlParseada?.origin ?? null,
            pathname        : urlParseada?.origin ?? null,
            parametros        : urlParseada?.origin 

    }

    return returnValue;
}
