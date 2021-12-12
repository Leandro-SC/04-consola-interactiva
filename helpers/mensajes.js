require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('=========================');
        console.log('Seleccione una opción'.green);
        console.log('=========================\n');

        console.log(`${'1.'.green} Crear Tareas`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Actualizar Tarea(s)`);
        console.log(`${'6.'.green} Eliminar Tarea`);
        console.log(`${'7.'.green}. Salir\n`);

        //Creamos Interfaz del menu
        const readline = require('readline').createInterface({ 
            input: process.stdin,
            output: process.stdout
        }); 

        //Muestra pregunta
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });
}

//Pausar Consola
const pausa = () => {

    return new Promise(resolve => {
            //Capturar la opción seleccionada
            const readline = require('readline').createInterface({ 
                input: process.stdin,
                output: process.stdout
            }); 
        
            //Muestra pregunta
            readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
                readline.close();
                resolve();
            });
    });
}


module.exports = {
    mostrarMenu,
    pausa
}


















