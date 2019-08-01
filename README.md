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
* This is the main page of the website which shows list of movies along with the option to add a movie.
![Main Page](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/main-page.JPG) 

* This image shows the list of movies added by the user
![List of Movies](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/list-of-movies.JPG)
 
* The user needs to be loggedin/signedup to edit the movie.
![Login](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/login-form.JPG)
![SignUp](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/signup-form.JPG)

* When the user logs out 
![Logout](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/loggedout.JPG)

* When clicked on add movie button the add movie page shows up
![Add Movie](https://github.com/Bhaveshm23/Movie-Website/blob/master/MovieWebsite/add%20movie.JPG)
