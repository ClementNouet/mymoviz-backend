require("dotenv").config();
var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&api_key=${process.env.apiKey}`)
        .then(response => response.json())
        .then(data => {
            res.json({result: true, movies: data.results});
        })
});


module.exports = router;
