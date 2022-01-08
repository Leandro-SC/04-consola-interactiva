//Seccion para importar paquetes y funciones

//Paquetes de terceros
require('colors');

//Funciones
const {
    inquirerMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
} = require('./helpers/inquirer');
const {guardarDB, leerDB} = require('./helpers/guardar');

const Tareas = require('./models/multiTask');

//Limpiar consola
console.clear();

//Función Principal
const main = async() => {

    //Variables
    let opt = '';
    //Instancias
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        //Establecer tareas
        tareas.cargarTareasFromArray(tareasDB);

    }
    

    //Ciclo para recorrer el menu en funcion a las opciones
    do{ 
        //Imprimir el menu y retorna las opciones
        opt = await inquirerMenu();
        //Switch para las opciones
        switch (opt) {
            //Crear tarea
            case '1':
                const desc = await leerInput('Ingrese la descripción de la tarea: ');
                tareas.crearTarea(desc);
                break;
            //Listar tareas    
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listadoCompletos();
                 break;    
            case '4':
                tareas.listadoPendientes();
                break;    
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;    
             case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const confirmarTarea = await confirmar(`¿Está seguro que desea eliminar la tarea?`);
                    if(confirmarTarea){
                        tareas.borrarTarea(id);
                        console.log('Tarea eliminada'.red);
                    }
                }
                break;                        
        }

        //Guardar
        guardarDB(tareas.listadoArr);
        //Pausa para continuar
        if(opt !== '0') await pausa();
        
    } while(opt !== '0');
}

main();







































