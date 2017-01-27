var express = require('express');
var router = express.Router();

console.log(true);


/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    queries.addItem(req.body).then(function(item) {
        res.json(item)
    })
});

module.exports = router;
