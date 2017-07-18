var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose       = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
    res.send("Welcome to the job tracker");
});

app.get("/login", function(req,res){
    res.send("Login page");
});

app.get("/jobs", function(req, res){
    res.send("Jobs listed here");
});

app.get("/jobs/new", function(req, res){
    res.send("Create a new job here");
});

app.post("/jobs", function(req, res){
    res.send("Creating a new job");
});

app.get("/jobs/:id", function(req, res){
    res.send("Show page");
});

app.get("/jobs/:id/edit", function(req, res){
    res.send("Edit route");
});

app.put("/jobs/:id", function(req, res){
    res.send("Update route");
});

app.delete("/jobs/:id", function(req, res){
    res.send("Delete route");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Job application started");
})