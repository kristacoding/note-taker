// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reading database to create notes variable 
fs.readFile("db/db.json", "utf8", (err,data) => {
    if (err) throw err;
    var allNotes = JSON.parse(data); 
    return allNotes;
})

// Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/notes", function(req, res){
    return res.json(allNotes);
})

// API Routes
app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    allNotes.push(newNote); 
    res.json(newNote);
    return console.log("New Note Added")
})


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  