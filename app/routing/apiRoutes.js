let friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // res.write("<h1>Friends JSON " + friends[0].name + "</h1>");
        return res.json(friends); // can only do one or the other
        
        //refer to server.js in express activity 15-extenededApp line 68
    });
    
    //A POST routes /api/friends. This will be used to handle incoming survey results. 
    app.post("/api/friends", function(req, res) {
        let newFriend = req.body;
        friends.push(newFriend);
    });
    //This route will also be used to handle the compatibility logic.
    // app.post("/api/friends", function(req, res) {
    //     // res.write(); // This will write new friends to the listAKAarray
        
    // });
};