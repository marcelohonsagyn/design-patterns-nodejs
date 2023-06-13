class Developer {

    constructor(language, level, timeOfExperience, isCertified, isNotAvailable = false, isToAppointment = false) {
        this.language = language;
        this.level = level;
        this.timeOfExperience = timeOfExperience;
        this.isCertified = isCertified;
        this.isNotAvailable = isNotAvailable;
        this.isToAppointment = isToAppointment;
    }

    show() {
        return  this.language + ' ' + 
                this.level + ' ' + 
                this.timeOfExperience + ' ' + 
                this.isCertified + ' ' + 
                this.isNotAvailable + ' ' + 
                this.isToAppointment;    
    }

}

module.exports = Developer;