const express = require("express"); // express
const path = require("path"); // path

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//this is taking in or processing the app value
require("./app/routing/apiRoutes.js")(app); //send const app to apiRoutes.js and invokes method "app"
require("./app/routing/htmlRoutes.js")(app); //send const app to htmlRoutes.js and invokes method "app"

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});