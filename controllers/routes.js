var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/insertOne", function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect("/");
    });
});
  
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/");
    });
});
  
  
  // Export routes for server.js to use.
  module.exports = router;

module.exports = router;