
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
db.run("CREATE TABLE location (latitude TEXT,longitude TEXT,phone TEXT, detection_time TEXT)");

module.exports = db;