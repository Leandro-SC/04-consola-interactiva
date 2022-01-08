const Tarea = require('./task');



class MultiTask {   

    _listado = {};

    //Metodo get
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(id => {
            listado.push(this._listado[id]);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
           if(this._listado[id]) {
               delete this._listado[id];
            }
        }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
       
    }

    //Metodo que agrega una tarea a la lista
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    //Metodo que muestra todas las tareas
    listadoCompleto() {
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const {desc, status} = tarea;
            const estado = status 
                            ? 'Completada'.green 
                            : 'Pendiente'.red;
           console.log(`${idx} ${desc} :: ${estado}`);                 

        });
    }

        //Metodo que muestra las tareas completadas
        listadoCompletos(compleados = true) {
            this.listadoArr.forEach((tarea, i) => {
                const idx = `${i + 1}`.green;
                const {desc, status} = tarea;
                const estado = status 
                                ? 'Completada'.green 
                                : 'Pendiente'.red;
               if(status && compleados) {
                   console.log(`${idx} ${desc} :: ${estado}`);
               }
            });
        }

    //Metodo que muestra las tareas pendientes
    listadoPendientes(compleados = false) {
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const {desc, status} = tarea;
            const estado = status 
                            ? 'Completada'.green 
                            : 'Pendiente'.red;
           if(!status && !compleados) {
               console.log(`${idx} ${desc} :: ${estado}`);
           }
        });
    }


    toggleCompletadas(ids = []){

        //Actualiza status de tareas completadas
        ids.forEach(id => { 
         const tarea = this._listado[id];
         if(!tarea.status){
           tarea.status = new Date().toISOString();
         }
    });

    //Actualiza status de tareas pendientes
    this.listadoArr.forEach(tarea => {
        if(!ids.includes(tarea.id)){
            const tarea = this._listado[tarea.id];
            tarea.status = null;
        }
    })

    }
}


module.exports = MultiTask;






























