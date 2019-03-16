const path = require("path"); // using path

module.exports = function(app) { //app is the argument used to require "express();" on the server.js
    // Sends user to survery.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // defaults user to home.html
    app.use("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}