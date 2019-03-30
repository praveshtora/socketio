var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

router.post('/data',function(req,res,next){
    var latitude = req.body.Location.Latitude;
    var longitude = req.body.Location.longitude
    var phoneNumber = req.body.phone_number;
    var time = req.body.detection_time;
    var db = new sqlite3.Database(':memory:');
    db.serialize(function(){
        db.run("CREATE TABLE location (latitude TEXT,longitude TEXT,phone TEXT, detection_time TEXT)");
        var stmt = db.prepare("INSERT INTO location VALUES (?,?,?,?)");
        stmt.run(latitude,longitude,phoneNumber,time,function(err){
            if (err) {
                res.statusCode = 404;
                return res.send = {"success":false};
            }
            return res.send = {"sucess": true};
        });
    });
});

module.exports = router;