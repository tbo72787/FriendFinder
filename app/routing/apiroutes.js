var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var friends = require("../data/friends.js");

// fs.readFileSync("./app/data/friends.js", "utf8",  function(err, data) {
//   if(err) {
//     console.log(err);
//   }
//   console.log(data);
//     friends = data;
//     // comment();
// });

// function comment() {
//   console.log(friends);
// }


router.get("/api/friends", function(req, res, err) {
    if(err) {
      console.log(err);
    }
    // fs.readFile("./app/data/friends.js", "utf8",  function(err, data) {

    console.log("api" + friends);

    return res.json(friends);

  // })
});

module.exports = router;