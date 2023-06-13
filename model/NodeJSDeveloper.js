const Developer = require('./Developer');

class NodeJSDeveloper extends Developer {

    writeCode() {   
        return 'Writing NodeJS code...';
    }

}   

module.exports = NodeJSDeveloper;