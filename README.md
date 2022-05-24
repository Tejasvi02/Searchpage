# Searchpage

The Search app displays the Title, body- up to 140 characters, Answer count, Score and Username, reputation, and badges of who has asked the question using the Stack Overflow database.
Step1: Download the Stack Overflow Database (small DB - 10 GB).

Step2: In the dbconfig.js file, update the user, password, port, and the server used to host the database.

Step3: install node modules (npm install)

Step4: Update port in which the webpage should be hosted in api.js

Step5: npm start for starting the backend server.

Step6: Now run the html page

Step7:Type the text in the search bar and hit on Go, this should display the post which matches the text.

Step8: The "Click for more" loads more search results and "Take me to the top" takes to the top of the page

About files:
index.html- html page used to for rendering
index.css- used for styling
display.js- used to fetch all the data from backend
api.js- backend file to get the posts
db operation: connect the query
db config: connect database
query- the query used in the db operation
