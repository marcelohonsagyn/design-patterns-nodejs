const Developer = require('../model/Developer');

class DeveloperBuilder {
    constructor(language, level, timeOfExperience, isCertified) {
        this.language = language;
        this.level = level;
        this.timeOfExperience = timeOfExperience;
        this.isCertified = isCertified;
    }

    setIsNotAvailable() {
        this.isNotAvailable = false;
        return this;
    }

    addToAppointment() {
        this.isToAppointment = true;
        return this;
    }

    build() {
        return new Developer(this.language, 
                             this.level, 
                             this.timeOfExperience, 
                             this.isCertified, 
                             this.isNotAvailable, 
                             this.isToAppointment);
    }
}

module.exports = DeveloperBuilder;
