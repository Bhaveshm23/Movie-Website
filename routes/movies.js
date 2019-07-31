var express   =  require("express");
var router    =  express.Router();
var Actor     =  require("../models/actor");
var Movie     =  require("../models/movies");
var middleware = require("../middleware");



//INDEX - show all the movies
router.get('/',function(req,res){
 //Get all movies
 Movie.find({},function(err,allMovies){
    if(err){
        console.log(err);
    }else{
       // console.log(movies);
      res.render("movies/index",{movies:allMovies});  
    } 
 });
 
});

//CREATE - add a new Movie
router.post("/",middleware.isLoggedIn,function(req,res){
   
   //Get all the data from form and add to movies array
   var name  = req.body.name;
   var year  = req.body.year;
   var plot  = req.body.plot;
   var image = req.body.image;
   var cast  = req.body.cast;
    var author = {
      id: req.user._id,
      username: req.user.username
  };
   
   
   var newMovie = {name:name, year:year, plot:plot,cast:cast,image:image,author:author};
   
   Movie.create(newMovie,function(err,newlyCreated){
      if(err){
          console.log(err);
      }else{
          
          //redirect back to movies page
          console.log(newlyCreated);
         res.redirect("/movies");
      }
   });
   
});


//NEW - show form to add a new movie

router.get("/new",middleware.isLoggedIn,function(req,res){
    Actor.find({},function(err,foundActor){
       if(err){
           console.log(err);
       }else{
          
            res.render("movies/new",{actors:foundActor});
       }
    });
   
});

// //SHOW - shows more info about movies

// app.get("/movies/:id",function(req,res){
//     Movie.findById(req.params.id,function(err,foundMovie){
//       if(err){
//           console.log(err);
//       } else{
//           res.render("show",{movies:foundMovie});
//       }
//     });
// });


//EDIT - edit movie info

router.get('/:id/edit',middleware.checkMovieOwnership,function(req, res) {
   Movie.findById(req.params.id,function(err,foundMovie){
       if(err || !foundMovie){
           req.flash("error","No movie found!");
           res.redirect("back");
       } else{
           res.render("movies/edit",{movies:foundMovie});
       }
   }) ;
});

//UPDATE - update the movie info
router.put('/:id',middleware.checkMovieOwnership,function(req,res){
   Movie.findByIdAndUpdate(req.params.id,req.body.movies,function(err,updatedMovie){
     
     if(err){
         req.flash("error", err.message);
            res.redirect("back");
     }else{
         req.flash("success","Successfully Updated!");
         res.redirect("/movies");
     }
   });
});


 module.exports = router;