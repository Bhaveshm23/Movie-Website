# Movie-Website

#### The project uses HTML, CSS, Node.js and Mongodb as technologies.



### About the Website
* The website consists of main page which shows information about the movie such as 
  * Movie name
  * Plot 
  * Year of release
  * Cast  
  * Edit button.
* The website allows non-logggedin user to see all the movie details.
* The user needs to be loggedin to add the movie.
* Only the user who adds the movie has the right to edit the movie.
* On click edit button, the website checks if the user is logged in or not. If the user is not logged in it shows flash message to the user to login to the website.
* If the user is lggedin and not the owner ie. onw who added the movie, the website shows flash saying 'You have no permission to edit'.
* The user is allowed to add movie on click of add movie button.
* The add movie form allows the user to add movie and also add cast of movie.
* On click add actor button a modal appears in front of user where the user enters the details of the cast in the movie.
* The details of the cast are added to the database, while the name of the actor is added as an option in the select field to add the cast.



### Some screenshots of the website

* The movie list is shown by the /index route
```
  router.get('/',function(req, res) {
     res.redirect('/movies');
 });
```
The index page is shown by code here [Index Page](https://github.com/Bhaveshm23/Movie-Website/blob/master/views/movies/index.ejs)
* This is the main page of the website which shows list of movies along with the option to add a movie.
![Main Page](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/main-page.JPG) 

* This image shows the list of movies added by the user
![List of Movies](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/list-of-movies.JPG)
 
* Authentication routes
```
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
```
 The user needs to be loggedin/signedup to edit the movie.
![Login](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/login-form.JPG)
![SignUp](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/signup-form.JPG)

* When the user logs out 
![Logout](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/loggedout.JPG)

### Adding a new movie (The Shawshank Redemption)

 
  
* On clicking the Add Actor button 'Add Actor Modal' opens up. On clicking submit the new actor adds up in the cast input in 'Add Actor Form'.
 ![Add Actor](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/actor-modal.JPG)


* Actor added to the database
![Actor added to database](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/actor-added-to-db.JPG)


* When the loggedin user click on add movie button the add movie page shows up.
  ![Add Movie](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/add%20movie.JPG)


* On clicking the save button the movie gets added to the list of movies.
 ![Movie Added](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/new-movie-added.JPG)


 * Movie added to the database
 ![Movie Added to database](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/movie-added-to-db.JPG)
 
 
 ### Edit the poster of movie (The Shawshank Redemption)
 
 * On click edit button by the user who has added the movie, the edit page shows up
 ![Edit Page](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/edit-movie.JPG)
 
 
 * On succesfully edit the flash appears on the screen showing 'Successfully Updated'
 ![Successfully Updated](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/successfully-updated-flash.JPG)
 
 
 * The Edited poster of movie in the table
 ![Edited Poster](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/edit-movie-image.JPG)



