var express = require('express');
var router = express.Router();

router.get('/items', function(req, res, next) {
    queries.getImages().then(function(image) {
        res.json(image)
    })
});

router.post('/', function(req, res, next) {
    queries.addItem(req.body).then(function(item) {
        res.json(item)
    })
});

module.exports = router;
