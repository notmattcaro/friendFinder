const path = require("path"); // using path
const express = require('express');

module.exports = function(app) { //app is the argument used to require "express();" on the server.js
    // Sends user to survery.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    // For any request that doesn't match the other routes, first check the app/public folder to see if there's a file that matches.
    app.use(express.static('app/public'));
}