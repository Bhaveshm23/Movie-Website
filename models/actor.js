var mongoose = require("mongoose");

//SCHEMA. SETUP
 var actorSchema = new mongoose.Schema({
    
     name:String,/*{type:String,unique:true},*/
    sex:String,
    dateOfBirth:Date,
    bio:String,
    
 });
 
module.exports = mongoose.model("Actor",actorSchema);