
const developerPrototype = {
    writeCode: () => {
        console.log('Coding class Prototype...');
    }
};

function Dev(language = 'NodeJS', level, timeOfExperience, isCertified, isNotAvailable = false, isToAppointment = false) {

    function constructor(language, level, timeOfExperience, isCertified, isNotAvailable, isToAppointment) {
        
        this.language = language;
        this.level = level;
        this.timeOfExperience = timeOfExperience;
        this.isCertified = isCertified;
        this.isNotAvailable = isNotAvailable;
        this.isToAppointment = isToAppointment;
    }

    constructor.prototype = developerPrototype;

    let instance = new constructor(language, level, timeOfExperience, isCertified, isNotAvailable, isToAppointment);
    return instance;
}

module.exports = { Dev };