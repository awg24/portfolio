var router = require('express').Router();
var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN});


router.post("/email", function(req, res) {
	var data = {
		from: req.body.email,
		to: 'allen.wes.g@gmail.com',
		subject: 'Portfolio site from: ' + req.body.firstName + " " + req.body.lastName,
		text: req.body.message
	};

	mailgun.messages().send(data, function (error, body) {
		if(error) return res.status(400).json({message: false});

		res.status(200).json({message: true});
	});
});

module.exports = router;


