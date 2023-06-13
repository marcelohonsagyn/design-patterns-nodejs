//Singleton pattern
class DatabaseConnection {

    constructor() {
      this.databaseConnection = 'myConnection';
    }
  
    getNewDBConnection() {
      return this.databaseConnection;
    }
  }
  
  module.exports = new DatabaseConnection();