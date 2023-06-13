const Developer = require('./Developer');

class JavaDeveloper extends Developer {

    writeCode() {
        return 'Writing Java code...';
    }
}   

module.exports = JavaDeveloper;