import Alumno from "./models/alumno.js"; 
let alumno1= new Alumno("Federico Biderman" ,"48038607",16); 
let alumno2= new Alumno("Benicio Bursztyn","47699155",17); 
let alumno3= new Alumno(); 
 
 alumno3.username  = "Facundo Giraudi"; 
 alumno3.DNI =  "47699175";
 
console.clear();
console.log(alumno1);
console.log(alumno2);
console.log(alumno3.toString());