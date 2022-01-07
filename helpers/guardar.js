const fs = require('fs')
const archivo = './db/data.json';

//Metodo para guardar 
const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

//Metodo para leer db
const leerDB = () => {

    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = fs.readFileSync(archivo, 'utf-8');
    const data = JSON.parse(info);

    return data;

}

module.exports = {
    guardarDB,
    leerDB
}

















