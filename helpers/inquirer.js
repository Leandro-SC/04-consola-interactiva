const inquirer = require('inquirer');
require('colors');

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

const inquirerMenu = async() => {
    console.clear();
    console.log('=========================');
    console.log('Seleccione una opción'.green);
    console.log('=========================\n');

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

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

module.exports = {
    inquirerMenu,
    pausa
}





























