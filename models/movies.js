var mongoose = require("mongoose");

//SCHEMA SETUP

var movieSchema = new mongoose.Schema({
    
    name:String,
    year:String,
    plot:String,
    cast:String,
    image:String,
     author:{
           id:{
              type:mongoose.Schema.Types.ObjectId,
              ref:"User"
           },
           username:String
   },
});

module.exports = mongoose.model("Movie",movieSchema);