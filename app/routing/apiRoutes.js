var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        // contains compatibility logic
        var bestMatch = {
            name: "",
            photo: "",
            matchSpread: 100
        };

        console.log(req.body);

        var newData = req.body;
        var newScores = newData.scores;

        console.log(newScores);

        var totalSpread = 0;

        for (var i = 0; i < friends.length; i++) {
            totalSpread = 0;
            for (var x = 0; x < friends[i].scores[x]; x++) {
                totalSpread += Math.abs(parseInt(newScores[x]) - parseInt(friends[i].scores[x]));
                
            if (totalSpread <= bestMatch.matchSpread) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.matchSpread = totalSpread;
            }
            }
        }

        friends.push(newData);

        res.json(bestMatch);
    
    });


}