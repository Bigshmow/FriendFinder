module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });


    app.post("/api/friends", function (req, res) {

        // contains compatibility logic
    
    });


}