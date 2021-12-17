//Seccion para importar paquetes y funciones

//Paquetes de terceros
require('colors');

//Funciones
const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Tareas = require('./models/multiTask');

//Limpiar consola
console.clear();

//Función Principal
const main = async() => {

    let opt = '';

    do{ 
        //Mostrar el menu
        opt = await inquirerMenu();
        console.log({opt});
     

        if(opt !== '0') await pausa();
        
    } while(opt !== '0');
}

main();







































