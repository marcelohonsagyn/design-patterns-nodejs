const Developer = require('./Developer');

const PythonDeveloper = class PythonDeveloper extends Developer {   
    
    writeCode() {
        return 'Writing Python code...';
    }
}

module.exports = PythonDeveloper;