var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


router.get('/', function(req, res, next) {
    queries.getImages().then(function(image) {
        res.json(image)
    })
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    queries.addItem(req.body).then(function(item) {
        res.json(item)
    })
});

module.exports = router;
