var express = require('express');
var router = express.Router();

let dress = require("../controller")

/* GET home page. */
router.get('/', dress.home);

module.exports = router;
