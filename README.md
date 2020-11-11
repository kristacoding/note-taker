## Overview
 This is an application that can be used to write, save, and delete notes. It uses an express backend and save and retrieve note data from a JSON file.

## Required Packages
 To have these application run successfully, NPM Express and NPM UUID need to be installed. 

## Links
  https://notes-note-taker.herokuapp.com/
  https://notes-note-taker.herokuapp.com/notes

## Description

Given the frontend code, using Node.JS and Express.JS the following backend routers were created to return the notes from the database. This will then allow the user to create and save new notes, and delete notes. 

The first route created was to read all the notes in the database. Having this route allows the notes to be presented then future actions can take place after viewing all the notes. Next, we created routes to tell the server which pages to show with which corresponding URL. There were three routes created to the homepage (/), notes (/notes), and a JSON file (/api/notes). 

Next an API post route was created. This Post route allows the user to save a note to the datebase.  To write the note to the database, we had to change it from an object to a string. Additionally when saving a new note, we added a unique id using the NPM application UUID. This ID is then added to the note when it is saved to the database. 

With the unique ID, we are able to then create our last route which is a delete route. This route allows the user to delete a note that has been saved to the database. By assigning each note a unique ID, we are able to filter the database to show all other IDs beside the one that has been deleted. 

Finally, we add our code to have the routes send to the Port and connect the backend and frontend. 

## Image
<img src = "images\Note-taker.png">