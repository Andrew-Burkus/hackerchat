var router = require('express').Router();
router.route('/')
	.post(function(req, res) {
		if(req.body !== null) {
			var auth = req.body.pwd == 8080;
			if(auth) {
				res.json({success: '1'});
			}
		}
	});

module.exports = router;