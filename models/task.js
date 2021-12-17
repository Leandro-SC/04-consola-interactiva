const { v4:uuid4} = require('uuid');

class Task {

    //Variables
    id = '';
    desc = '';
    status = null;

    //Constructor
    constructor(desc) {
        this.id = uuid4();
        this.desc = desc;
    }

}

module.exports = Task;



















































