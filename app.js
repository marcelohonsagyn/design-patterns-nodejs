const databaseConnection = require('./creation/singletonDatabaseConnection');
const Singleton = require('./creation/singleton');
const DeveloperFactory = require('./creation/factory');
const DeveloperBuilder = require('./creation/builder');
const { developer } = require('./creation/prototype');
const { Dev } = require('./creation/classPrototype');
const { Observer } = require('./behavioral/observer');

executeCreationPatterns = () => {
        console.log('-------------------------');
        console.log('Singleton');
        console.log(databaseConnection.getNewDBConnection());
        console.log(Singleton.getInstance().getNewDBConnection());
        
        console.log('-------------------------');
        console.log('Factory');
        const nodeJSDeveloper = DeveloperFactory('NodeJS', 'Senior', 5, true);
        const pythonDeveloper = DeveloperFactory('Python', 'Senior', 5, true);
        const javaDeveloper = DeveloperFactory('Java', 'Senior', 5, true);
        const kotlinDeveloper = DeveloperFactory('Kotlin', 'Senior', 5, true);
        console.log(nodeJSDeveloper.writeCode());
        console.log(pythonDeveloper.writeCode());
        console.log(javaDeveloper.writeCode());
        console.log(kotlinDeveloper.writeCode());
        
        console.log('-------------------------');
        console.log('Builder');
        const nodeJSDeveloperBuilder = new DeveloperBuilder('NodeJS', 'Senior', 5, true).build();
        const pythonDeveloperBuilder = new DeveloperBuilder('Python', 'Senior', 5, true).addToAppointment().build();
        const kotlinDeveloperBuilder = new DeveloperBuilder('Kotlin', 'Senior', 5, true).setIsNotAvailable().build();
        const javaDeveloperBuilder = new DeveloperBuilder('Java', 'Senior', 5, true).addToAppointment().setIsNotAvailable().build();    
        console.log(nodeJSDeveloperBuilder.show());
        console.log(pythonDeveloperBuilder.show());
        console.log(kotlinDeveloperBuilder.show());
        console.log(javaDeveloperBuilder.show());

        console.log('-------------------------');
        console.log('Prototype');
        const devOne = Object.create(developer);
        console.log(devOne.language);

        const devPrototypeOne = Dev();
        console.log(devPrototypeOne.language);

        const devPrototypeTwo = Dev('Java', 'Senior', 5, true)
        console.log(devPrototypeTwo.language);
}   

executeBehavioralPatterns = () => {
        console.log('-------------------------');
        console.log('Observer');
            
        const observer = new Observer();
        // Create observers
        const observerA = (data) => console.log(`Observer A: ${data}`);
        const observerB = (data) => console.log(`Observer B: ${data}`);
        // Subscribe to the observer
        observer.subscribe(observerA);
        observer.subscribe(observerB);
        // Notify Observers of the change
        observer.broadcast("Notifing observers");

}

executeCreationPatterns();
executeBehavioralPatterns();