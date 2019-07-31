var express   =  require("express");
var router =  express.Router({mergeParams:true}); //mergeParams for accessing the id which is adding a new actor to movie
var Actor     =  require("../models/actor");
var Movie     =  require("../models/movies");


router.get('/new',function(req, res) {

    
   res.render('actors/new');
    
});

router.post("/",function(req,res){
  
            var name = req.body.name;
            var sex  = req.body.sex;
            var dateOfBirth = req.body.dateOfBirth;
            var bio =  req.body.bio;
            
            
          Actor.findOne({name:req.body.name},function(err,foundSameName){
              if(err){
                  console.log(err); 
              }else{
                  console.log("found same name");
              Actor.findOne({dateOfBirth:req.body.dateOfBirth},function(err,foundSameDate){
                  
                  if(err){
                      
                      console.log(err);
                  }else if(foundSameDate){
                      
                      console.log("same date of birth");
                      //Add to the database
                      
                      req.flash("error", "Actor Already added..");
                    
                  }else{
                      //Add to databse
                      var newActor = {name:name, sex:sex, dateOfBirth:dateOfBirth, bio:bio};
                        console.log(newActor);
                           
                    
                        Actor.create(newActor,function(err,newlyCreatedActor){
                            if(err){
                                console.log(err);
                            }else{
                                console.log(newActor);
                                res.redirect("new");
                            }
                        });
                  }
                   
                });
             }
              
    });
             
            
    
    
});    

//   Movie.findById(req.params.id,function(err,movie){
//      if(err){
//          console.log(err);
         
//      }else{
//             var name = req.body.name;
//             var sex  = req.body.sex;
//             var dateOfBirth =  req.body.dateOfBirth;
//             var bio =  req.body.bio;
            
//             var newActor = {name:name, sex:sex, dateOfBirth:dateOfBirth, bio:bio};
            
//             Actor.create(newActor,function(err,newlyCreatedActor){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(newlyCreatedActor);
//                     newlyCreatedActor.save();
//                     movie.cast.push(newlyCreatedActor);
//                     movie.save();
//                     res.redirect("movies/new");
//                 }
//             });
            
    
//      }
//   });
  
// });   


module.exports =router;



