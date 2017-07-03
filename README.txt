# NWEN304_Group_Project
Nwen 304 group project group 16. 

This is the main readme file for the document and what was required for the assessment.



1. How to use our system.
    For the main part you can start the application using the index.html, we have all the html stored locally but can be done from online if we were to get a domain.
    The server is hosted on heroku and can be accessed from https://boiling-eyrie-15862.herokuapp.com/ and https://pure-retreat-11337.herokuapp.com/ the exact commands for specifics can be seen
    in the cURL folder. The reason for two can be clarrified by the team. The server can be accessed and interacted with (pure retreat readme). The database is also on these
    servers of heroku. They can be interacted with and easily can add to the database (look at the insertStatements.txt or the nwen304.sql for the sql file provided).

    For the actual website it has a login function, you can see the products by clicking the top50 button at the top, this will browse all the books, it does seem to take some time to
    read the data from the database to the system for the first time, but this is only the first time this is the case. For search it requires the full text for the name of the book or the
    author. The browsing has 6 pages that can be flipped through with the next and previous buttons at the bottom of the page. Clicking on one of those books displays more information and the buy
    button which is currently not available.

2. 

3. What error handling has been implemented in your system?
    For the html we used alert statements and when the desired functionality was achieved they were commented out and removed. The reason for alert statements was not all browsers
    have consoles to project to, although alerts are more in the way we thought it would be the better method. For the ajax calls and the sending and receiving from the server
    we used error functions which we can output with an error message if need be. For the server we have on every html get or post an error or the successful function to the log and 
    a sent file to the website so if we looked up the server with the link we are pinging the website we could access that content and the files sent back to see if it was accurate.

