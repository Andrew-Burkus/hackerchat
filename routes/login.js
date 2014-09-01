var router = require('express').Router();
router.route('/')
	.post(function(req, res) {
		console.log(req.body);
		res.send(req.body);
	});

module.exports = router;