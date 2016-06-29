var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
	var vm = {
		greeting: 'Welcome',
		firstName: req.user ? req.user.firstName : null
	}
	
	
	
	res.render('landing/index', vm);
});

module.exports = router;
