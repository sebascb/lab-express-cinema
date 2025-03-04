const express = require("express");
const router = express.Router();
const Movie = require("../model/Movie.model.js");


/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
    Movie.find()
    .then((movies) => {
        res.render("movies", {movies});
    });
});

router.get("/movies/:id", (req, res) => {
  const {id} = req.params;

  Movie.findById(id)
    .then((movie) => {
        res.render('moviedetails', {movie})
    })   
});

module.exports = router;
