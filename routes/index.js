var express = require("express");
var router =  express.Router();
var passport = require("passport");
var User = require("../models/user");


//root route
router.get('/',function(req, res) {
    res.redirect('/movies');
});


/*===============
    AUTH ROUTES
  ===============    
*/

//show register form
router.get("/register",function(req, res) {
    res.render("register");
});

//handle sign up logic

router.post("/register",function(req, res) {
   var newUser = new User({username:req.body.username});
   console.log(newUser);
   if(req.body.adminCode==="I am the best"){
       newUser.isAdmin=true;
   }
   User.register(newUser,req.body.password,function(err,user){
       if(err){
           req.flash("error",err.message);
           return res.redirect("register");
       }
       passport.authenticate("local")(req,res,function(){
           req.flash("success","Welcome to Movies Website "+user.username);
          res.redirect("/movies"); 
       });
   });
});

//login form
router.get("/login",function(req, res) {
   res.render("login"); 
});
//handling login logic
router.post("/login",passport.authenticate("local",{
        successRedirect:"/movies",
        failureRedirect:"/login"
    }),function(req, res,err) {
             req.flash("error",err.message);
        
});

//logout logic
router.get("/logout",function(req, res) {
    req.logout();
    req.flash("success","Logged you out!");
    res.redirect("/movies");
});


module.exports=router;