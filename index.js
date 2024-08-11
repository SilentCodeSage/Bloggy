const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
var itemArray=[];
app.get("/", (req, res) => {
    // itemArray=[];
    res.render("index.ejs");
});

app.get("/About", (req, res) => {
    res.render("about.ejs");
});

app.get("/Contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/new-post", (req, res) => {

    const newItem = {
        title: req.body.title,
        content: req.body.content
    }
    itemArray.push(newItem);
    // const data = {itemArray}
    
    res.redirect("/");
});
var currentBlogContent = [];
app.get("/posts", (req, res) => {

    const data = {itemArray,currentBlogContent}
    
    res.render("posts.ejs",data);
});

app.get("/view", (req, res) => {
    console.log(req.body);
    res.render("view.ejs");
});

// app.post("/submit", (req, res) => {
//    var data = {
//     name: req.body.fName+req.body.lName
//    }
//    res.render("index.ejs",data);
// });

app.listen(port, () => {
    console.log(`Server @ ${port}`);
});
