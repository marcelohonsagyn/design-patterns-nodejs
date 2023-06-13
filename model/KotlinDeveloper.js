const Developer = require('./Developer');

class KotlinDeveloper extends Developer {

    writeCode() {   
        return 'Writing Kotlin code...';
    }   
}

module.exports = KotlinDeveloper;