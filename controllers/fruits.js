const express = require('express');
const router = express.Router();
let fruits = require('../models/Fruits')
// fruits = fruits.fruits

router.get("/fruits", (req, res) => {
    res.render('fruits/index', {fruits: fruits})
})

router.get("/fruits/new", (req, res) =>{
    res.render("fruits/new.ejs")
})

router.get("/fruits/:id", (req, res) => {
    //console.log(req.params)
    const fruit = fruits[req.params.id];
    res.render("fruits/show.ejs", {fruit});
})

router.post('/fruits', (req, res) => {
    //console.log(req.body);
    let newFruit = req.body;
    if (newFruit.readyToEat === "true") newFruit.readyToEat = true;
    else newFruit.readyToEat = false;
    fruits.push(req.body);
    //console.log(fruits)
    res.redirect('/fruits')
})

module.exports = router;