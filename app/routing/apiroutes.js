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
    return res.json(friends);
});

router.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  for(var i = 0; i < friends.length; i++) {
    var scoreArr = [];
    var addScore = friends[i].scores;
    scoreArr.push(addScore);
    console.log(scoreArr);
    for(var j = 0; j < scoreArr; j ++) {
      var diff1 = abs(newFriend.scores[0] - scoreArr[j[0]]);
      console.log(diff1);
      // somehow find absolute value of differences and compare them, 
      // then make a module for it and display best match. I'm out of time...
    }
  }

  friends.push(newFriend);

  res.json(newFriend);

})

module.exports = router;