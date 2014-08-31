var router = require('express').Router();
router.post('/', function(req, res) {
	console.log(req.body);
	res.send('omg it worked');
});

module.exports = router;