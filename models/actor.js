var mongoose = require("mongoose");
//var uniqueValidator = require('mongoose-unique-validator');

//SCHEMA. SETUP
 var actorSchema = new mongoose.Schema({
    
     name:String,/*{type:String,unique:true},*/
    sex:String,
    dateOfBirth:Date,
    bio:String,
    
 });
 
// actorSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Actor",actorSchema);