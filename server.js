// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var htmlR = require("./app/routing/htmlroutes");
var apiR = require("./app/routing/apiroutes");
var fs = require("fs");
// var readIt = apiR.readIt();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlR);
app.use(apiR);
// readIt();
// fs.readFile("./app/data/friends.js", "utf8",  function(err, data) {
//   if(err) {
//     console.log(err);
//   }
//   console.log(data);
//     friends = data;
//     // comment();
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
