let friends = require("../data/friends.json");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // res.write("<h1>Friends JSON " + friends[0].name + "</h1>");
        return res.json(friends); // can only do one or the other
        
        //refer to server.js in express activity 15-extenededApp line 68
    });
    
    //A POST routes /api/friends. This will be used to handle incoming survey results. 
    app.post("/api/friends", function(req, res) {

        let newFriend = req.body;
        let newFriendScores = newFriend.scores;

        let bestMatch = {
            name: "",
            quote: "",
            difference: Infinity // numeric value that represents positive infinity
        }

        var totalDifference;

        for (let i = 0; i < friends.length; i++) {
            let friendData = friends[i];
            totalDifference = 0; //in each index of the friends array totalDifference equals "0"

            console.log(friendData.name);

            for (let j = 0; j < friendData.scores.length; j++) {
                const currentFriendScores = friendData.scores[j];
                var currentUserScore = newFriendScores[j];

                totalDifference = totalDifference + (Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScores)));
            }

            if (totalDifference <= bestMatch.difference) {
                bestMatch.name = friendData.name;
                bestMatch.quote = friendData.lifeQuote;
                bestMatch.difference = totalDifference;
            }
        }
        
        friends.push(newFriend);

        //returns JSON with the user's bestMatch and is used in the HTML
        res.json(bestMatch);
    });
};