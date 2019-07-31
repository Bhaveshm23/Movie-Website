var Movie = require("../models/movies");

var middlewareObj = {};


middlewareObj.checkMovieOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Movie.findById(req.params.id, function(err, foundMovie){
           if(err || !foundMovie){
               req.flash("error", "Movie not found");
               res.redirect("back");
           }  else {
               console.log(req.user);
               console.log(req.author);
               // does user own the movie?
            if(foundMovie.author.id.equals(req.user.id) || req.user.isAdmin) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};


middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;
