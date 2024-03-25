import axios from "axios";
const APIKEY = "ca6534a2";  

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    let respuesta = awaitTest();
    console.log('respuesta', respuesta);
    const Test = async (searchText) => {
        const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&page=${page}`;
        const apiResponse = await axios.get(requestString);
        returnObject.datos = apiResponse.data;
        returnObject.respuesta = true;
        return apiResponse.data;
    };
}
    
const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };
    let respuesta = awaitTest();
    console.log('respuesta', respuesta);
    const Test = async (searchText) => {
        const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&page=${searchText}`;
        const apiResponse = await axios.get(requestString);
        return returnObject;
    }; 
}
     
    const OMDBGetByImdbID = async (imdbID) => {
        let returnObject = {
            respuesta: false,
            cantidadTotal: 0,
            datos: {}
        };
        let respuesta = awaitTest();
        console.log('respuesta', respuesta);
        const Test = async (imdbID) => {
            const requestID = `https://www.omdbapi.com/?apikey=${APIKEY}&page=${imdbID}`;
            const apiResponse = await axios.get(requestID);
            return returnObject;
    };
    }
    export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };