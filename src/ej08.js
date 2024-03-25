import axios from "axios";
constAPIKEY = "ca6534a2";            //Poné tu APIKEY,estanofunciona.
constOMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    let respuesta=awaitTest();
    console.log('respuesta',respuesta);
    const Test = async(searchText)=>{
    const requestString= `https://www.omdbapi.com/?apikey=ca6534a2&page=1`;
    const apiResponse=await axios.get(requestString);
    return returnObject;
};
constOMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    //Noseasvago,acáhayquehacerelcuerpodelafunción!!!
    return returnObject;
};
constOMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0, 
        datos: {} };
    //Noseasvago,acáhayquehacerelcuerpodelafunción!!!
    return returnObject;
};
//Exportotodoloqueyoquieroexponerdelmódulo:
export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };