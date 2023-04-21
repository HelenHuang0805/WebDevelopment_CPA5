const express = require("express");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");
const port = process.env.PORT || 8080;

const app = express();
app.use(express.static("public"));//Serve static assets
app.set("view engine", "ejs");
app.use(layouts);
app.set("port", port);

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/about", homeController.showAbout);
app.get("/contact", homeController.showContact);
app.get("/events", homeController.showEvents);
app.get("/jobs", homeController.showJobs);


app.use(errorController.notFound);//Deal with 404
app.use(errorController.internalServerError);//Deal with 500

app.listen(app.get("port"), () => {
    console.log(`Server is running at http://localhost:${app.get("port")}`);
});