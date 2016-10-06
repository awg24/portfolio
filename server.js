var express = require('express');
var path = require('path');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var sessions = require('express-session');
var cookieParse = require('cookie-parser');

var send = require('./routes/send');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cookieParse());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(sessions({
	resave: false,
	secret: "aslkdjalks@!@#sd" + new Date(),
	saveUninitialized: true
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/send", send);

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("*", function(req, res){
	res.redirect("/")
});

app.listen(PORT, function(){
	console.log("Listening on "+ PORT);
});
