// generador de json
/*
const fs = require("fs");
/*const book = {
    titulo: "Ego es el enemigo",
    autor: "Camilo Baquero"
}; 
*/

/* muentra la info guardadad en Json
const bookjson = JSON.stringify(book);
console.log(bookjson);
// Accede a la info guardada en este caso autor
const parsedData = JSON.parse(bookjson);
console.log(parsedData.autor); */

/*creamos un  json con fs
const bookjson = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookjson);
*/

// Consultamos la infor de Json
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.titulo);