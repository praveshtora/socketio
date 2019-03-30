
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./locationDB', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
module.exports = db;