var express = require('express'),
	router	= express.Router();

router.use(express.static('./views'));

module.exports = router;