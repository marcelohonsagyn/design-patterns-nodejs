const NodeJSDeveloper = require('../model/NodeJSDeveloper');
const PythonDeveloper = require('../model/PythonDeveloper.js');
const JavaDeveloper = require('../model/JavaDeveloper.js');
const KotlinDeveloper = require('../model/KotlinDeveloper.js');

const DeveloperFactory = (language, level, timeOfExperience, isCertified) => {
  if (language === 'NodeJS') {
    return new NodeJSDeveloper('NodeJS', level, timeOfExperience, isCertified);
  } else if (language === 'Python') {
    return new PythonDeveloper('Python', level, timeOfExperience, isCertified);
  } else if (language === 'Java') {
    return new JavaDeveloper('Java', level, timeOfExperience, isCertified);
  } else {
    return new KotlinDeveloper('Kotlin', level, timeOfExperience, isCertified);
  }
}

module.exports = DeveloperFactory;