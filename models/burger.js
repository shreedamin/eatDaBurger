var orm = require("../config/orm.js");
var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res){
			cb(res)
		});
	},
	
    insertOne: function(name, cb){
        orm.insertOne("burgers",name, cb);
	},
	
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function(res){
			cb(res)
		});
	}
};


module.exports = burger;