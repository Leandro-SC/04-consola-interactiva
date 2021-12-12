//Seccion para importar paquetes y funciones

//Paquetes de terceros
require('colors');

//Funciones
const {mostrarMenu, pausa} = require('./helpers/mensajes');


//Limpiar consola
console.clear();

//Función Principal
const main = async() => {

    let opt = '';

    do{ 
        //Mostrar el menu
        opt = await mostrarMenu();
        console.log({opt});

        if(opt !== '0') await pausa();
        
    } while(opt !== '0');
}

main();







































