//Singleton patter
class DatabaseConnection {

    constructor() {
      this.databaseConnection = 'myConnection';
    }
  
    getNewDBConnection() {
      return this.databaseConnection;
    }
  }
  
  class Singleton {

    constructor() {
      throw new Error('Please, use getInstance() method to get the instance!');
    }
  
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new DatabaseConnection();
      }
  
      return Singleton.instance;
    }

  }
  
  module.exports = Singleton;