const express = require("express");
const router = express.Router();
const starWarsShips = require("../models/StarWarsShips");

router.get("/starwars-ships", (req, res) => {
    res.render("starwars/index.ejs", {starWarsShips})
})

module.exports = router;