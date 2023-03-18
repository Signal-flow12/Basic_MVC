const express = require("express");
const app = express();
const port = 4000;
const fruitsController = require('./controllers/fruits')

const models = require('./models/Fruits')


const fruits = models.fruits


//Middleware
//This is a view engine that is looking for ejs files to be rendered
//Also sets up that ALL EJs files for my front end will be located in a file named views
app.set("view engine", "ejs")


//Routes
app.get("/api", (req, res) => {
    res.json({
        models,
        status:200
    })
})

app.get ("/", (req, res)=> {
    res.render('home.ejs');
})

app.get("/starwars", (req, res) => {
    res.render('starwars/index.ejs')
})


app.use('', fruitsController);

app.get("/*", (req, res) => {
    res.render('404.ejs')
})

//Listen always at bottom
app.listen(port, () => {
    console.log(`I am listening on port ${port}`)
})