var express = require('express');
var router = express.Router();
var db = require('../db');
router.post('/data',function(req,res,next){
    var latitude = req.body.Location.Latitude;
    var longitude = req.body.Location.longitude
    var phoneNumber = req.body.phone_number;
    var time = req.body.detection_time;
    db.serialize(function(){
 
        db.run("CREATE TABLE IF NOT EXISTS location (latitude TEXT,longitude TEXT,phone TEXT, detection_time TEXT)");
        var stmt = db.prepare("INSERT INTO location VALUES (?,?,?,?)");
        stmt.run(latitude,longitude,phoneNumber,time,function(err){
            if (err) {
                res.statusCode = 404;
                return res.send = {"success":false};
            }
            return res.send (
                {"sucess": true}
                );
        });
    });
    db.close();
});

router.get('/data',function (req,res,next){
        db.all("select * from location",function(err,row){
            console.log(row);
            return res.send(row);
        });
        db.close();
})
module.exports = router;