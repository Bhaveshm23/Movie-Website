var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport      =    require("passport"),
    methodOverride = require("method-override"),
    LocalStrategy =    require("passport-local"), 
    Actor          = require("./models/actor"),
    Movie          = require("./models/movies"),
    User           = require("./models/user");

mongoose.connect("mongodb://localhost/movie_db"); //local db name=movie_db


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(flash());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public")); //for stylesheet

app.use(bodyParser.json()); //For ajax

//Requiring Routes
var moviesRoutes =  require("./routes/movies"),
    actorRoutes =  require("./routes/actors"),
    indexRoutes = require("./routes/index");
    
    
    
//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"I am the best",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this middleware is for getting the current user for every page 
app.use(function(req,res,next){
   res.locals.currentUser = req.user;
   res.locals.error   = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

//Using routes
app.use(indexRoutes);
app.use('/movies',moviesRoutes);
app.use('/movies/actor',actorRoutes);



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started");
});



