const inquirer = require('inquirer');
require('colors');

//Objeto de preguntas y valores de opciones
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear Tareas`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Actualizar Tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Eliminar Tarea`
            },
            {
                value: '0',
                name: `${'0.'.green}. Salir\n`
            },
        ],
    }
];

//Funcion mostrar menu
const inquirerMenu = async() => {
    console.clear();
    console.log('=========================');
    console.log('Seleccione una opción'.green);
    console.log('=========================\n');

    //Muestra pregunta y desestructura la respuesta solo con la opcion
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

//Funcion pausar consola
const pausa = async() => {

    //Variable de pregunta
    const pregunta = [
        {
            type: 'input',
            name: 'opcion',
            message: `\nPresione ${'ENTER'.green} para continuar\n`,
        }
    ];

    const {opcion} = await inquirer.prompt(pregunta);
    return opcion;
}

//Funcion leer input
const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate: (value) =>{
                if(value.length === 0){
                    return 'Por favor ingrese una descripción';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;

}

//Exportar funciones
module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}





























